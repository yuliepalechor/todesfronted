import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Eventos from "@/pages/Eventos.vue";
import Categorias from "@/pages/Categorias.vue";
import Reportes from "@/pages/Reportes.vue";
import Roles from "@/pages/Roles.vue";


import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Sigin from "@/pages/Sign-in.vue";
import SigUp from "@/pages/SigUp.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "SigUp",
    component: SigUp,
  },
  {
    path: "/Sigin",
    name: "Sigin",
    component: Sigin,
  },
  {
    path: "/",
    name: "ruta",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "Eventos",
        name: "Eventos",
        component: Eventos,
      },

      {
        path: "Categorias",
        name: "Categorias",
        component: Categorias,
      },
      
      {
        path: "Reportes",
        name: "Reportes",
        component: Reportes,
      },

      {
        path: "Roles",
        name: "Roles",
        component: Roles,
      },

      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;