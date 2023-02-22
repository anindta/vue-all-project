<template>
  <div id="app">
    <div class="container-fluid">
    <div class="row flex-nowrap ">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light position-fixed shadow-lg">
          
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3  min-vh-100 ">
              <div class="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/012/896/171/original/fast-food-drink-coffee-illustration-3d-png.png" alt="">
        </div>
        <div class="text-center name mb-4">
            COFFEE.ME
        </div>
              
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                           <span class="ms-1 d-none d-sm-inline"><router-link class="text-decoration-none text-dark fs-5" to="/">Dashboard</router-link> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                           <span class="ms-1 d-none d-sm-inline"><router-link class="text-decoration-none text-dark fs-5" to="/product">Products</router-link></span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline"><router-link class="text-decoration-none text-dark fs-5" to="/user">User Profile</router-link></span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline text-black"> <router-link class="text-decoration-none text-dark fs-5" to="/tabel">Tables</router-link></span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <span class="d-none d-sm-inline"><router-link class="text-decoration-none text-dark fs-5" to="/locations"> Locations</router-link></span></a>
                    </li>
                   
                  
                </ul>
                <hr>
               
            </div>
        </div>
        <div class="col py-3 "  style="margin-left:17%; ">
              <!--navbar-->
      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top  shadow mb-4">
        <div class="container-fluid">
         
          <div class="collapse navbar-collapse" id="navbarCollapse">
        
            <div class="navbar-nav ms-auto">
            
              <a href="" class="nav-item nav-link text-black"><font-awesome-icon class=" fa-2x" icon="fa-solid fa-circle-user" /></a>
            </div>
          </div>
        </div>
      </nav>
      <!--navbar-->
          <div > <router-view/></div>
        </div>
    </div>
</div>
  </div>
</template>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

.logo {
    width: 80px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 20px;
 
}

.logo img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7,
        -8px -8px 15px #fff;
}
.name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 10px;
    color: #555;
    margin-left: 20px;
}

</style>
  