<template>
  <div>
    <h3>User Details Page</h3>
    <div class="card" style="width: 18rem;" v-if="details">
      <img :src="details.Avatar" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">User Details</h5>
        <p class="card-text">All data for this user</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ details.FirstName }}</li>
        <li class="list-group-item">{{ details.LastName }}</li>
        <li class="list-group-item">{{ details.FullName }}</li>
        <li class="list-group-item">{{ details.Email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { http } from '../services/http.js';
import { UserModel } from '../models/UserModel.js';

export default {
  name: "UserDetails",
  data() {
    return {
      details: null
    };
  },
  created() {
    const fullName = this.$route.params.username;
    if (fullName) {
      http.get('/users', { per_page: 15 })
          .then((resp) => {
            const users = resp.data.data;
            const res = users.filter((u) => {
              const fn = `${u.first_name}-${u.last_name}`;
              return fn === fullName;
            });
            this.details = new UserModel(res[0]);
            console.log(this.details);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }
}
</script>

<style scoped>

</style>