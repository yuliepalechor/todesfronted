<template>
    <div class="content">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
        <div>
            <b-button variant="warning" @click="NuevoUsuario()">Registrar Usuario</b-button>
    </div>
          <md-card>
            
            <md-card-header data-background-color="blue">
              <h4 class="title">Usuarios</h4>
              <p class="category">Lista de Usuarios</p>
            </md-card-header>
            <md-card-content id="tabla"> 
                <div class="tablacontent">
            <tr>      
                <b-table :fields="encabezado" :items="usuario" :itemscope=elementosPorPagina >

                  <template v-slot:cell(editar)="data">

                    <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>

                  </template>

                  <template v-slot:cell(eliminar)="data">
                    <b-button variant="danger" size="sm" @click="EliminarPublicacion(data.id)">Eliminar</b-button>
                  </template>
                </b-table>
              
            </tr>
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