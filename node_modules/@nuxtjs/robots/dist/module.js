'use strict';

const path = require('path');
const fs = require('fs');

var name = "@nuxtjs/robots";
var version = "2.5.0";

const FILE_NAME = "robots.txt";
async function getRules(options, req = null) {
  const correspondences = {
    useragent: "User-agent",
    crawldelay: "Crawl-delay",
    disallow: "Disallow",
    allow: "Allow",
    host: "Host",
    sitemap: "Sitemap",
    cleanparam: "Clean-param"
  };
  const rules = [];
  for (const rule of options) {
    const parsed = parseRule(rule);
    const keys = Object.keys(correspondences).filter((key) => typeof parsed[key] !== "undefined");
    for (const key of keys) {
      const parsedKey = parsed[key];
      let values;
      values = typeof parsedKey === "function" ? await parsedKey.call(this, req) : parsedKey;
      values = Array.isArray(values) ? values : [values];
      for (const value of values) {
        rules.push({
          key: correspondences[key],
          value: typeof value === "function" ? await value.call(this, req) : value
        });
      }
    }
  }
  return rules;
}
function parseRule(item) {
  const parsed = {};
  for (const [key, value] of Object.entries(item)) {
    parsed[String(key).toLowerCase().replace(/[\W_]+/g, "")] = value;
  }
  return parsed;
}
function render(rules) {
  return rules.map((rule) => `${rule.key}: ${String(rule.value).trim()}`).join("\n");
}
function parseFile(content) {
  const rules = [];
  content.split("\n").forEach((item) => {
    const ar = item.split(":");
    if (ar[0]) {
      rules.push({
        [ar[0]]: ar[1]
      });
    }
  });
  return rules;
}

let staticRules = [];
function setStaticRules(newStaticRules) {
  staticRules = newStaticRules;
}
function getStaticRules() {
  return staticRules;
}
function build() {
  this.nuxt.hook("build:before", async () => {
    const {srcDir, dir: {static: staticDir}} = this.options;
    const staticFilePath = path.resolve(srcDir, staticDir, FILE_NAME);
    if (fs.existsSync(staticFilePath)) {
      const content = fs.readFileSync(staticFilePath).toString();
      setStaticRules(await getRules.call(this, parseFile(content)));
    }
  });
}

function generate(options) {
  this.nuxt.hook("generate:done", async () => {
    const {rootDir, generate: {dir: generateDir}} = this.options;
    const generateFilePath = path.resolve(rootDir, generateDir, FILE_NAME);
    const rules = await getRules.call(this, options);
    fs.writeFileSync(generateFilePath, render([...getStaticRules(), ...rules]));
  });
}

function middleware(options) {
  this.nuxt.hook("render:setupMiddleware", () => {
    const moduleContainer = this;
    this.nuxt.server.useMiddleware({
      path: FILE_NAME,
      async handler(req, res) {
        const rules = await getRules.call(moduleContainer, options, req);
        res.setHeader("Content-Type", "text/plain");
        res.end(render([...getStaticRules(), ...rules]));
      }
    });
  });
}

async function getOptions(moduleOptions) {
  if (typeof moduleOptions === "function") {
    moduleOptions = await moduleOptions.call(this);
  }
  if (Array.isArray(moduleOptions)) {
    return moduleOptions;
  }
  let {robots} = this.options;
  if (typeof robots === "function") {
    robots = await robots.call(this);
  }
  if (Array.isArray(robots)) {
    return robots;
  }
  return [{
    UserAgent: "*",
    Disallow: "",
    ...robots,
    ...moduleOptions
  }];
}
const nuxtModule = async function(moduleOptions) {
  const options = await getOptions.call(this, moduleOptions);
  build.bind(this)();
  generate.bind(this)(options);
  middleware.bind(this)(options);
};
nuxtModule.meta = {name, version};

module.exports = nuxtModule;
