<template>
  <!--  <button @click="switchComp('Comp1')">Login</button>-->
  <!--  <button @click="switchComp('Comp2')">Register</button>-->
  <!--  <component :is="selectedComp" />-->
  <!--  <ref-comp />-->
  <div>
    <button @click="createUser">Create New User</button>
    <h4 v-show="userCreated">User successfully created.</h4>
    <ul>
      <li v-for="(user, i) in users" :key="i">
        {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Comp1 from './components/Comp1.vue';
import Comp2 from './components/Comp2.vue';
import DefaultComp from './components/DefaultComp.vue';
import RefComp from "./components/RefComp.vue";
import { Http } from './services/http.js';

export default {
  name: 'App',
  data() {
    return {
      selectedComp: 'DefaultComp',
      users: [],
      baseUrl: 'https://reqres.in',
      userCreated: false,
      http: null
    };
  },
  created() {
    this.http = new Http();
    this.http.get('/users', { per_page: 15 })
        .then((resp) => {
          this.users = resp.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    switchComp(comp) {
      this.selectedComp = comp;
    },
    createUser() {
      this.http.post('users', {
        "name": "morpheus1",
        "job": "leader1"
      })
          .then((resp) => {
            console.log(resp.data);
            if (Object.keys(resp.data).length) {
              this.userCreated = true;
              setTimeout(() => {
                this.userCreated = false;
              }, 5000);
            }
          })
          .catch((err) => {
            console.log(err);
            this.userCreated = false;
          })

    }
  },
  components: {
    Comp1,
    Comp2,
    DefaultComp,
    RefComp
  }
}
</script>
