<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="hero-content">
                <h1 class="hero-title">
                  Vue Shop For Developers
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5 work mb-3">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                    <button class="btn custom-btn btn-success">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>


/* Vue.use(VueParticles) */
export default {
    name: "heroe-sec"
}
</script>

<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
    color:white;
    background-image: linear-gradient(to right, #46505e , #353C47);
  }

  .work{

      position:absolute;
      top: 80%;
  left:100;
  
  z-index: 1;
  }
  
</style>