<template>
   <div>
    
    <template>
    <div class="navbar">
      
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">TODES</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Eventos</b-nav-item>
        <b-nav-item href="#">Noticias</b-nav-item>
        <b-nav-item href="#">Incidencias</b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>Usuario</em>
          </template>
 
         <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
   </div>
</template>
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