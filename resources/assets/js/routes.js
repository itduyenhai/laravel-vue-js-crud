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
		component: require('./components/students/Index')
	},
	{
		path: '/student/add',
		component: require('./components/students/Add'),
		meta: { requiresAuth: true }
	},
	{
		path: '/student/edit/:student_id',
		component: require('./components/students/Edit')
	}


];

let router = new VueRouter({
	routes: routes,
    history: true,
    mode: 'history',
    linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

export default router;