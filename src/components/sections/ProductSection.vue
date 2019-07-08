<template>
    <div class="container mt-4">

        <div class="row">
            <div class=" col-md-4" v-for="product in products">
                
                

                        <div  class="card mt-4 mb-5 shadow-lg border-0" >
<!--                     <span class="text-uppercase position-absolute bgblack px-4 py-1 text-white offerRibbon">Offer</span>

 -->                   
 <div class="container">
 <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images" :key="index.id">
                                <img :src="image" class="card-img-top img-fluid" alt="productslider_images">
                          </slide>
</carousel>
                    <div class="card-body">
                        <!-- <div class="d-flex mb-2 text-center"> -->

                            <h4 class="card-title">
                            {{product.name}}
                            </h4>
                        <!-- </div> -->
                            <div class="card-subtitle text-truncate text-muted mt-2" v-html="product.description">

                                
                            </div>
                            <div class="card-text d-flex justify-content-between mt-5 mb-3">
                                <span>Unit price</span>
                                <span class="priceSection">
                                    
                                    <div class="now h5 textblack">{{product.price | currency('ksh', 0, { spaceBetweenAmountAndSymbol: true })}}</div>
                                    <!-- <del>ksh 1800</del> -->
                                </span>
                            </div>
                            <add-to-cart
                            
                            :name="product.name"
                            :price="product.price"
                            :product-id="product.id"
                            :productimage="getImage(product.images)"
                            
                            ></add-to-cart>
                        </div>
                </div>
                        </div>

           

                </div>
                
            </div>
        </div>
   
</template>

<script>
import {db} from '../../firebase'
import { Carousel, Slide } from 'vue-carousel';

export default {
    name:"ProductList",
    
    components: {
    Carousel,
    Slide,
    
  },

  firestore () {
        return {
        // Collection
        
        products: db.collection('products')
        
                }
},

methods: {
    getImage(images){
        /* console.log(images[0]); */
        return images[0]
    }
},
}
</script>


<style scoped>

</style>
