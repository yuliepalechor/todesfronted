<template>
    <div class="content">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
        
         <md-button class="md-info" @click="NuevoUsuario()" >Registrar Usuario </md-button>
      
          <md-card>
            
            <md-card-header data-background-color="blue">
              <h4 class="title">Usuarios</h4>
              <p class="category">Lista de Usuarios</p>
            </md-card-header>
            <md-card-content id="tabla"> 
        

          <div>
              <md-table v-model="usuario" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="dentificacion">{{ item.identificacion }}</md-table-cell>
                  <md-table-cell md-label="nombre">{{ item.nombre }}</md-table-cell>
                  <md-table-cell md-label="apellidos">{{ item.apellidos }}</md-table-cell>
                  <md-table-cell md-label="genero">{{ item.genero }}</md-table-cell>
                  <md-table-cell md-label="fecha_nacimiento">{{ item.fecha_nacimiento }}</md-table-cell>
                  <md-table-cell md-label="email">{{ item.email }}</md-table-cell>
                  <md-table-cell md-label="Editar">
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                  </md-table-cell>
                  <md-table-cell md-label="eliminar">
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>


            </md-card-content>
          </md-card>
        </div>
  
        
      </div>
    </div>
  </template>

<script>
import { OrderedTable } from "@/components";
import axios from "axios"
export default {
  name: "ListarUsuarios",
  data() {
    return {
      usuario: [],
      elementosPorPagina: 10,
      encabezado: [
        { key: "id", label: "Id" },
        { key: "identificacion", label: "Documento" },
        { key: "nombre", label: "Nombre" },
        { key: "apellidos", label: "Apellidos" },
        { key: "genero", label: "Genero" },
        { key: "fecha_nacimiento", label: "Fecha de Nacimiento" },
        { key: "email", label: "Correo Electronico" },
        { key: "password", label: "Contraseña" },
        { key: "editar", label: "Editar" },
        { key: "eliminar", label: "Eliminar" }
      ],
    }
  },
  components: {
  },
  mounted() {
    this.getusuarios()
    this.elementosPorPagina()
  },
  methods: {
    getusuarios() {
      this.axios.get("http://127.0.0.1:8000/api/usuario").then((response) => {
        this.usuario = response.data;
      })
    },
    NuevoUsuario() {
      this.$router.push("/NuevoUsuario")
    },
    totalPagina() {
      return Math.ceil(this.encabezado.length / this.elementosPorPagina)
    }
  }
}
</script>
    
<style>
.tablacontent{
  margin: auto;
  margin-left: 180px;
}
</style>