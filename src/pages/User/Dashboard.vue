<template>
  
  <div>
    
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container">
         
            <!-- This is website logo -->
            <img src="../../assets/img/logonue.png" width="80px" height="80px" alt="Logo" />
          
          <!-- Navigation button, visible on small resolution -->
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <i class="icon-menu"></i>
          </button>
          <!-- Main navigation -->
          <div class="nav-collapse collapse pull-right">
            <ul class="nav" id="top-navigation">
              <li class="active"><a href="#home">Home</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#price">Price</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <!-- End main navigation -->
        </div>
      </div>
    </div>
    <!-- Start home section -->
    <div id="home">
      <!-- Start cSlider -->
      <div id="da-slider" class="da-slider">
        <div class="triangle"></div>
        <!-- mask elemet use for masking background image -->
        <div class="mask"></div>
        <!-- All slides centred in container element -->
        <div class="container"  >
          
       
          <div class="da-slide">
            <b-img :src= "require('../../assets/img/fondo.png')" width="80px" height="80px" alt="Logo" />
            
            
          </div>
          
  
          
         
          <div class="da-arrows">
            <span class="da-arrows-prev"></span>
            <span class="da-arrows-next"></span>
          </div>
          <!-- End cSlide navigation arrows -->
        </div>
      </div>
    </div>
    
    <!-- End home section -->
    <!-- Service section start -->
    <div style="background-color:#891A89" class="section primary-section" id="service">

      <div class="container" >

        <!-- Start title section -->
        <div class="title">
         
          <h1>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Lo que hacemos?</font>
            </font>
          </h1>
          <!-- Section's title goes here -->
          <p>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Nuestras historias nos identifican </font>
            </font>

          </p>

        </div>
        <!--Simple description for section goes here. -->

      </div>
      
        <div class="a1">
        <div class="span4">
          <div class="centered service">
            <div class="circle-border zoom-in">
              <img class="img-circle" src="images/Service1.png" alt="service 1" />
            </div>
            <h3>Actividades</h3>
            <p>Nosotros estamos orgullosos de lo que somos.</p>
          </div>
        </div>
      


        
        
        
      </div>
    </div>
    <!-- Service section end -->
    <!-- Portfolio section start -->
    <div class="section secondary-section" id="portfolio"  style="background-color:#F8F9F9">
      <div class="triangle"></div>
      <div class="container">
       
        <!-- Start details for portfolio project 1 -->
        <div id="single-project">
          
          <div id="slidingDiv8" class="toggleDiv row-fluid single-project">
            <div class="span6">
              <img src="" alt="project 9" />
            </div>
            <div class="span6">
              <div class="project-description">
                <div class="project-title clearfix">
                  <h3>Publicacion</h3>
                  <span class="show_hide close">
                    <i class="icon-cancel"></i>
                  </span>
                </div>
                <div class="project-info">
                  <div><span>Nombre</span>publicacion 9</div>
                  <div><span>Fecha</span>July 2022</div>
                  <div><span>Direccion</span>puente</div>
                  <div><span>Ver publicacion</span>
                    <a href="" class="btn btn-primary">Ir</a>
                  </div>
                </div>
                <p>
                
                </p>
              </div>
            </div>
          </div>
          <!-- End details for portfolio project 9 -->
          <ul id="portfolio-grid" class="thumbnails row">
            <li class="span4 mix web">
              <div class="thumbnail">
                <img src="images/Portfolio01.png" alt="project 1" />
                <a href="#single-project" class="more show_hide" rel="#slidingDiv"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix photo">
              <div class="thumbnail">
                <img src="images/Portfolio02.png" alt="project 2" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv1"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix identity">
              <div class="thumbnail">
                <img src="images/Portfolio03.png" alt="project 3" />
                <a href="#single-project" class="more show_hide" rel="#slidingDiv2"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix web">
              <div class="thumbnail">
                <img src="images/Portfolio04.png" alt="project 4" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv3"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix photo">
              <div class="thumbnail">
                <img src="images/Portfolio05.png" alt="project 5" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv4"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix identity">
              <div class="thumbnail">
                <img src="images/Portfolio06.png" alt="project 6" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv5"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix web">
              <div class="thumbnail">
                <img src="images/Portfolio07.png" alt="project 7" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv6"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix photo">
              <div class="thumbnail">
                <img src="images/Portfolio08.png" alt="project 8" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv7"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
            <li class="span4 mix identity">
              <div class="thumbnail">
                <img src="images/Portfolio09.png" alt="project 9" />
                <a href="#single-project" class="show_hide more" rel="#slidingDiv8"><i class="icon-plus"></i></a>
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
                <div class="mask"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="row-fluid">
          <div class="span12">


            <ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-0147907188440311"
              data-ad-slot="6370604185" data-ad-format="auto"></ins>

          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio section end -->
    <!-- About us section start -->
    <div class="section primary-section" id="about">
      <div class="triangle"></div>
      <div class="container">
      </div>
    </div>
  </div>

  <div> <h1>hola edwin</h1></div>
