<template>
  <form>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Archivos</h4>
        <p class="category">Crear Archivo</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout-item md-small-size-100 md-size-40">
          <md-field>
            <label>Url</label>
            <md-input v-model="form.urlExterna" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-40" >
            <md-field>
              <label>Foto</label>
              <input
          type="file"
          accept="application/img"
          @change="imagenObtenidaMethodo"
          name="img"
          id="imagen1"
        />
             
            </md-field>
          </div>
                   
         


        <div class="md-layout-item md-size-100 text-right">
          <md-button @click="GuardarPublicacion()" class="md-info"
            >Registrar</md-button
          >
          <!-- <md-button   @click="Guardarimagen()" class="md-info" >Registrar</md-button> -->
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
  <script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Crear_Eventos",

  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
        formData: {
        ruta:null,
        urlExterna: "",
     
      
      
      },
    };
  },
  methods: {
    imagenObtenidaMethodo(e) {
      let file = e.target.file[0];
      this.FormData.ruta = file;
    },

    Guardarimagen() {
      let datosacambiar = new FormData();
      datosacambiar.append("ruta", this.FormData.ruta);
      alert("esta guardando");
      axios
        .post("http://127.0.0.1:8000/api/archivoevento", this.datosacambiar)
        .then((response) => {
          console.log(response);
        });
    },

    GuardarPublicacion() {
      Swal.fire({
        position: "center",
        icon: "success",

        title: "Publicacion  o evento guardado",
        showConfirmButton: false,
        timer: 1500,
      });

      this.axios
        .post("http://127.0.0.1:8000/api/archivoevento", this.form)

        .then((data) => {
          console.log(data);
        });
    },

    catch(e) {
      console.log(e.response);
    },
  },
};
</script>
  <style></style>
    