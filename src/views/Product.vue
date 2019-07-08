<template>
    <div class="container">

        

         <h4 class="d-inline">Products</h4>
         <button class="btn btn-primary float-right" @click="addNew">Add Product</button>
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
      
      <td>{{product.name}}</td>
      <td>{{product.price}}</td>
      <td>{{product.price}}</td>
      <td>
          <button class="btn btn-primary mx-2" @click="editProduct(product)"  data-toggle="modal" data-target="#product">Edit</button>
          
           <button class="btn btn-danger mx-2" @click="deleteProduct(product)">Delete</button>
          </td>
      
    </tr>
    
  </tbody>
</table>

<div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editLabel" v-if="modal=='editproduct'">Edit product</h5>
        <h5 class="modal-title" id="editLabel" v-if="modal=='addnewproduct'">Add product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <div class="row">

              <div class="col-md-8">
                  <div class="form-group">
                      <label for="product_name">Product name</label>
                    <input v-model="product.name" class="form-control" id="name" placeholder="product name">
                </div>

                  <div class="form-group">
                      <label for="product_description">Product desc.</label>
                      <vue-editor v-model="product.description"></vue-editor>
                </div>

         
         

      

              </div>

              <div class="col-md-4">

                  <h4 class="display-6">Product Details</h4>
                        <hr>

                        <div class="form-group">
                            <label for="product_price">Product price</label>
                      <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                        </div>

                        <div class="form-group d-inline">
                            <label for="product_tag">Product tags</label>
                            <span class="fa fa-info-circle mx-2" data-toggle="tooltip" data-placement="top" title="If you have multiple tags,separate them using a comma" ></span>
                    <input type="text"  placeholder="Product tags" v-model="tag"  class="form-control" @keyup.188="addTag">
                    
                    <div  class="d-flex">
                        <p v-for="tag in product.tags">
                            <span class="badge badge-info p-1 mx-1">{{tag}}</span>
                        </p>

                    </div>
                    </div>

                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file"  class="form-control" @change="uploadImage">
                </div>

                <div class="form-group d-flex">

                  <div class="mx-1" v-for="image in product.images">
                  
                  <img :src="image" alt="product-images" width="70px">
                  <span class=""><i class="fa fa-trash del" @click="deleteImage(image,index)"></i></span>
                  
                  </div>
                </div>

              </div>

          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addProduct()" v-if="modal=='addnewproduct'">Save Product</button>
        <button type="button" class="btn btn-primary" @click="updateProduct()" v-if="modal=='editproduct'">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script>
import {fb,db} from '../firebase'
import { VueEditor } from "vue2-editor";
export default {
   
    created() {
        
    },
    data() {
        return {
            products:[],
            product:{
                name:'',
                description:'',
                price:'',
                tags:[],
                images:[]
            },
            activeItem:'',
            modal:'',
            tag:''
        }
    },

    components: {
    VueEditor
  },

    firestore () {
        return {
        // Collection
        
        products: db.collection('products'),
        
                }
                
                        


        },
    methods: {

      reset(){
        this.product={
                name:'',
                description:'',
                price:'',
                tags:[],
                images:[]
            }

      },
      deleteImage(img,index){

        let image=fb.storage().refFromURL(img);
        this.product.images.splice(index,1);
        image.delete().then(()=>{

          Toast.fire({
  type: 'success',
  title: 'image removed'
});
        })
        .catch((error)=>{

          Toast.fire({
  type: 'warning',
  title: 'something went wrong'
});
        })

      },

        addTag(){

            /* console.log('pressing comma'); */

            this.product.tags.push(this.tag)//tag outside the product object
            this.tag=''
        },

        updateProduct(){
            
        this.$firestore.products.doc(this.product.id).update(this.product);
         

            Toast.fire({
  type: 'success',
  title: 'updated successfully'
});

$('#product').modal('hide');

        },

        editProduct(product){
            this.modal='editproduct'
            this.product=product;
            this.activeItem=product['.key'];
            $('#product').modal('show');

        },

        deleteProduct(doc){
             Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  width:'30%'
}).then((result) => {
  if (result.value) {

      
      this.$firestore.products.doc(doc.id).delete()

    Toast.fire({
  type: 'success',
  title: 'Deleted successfully'
})
  }
})

        },

        uploadImage(e){
                
            if (e.target.files[0]) {


              let file=e.target.files[0];
                /* console.log(e.target.files[0]); */
                var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
                let uploadTask=storageRef.put(file);


                uploadTask.on('state_changed', (snapshot)=>{
  
 
}, (error) =>{
  // Handle unsuccessful uploads
}, ()=> {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {

    this.product.images.push(downloadURL);
    console.log('File available at', downloadURL);
  });
});
              
            }

        },
        addNew(){
            this.modal='addnewproduct'

            this.reset();
            $('#product').modal('show');
        },
        
        addProduct(){

            this.$firestore.products.add(this.product)
            .then(()=>{
                Toast.fire({
  type: 'success',
  title: 'Added successfully'
})
                $('#product').modal('hide');

            })
            

        }
        
        }
        
}
</script>


<style scoped lang="scss">

.del{

  position: absolute;
  cursor: pointer;
}

</style>
