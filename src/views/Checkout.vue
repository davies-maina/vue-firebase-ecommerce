<template>
    <div class="container">
        <nav-bar></nav-bar>
       <div class="container mt-5 pt-5">
      <div class="row">
       <div class="col-md-9">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>

         <li v-for="item in this.$store.state.cart" class="media">

           <img :src="item.productimage" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.productName}}

                          <!-- <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span> -->
                        </h5>
                        <p class="mt-0">{{item.productPrice | currency('ksh', 0, { spaceBetweenAmountAndSymbol: true })}}</p>
                        <p class="mt-0">Quantity : {{item.productQuantity }}</p>

                      </div>
         </li>

       </ul>
                </div>
                <div class="col-md-3">
                    Total Price
        </div>
        </div>
    </div>
</div>
</template>
