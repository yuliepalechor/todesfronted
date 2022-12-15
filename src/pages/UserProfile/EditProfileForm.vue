<template>
  <form>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Perfil</h4>
        <p class="category">Perfil</p>
      </md-card-header>
      <md-button  @click="Actualizarinformacion(id)" class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Identificacion</label>
              <md-input v-model="form.identificacion" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nombre</label>
              <md-input v-model="form.nombre" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Apellidos</label>
              <md-input v-model="form.apellidos" type="email"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input v-model="form.email" type="email"></md-input>
            </md-field>
          </div>
          
          
        
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Genero</label>
              <select v-model="form.genero"  class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
              <option>Seleccione...</option>
              <option value="masculino">masculino</option>
              <option value="femenino">femenino</option>
            </select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Fecha de nacimiento</label>
              <md-input v-model="form.fecha_nacimiento" type="date"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-info" @click="Actualizarinformacion()">Registrar</md-button>
            </div>
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-info" @click="Actualizarinformacion()">Registrar</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { METHODS } from 'http';
import axios from "axios"
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      form:{
                    identificacion:"",
                    nombre:"",
                    apellidos:"",
                    genero:"",
                    fecha_nacimiento:"",
                    email:"",    
                        
                   
                },
       
    };
  },
  mounted(){


this.axios
.get("https://proyectotodes-production.up.railway.app/api/usuario")
.then((data) => {
  
this.form.identificacion=data.data[0].identificacion;
this.form.nombre=data.data[0].nombre;
this.form.apellidos=data.data[0].apellidos;
this.form.email=data.data[0].email;

this.form.genero=data.data[0].genero;
this.form.fecha_nacimiento=data.data[0].fecha_nacimiento;


})
},

methods:{
  Actualizarinformacion() {
        this.axios
          .put("https://proyectotodes-production.up.railway.app/api/usuario/"+this.$route.params.userid,this.form )
          .then((data) => {
            this.$router.push("/Usuarios")
          });
      },
      catch(e) {
        console.log(e.response);
      },
}

}
     
  
 


</script>
<style></style>
