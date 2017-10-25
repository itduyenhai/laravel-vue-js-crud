<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'HomeController@index')->name('home');

Route::get('/register', function () {
    return view('home');
});
Route::get('/login', function () {
    return view('home');
});
Route::get('/student/add', function () {
    return view('home');
});
Route::get('/student/edit/{id}', function () {
    return view('home');
});


// Route::auth();

Route::get('/about', 'HomeController@index')->name('home');

Route::group(['prefix' => 'api'], function() {
    
    Route::post('register','Auth\RegisterController@register');

    Route::resource('student', 'StudentController');
    
    // Route::post('/student/add','StudentController@store');
    // Route::get('/student/edit/{id}','StudentController@edit');
    // Route::post('/student/update/{id}','StudentController@update');



});

