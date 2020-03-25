const Film = require('./film.js');

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListFilmTitles = function(){
  const filmTitles= this.films.map( film => {
    return film.title;
  });
  return filmTitles;
}

Cinema.prototype.findFilmByTitle = function(title){
  const specificFilm = this.films.filter(film => {
    return film.title === title;
  })
  return specificFilm[0];
}

Cinema.prototype.findFilmsByGenre = function(genre){
  const filmsInGenre = this.films.filter(film => {
    return film.genre === genre;
  })
  return filmsInGenre;
}

Cinema.prototype.checkIfFilmsExistInYear= function(year){
  const filmsInYear = this.films.filter(film => {
    return film.year === year;
  })
  if (filmsInYear.length===0){
    return false;
  } else {
    return true;
  }
}

Cinema.prototype.checkFilmsOverLength = function(length){
  const filmsWithLength = this.films.filter(film => {
    return film.length >= length;
  })
  if (filmsWithLength.length===0){
    return false;
  } else {
    return true;
  }
}

Cinema.prototype.calculateTotalLength= function(){
  const lengths= this.films.map(film => {
    return film.length;
  });
  const totalLength = lengths.reduce((runningTotal, number) => {
    return runningTotal + number;
  }, 0);
  return totalLength;
}

Cinema.prototype.filterFilmsByProperty = function(property, value){
  const films = this.films.filter(film => {
    for(var prop in film){
      if(prop===property){
        if(Object.values(film).indexOf(value) > -1){
          return film;
        }
      }
    }
  })
  return films;
}

// bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
// dunkirk = new Film('Dunkirk', 'history', 2017, 96);
// blackPanther = new Film('Black Panther', 'action', 2018, 134);
// trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

// films = [bladeRunner, dunkirk, blackPanther, trainspotting];
// cinema = new Cinema(films);

// cinema.filterFilmsByProperty('year', 2017)

module.exports = Cinema;
