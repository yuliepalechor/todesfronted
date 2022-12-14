<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
      <md-button class="md-info" @click="insertar(NuevaCategoria())" >Nueva Publicacion</md-button>
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Publicaciones</h4>
            <p class="category">Lista de Publicaciones</p>
          </md-card-header>
          <md-card-content>
            <div >
              <b-form-input v-model="filter" type="search" placeholder="Buscar...">
               </b-form-input>
              <b-table  :filter="filter" id:="tablaEventos" :per-page="perpage" :current-page="currentPage" striped  hover responsive  class="mt-4" :fields="encabezado" :items="publicacion">
                <template v-slot:cell(Editar)="row">
                    <md-button  @click="editar(editarpublicacion(row.item.id))" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                </template>
                <template v-slot:cell(Eliminar)="row">
                  <md-button @click="EliminarPublicacion(row.item.id)" class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                </template>
                <template v-slot:cell(ejemplo)="row">
                    <b-button v-b-modal="'asignacion'" @click="listaasignacion(row.item.id)" variant="primary">Ver</b-button>
                  </template>
               </b-table>              
               <b-pagination
                  v-model="currentPage"
               :total-rows="rows"
                :per-page="perpage"
                aria-controls="tablaEventos"
               ></b-pagination>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <!--      MODAL DE LAS CATEGORIAS ASIGNADAS-->
    <div>
        <b-modal size="xl" id="asignacion" title="Categorias Asignadas">
          <b-container fluid>
             <b-table  :filter="filter" id:="" :per-page="perpage" :current-page="currentPage" striped  
             hover responsive  class="mt-4" 
             :fields="asignacioncategoria" 
             :items="categoriaasig">
               </b-table>              
            <table class="table table-bordered table-striped" id:="tabla">
              <thead>
                <b-button
               v-b-modal="'asignacionnueva'"
               @click="getcategorias(categoriaasig.id_publicacion)" 
                variant="primary"
                size="sm"
                class="float-right"
              >+
              </b-button>
              </thead>
            </table>
             </b-container>
             <template #modal-footer="{ close }">
             <b-button class="btn btn-secondary" @click="close()"> Cerrar </b-button>
             </template>
        </b-modal>   
       </div>   
             <!--      MODAL DE LAS NUEVAS ASIGNACIONES          -->
            <div>
              <b-modal size="xl" id="asignacionnueva" title="Categorias">
              <b-container fluid>
              <b-form-input v-model="filter" type="search" placeholder="Buscar..."></b-form-input>
              <b-table  :filter="filter" id:="" :per-page="perpage" :current-page="currentPage" striped  
              hover responsive  class="mt-4" 
              :fields="cat" 
              :items="categoria">
               <template v-slot:cell(Acciones)="row">
                  <md-button class="md-pink md-round float-left" @click="guardaraasignacionnueva(row.item.id,id_publiseleccionada)" >
                     Asignar
                    </md-button>
                </template>
              </b-table>  
          </b-container>
          <template #modal-footer="{ close }">
             <b-button class="btn btn-secondary" @click="close()"> Cerrar </b-button>
          </template>
        </b-modal>
      </div>
  </div>
</template>

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
      publicacion: [],
      detalles: null,
      categoria: [],
      categoriaasig: [],
      filter: null,
      perpage: 10,
      currentPage: 1,
      formularioasigna: {
        id_publicacion: null,
        id_categoria: null,
      },
      cat: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "Acciones", label: "Acciones" },
          ],
      asignacioncategoria: [
        { key: "id_detalle", label: "Id" },
        { key: "Prioridad_detallle", label: "Prioridad" },
        { key: "Nombresdecategorias", label: "Nombre" },
        { key: "Descripciodecategorias", label: "Descripcion" },
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
     async listaasignacion(id) {
      await this.axios.get("http://127.0.0.1:8000/api/detalle_categoria/" + id)
        .then((response) => {
          this.categoriaasig = response.data;
          this.id_publiseleccionada = id
         
        }) .catch(error=>{
            console.log(error)
        });
    },

    async guardaraasignacionnueva(idcat, idpub) {
   
  alert(idpub)
      let formularioasigna = new FormData();
      formularioasigna.append("id_publicacion", idpub);
      formularioasigna.append("id_categoria", idcat);
      await this.axios
        .post("http://127.0.0.1:8000/api/detalle_categoria", formularioasigna)
        .then((response) => {
          this.$router.push("/Eventos");
        }) .catch(error=>{
            console.log(error)
        });
    },

    async getcategorias(idp) {
      await this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
        this.categoria = response.data;
        
      }) .catch(error=>{
            console.log(error)
        });
    },

    updatePagination(page, pageSize, sort, sortOrder) {
      console.log("pagination has updated", page, pageSize, sort, sortOrder);
    },
    async getpublicacion() {
      await this.axios
        .get("http://127.0.0.1:8000/api/publicacion")
        .then((response) => {
          this.publicacion = response.data;
        }) .catch(error=>{
            console.log(error)
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
            this.axios.delete("http://127.0.0.1:8000/api/publicacion/" + id)
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
  width:100%;
}
</style>