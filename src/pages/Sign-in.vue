<template>
  <div>
    <navbar></navbar>
    <div class="container hq-template">
      <div class="row">
       
        <div  class="col-lg-6 col-md-6 col-sm-12 col-12 register-form">
          <form >
            <md-card id="cardcont" >
              <md-card-header style="background-color: #00adb5;text-align: center;">
                <h4 class="title">LOGEO</h4>
                <p class="category">Digite Email y Contraseña</p>
              </md-card-header>
              <md-card-content>
                  <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-100">
                      <md-field>
                        <span class="input-icon"
                          ><i class="fa fa-envelope"></i
                        ></span>
                        <md-input
                          class="form-control"
                          v-model="form.email"
                          type="email"
                        ></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                      <md-field>
                        <span class="input-icon"
                          ><i class="fa fa-lock"></i
                        ></span>
                        <md-input v-model="form.password" type="password"></md-input>
                      </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                      <md-button target="_blank" class="md-primary md-round" @click="Iniciar()"
                        >Aceptar</md-button
                      >
                      <br/>
                      <span class="forgot-pass"
                        ><a href="#">¿Olvidó su nombre de usuario/contraseña?</a></span
                      >
                    </div>
                  </div>
                </md-card-content>
            </md-card>
          </form>
        </div>
        <div class="col-lg-6 col-md-6 pic-register-2">
          <div class="md-card-avatar" id="avatar">
            <img class="img" :src="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.img{
  width: 80%;
}
#avatar{
	float: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:5%;
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
      usuarionombre:null,
      usuarioapellido:null,
      usuarioemail:null,
		form:{
      email: null,
      password: null,
		}
    };
  },
  methods:{
    Iniciar() {
         axios.post("http://127.0.0.1:8000/api/login", this.form)
          .then((data) => {
         console.log(data.data.status);
            if (data.data.status == "1") {
              sessionStorage.setItem("userid", data.data.id), /**con storage  */
              sessionStorage.setItem("username", data.data.name),
              sessionStorage.setItem("apellido", data.data.apellido),
              sessionStorage.setItem("email", data.data.email),
              sessionStorage.setItem("token", data.data.access_token)
              if(data.data.rol[0]=="Admin"){
                this.$router.push("/dashboard");
              }else{
                this.$router.push("/UsuarioComunidad");
              }
                 
           }
            if (data.data.status == "0") {
               this.$router.push("/");
           }

      });
    }
  },
};
</script>
