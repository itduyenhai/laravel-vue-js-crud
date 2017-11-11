<?php

use Faker\Generator as Faker;

$factory->define(App\Student::class, function (Faker $faker) {
    return [
        'user_id' => factory(App\User::class)->create()->id,
        'full_name' => $faker->name,
        'email'=> $faker->unique()->safeEmail,
        'father_name' => $faker->name,
        'address' => $faker->address,
        'dob'=> $faker->date
    ];
});
