
"use strict";

let number0Films;

function start() {
    number0Films = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (number0Films == '' || number0Films == null || isNaN(number0Films)){
        number0Films = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

const personalMoviDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generas: [],
    privat: false
};

function detectPersonalLevel(){
    if (personalMoviDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMoviDB.count < 30){
        alert("Вы классический зритель");
    } else if (personalMoviDB.count > 30){
        alert("Вы киноман");
    } else{
       alert("Произошла ошибка");
    }
    
}

// detectPersonalLevel();

function remberMyFilms(){
    for (let i = 0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
              personalMoviDB.movies[a] = b;
    
              if (a != null && b != null && a != "" && b != "" && a.length <50 && b.length <50){
                 personalMoviDB.movies[a] = b;
                 alert("Ok");
              } else {
                  alert("Noup");
                  i = 0;
              }
    }
}

// remberMyFilms();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMoviDB);
    }
}

showMyDB(personalMoviDB.privat);

function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        personalMoviDB.generas[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();