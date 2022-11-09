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
            <b-table :fields="encabezado" :items="categoria">
            
              <template v-slot:cell(eliminar)="data">
                <button @click="EliminarCategoria(id)" class="btn btn-danger"></button>
                <b-button @click="EliminarCategoria(data.item.id)">Eliminar</b-button>
              </template>
            </b-table>
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
            this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {
            this.$router.push('NuevaCategoria')
        },

        EliminarCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/categoria/"+id, this.form).then((data) => {
                console.log(data);
            });
        }

    }
}

</script>

<style>

</style>