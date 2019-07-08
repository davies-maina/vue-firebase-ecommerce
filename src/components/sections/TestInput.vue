<template>
    <div class="container">

        <div class="form-group">
                
                <input type="text" v-model="product.name" class="form-control" id="name" placeholder="product name">
         </div>

         <div class="form-group">
                
                <input type="text" v-model="product.price" class="form-control" id="name" placeholder="product price">
         </div>
         <div class="form-group">
                
                <button class="btn btn-primary" @click="saveData">Save</button>
         </div>


         <h4>Products</h4>
             <hr>
             <table class="table">
  <thead>
    <tr>
      
      <th scope="col">product</th>
      <th scope="col">price</th>
      <th scope="col">Modify</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products">
      
      <td>{{product.data().name}}</td>
      <td>{{product.data().price}}</td>
      <td>
          <button class="btn btn-primary mx-2" @click="editProduct(product)"  data-toggle="modal" data-target="#edit">Edit</button>
          
           <button class="btn btn-danger mx-2" @click="deleteProduct(product.id)">Delete</button>
          </td>
      
    </tr>
    
  </tbody>
</table>

<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editLabel">Edit product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
                
                <input type="text" v-model="product.name" class="form-control" id="name" placeholder="product name">
         </div>

         <div class="form-group">
                
                <input type="text" v-model="product.price" class="form-control" id="name" placeholder="product price">
         </div>
         

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script>
import {fb,db} from '../../firebase'
export default {
    created() {
        this.loadData();
    },
    data() {
        return {
            products:[],
            product:{
                name:'',
                price:''
            },
            activeItem:''
        }
    },
    methods: {
        //check for updates in the collection
        watchy(){
            db.collection("products")
    .onSnapshot((querySnapshot)=> {
       this.products = [];
        querySnapshot.forEach((doc)=> {
            this.products.push(doc);
        });
        
    });

        },
        updateProduct(){
            db.collection("products").doc(this.activeItem).update(this.product)
            .then(()=>{
                $('#edit').modal('hide');
                this.watchy();
                console.log('success')
            })
            .catch((error)=>{
                console.log(error)
            })

        },

        editProduct(product){
            this.product=product.data();
            this.activeItem=product.id
        },

        deleteProduct(doc){
            if (confirm('are you sure')) {
                db.collection("products").doc(doc).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
            }
        },
        loadData(){
            db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=> {
        // doc.data() is never undefined for query doc snapshots
        this.products.push(doc);
    });
});
        },
        saveData(){

            db.collection("products").add(this.product)
.then((docRef) =>{
    console.log("Document written with ID: ", docRef.id);
    this.loadData();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

        }
    },
}
</script>
