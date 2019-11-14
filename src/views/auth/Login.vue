<template>
<div class="main">
  <Header></Header>
    <div class="form"> 
        <form @submit.prevent="handleSubmit">
          <h1 class="ma-3">Log in to Dashboard</h1>
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
        <div v-show="submitted && !username" class="invalid-feedback">Email is required</div>

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
          <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
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
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
    email: '',
    password:'',
    submitted: false
    }
  },
  
   computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                this.login({ username, password })
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