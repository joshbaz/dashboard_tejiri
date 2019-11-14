<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <form @submit.prevent="register">
        <h1 class="ma-3" >Sign up to Dashboard</h1>
        <div>
          <v-text-field
          v-model="fname"
          type="text" 
          outlined 
          dense 
          label="Firstname"
          ></v-text-field>
        </div>
         <div>
          <v-text-field
          v-model="lname"
          type="text" 
          outlined 
          dense 
          placeholder="Lastname"
          ></v-text-field>
        </div>
        <div>
          <v-text-field 
          v-model="email"
          type="email"
          outlined 
          dense 
          placeholder="you@domain.com"
          required
          ></v-text-field>
        </div>
        <div>
          <v-text-field
          v-model="password" 
          type="password"
          outlined 
          dense 
          placeholder="password"
          required
          ></v-text-field>
        </div>
        <div>
          <v-text-field
          v-model="confirmPassword"
          type="password"
          outlined 
          dense 
          placeholder="confirm password"
          required
          ></v-text-field>
        </div>
        <div>
          <v-btn depressed class="btn" type="submit">Continue</v-btn>
        </div>
      </form>
    </div>
  <Footer/>
</div>
  
</template>

<script>
import Header from '../../components/header.vue'
import Footer from '../../components/footer1.vue'
export default {
  // Handling Authentification with vuex
  props : ['nextURL'],
  components: {
    Header,
    Footer
  },
// 
  data() {
    return {
     fname:'',
     lname:'',
     email:'',
     password:'',
     confirmPassword:'', 
  }
},
  
 methods: {
  register: function() {
     let data = {
        firstname: this.fname,
        lastname: this.lname,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then(() => {
          this.$router.push("/register")
        })
        .catch(err => {console.log(err)});
    }
  }
}
</script>

<style scoped>
.ma-3 {
  margin-bottom: 30px !important;
}
.form {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 8.6%;
}
.btn {
  font-weight: bolder;
  width:100%;
  border-radius: 4px !important;
  background: #696969 !important;
  text-transform: capitalize !important;
  color: white;
}
</style>