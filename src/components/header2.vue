<template>
    <v-toolbar flat>
        <v-toolbar-title>
            <v-img src="/Tlogo.svg"></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text class="toolbar-item" to="/overview">Overview</v-btn>
            <v-btn text class="toolbar-item" to="/activities">Activities</v-btn>
            <v-btn text class="toolbar-item" to="/media">Media Library</v-btn>
        </v-toolbar-items>
        <v-menu offset-y>
         <template v-slot:activator="{ on }">
        <v-btn icon color="#FF6347"  v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
         </template>
          <v-list>
        <v-list-item v-if="isLoggedIn"><a @click="logout">Logout</a></v-list-item>
          </v-list>
        </v-menu>
        <v-avatar color="#D3D3D3" size="50" class="pa-3"></v-avatar>
    </v-toolbar>
</template>

<script>
export default {
  /* eslint-disable */
  computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
      methods: {
        logout: function() {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/login");
          });
        }
      }
}
</script>

<style scoped>
.pa-3 {
    margin: 10px !important;
    /* padding-left: 5px !important; */
}
.toolbar-item {
    text-transform: capitalize !important;
}
.toolbar-item:active,
.toolbar-item:hover {
    text-decoration-color: #db3236 !important;
}

</style>