
"use strict";

const number0Films = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generas: [],
    privat: false
};

if (personalMoviDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (personalMoviDB.count < 30){
    alert("Вы классический зритель");
} else if (personalMoviDB.count > 30){
    alert("Вы киноман");
} else{
   alert("Произошла ошибка");
}

// for (let i = 0; i<2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//           personalMoviDB.movies[a] = b;

//           if (a != null && b != null && a != "" && b != "" && a.length <50 && b.length <50){
//              personalMoviDB.movies[a] = b;
//           } else {
//               i = 0;
//           }
// }

let num = 0;

while (num < 2){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
          personalMoviDB.movies[a] = b;

          if (a != null && b != null && a != "" && b != "" && a.length <50 && b.length <50){
             personalMoviDB.movies[a] = b;
             num++;
          } else {
              num = 0;
          }
}
