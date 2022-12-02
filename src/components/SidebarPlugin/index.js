import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink.vue";
import Navbar from "./Navbar.vue";
import Navbarusuario from "./UserNarvar.vue";
const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, "$sidebar", {
      get() {
        return this.$root.sidebarStore;
      },
    });
    Vue.component("side-bar", Sidebar);
    Vue.component("sidebar-link", SidebarLink);
    Vue.component("navbar", Navbar);
    Vue.component("navbarusuario", Navbarusuario);
  },
};


export default SidebarPlugin;
