<template>
<div class="main">
  <Header></Header>
    <div class="form"> 
        <v-form ref="loginForm">
          <h1 class="ma-3">Log in to Dashboard</h1>
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
            <v-btn depressed class="btn" @click="submit">Continue</v-btn>
          </div>
        </v-form>
    </div>
  <Footer></Footer>
  
</div>
  
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import axios from 'axios'
let BASE_URL = 'http://localhost:4000'

export default {
  components: {
    Header,
    Footer
  },

  data: () => ({
    email: '',
    password:''
  }),
  methods: {
  submit () {
      axios.post(BASE_URL + '/users/login', {
        email: this.email,
        password: this.password
     }).then (res => {
       
      /*  localStorage.setItem('userToken', JSON.stringify(res.data.userToken))
       localStorage.setItem('token', res.data.token)

       if (localStorage.getItem('token') != null) {
         this.$emit('login')
            if(this.$route.params.nextURL != null){
              this.$router.push(this.$route.params.nextURL)
           } else {
            this.$router.push('/overview')  
           }
       } */
     }).catch(err => {
       console.log("Not posted")
       console.log(err)
     }) 
   }
 },
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
  margin-top: 10%;
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