</template>

<script>

</script>
<style>
.da-slide{
height: 400px;
}



.navbar-fixed-top {
  min-height: 60px;
  height: 60px;
  padding-top: 0;
}
/* .titlevisual{
  height: 300px;
  width: 100vh;
  position: flex;
  float:none;
  align-items: center;
} */
.title {
  height: 100%;
  width: 100%;
  float:inline-start;
  align-items: center;

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

.navbar .nav>li>a {
  text-transform: uppercase;
  line-height: auto;
  vertical-align: middle;
  margin: 10px 3px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  border: 1px solid #181A1C;
  box-shadow: none;
  font-size: 15px;
  text-shadow: none;
  color: #fff;
  transition: border-color 1s ease;
}

.navbar .nav>li:hover>a,
.navbar .nav>.active>a,
.navbar .nav>.active>a:hover,
.navbar .nav>.active>a:focus {
  border: 1px solid #FECE1A;
  color: #fff;
  background-color: #181A1C;
  transition: border-color 1s ease;
}

.nav-pills {
  margin-bottom: 30px;
}

.nav-pills>li>a {
  background: transparent;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  margin-right: 5px;
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid #181A1C;
}

.nav-pills>li>a:hover,
.nav-pills>.active>a,
.nav-pills>.active>a:hover,
.nav-pills>.active>a:focus {
  background: #181A1C;
  color: #fff;
}

.navbar .btn-navbar:hover,
.navbar .btn-navbar {
  border-radius: 0;
 
  color: #000;
}

/******
2. Layout
**********************************************************************/
.centered {
  margin-left: auto;
  margin-right: auto;
  float: none;
  text-align: center;
}

/* Use this class if you want ceter element with span* class */
/* .center {
  float: none !important;
  margin: 0 auto !important;
  text-align: center;
} */

.highlighted-box {
  background: #F4F8F9;
  padding: 20px 30px;
}

.highlighted-box h1 {
  margin: 0px;
}

.large-text {
  line-height: 1.2em;
  font-size: 30px;
  color: #181A1C;
  padding: 20px;
  margin-bottom: 20px;
}

.highlighted-box h1,
.highlighted-box p {
  color: #181A1C !important;
}

.circle-border {
  display: inline-block;
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
  border-radius: 500px;
  -khtml-border-radius: 500px;
  border: 3px solid #fff;
}

.left-align {
  text-align: left;
}

.right-align {
  text-align: left;
}

.error {
  color: #CF0000;
  display: none;
}

.invisible {
  display: none;
  visibility: visible;
}

.triangle {
  margin: 0 auto;
  text-align: center;
  width: 0;
  height: 0;
  border-top: 30px solid #891A89;
  border-left: 585px outset transparent;
  border-right: 585px outset transparent;
  position: relative;
}

/*
2.1 Animations
**********/
.zoom-in {
  -webkit-transform: scale(1, 1);
  -moz-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  transition: all 250ms ease;
}

.zoom-in:hover {
  -webkit-transform: scale(1.1, 1.1);
  -moz-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
}

/*
2.2 Buttons - There are buttons on a transparent background, primary and secondary color background.
**********/
.button,
.button:visited,
.button:focus {
  display: inline-block;
  border: 1px solid #181A1C;
  color: #181A1C;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 17px;
  line-height: auto;
}

.button:hover,
.button:active {
  background-color: #181A1C;
  color: #fff;
}

.button-sp,
.button-sp:visited,
.button-sp:focus {
  border: none;
  background-color: #FECE1A;
  color: #181A1C;
}

.button-sp:hover,
.button-sp:active {
  background-color: #181A1C;
  color: #FECE1A;
}

.button-ps,
.button-ps:visited,
.button-ps:focus {
  border: none;
  background-color: #181A1C;
  color: #FECE1A;
}

.button-ps:hover,
.button-ps:active {
  background-color: #FECE1A;
  color: #181A1C;
}

/*
2.3 Thumbnails - Predefined bootstrap's thumbnail class.
**********/
.thumbnail {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  position: relative;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  background: #191a1c;
}

.thumbnail .more {
  display: block;
  z-index: 4;
  position: absolute;
  top: -100px;
  left: 50%;
  margin: 0 auto;
  margin-left: -41px;
  width: 80px;
  height: 80px;
  font-size: 40px;
  color: #fff;
  text-decoration: none;
  line-height: 70px;
  text-align: center;
}

.thumbnail:hover .more {
  top: 40%;
  margin-top: -40px;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3 s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.thumbnail h3,
.thumbnail p {
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 4;
}

.thumbnail h3 {
  color: #FECE1A;
  margin-top: 10px;
  font-size: 20px;
}

.thumbnail>p {
  padding-bottom: 20px;
}

.thumbnail .mask {
  opacity: 0.85;
  filter: alpha(opacity=85);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181A1C;
  position: absolute;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2 s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.thumbnail:hover .mask {
  top: 0;
}

/*
2.4 Socail icons
************/
.social {
  list-style: none;
  float: none;
  position: relative;
  margin: 5px;
}

.social li {
  display: inline-block;
  line-height: 32px;
  font-family: 'Porta';
  font-size: 32px;
  padding: 0 5px;
}

.social li a {
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  color: #FECE1A;
}

.social li a:hover {
  color: #181A1C;
}

/*
3. Sections 
***************************************************************************/
.section {
  padding-bottom: 50px;
}

.section .container {
  padding-top: 50px;
}

.section .title {
  text-align: center;
  padding: 10px;
  margin-bottom: 30px;
}

.section .title h1 {
  font-weight: normal;
  margin-bottom: 20px;
  padding: 0;
}

.section .title>p {
  font-size: 20px;
  color: #FFF;
  font-weight: lighter;
}

.primary-section {
  background:#00ADB5;
}

.primary-section .triangle {
  border-top: 40px solid  #00ADB5;
}

.primary-section .title {
  border-bottom: 1px solid #FFF;
}

.primary-section,
.primary-section .title p,
.primary-section h3 {
  color: #00ADB5;
}

.primary-section h1 {
  color: #FFF;
}

.secondary-section {
  background: #891A89;
}

.secondary-section .title {
  border-bottom: 1px solid #181A1C;
}

.secondary-section h1,
.secondary-section .title p {
  color: #181A1C;
}

/* Third section use bacground image */
.third-section {
  padding-bottom: 70px;
  background: #181A1C url() no-repeat center;
  border-top: 6px solid #FECE1A;
}

.third-section .container {
  padding-top: 20px;
  position: relative;
}

.third-section .title {
  border-bottom: 1px solid #A1AAB7;
  color: #FECE1A;
}

.sub-section {
  margin-top: 30px;
}

.sub-section .title {
  padding: 0;
}

/*******
3.1 Services  
***************************************/



.service h2 {
  padding-top: 5px;
}

.service p {
  padding: 0px 50px;

}

.service img {
  width: 150px;
  height: 150px;
}

/*
3.2 Portfolio
***************************************/
.single-project {
  margin-bottom: 30px;
  background: #181A1C;
  padding: 20%;
  float:left;
}

.single-project img {
  width: 100%;
}

.project-description {
  padding-right: 20px;
}

.project-description p {
  padding-left: 0;
}

.project-title {
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #00ADB5;
}

.project-title h3 {
  float: left;
  margin-top: 0;
  padding: 0;
  width: 80%;
}

.project-title .close {
  color: #FECE1A;
  margin-top: 10px;
}

.project-info span,
.project-title h3 {
  color: #00ADB5;
}

.project-info {
  font-weight: 100;
  padding: 10px 0;
  color: #8cc472;
}

.project-info span {
  width: 80px;
  display: inline-block;
}

.project-info div {
  margin-bottom: 5px;
}

.close {
  float: right;
  width: 40px;
  height: 40px;
  text-align: center;
}

#portfolio-grid .mix {
  opacity: 0;
  display: none;
}

/*
3.3 About
******************************************************************/
.team .thumbnail {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 10px;
  border: 1px solid #fff;
}

.team .thumbnail:hover .social {
  z-index: 5;
}

.team .thumbnail:hover .social a {
  color: #fff;
}

.team .thumbnail .mask {
  background: #FECE1A;
}

.team .thumbnail .mask h2 {
  margin-top: 20%;
}

.team .thumbnail .mask,
.team .thumbnail .mask h3,
.team .thumbnail .mask p,
.team .thumbnail:hover h3,
.team .thumbnail:hover .social a:hover {
  color: #181A17;
}

.about-text {
  margin-top: 30px;
}

.about-text p {
  padding: 0;
  font-size: 16px;
}

/*********************************************************************
                        SKILLS BAR
*********************************************************************/
.skills {
  list-style-type: none;
  position: relative;
  margin: 0px;
}

.skills li {
  margin-bottom: 30px;
  background: #FFF;
  height: 40px;
  padding: 1px;
}

.skills li h3 {
  position: relative;
  font-size: 15px;
  padding: 0;
  margin: 0;
  left: 10px;
  z-index: 1;
  color: #181A1C;
}

.skills li .bar {
  height: 40px;
  position: absolute;
  background-color: #FECE1A;
}

/*
3.4 Clients
**********************************************************************/
.client-slider img {
  border: 1px solid white;
}

.client-slider img:hover {
  background-color: #FECE1A;
}

.client-nav {
  list-style: none;
  margin-top: 10px;
}

.client-nav li {
  float: left;
  display: block;
  margin-left: 10px;
}

.client-nav li a {
  display: inherit;
  padding: 5px;
  background: #FECE1A;
  border-radius: 3px;
  width: 20px;
  height: 20px;
}

.client-nav li a:hover {
  background: #181A1C;
}

.testimonial p {
  color: #181A1C;
  background: #FECE1A;
  padding: 15px;
  margin: 0;
}

.testimonial .arrow {
  margin-left: 10px;
  width: 0;
  border-top: 10px solid #FECE1A;
  border-left: 20px outset transparent;
  border-right: 20px outset transparent;
}

.testimonial .whopic {
  display: inline-block;
}

.testimonial .whopic img {
  margin-top: 10px;
  width: 50px;
  height: 50px;
  float: left;
}

.testimonial .whopic strong {
  float: left;
  margin-top: 10px;
  padding-left: 10px;
}

.testimonial .whopic small {
  display: block;
  font-size: 12px;

}

.testimonial-text {
  display: block;
  font-size: 22px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 70%;
  line-height: 1.3em;
}

/*
3.5 Price table
******************************************************************/
.price-table {
  margin-top: 70px;
  margin-bottom: 20px;
}

.price-column {
  background-color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  padding-bottom: 20px;
  margin: 0 auto;
  text-align: center;
}

.price-column h3 {
  background-color: #181A1C;
  text-transform: uppercase;
  text-align: center;
  color: #FECE1A;
  padding: 40px 0px;
  font-size: 36px;
  margin-top: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
}

.price-column .list {
  list-style: none;
  margin: 20px 50px;
}

.price-column .list li {
  font-weight: lighter;
  color: #747C89;
  font-size: 20px;
  border-bottom: 1px solid #747C89;
  padding: 25px 0px;
}

.price-column .list li.price {
  text-align: center;
  font-size: 31px;
  background-color: white;
  color: #747C89;
  margin-top: 25px;
}

.price-text {
  margin: 30px 0 20px;
  font-size: 20px;
  color: #181A1C;
  font-weight: normal;
}

/*
3.6 Newsletter
********************************************************************/
.newsletter,
.newsletter h2 {
  color: #D7DDDE;
}

.newsletter .title h2 {
  text-align: left;
  padding: 0;
  margin: 0;
}

.newsletter form {
  text-align: right;
}

.newsletter input {
  margin-top: 10px;
  padding: 15px;
  height: auto;
}

.newsletter button {
  margin: 0 0 0 20px;
}

.newsletter .button-sp:hover,
.newsletter .button-sp:active {
  background-color: #FFF;
  color: #181A1C;
}

/*
3.7 Contact
********************************************************************/
.contact {
  background: #FECE1A;
}

.contact h1,
.contact h2,
.contact h3,
.contact h4,
.contact h5,
.contact h6,
.contact .section .title>p,
.contact .social>li>a {
  color: #181A1C;
}

.contact textarea,
.contact input[type="text"],
.contact input[type="email"] {
  padding: 10px;
  line-height: 20px;
  height: auto;
}

.contact textarea {
  height: 120px;
}

.contacts,
.contact .social {
  color: #fff;
  list-style: none;
  margin-left: 10px;
}

.contacts>li {
  margin-top: 15px;
}

.contacts>li>a {
  color: #fff;
}

.contact-info {
  margin-top: 10px;
  margin-bottom: 10px;
}

.contact-info p {
  font-weight: normal;
}

.contact-info .icon {
  margin: 10px auto;
  font-size: 30px;
}

.map-wrapper {
  position: relative;
  height: 500px;
}

.map-canvas {
  position: absolute;
  margin-bottom: 20px;
  width: 100%;
  height: 500px;
  color: #29383F;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.contact .social {
  display: inline-block;
  margin-left: 0;
}

.contact .social li {
  line-height: 32px;
  padding: 10px 10px;
  font-family: 'Porta';
  font-size: 50px;
  transition: margin 0.4s;
  -webkit-transition: margin 0.4s;
}

.contact .social li a {
  color: #fff;
}

.contact .social li a:hover {
  color: #181A1C;
}

.contact-form {
  background: #fff;
  background: rgba(255, 255, 255, 0.9);
  z-index: 110;
  position: relative;
  margin-top: -25px;
  padding: 20px;
}

.contact-form h3 {
  color: #838589;
  padding-bottom: 20px;
}

.message-btn {
  border: 1px solid #747C89;
  color: #747C89;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 17px;
}

.message-btn:hover {
  background-color: #FECE1A;
}

.contact-info {
  text-align: center;
  font-size: 22px;
}

.info-mail {
  border: 1px solid white;
  width: 60%;
  margin: 0 auto;
  padding: 15px;
  color: #181A1C;
}

.black {
  color: #181A1C;
}

/*
3.8 Footer
********************************************************************/
.footer {
  background: #181A1C;
  text-align: center;
}

.footer>p {
  color: #fff;
  margin: 0;
}

.footer a {
  color: #FECE1A;
}

.footer a:hover,
.footer a:focus {
  text-decoration: underline;
}

.scrollup {
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  width: 39px;
  height: 39px;
  border-radius: 5px;
  font-size: 20px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: 1px solid #fff;
  display: none;
  background: #FECE1A;
}

.scrollup>a {
  position: relative;
  top: 7px;
  color: #fff;
}

/*
4 Responsible
********************************************************************/
@media (min-width: 1200px) {
  .thumbnail .more {
    margin-left: -41px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    line-height: 80px;
  }
}

@media (max-width: 979px) {
  body {
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-fixed-top,
  .navbar-fixed-bottom {
    position: fixed;
  }

  .navbar .nav>li>a {
    line-height: 20px;
    vertical-align: middle;
  }

  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .navbar-fixed-top,
  .navbar-fixed-bottom,
  .navbar-static-top {
    margin-left: 0px;
    margin-right: 0px;
  }

  .nav-collapse {
    clear: both;
  }

  .nav-collapse .nav {
    float: none;
    margin: 0 0 10px;
  }

  .nav-collapse .nav>li {
    float: none;
  }

  .nav-collapse,
  .nav-collapse.collapse {
    width: 100%;
    display: inherit;
  }

  .thumbnail .more {
    margin-left: -21px;
    width: 40px;
    height: 40px;
    border-radius: 30px;
    line-height: 40px;
  }

  .thumbnail:hover .more {
    margin-top: -20px;
  }

  .newsletter form {
    text-align: center;
  }
}

@media (max-width: 767px) {
  .info-mail {
    width: 90%;
    padding: 15px 0px;
  }

  .project-description {
    padding-left: 20px;
  }

  .price-column,
  .testimonial {
    margin-top: 30px;
  }
}
</style>

