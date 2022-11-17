<template>
    <form>
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Evento</h4>
          <p class="category">Crear Evento</p>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Nombre</label>
                <md-input v-model="form.nombre" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Descripcion</label>
                <md-input v-model="form.descripcion" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Fecha y hora</label>
                <md-input v-model="form.fecha_y_Hora" type="datetime-local"></md-input>
              </md-field>
            </div>
            
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Lugar</label>
                <md-input v-model="form.lugar" type="text"></md-input>
              </md-field>
            </div>
  
  
  
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Estado</label>
                <select v-model="form.estado"   class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                <option>Seleccione...</option>
                <option value="activo">activo</option>
                <option value="inactivo">inactivo</option>
              </select>
              </md-field>
            </div>
  
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Url</label>
                <md-input v-model="form.urlExterna" type="text"></md-input>
              </md-field>
            </div>
  
  
  
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Responsable</label>
                <md-input v-model="form.responsable" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-33">
              <md-field>
                <label>Fecha caducidad</label>
                <md-input v-model="form.fecha_caducidad" type="date"></md-input>
              </md-field>
            </div>
  
            <div class="md-layout-item md-small-size-100 md-size-50">
              <md-field>
                <label>Tipo</label>
                <select v-model="form.tipo"  class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
                <option>Seleccione...</option>
                <option value="evento">Evento</option>
                <option value="noticia">Noticia</option>
              </select>
              </md-field>
            </div>
            
            
            <div class="md-layout-item md-size-100 text-right">
              <md-button  @click="ActualizarPublicacion()" class="md-info" >Registrar</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "EditarPEvento",
    data() {
      return {
        form: {
          nombre: null, // aqui se inicializa lo que  hace la conexion   de html con js
          descripcion: null,
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
    mounted(){
        this.mostrar()
    },
    methods: {
        mostrar(){
            this.axios
          .get("http://127.0.0.1:8000/api/publicacion/"+this.$route.params.id)
          .then((data) => {
            this.form.nombre=data.data[0].nombre;
            this.form.descripcion=data.data[0].descripcion;
            this.form.fecha_y_Hora=data.data[0].fecha_y_Hora;
            this.form.lugar=data.data[0].lugar;
            this.form.estado=data.data[0].estado;
            this.form.urlExterna=data.data[0].urlExterna;
            this.form.responsable=data.data[0].responsable;
            this.form.fecha_caducidad=data.data[0].fecha_caducidad;
            this.form.tipo=data.data[0].tipo;

          });
        },


        
      ActualizarPublicacion() {
        this.axios
          .put("http://127.0.0.1:8000/api/publicacion/"+this.$route.params.id,this.form )
          .then((data) => {
            this.$router.push("/Eventos")
          });
      },

      
  
      catch(e) {
        console.log(e.response);
      },
    },
  };
  </script>