<template>
   <div>

    <div clas="navbar">
      
      <b-navbar toggleable="lg" type="dark">
        <div class="navbar-inner">
          <img src="../../assets/img/logonue.png" width="80px" height="30px" alt="Logo" />
        </div>
        

       
        <b-navbar-brand style="color:#ffff" href="">TODES</b-navbar-brand >
       
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
        <div class="item">
          <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>

            
            <li class="nav-item">
                  <router-link style="color:#ffff" class="nav-link me-2" to="/UsuarioComunidad">
                   Inicio</router-link>
                 
                </li>
            <li class="nav-item">
                  <router-link style="color:#ffff" class="nav-link me-2" to="/EventosUsuario">
                   Eventos</router-link>
                 
                </li>

            <li class="nav-item">
                  <router-link style="color:#ffff" class="nav-link me-2" to="/NoticiasUsuario">
                    Noticias</router-link>
                 
                </li>
                
                

            
    
          </b-navbar-nav>
    
          <b-navbar-nav  class="ml-auto">
            <b-nav-item-dropdown right>
              <template  #button-content>
                <em style="color:#ffff">Usuario</em>
              </template>
     
             <b-dropdown-item href="# ">Perfil</b-dropdown-item>
              <b-dropdown-item href="../../pages/Sign-in.vue">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        </div>
        <div style="margin-left:800px ; color: aliceblue;">
          {{ usuarionombre }}
      {{ usuarioapellido }}
        </div>
        
      </b-navbar>
      
    </div>
    
    

</div>

   
</template>
<script>
export default {

name: 'App',


data() {
  return {
    formulariocomentario:{
      comentario:null,
      clasificasion:null,
    },
    usuarionombre: null,
    usuarioapellido: null,
    id_usuario:null,
    
   
  }

},


/**/

mounted() {
  this.id_usuario = sessionStorage.getItem("id")
  this.usuarionombre = sessionStorage.getItem("username")
  this.usuarioapellido = sessionStorage.getItem("apellido")
 


}
}
</script>



<style>

.navbar {
  background: #891A89;
  margin-bottom: 0;
  min-height: 70px;
}
.navbar-fixed-top {
  min-height: 60px;
  height: 60px;
  padding-top: 0;
}
.navbar-inner {
  background: #891A89;
  border-radius: 0;
  filter: none;
  border: none;
  box-shadow: none;
}

.navbar .brand img {
  width: 120px;
  height: 40px;
}




</style>