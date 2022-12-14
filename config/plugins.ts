import { NuxtOptionsPlugin } from "@nuxt/types/config/plugin"

const Plugins: NuxtOptionsPlugin[] = [
  "@/plugins/Util",
  "@/plugins/Types",
  "@/plugins/MomentTimezone",
  {
    src: "@/plugins/Lanyard",
    mode: "client",
  },
  {
    src: "@/plugins/Tippy",
    mode: "client",
  },
]

export default Plugins
