import VueRouter from 'vue-router';

let routes = [

	{
		path: '/login',
		component: require('./components/auth/Login')
	},
	{
		path: '/register',
		component: require('./components/auth/Register')
	},
	{
		path: '/',
		component: require('./components/students/Index'),
		meta: { requiresAuth: true }
	},
	{
		path: '/student/add',
		component: require('./components/students/Add'),
		meta: { requiresAuth: true }
	},
	{
		path: '/student/edit/:student_id',
		component: require('./components/students/Edit'),
		meta: { requiresAuth: true }
	}


];

let router = new VueRouter({
	routes: routes,
    history: true,
    mode: 'history',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!Vue.auth.isAuthenticated()) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router;