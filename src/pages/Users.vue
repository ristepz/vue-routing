<template>
  <div>
    <h3>Users Page</h3>
    <div>
      <table class="table">
        <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Avatar</th>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, i) in users">
          <th scope="row">{{user.id}}</th>
          <td>
            <router-link :to="{name: 'userdetails', params: {'username': `${user.first_name}-${user.last_name}`}}">
              <img :src="user.avatar" />
            </router-link>
          </td>
          <td>{{user.first_name}} {{user.last_name}}</td>
          <td>{{user.email}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { http } from '../services/http.js';

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  created() {
    http.get('/users', { per_page: 15 })
        .then((resp) => {
          this.users = resp.data.data;
          console.log(this.users);
        })
        .catch((err) => {
          console.log(err);
        });
  }
}
</script>

<style scoped>

</style>