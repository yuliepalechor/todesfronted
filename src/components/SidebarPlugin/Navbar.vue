

<template>
  <div class="container position-sticky z-index-sticky top-0" >
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg  border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
          style="background-color: #891a89">
          <div class="container-fluid ps-2 pe-0" >
            <a
              class="navbar-brand font-weight-bolder ms-lg-0 ms-3" style="color:#ffff"
              href="../pages/dashboard.html"
            >
            <a class="navbar-brand" href="#">
    <img id="logo" src="../../assets/img/logonue.png"
    width="50" height="50"
          class="navbar-brand-img h-100"
          alt="main_logo" >
         </a>
              TODES
            </a>
            <button
              class="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navigation" >
              <ul class="navbar-nav mx-auto">
                
                
                <li class="nav-item">
                  <a style="color:#ffff" class="nav-link me-2" href="../pages/sign-up.html">
                    <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                    Registrarse
                  </a>
                </li>
                <li class="nav-item">
                  <router-link style="color:#ffff" class="nav-link me-2" to="/Sigin"><i class="fas fa-key opacity-6 text-dark me-1"></i>
                    Ingresar</router-link>
                 
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
      </div>
    </div>
  </div>
</template>

