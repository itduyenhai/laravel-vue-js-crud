<?php

use Faker\Generator as Faker;

$factory->define(App\Student::class, function (Faker $faker) {
    return [
        'full_name' => $faker->name,
        'email'=> $faker->unique()->safeEmail,
        'father_name' => $faker->name,
        'address' => $faker->address,
        'dob'=> $faker->date,	
    	'user_id' => rand(10,1)
    ];
});
