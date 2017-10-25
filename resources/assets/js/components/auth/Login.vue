<template>
    <v-container>
        <v-layout row >
            <v-flex xs12 sm6 offset-sm3>

            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="submit">
                                <v-alert :color="error" dismissible v-model="alert">{{ alert_msg }}
                                </v-alert>
                                 <v-layout row>
                                    <v-flex xs12>
                                        <v-toolbar-title class="display-1" style="margin:0px;">Login</v-toolbar-title>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="E-mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox
                                        label="Do you agree?"
                                        required
                                        ></v-checkbox>
                                        <v-btn type="submit" class="primary">
                                            Login
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
        	alert_msg: '',
            error: '', 
            valid: true,
            alert: false,
            email: '',
            password: '',
        }
    },
    methods: {
        submit () {
                axios.post('/api/authenticate', {
                    email: this.email,
                    password: this.password,
                }).then(res =>{
                    if(res.status === 200){
                        let token = res.data.access_token;
                        this.$auth.setToken(token);
                        this.$router.push('/')
                    }
                })
                .catch(error => {
                	if(error.response.status === 401){
                		this.alert_msg = 'Unauthorized login.'
                	}else{
                		this.alert_msg = 'Something went wrong.'
                	}
                    this.alert = true;
                });
        },
    }
}
</script>
