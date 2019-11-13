<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <v-form ref="registerForm" @submit.prevent="register">
        <h1 class="ma-3" >Sign up to Dashboard</h1>
        <div>
          <v-text-field
          v-model="fname"
          type="text" 
          outlined 
          dense 
          label="Firstname"
          data-vv-name="fname"
          v-validate="'required|max:100'"
          :error-messages="errors.collect('fname')"
          ></v-text-field>
        </div>
         <div>
          <v-text-field
          v-model="lname"
          type="text" 
          outlined 
          dense 
          placeholder="Lastname"
          data-vv-name="lname"
          v-validate="'required|max:100'"
          :error-messages="errors.collect('lname')"
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
          v-validate="'required|email'"
          data-vv-name="email"
          :error-messages="errors.collect('email')"
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
           data-vv-name="password"
          v-validate="'required|max:8'"
          :error-messages="errors.collect('password')"
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
      </v-form>
    </div>
  <Footer/>
</div>
  
</template>

<script>

import Header from '../components/header.vue'
import Footer from '../components/footer1.vue'

export default {
    $_veeValidate: {
      validator: 'new',
    },
    
  // Handling Authentification with vuex
  props : ['nextURL'],
  components: {
    Header,
    Footer
  },
// 
  data: () => ({
     fname:'',
     lname:'',
     email:'',
     password:'',
     confirmPassword:'',
     dictionary: {
        attributes: {
          email: 'E-mail Address',
          // custom attributes
        },
        custom: {
          fname: {
            required: () => 'Firstname can not be empty',
            max: 'The name field may not be greater than 100 characters',
            // custom messages
          },
           lname: {
            required: () => 'Lastname can not be empty',
            max: 'The name field may not be greater than 100 characters',
            // custom messages
          },
           password: {
            required: () => 'Password can not be empty',
            max: 'This field may not be greater than 10 characters',
            // custom messages
          },
        },
      }
  }),
  
  mounted () {
      this.$validator.localize('en', this.dictionary)
  },
 methods: {
   /* eslint-disable */
   register: function() {

     let data = {
          name: this.name,
          email: this.email,
          password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then(() => {this.$router.push("/register")})
        .catch(err => {console.log(err)});
      this.$validator.validateAll()
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