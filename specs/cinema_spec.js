const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const actualFilmTitles = cinema.getListFilmTitles();
    const expectedFilmTitles= films.map( film => {
      return film.title;
    });
    assert.deepStrictEqual(actualFilmTitles, expectedFilmTitles);
  });

  it('should be able to find a film by title', function(){
    const foundFilm= cinema.findFilmByTitle('Blade Runner 2049');
    assert.strictEqual(foundFilm, bladeRunner);
  });

  it('should be able to filter films by genre', function(){
    const dramaFilms = cinema.findFilmsByGenre('drama');
    const expectedDramaFilms= [moonlight, trainspotting];
    assert.deepStrictEqual(dramaFilms, expectedDramaFilms);
  });

  it('should be able to check whether there are some films from a particular year', function(){
    const filmsFrom2017= cinema.checkIfFilmsExistInYear(2017);
    assert.strictEqual(filmsFrom2017, true);
  });

  it('should be able to check whether there are no films from a particular year', function(){
    const filmsFrom1917= cinema.checkIfFilmsExistInYear(1917);
    assert.strictEqual(filmsFrom1917, false);
  });


  it('should be able to check whether all films are over a particular length', function(){
    const filmsOver110 = cinema.checkFilmsOverLength(110);
    assert.strictEqual(filmsOver110, true);
  });

  it('should be able to calculate total running time of all films', function(){
    const totalFilmsTime = cinema.calculateTotalLength();
    assert.strictEqual(totalFilmsTime, 622)
  });

  it('Cinema should be able to filter films by year', function(){
    const filmsIn2017 = cinema.filterFilmsByProperty('year', 2017);
    const expectedFilmsIn2017= [bladeRunner, dunkirk, trainspotting];
    assert.deepStrictEqual(filmsIn2017, expectedFilmsIn2017);
  });

});
