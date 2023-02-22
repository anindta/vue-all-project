<template>
  <div class="container px-5">
    <p class="text-muted">buyer Tables</p>
  <div class="row gx-5">
    <div class="col">
      <div class="p-3 bg-white shadow rounded-4"><table class=" table table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">University</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(users, index) in user.users"
          :key="index" >
      <td>{{users.id}}</td>
      <td>{{ users.firstName }}</td>
      <td>{{ users.email }}</td>
      <td>{{ users.username }}</td>
      <td>{{ users.university}}</td>
    </tr>
  </tbody>
</table></div>
    </div>
   
  </div>
</div>
</template>


<script >
import { mapState } from "vuex";
export default {
    computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.$store.dispatch("getDataUser");
  },
}
</script>

<style>

</style>