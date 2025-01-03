"use strict"; 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const viewedFilms = prompt('Один из последних просмотренных фильмов?', '').trim(), // метод trim() удаляет лишние пробелы
              estimationFilms = prompt('На сколько оцените его?', '');
    
        if (viewedFilms != null && estimationFilms != null && viewedFilms != '' && estimationFilms != '' && viewedFilms.length < 50) {
            personalMovieDB.movies[viewedFilms] = estimationFilms;
            console.log('done');
        } else  {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();