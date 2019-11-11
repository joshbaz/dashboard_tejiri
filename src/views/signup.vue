<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <v-form ref="registerForm">
        <h1 class="ma-3" >Sign up to Dashboard</h1>
        <div>
          <v-text-field
          v-model="fname"
          type="text" 
          outlined 
          dense 
          placeholder="Firstname"
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
          <v-btn depressed class="btn" @click="submit">Continue</v-btn>
        </div>
      </v-form>
    </div>
  <Footer></Footer>
</div>
  
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer1.vue'
import axios from 'axios'
let BASE_URL = 'http://localhost:4000'

export default {
  props : ['nextURL'],
  components: {
    Header,
    Footer
  },

  data: () => ({
     fname:'',
     lname:'',
     email:'',
     password:'',
     confirmPassword:'',
     dialog: false,
  }),

 methods: {
   submit() {

if( this.password === this.confirmPassword){
   axios.post(BASE_URL + '/users/register', {
         firstname: this.fname,
         lastname: this.lname,
         email: this.email,
         password: this.password
      }).then (res => {
        this.$router.push('/register')  
        /*    localStorage.setItem('userToken', JSON.stringify(res.data.userToken))
         localStorage.setItem('token', res.data.token)

        if (localStorage.getItem('token') != null) {
         this.$emit('login')
            if(this.$route.params.nextURL != null){
              this.$router.push(this.$route.params.nextURL)
           } else{
            this.$router.push('/register')  
           }
       } */
      
      }).catch(err => {
        console.log("Not posted")
        console.log(err)
      })
    }  else {
      // Replace with v-dialog or v-snackbar
      return alert("Yo! Wrong password")
     }
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