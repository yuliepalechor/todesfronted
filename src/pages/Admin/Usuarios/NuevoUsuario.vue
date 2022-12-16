<template>
    <form>
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">Registrar Usuario</h4>
          <p class="category">Nuevo Usuario</p>
        </md-card-header>
  
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
                <label>Password</label>
                <md-input v-model="form.password" type="password"></md-input>
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
              <md-button class="md-info" @click="GuardarUsuario()">Registrar</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </template>
  <script>
  import Swal from 'sweetalert2'
  import axios from "axios"
  export default {
    name: "NuevoUsuario",
    props: {
      dataBackgroundColor: {
        type: String,
        default: "",
      },
    },
    data(){
            return{
                form:{
                    identificacion:"",
                    nombre:"",
                    apellidos:"",
                    genero:"",
                    fecha_nacimiento:"",
                    email:"",             
                    password:"",
                }
              
            }
        },
        methods:{
          GuardarUsuario(){
             axios.post("https://proyectotodes-production.up.railway.app/api/usuario",this.form).then((data)=>
             {console.log(data);
                //CODIGO DE ALERTA
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro exitoso',
                showConfirmButton: false,
                timer: 1500
                })
            });
          }
        }
  };
  </script>
  <style></style>