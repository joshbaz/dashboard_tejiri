<template>
<div class="main">
  <Header></Header>
    <div class="form"> 
        <v-form ref="loginForm" @submit.prevent="login">
          <h1 class="ma-3">Log in to Dashboard</h1>
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
            <v-btn depressed class="btn" type="submit">Continue</v-btn>
          </div>
        </v-form>
    </div>
  <Footer></Footer>
  
</div>
  
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {

    $_veeValidate: {
      validator: 'new',
    },
  components: {
    Header,
    Footer
  },

  data: () => ({
    email: '',
    password:'',
    dictionary: {
        attributes: {
          email: 'E-mail Address',
          // custom attributes
        },
        custom: {
           password: {
            required: () => 'Password can not be empty',
            max: 'This field may not be greater than 10 characters',
            // custom messages
          },
        },
      }
  }),
  methods: {
    /* eslint-disable */
  login: function() {
       this.$validator.validateAll()
           let email = this.email;
            let password = this.password;
            this.$store
              .dispatch("login", { email, password })
              .then(() => {this.$router.push("/overview")})
              .catch(err => {
                console.log(err)
                });
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