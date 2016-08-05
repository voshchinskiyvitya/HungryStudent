<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 05.08.2016
 * Time: 12:29
 */


$recipe1 = (object) ['title' => 'First',
                     'img' => 'http://smakuemo.net/sites/default/files/recept_salat_lisova_taemnicya.jpg',
                     'description' => 'blalvalv'];

$recipe2 = (object) ['title' => 'Second',
                     'img' => 'http://idna.com.ua/upload/images/6476_900.jpg',
                     'description' => 'blalvalv'];

$recipe3 = (object) ['title' => 'Second',
                     'img' => 'http://idna.com.ua/upload/images/6476_900.jpg',
                     'description' => 'blalvasfvdfvdf      sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrr    sdfgvvvvvvvvvvvf fdrrrrrrrrrrrrrrd frrrrrrrrrr fffffffffffffffffv      sdfgvvvvvvvvvvvf fdrrrrrrrrrrrrrrd frrrrrrrrrr fffffffffffffffffvvlv'];

$recipe4 = (object) ['title' => 'Thirdsadd',
                     'img' => 'http://smakuemo.net/sites/default/files/recept_salat_lisova_taemnicya.jpg',
                     'description' => 'blalvalv'];

$arr = array ('0' => $recipe1,
              '1' => $recipe2,
              '2' => $recipe3,
              '3' => $recipe4);

echo json_encode($arr);

?>