<template>
  <div>
  <b-table :fields="encabezado" :items="publicacion">
    <template v-slot:cell(ejemplo)="row">
      <b-button
        v-b-modal="'asignacion'"
        @click="listaasignacion(row.item.id)"
        variant="primary"
        >Ver</b-button
      >
    </template>
    <template v-slot:cell(Editar)="row">
      <md-button
        @click="editar(editarpublicacion(row.item.id))"
        class="md-just-icon md-simple md-primary"
      >
        <md-icon>edit</md-icon>
        <md-tooltip md-direction="top">Edit</md-tooltip>
      </md-button>
    </template>
    <template v-slot:cell(Eliminar)="row">
      <md-button
        @click="EliminarPublicacion(row.item.id)"
        class="md-just-icon md-simple md-danger"
      >
        <md-icon>close</md-icon>
        <md-tooltip md-direction="top">Close</md-tooltip>
      </md-button>
    </template>
    <template v-slot:cell(example)="row">
      <b-button
        v-b-modal="'asignacion'"
        @click="listaasignacion(row.item.id)"
        variant="primary"
        >Ver</b-button
      >
    </template>

  </b-table>
  <!--MODAL DE LAS CATEGORIAS ASIGNADAS-->
<div>
  <b-modal size="xl" id="asignacion" title="Categorias Asignadas">
    <b-table  :fields="encabezadodos" :items="categoriaasig">

      <template v-slot:cell(Editar)="row">
      <md-button @click="editar(EditarCategoria(row.item.id))" class="md-just-icon md-simple md-primary">
      <md-icon>edit</md-icon>
      <md-tooltip md-direction="top">Edit</md-tooltip>
      </md-button>
      </template>

      <template slot="index" slot-scope="data">
        {{ data.index + 1 }}
      </template>
      <template slot="nombre" slot-scope="data">
        <b-form-input
          type="text"
          v-model="data.item.nombre"
        />
      </template>
   


                


    
    </b-table>
  </b-modal>
  
</div>
  </div>
</template>

 <!--Paginacion-->

  



 <!--      MODAL DE LAS CATEGORIAS ASIGNADAS-->

 
<script>
import { OrderedTable } from "@/components";

import Swal from "sweetalert2";
import axios from "axios";
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
  name: "Eventos",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id_publiseleccionada: null,
      state: "",
      show: false,
      categoriaasig: [
     
     ],
      publicacion: [],
      detalles: null,
      categoria: [],
    
      filter: null,
      perpage: 10,
      currentPage: 1,
      formularioasigna: {
        id_publicacion: null,
        id_categoria: null,
      },
      encabezadodos: [
      { key: "id", label: "Id" },
      { key: "nombre", label: "Nombre" },
      {key: "prioridad", label: "Prioridad"},
      { key: "Editar", label: "Editar" },
      ],
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
        { key: "fecha_y_Hora", label: "FECHA-HORA" },
        { key: "lugar", label: "Lugar" },
        { key: "estado", label: "Estado" },
        { key: "urlExterna", label: "Url" },
        { key: "responsable", label: "Responsable" },
        { key: "fecha_caducidad", label: "fecha_caducidad" },
        { key: "tipo", label: "Tipo" },
        { key: "Editar", label: "Editar" },
        { key: "Eliminar", label: "Eliminar" },
        { key: "ejemplo", label: "Ver Categorias" },
      ],

     
    };
  },
  components: {},
  mounted() {
    this.getpublicacion();
    this.EliminarPublicacion(id);
  },

  computed: {
    rows() {
      return this.publicacion.length;
             

    },
  },
  methods: {
    listaasignacion(id) {
      this.axios
        .get("http://127.0.0.1:8000/api/detalle_categoria/" + id)
        .then((response) => {
          this.categoriaasig = response.data;
        });
    },

    guardaraasignacionnueva(idcat, idpub) {
      let formularioasigna = new FormData();
      formularioasigna.append("id_publicacion", idpub);
      formularioasigna.append("id_categoria", idcat);
      this.axios
        .post("http://127.0.0.1:8000/api/detalle_categoria", formularioasigna)
        .then((response) => {
          this.$router.push("/Eventos");
        });
    },

    getcategorias(idp) {
      this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
        this.categoria = response.data;
        this.id_publiseleccionada = idp;
      });
    },

    updatePagination(page, pageSize, sort, sortOrder) {
      console.log("pagination has updated", page, pageSize, sort, sortOrder);
    },
    getpublicacion() {
      this.axios
        .get("http://127.0.0.1:8000/api/publicacion")
        .then((response) => {
          this.publicacion = response.data;
        });
    },
    NuevaCategoria() {
      this.$router.push("/FormEventos");
    },

    example(id) {
      this.$router.push(`/DetalleCategoria/${id}`);
    },

    editarpublicacion(id) {
      this.$router.push(`/EditarPEvento/${id}`);
    },

    ejemplo(id) {
      this.$router.push(`/DetalleCategoria/${id}`);
    },

    DetalleCategoria(id) {
      this.$router.push({ name: "DetalleCategoria", params: { id: id } });
    },
    EliminarPublicacion(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Seguro desea eliminar el evento?",
          text: "Esta accion no tiene reversa!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.axios
              .delete("http://127.0.0.1:8000/api/publicacion/" + id)
              .then((response) => {
                this.axios
                  .get("http://127.0.0.1:8000/api/publicacion")
                  .then((response) => {
                    this.publicacion = response.data;
                  });
                this.publicacion = response.data;
                console.log(data);
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
          }
        });
    },
  },
};
</script>
<style>
.eventostable {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  width: 100%;
}
</style>


