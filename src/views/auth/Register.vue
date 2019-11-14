<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <form @submit.prevent="handleSubmit">
        <h1 class="ma-3">Sign up to Dashboard</h1>
         <div>
          <v-text-field
          v-model="user.firstName" 
          v-validate="'required'" 
          outlined 
          dense 
          label="Firstname"
          :class="{ 'is-invalid': submitted && errors.has('firstName') }"
          ></v-text-field>
          <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}

          </div>
        </div>
         <div>
          <v-text-field
          v-model="user.lastName" 
          v-validate="'required'" 
          outlined 
          dense 
          label="Lastname"
          :class="{ 'is-invalid': submitted && errors.has('lastName') }"
          ></v-text-field>
           <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}

           </div>
        </div>
        <div>
          <v-text-field 
          v-model="user.email"
          type="email"
          v-validate="'required'" 
          outlined 
          dense 
          placeholder="you@domain.com"
          required
          :class="{ 'is-invalid': submitted && errors.has('email') }"
          ></v-text-field>
          <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}

          </div>
        </div>
        <div>
          <v-text-field
         type="password" 
         v-model="user.password" 
         v-validate="{ required: true, min: 6 }" name="password" 
         :class="{ 'is-invalid': submitted && errors.has('password') }"
          outlined 
          dense 
          placeholder="password"
          required
          ></v-text-field>
        </div>
        <div>
          <v-btn depressed class="btn" type="submit">Continue</v-btn>
        </div>
      </form>
    </div>
  <Footer></Footer>
  
</div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '../../components/header.vue'
import Footer from '../../components/footer1.vue'

export default {
  // Handling Authentification with vuex
  components: {
    Header,
    Footer
  },

  data() {
    return {
     user: {
        firstName: '',
        lastName: '',
        email:'',
        password: ''
      },
       submitted: false
  }
},
 computed: {
        ...mapState('account', ['status'])
    },
 methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
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