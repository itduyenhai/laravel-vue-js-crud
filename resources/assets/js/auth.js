export default function(Vue) {
    Vue.auth = {
        setToken(token) {
            localStorage.setItem('user_token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        },
        destroyToken() {
            localStorage.removeItem('user_token');
            delete axios.defaults.headers.common['Authorization'];
        },
        isAuthenticated() {
            if (localStorage.getItem('user_token')) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user_token');
                return true;
            }
            return false;
        }
    }
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth;
            }
        }
    });
}