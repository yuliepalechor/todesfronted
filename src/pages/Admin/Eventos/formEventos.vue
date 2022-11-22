<template>
  <form>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Evento</h4>
        <p class="category">Crear Evento</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Nombre</label>
              <md-input v-model="form.nombre" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Descripcion</label>
              <md-input v-model="form.descripcion" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Fecha y hora</label>
              <md-input v-model="form.fecha_y_Hora" type="datetime-local"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Lugar</label>
              <md-input v-model="form.lugar" type="text"></md-input>
            </md-field>
          </div>



          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Estado</label>
              
              <select v-model="form.estado"   class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                <option>Seleccione...</option>
                <option value="activo">activo</option>
                <option value="inactivo">inactivo</option>
              </select>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Url</label>
              <md-input v-model="form.urlExterna" type="text"></md-input>
            </md-field>
          </div>


          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Responsable</label>
              <md-input v-model="form.responsable" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Fecha caducidad</label>
              <md-input v-model="form.fecha_caducidad" type="date"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Tipo</label>
             
              <select v-model="form.tipo"  class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                <option>Seleccione...</option>
                <option value="evento">Evento</option>
                <option value="noticia">Noticia</option>
              </select>
            </md-field>
          </div>


          <div class="md-layout-item md-small-size-100 md-size-40" >
            <md-field>
              <label>Foto</label>
              <md-input v-model="form.fecha_caducidad" type="file" accept="application/img" @change=""></md-input>
            </md-field>
          </div>
          

          
                                  
          </div> 
  
         
          
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button  @click="GuardarPublicacion()"   class="md-info" >Registrar</md-button>
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
      form: {
        ruta:null,
        nombre: "", // aqui se inicializa lo que  hace la conexion   de html con js
        descripcion: "",
        fecha_y_Hora: "",
        lugar: "",
        estado: "",
        urlExterna: "",
        responsable: "",
        fecha_caducidad: "",
        tipo: "",
      },
    };
  },
  methods: {
 imagenObtenidaMethodo(e){
  let file=e.target.file[0]
  this.FormData.ruta=file
 },

 Guardarimagen(){
  let datosacambiar=new FormData();
  datosacambiar.append("ruta",this.FormData.ruta)
  alert("westa guardando");
  axios.post("http://127.0.0.1:8000/api/archivoevento",this.datosacambiar).then(response=>{
    console.log(response);
  })
 },

    GuardarPublicacion() {
      Swal.fire({
        position: "center",
        icon: "success",
       
        title: "Publicacion  o evento guardado",
        showConfirmButton: false,
        timer: 1500,
      });
      
      this.axios.post("http://127.0.0.1:8000/api/publicacion", this.form)

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
  