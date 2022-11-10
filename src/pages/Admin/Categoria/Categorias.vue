<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      <md-button class="md-info" @click="NuevaCategoria()" >Nueva Categoria </md-button>
      

        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Categorias</h4>
            <p class="category">Lista de Categorias</p>
          </md-card-header>
          <md-card-content id="tabla"> 
            
            <div>
              <md-table v-model="categoria" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
                  <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
                  <md-table-cell md-label="Descripcion">{{ item.descripcion }}</md-table-cell>
                  <md-table-cell md-label="Editar">
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                  </md-table-cell>
                  <md-table-cell md-label="Eliminar">
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
import axios from "axios";
export default {
    name: "Mostrarcategorias",
    data() {
        return {
            categoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "nombre", label: "Nombre" },
                { key: "descripcion", label: "Descripcion" },
                { key: "eliminar", label: "Eliminar" }

            ],

        }
    },
    components: {

    },
    mounted() {
        this.getcategorias()
        this.EliminarCategoria(id)

    },

    methods: {

        getcategorias() {
            axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {
            this.$router.push('NuevaCategoria')
        },

        EliminarCategoria(id) {
            axios.delete("http://127.0.0.1:8000/api/categoria/"+id, this.form).then((data) => {
                console.log(data);
            });
        }

    }
}

</script>

<style>

</style>