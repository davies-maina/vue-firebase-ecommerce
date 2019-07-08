<template>
    
    <div class="container">

        <button type="button" class="btn btn-outline-info p-3 rounded-0 cartbutton position-absolute text-uppercase" @click="addToCart">
                                <span>Add to cart</span>
                                
                            </button>

    </div>
</template>

<script>
export default {
    name:"add-to-cart",
    props:{
        name:String,
        price:String,
        productId:String,
        productimage: String,
        
    },

    data() {
        return {

            cartItem:{
                productName:this.name,
            productPrice:this.price,
            product_id:this.productId,
            productimage: this.productimage,

            productQuantity:1
            }
        }
    },

    methods: {
        addToCart(){
            $('#shoppingModal').modal('show')
            this.$store.commit('addToCart',this.cartItem)
        }
    },
}
</script>
