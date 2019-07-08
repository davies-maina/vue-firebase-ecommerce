


<template>
   <div class="container">

     <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar"  class="btn btn-sm btn-dark" href="#" @click="closeMenu">
            <i class="fa fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Vue Shop</a>
                    <div id="close-sidebar" @click="closeMenu" >
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="../assets/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">
                            <strong>{{email}}</strong>
                        </span>
                        <span class="user-role"></span>
                        <!-- <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span></span>
                        </span> -->
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>

                        <li>
                            <router-link to="/admin/insights">
                                <i class="fa fa-line-chart"></i>
                                <span>Insights</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <i class="fa fa-amazon"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/admin/profile">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
       
        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
</div>

   </div>
</template>
<script>
import {fb} from '../firebase'

export default {
    name:"Admin",
    data() {
        return {
            name:'',
            email:''
        }
    },
    

    created() {
        
        var user=fb.auth().currentUser;
        this.email=user.email;
        this.name=user.name
    },
  
    methods: {

        closeMenu(){
        $(".page-wrapper").toggleClass("toggled");
        },
        
        logout(){

            fb.auth().signOut()
                .then(()=>{

                    this.$router.replace('/');
                })

                .catch(()=>{


                })

        }
    },
}
</script>
