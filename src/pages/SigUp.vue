<template>
  <div>
    <navbar></navbar>
    <div class="container hq-template">
      <div class="row">
        <div class="col-lg-6 col-md-6 pic-register-2">
          <div class="md-card-avatar" id="avatar2">
            <img class="img" :src="logo" />
          </div>
        </div>
        <div  class="col-lg-6 col-md-6 col-sm-12 col-12 register-form">
          <form >
            <md-card id="cardcont" >
              <md-card-header style="background-color: #00adb5;text-align: center;">
                <h4 class="title">REGISTRARSE</h4>
                <p class="category">Complete sus Datos</p>
              </md-card-header>
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Identificacion</label>
                      <md-input v-model="user.identificacion" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Nombre</label>
                      <md-input v-model="user.nombre" type="email"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-50">
                    <md-field>
                      <label>Apellidos</label>
                      <md-input v-model="user.apellidos" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-50">
                    <md-field>
                      <label>Email</label>
                      <md-input v-model="user.email" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Password</label>
                      <md-input v-model="user.password" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Genero</label>
                      <md-input v-model="user.genero" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Fecha Nacimiento</label>
                      <md-input v-model="user.fecha_nacimiento" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100 text-right">
                    <md-button target="_blank" class="md-primary md-round" @click="Registro()"
                        >Aceptar</md-button
                      >
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.img{
  width: 80%;
}
#avatar2{
	float: center;
	display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20%;
}
#cardcont{
  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.7);
  box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.7);
}
.hq-template {
  margin-top: 10%;
  margin-bottom: 50px;
  box-shadow: 7px 9px 50px 18px rgba(212, 230, 252, 1);
  padding: 0 15px;
  border-radius: 15px;
  background-color: #891a89;
  -webkit-box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.7);
}
.register-form {
  background-color: #891a89;
  padding: 60px;
}
/************************** media query 1200px ***********/
@media only screen and (max-width: 1200px) {
  .pic-register-2 img {
    padding-top: 85px;
  }
}
/************************** media query 950px ***********/
@media only screen and (max-width: 950px) {
  .pic-register-2 img {
    height: 100%;
    width: 100%;
    padding-top: 0px;
  }
  .register-login-btn .register-btn {
    margin-right: 5px;
    font-size: 15px;
  }
  .register-login-btn .login-btn {
    font-size: 15px;
  }
}
/********************  media query 750px ***************/
@media only screen and (max-width: 750px) {
  .pic-register-2 {
    display: none;
  }
  .register-login-btn .register-btn {
    margin-right: 40px;
  }
}
/********************  media query 414px ***************/
@media only screen and (max-width: 414px) {
  .register-form {
    padding: 10px;
  }
}
</style>
<script>
import axios from "axios"
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: require("@/assets/img/logonue.png"),
    },
  },
  data() {
    return {
		user:{
	  identificacion: null,
      nombre: null,
      apellidos: null,
      email: null,
      password: null,
      genero: null,
      fecha_nacimiento: null,
		}
    };
  },
  methods:{
	Registro() {
      axios.post("http://127.0.0.1:8000/api/user_register", this.user).then((data) => {
        console.log(data);
        this.$router.push('/Sigin')
      });
      
    }
  },
};
</script>