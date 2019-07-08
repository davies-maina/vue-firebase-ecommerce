<template>
  
    
    <div class="container-fluid">

      <nav-bar></nav-bar>
    <heroe-sec></heroe-sec>
    <product-section></product-section>


    

    <vue-particles color="#dedede" :hoverEffect="true" :clickEffect="true"></vue-particles>
    <login></login>

    <trolley></trolley>

    </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";


export default {
  name: "home",
  components: {
    HelloWorld,Login,
  }
};
</script>

<style lang="scss">

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  
}
</style>

<style scoped> 

#particles-js 
{ 
  position: absolute; top: 0; left: 0; width: 100%; height: 70%; 
  
/*   background-image: url("");
 */  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: 50% 50%; */
} 
</style>
