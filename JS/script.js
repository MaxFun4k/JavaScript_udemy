
"use strict";

const number0Films = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generas: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log(personalMoviDB);
