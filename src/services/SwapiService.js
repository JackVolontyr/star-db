import noImage from './noimage.png';

export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw new Error(`could not fetch ${url} - ${res.status}`);
    return await res.json();
  };

  getImage = (id, imageString) => {
    return (
      id ? `${ this._imageBase }/${imageString}/${ id }.jpg` : noImage
    );
  }

  // People/Person
  _prepareDataPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }

  getAllPeople = async () => {
    const res = await this._getResource('/people/');
    return res.results.map(this._prepareDataPerson);
  };

  getPerson = async (id) => {
    const person = await this._getResource(`/people/${id}`);
    return this._prepareDataPerson(person);
  };

  // Planet(s)
  _prepareDataPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  getAllPlanets = async () => {
    const res = await this._getResource('/planets/');
    return res.results.map(this._prepareDataPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this._getResource(`/planets/${id}`);
    return this._prepareDataPlanet(planet);
  };

  // Starship(s)
  _prepareDataStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  }

  getAllStarships = async () => {
    const res = await this._getResource('/starships/');
    return res.results.map(this._prepareDataStarship);
  };

  getStarship = async (id) => {
    const starship = await this._getResource(`/starships/${id}`);
    return this._prepareDataStarship(starship);
  };
}
