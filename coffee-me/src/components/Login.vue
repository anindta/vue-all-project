<template>
    <div >
      <b-button
        v-b-toggle.sidebar-right
        type="button"
        class="btn btn-success text-white"
        >login</b-button
      >
      <b-sidebar id="sidebar-right" title="Login" right shadow >
        <div class="px-3 py-2 border ">
          <!-- Pills content -->
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form>
                <!-- Email input -->
                <div class="form-outline mb-3 mt-5">
                  <input type="email" id="loginName" class="form-control border border-success" />
                  <label class="form-label " for="loginName">Email</label>
                </div>
  
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control border border-success"
                  />
                  <label class="form-label" for="loginPassword">Password</label>
                </div>
  
                <!-- 2 column grid layout -->
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-3 mb-md-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        checked
                      />
                      <label class="form-check-label text-success" for="loginCheck">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
  
                <!-- Submit button -->
                <button type="submit" class="btn btn-success btn-block mb-4">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </template>