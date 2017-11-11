# Laravel 5.5 & Vue JS + Vuetify Student Application CRUD Example
### Install
1. Open your terminal or gitbash.
2. Clone this repo, copy and paste below command in your terminal or gitbash:
`git clone https://github.com/muhammadshoaibwardak/laravel-vue-js-crud.git`
3. Once finished, change directory to laravel-vue-js-crud:
`cd laravel-vue-js-crud`
4. Install all laravel dependencies:
`composer install`
5.Install npm dependencies, make sure you have [nodejs](https://nodejs.org/en/download/) installed and run this command:
`npm install`
6. Copy .env file:
`cp .env.example .env`
7. Open .env file and Modify Database credential values with your database config.
8. Generate application key:
`php artisan key:generate`
9.Generate jwt secret key, if asked for overriding type yes
`php artisan jwt:secret`
10. Run migration table and seed database with dummy data (default for user is password):
`php artisan migrate --seed`
11. Serve the app:
`php artisan serve`
12. Open `http://localhost:8000/` in your web browser.
