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
                <md-input v-model="formData.nombre" type="text" required></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Descripcion</label>
                <md-input v-model="formData.descripcion" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Fecha y hora</label>
                <md-input v-model="formData.fecha_y_Hora" type="datetime-local"></md-input>
              </md-field>
            </div>
            
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Lugar</label>
                <md-input v-model="formData.lugar" type="text"></md-input>
              </md-field>
            </div>
  
  
  
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Estado</label>
                
                <select v-model="formData.estado"   class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                  <option>Seleccione...</option>
                  <option value="activo">activo</option>
                  <option value="inactivo">inactivo</option>
                </select>
              </md-field>
            </div>
  
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Url</label>
                <md-input v-model="formData.urlExterna" type="text"></md-input>
              </md-field>
            </div>
  
  
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Responsable</label>
                <md-input v-model="formData.responsable" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Fecha caducidad</label>
                <md-input v-model="formData.fecha_caducidad" type="date"></md-input>
              </md-field>
            </div>
  
            <div class="md-layout-item md-small-size-100 md-size-40">
              <md-field>
                <label>Tipo</label>
               
                <select v-model="formData.tipo"  class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                  <option>Seleccione...</option>
                  <option value="evento">Evento</option>
                  <option value="noticia">Noticia</option>
                </select>
              </md-field>
            </div>
  
  
            <div class="md-layout-item md-small-size-100 md-size-40" >
              <md-field>
                <label>Foto</label>
                <input
            type="file"
            ref="file"
            accept="application/img"
            @change="imagenObtenidaMethodo"
            name="img"
            id="imagen1"
            multiple="multiple"
          />
          
               
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
        formData: {
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
    imagenObtenidaMethodo(e) {
        let file = e.target.files[0];
        console.log("CargaImagen", file);
        this.formData.img = file;
        this.cargarImagenNuevo(file);
      },
      cargarImagenNuevo(file) {
        

        

        let reader = new FileReader();
        reader.onload = (e) => {
          this.imagenMiniatura = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log("miniatura", reader);                                                                                                                               
    
      },
  
      GuardarPublicacion() {
     
    let formDataDataCambiar = new FormData();
      
        formDataDataCambiar.append("nombre", this.formData.nombre);
        formDataDataCambiar.append("descripcion", this.formData.descripcion);
        formDataDataCambiar.append("fecha_y_Hora", this.formData.fecha_y_Hora);
        formDataDataCambiar.append("lugar", this.formData.lugar);
        formDataDataCambiar.append("estado", this.formData.estado);
        formDataDataCambiar.append("img", this.formData.img);
        formDataDataCambiar.append("responsable", this.formData.responsable);
        formDataDataCambiar.append("urlExterna", this.formData.urlExterna);
        formDataDataCambiar.append("fecha_caducidad", this.formData.fecha_caducidad);
        formDataDataCambiar.append("tipo", this.formData.tipo);
        
    axios.post("http://127.0.0.1:8000/api/publicacion",formDataDataCambiar).then(response=>{
      console.log(response);
    })
   },
  
   
  
    },
  };
  
  
  </script>
  <style></style>