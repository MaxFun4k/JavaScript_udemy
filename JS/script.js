
"use strict";

const personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    generas: [],
    privat: false,
    start: function() {
        personalMoviDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMoviDB.count == '' || personalMoviDB.count == null || isNaN(personalMoviDB.count)) {
            personalMoviDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMoviDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMoviDB.count > 30) {
            alert("Вы киноман");
        } else{
           alert("Произошла ошибка");
        }
    },
    remberMyFilms: function() {
        for (let i = 0; i<2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцените его?", "");
                  personalMoviDB.movies[a] = b;
        
                  if (a != null && b != null && a != "" && b != "" && a.length <50 && b.length <50) {
                     personalMoviDB.movies[a] = b;
                     alert("Ok");
                  } else {
                      alert("Noup");
                      i--;
                  }
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMoviDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMoviDB.privat) {
            personalMoviDB.privat = false;
        } else {
            personalMoviDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);
            if (genre == null && genre == '') {
                i--;
                console.log('No No No');
            } else {
                personalMoviDB.generas[i-1] = genre;
            }
        }
        personalMoviDB.generas.forEach((item, i) => {
            console.log(`Любимый жанр ${i++} - это ${item}`);
        });
    },
};
