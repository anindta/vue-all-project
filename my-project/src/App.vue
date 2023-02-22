<template>
  <div id="app">
    <header>
      <!--navbar-->
      <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <div class="container-fluid">
          <a href="#" class="navbar-brand text-warning">Cheap.Stuff</a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav text-white">
              <a class="nav-item nav-link active"
                ><router-link to="/">Home</router-link></a
              >
              <a href="#" class="nav-item nav-link active"
                ><router-link to="/about">Product</router-link></a
              >
              <a href="#" class="nav-item nav-link active"
                ><router-link to="/detail">Detail</router-link></a
              >
                <a href="#" class="nav-item nav-link active"
                ><router-link to="/notif">add</router-link></a
              >
            </div>
            <div class="navbar-nav ms-auto">
              <Login />
              <a href="" class="nav-item nav-link text-warning">Cart</a>
            </div>
          </div>
        </div>
      </nav>
      <!--navbar-->
      <router-view />
    </header>
    <footer>
      <!-- Footer -->
      <footer class="text-center text-lg-start bg-dark text-white">
        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4 mt-5">
                  <i class="fas fa-gem me-3 text-secondary"></i>Cheap.Stuff
                </h6>
                <p>Hhere we sell high quality goods at affordable prices.</p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4 mt-5">Products</h6>
                <p>
                  <a href="#!" class="text-reset">Clothes</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Shoes</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4 mt-5">About</h6>
                <p>
                  <a href="#!" class="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4 mt-5">Contact</h6>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  cheapstuff@gmail.com
                </p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->
      </footer>
      <!-- Footer -->
    </footer>
  </div>
</template>
<script>
import Login from "./components/Login.vue";
export default {
  name: "HomeView",
  components: {
    Login,
  },
};
</script>



