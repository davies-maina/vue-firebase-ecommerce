<template>
    <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Profile settings</h3>
                    
                 <p>
                   Change your profile settings here
                 </p>
              </div>
        
            </div>
          </div>


          <div class="profile-content">

          <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

            <li class="nav-item">
              <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
            </li>

            <li class="nav-item">
              <a class="nav-link"  id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Account settings</a>
            </li>
           
          </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div class="container">
                      <div class="row">
                        
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" name="" placeholder="Full name" class="form-control" v-model="profile.name">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  placeholder="Phone" class="form-control" v-model="profile.phone">
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="text"  placeholder="Address" class="form-control" v-model="profile.address">
                          </div>
                        </div>

                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"   placeholder="Postcode" class="form-control" v-model="profile.postcode">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit"  value="Save Changes" class="btn btn-primary w-100" @click="updateProfile">
                          </div>
                        </div>

                      </div>
                  </div>
                
                </div>

                <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">
                        <div class="col-md-">
                            <div class="alert alert-info">
                              Please use the Reset password email button for reseting the password. The form doens't work currently
                            </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  placeholder="User name" class="form-control" v-model="account.name">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"   placeholder="Email address" class="form-control" v-model="account.email">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"   placeholder="New password" class="form-control" v-model="account.password">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"   placeholder="Confirm password" class="form-control" v-model="account.confirmPassword">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="file" class="form-control" @change="uploadImage">
                           </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

            </div>
            
          </div>

</div>


</template>


<script>
import {fb,db} from '../firebase';
export default {
    /* name:'Profile', */
    name:"profile",
    data() {
        return {
            profile:{

                name:'',
                phone:'',
                address:'',
                postcode:'',
            },

            account:{
                    name:'',
                    email:'',
                    password:'',
                    confirmPassword:''


            }
        }
    },

    firestore () {

        const user=fb.auth().currentUser;
        return {
        // Collection
        profile: db.collection('profiles').doc(user.uid),
        
                }},

    methods: {

        uploadImage(){


        },
        resetPassword(){
            const auth = fb.auth();
            /* var emailAddress = "user@example.com"; */

            auth.sendPasswordResetEmail(auth.currentUser.email).then(()=> {
  Toast.fire({
  type: 'success',
  title: 'Email sent'
});
}).catch(function(error) {
  // An error happened.
});


        },
        updateProfile(){

            this.$firestore.profile.update(this.profile);

        }
    },
}
</script>
