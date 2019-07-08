import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var cart = window.localStorage.getItem('cart');
export default new Vuex.Store({
    state: {

        cart: cart ? JSON.parse(cart) : [],
    },
    mutations: {


        addToCart(state, cartItem) {
            //the most confusing shit i've ever encountered
            //anyway practise makes perfect, believe that ~Davies Maina:7/6/2019 at 8:13PM :)

            //check for duplicates in the add to cart trolley
            let noDuplicate = state.cart.find(product => product.product_id == cartItem.product_id);

            if (noDuplicate) {
                noDuplicate.productQuantity++;
            } else {
                state.cart.push(cartItem)

            }


            this.commit('saveDataLocally');
        },

        removeItemTrolley(state, cartItem) {



        },

        saveDataLocally(state) {

            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }

});