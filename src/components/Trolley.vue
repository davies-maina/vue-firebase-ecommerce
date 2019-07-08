<template>
    <div class="container">

        <div class="modal fade" id="shoppingModal" tabindex="-1" role="dialog" aria-labelledby="shoppingModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="shoppingModalLabel">Your trolley</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       

         <li v-for="item in this.$store.state.cart" class="media">

           <img :src="item.productimage" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.productName}}
                            <span class="float-right"><i class="fa fa-remove"></i></span>
                          <!-- <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span> -->
                        </h5>
                        <p class="mt-0">{{item.productPrice | currency('ksh', 0, { spaceBetweenAmountAndSymbol: true })}}</p>
                        <p class="mt-0">Quantity : {{item.productQuantity }}</p>
</div>

         </li>

       </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" >Resume</button>
        <button type="button" class="btn btn-primary" @click="checkOut">Checkout</button>
      </div>
    </div>
  </div>
</div>

    </div>
</template>


<script>
export default {
    name:"trolley",

    methods: {
        checkOut(){
            $('#shoppingModal').modal('hide');
            this.$router.push('/checkout')
        }
    },
}
</script>
