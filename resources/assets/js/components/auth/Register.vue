<style>
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
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
                            <form @submit.prevent="register">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-toolbar-title class="display-1" style="margin:0px;">Registration</v-toolbar-title>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="Name" name="name" id="name" v-model="name" v-validate="'required|min:10'" hint="At least 10 characters" :error-messages="errors.collect('name')" required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="E-mail" id="email" name="email" v-model="email" v-validate="'required|email'" :error-messages="errors.collect('email')" type="email" required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="password" label="Password" id="password" v-model="password" hint="At least 8 characters" v-validate="'required|min:8'" :error-messages="errors.collect('password')" min="8" type="password" required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="confirmed" label="Confirm Password" id="confirmed" v-model="confirmed" v-validate="'required|confirmed:password'" :error-messages="errors.collect('confirmed')" type="password" >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" style="margin:0px;" color="primary" :loading="loading" @click.native="loader = 'loading'" :disabled="loading">
                                            Sign up
                                        </v-btn>
                                        <v-btn @click="clear">clear</v-btn>
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
    data: () => ({
        loading: false,
        name: '',
        email: '',
        password: '',
        confirmed: '',
    }),
    methods: {
        register () {
            this.loading = true;
            this.$validator.validateAll()
            axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation : this.confirmed
            }
            ).then(res =>{
                if(res.status == 200 && res.data.status == "success"){
                    this.$router.push('/')
                }
            })
            .catch( err => {
                if (err.response) {
                    if(err.response.status == 422){
                        this.loading = false;
                    }
                }
            });
        },
        clear () {
            this.name = ''
            this.email = ''
            this.password = ''
            this.confirmed = ''
            this.$validator.reset()
        }
    },
}
</script>