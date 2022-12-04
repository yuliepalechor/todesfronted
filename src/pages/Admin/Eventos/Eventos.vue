<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
          <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Publicaciones</h4>
            <p class="category">Lista de Publicaciones</p>
          </md-card-header>
          <md-card-content>
           
            <div >
              
              <b-form-input v-model="filter" type="search" placeholder="Buscar...">

               </b-form-input>
              <b-table  :filter="filter" id:="tablaEventos" :per-page="perpage" :current-page="currentPage" striped  hover responsive  class="mt-4" :fields="encabezado" :items="categoria">
                

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

    <div>
        <b-modal size="xl" id="asignacion" title="Categorias Asignadas">
          <b-container fluid>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Prioridad</th>
                  <!--<th>Publicacion</th>-->
                  <th>Categoria</th>
                  <th>Descripcion de la Categoria</th>
           
                </tr>
              </thead>
              <tbody>
                <tr v-for="categoriaasig in categoriaasig" :key="categoriaasig.id_detalle">
                  <td v-text="categoriaasig.id_detalle"></td>
                  <td v-text="categoriaasig.Nombresdecategorias"></td>
                 
            
                </tr>
              </tbody>
            </table>
          </b-container>
              <template #modal-footer>
            <div class="w-100">
              <b-button
              v-b-modal="'asignaciones'"
              @click="listaasignacion(row.item.id)" 
                variant="primary"
                size="sm"
                class="float-right"
               
              >Nuevo
                
              </b-button>
              
          
                      

              
            </div>

          </template>
        </b-modal>



        <b-modal size="xl" id="asignaciones" title="Categorias">
          <b-container fluid>
            <table class="table table-bordered table-striped">
              <thead>
             
              </thead>
              <tbody>
          
                <template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xl-size-10 md-size-100">
        <md-button class="md-info" @click="NuevaCategoria()">Nueva Categoria </md-button>


        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Categorias</h4>
            <p class="category">Lista de Categorias</p>
          </md-card-header>
          <md-card-content id="tabla">

            <div>

              <!-- <md-table v-model="categoria" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
                  <md-table-cell md-label="Descripcion">{{ item.descripcion }}</md-table-cell>
                  <md-table-cell md-label="Editar">
                    <md-button @click="editar(EditarCategoria(item.id))" class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                  </md-table-cell>
                  <md-table-cell md-label="Eliminar">
                    <md-button   @click="EliminarCategoria(item.id)" class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table> -->
              <b-form-input v-model="filter" type="search" placeholder="Buscar...">

              </b-form-input>
              <b-table :filter="filter" id:="tablaCategorias" :per-page="perpage" :current-page="currentPage" striped
                hover responsive class="mt-4" :fields="encabezado" :items="categoria">

                <template v-slot:cell(Editar)="row">
                  <md-button @click="editar(EditarCategoria(row.item.id))" class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>


                </template>
                <template v-slot:cell(Eliminar)="row">
                  <md-button @click="EliminarCategoria(row.item.id)" class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </template>

                <template v-slot:cell(Asignar)="row">
                  <md-button @click="AsignarCategoria(row.item.id)" class="md-just-icon md-simple md-danger">
                    <md-icon>+</md-icon>
                    <md-tooltip md-direction="top">Asignar</md-tooltip>
                  </md-button>
                </template>




              </b-table>
              <b-pagination 
              v-model="currentPage"
               :total-rows="rows"
                :per-page="perpage"
                aria-controls="tablaCategorias">

              </b-pagination>

            </div>
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>

              </tbody>
            </table>
          </b-container>
          <template #modal-footer>
            <div class="w-100">
              <b-button
              v-b-modal="'asignaciones'"
              @click="listaasignacion(row.item.id)" 
                variant="primary"
                size="sm"
                class="float-right"
               
              >Cancelar
                
              </b-button>
              
          
                      

              
            </div>

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


      state:'',
      show: false,

      detalles: null,
      categoria: [],
      categoriaasig: [],
      filter: null,
      perpage: 10,
      currentPage: 1,
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
      
      ],
    };
  },
  components: {},
  mounted() {
    this.getcategorias();
    this.EliminarPublicacion(id);
  },

  computed: {
    rows() {
      return this.categoria.length;
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
    updatePagination(page, pageSize, sort, sortOrder) {
      console.log("pagination has updated", page, pageSize, sort, sortOrder);
    },
    getcategorias() {
      this.axios
        .get("http://127.0.0.1:8000/api/publicacion")
        .then((response) => {
          this.categoria = response.data;
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
                    this.categoria = response.data;
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
}
</style>