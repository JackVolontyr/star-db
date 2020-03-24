export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw new Error(`could not fetch ${url} - ${res.status}`);
    return await res.json();
  };

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

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results.map(this._prepareDataPerson);
  };

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
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

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results.map(this._prepareDataPlanet);
  };

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._prepareDataPlanet(planet);
  };

  // Starship(s)
  _prepareDataStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredit: starship.cost_in_credit,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results.map(this._prepareDataStarship);
  };

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._prepareDataStarship(starship);
  };
}
