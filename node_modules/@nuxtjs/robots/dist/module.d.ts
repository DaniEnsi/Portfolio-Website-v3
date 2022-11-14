import { Module } from '@nuxt/types';

declare type Rule = {
    [key: string]: string | Function | (string | Function)[];
};

declare const CONFIG_KEY = "robots";

declare type ModuleOptions = Rule | Rule[] | (() => Rule | Rule[]);
declare const nuxtModule: Module<ModuleOptions>;
declare module '@nuxt/types' {
    interface NuxtConfig {
        [CONFIG_KEY]?: ModuleOptions;
    }
    interface Configuration {
        [CONFIG_KEY]?: ModuleOptions;
    }
}

export default nuxtModule;
export { ModuleOptions, Rule };
