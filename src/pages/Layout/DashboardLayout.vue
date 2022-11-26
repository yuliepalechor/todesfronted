<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      
      
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>

      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Perfil</p>
      </sidebar-link>

      <!-- <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link> -->

      <sidebar-link to="/Eventos">
        <md-icon>library_books</md-icon>
        <p>Publicaciones</p>
      </sidebar-link>

      

      <sidebar-link to="/Categorias">
        <md-icon>library_books</md-icon>
        <p>Categorias</p>
      </sidebar-link>

      

      <!-- <sidebar-link to="/Reportes">
        <md-icon>library_books</md-icon>
        <p>Reportes</p>
      </sidebar-link> -->

      <!-- <sidebar-link to="/Roles">
        <md-icon>person</md-icon>
        <p>Roles</p>
      </sidebar-link> -->

      <sidebar-link to="/Usuarios">
        <md-icon>person</md-icon>
        <p>Usuarios-Rol</p>
      </sidebar-link>

      <sidebar-link to="/Sigin">
        <md-icon>close</md-icon>
        <p>salir</p>
      </sidebar-link>

      

      

      





      <!--sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link-->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
//import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
//import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    //ContentFooter,
    MobileMenu,
    //FixedPlugin,
  },
  data() {
    return {
      
      
    };
  },
};
</script>

