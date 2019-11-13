<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <v-form>
        <h1 class="ma-3">Log in to Dashboard</h1>
        <div class="item">
          <v-btn to='/login' depressed class="btn">
            <v-icon class="pr-3">mdi-email</v-icon>
            <p>Email</p>
          </v-btn>
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
  name:"Main Page",
  components: {
    Header,
    Footer
  },

  data: () => {

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
  margin: 2px !important;
  width:100%;
  background: #696969 !important;
  text-transform: capitalize !important;
}

.btn2 {
  background: #db3236 !important;
}

.item {
  padding-bottom: 5px !important;

}

.pr-3 {
  padding-right: 10px !important;
}
</style>