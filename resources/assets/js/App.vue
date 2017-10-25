<template>
    <v-app>
        <v-toolbar app dark class="primary">
            <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Students Managment</router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" >
                <v-btn flat to="/student/add" v-show="isLoggedin()">Add Student</v-btn>
                <v-btn flat to="/login" v-show="!isLoggedin()">Login</v-btn>
                <v-btn flat to="/register" v-show="!isLoggedin()">Register</v-btn>
                <v-btn flat @click="logout" v-show="isLoggedin()">Logout</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>
            <v-content>
                    <router-view></router-view>
            </v-content>
        </main>
        <v-footer class="pa-3" >
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$auth.destroyToken();
                this.$router.push('/login');
            },
            isLoggedin(){
                return Vue.auth.isAuthenticated();
            }
        }
    }
</script>