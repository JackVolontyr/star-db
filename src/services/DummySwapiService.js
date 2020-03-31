import noImage from './noimage.png';

export default class DummySwapiService {
  _people = [{
    id: 0,
    name: 'Bilbo Baggins [TEST DATA]',
    gender: 'male',
    birthYear: 'long ago',
    eyeColor: 'dark brown'
  }, {
    id: 1,
    name: 'Frodo Baggins [TEST DATA]',
    gender: 'male',
    birthYear: 'long ago',
    eyeColor: 'dark brown'
  }];

  _planets = [{
    id: 0,
    name: 'Earth [TEST DATA]',
    population: '7.530.000.000',
    rotationPeriod: '23 hours 56 seconds',
    diameter: '12.742 km'
  }, {
    id: 1,
    name: 'Venus [TEST DATA]',
    population: 'not known',
    rotationPeriod: '243 days',
    diameter: '12.104 km'
  }];

  _starships = [{
    id: 1,
    name: 'USS Enterprise [TEST DATA]',
    model: 'NCC-1701-C',
    manufacturer: 'Northrop Grumman Shipbuilding',
    costInCredits: 'not known',
    length: 'approx 300 meters',
    crew: 1000,
    passengers: 50,
    cargoCapacity: 100
  }];

  getAllPeople = async () => this._people
  getPerson = async (id) => this._people[id]

  getAllPlanets = async () => this._planets
  getPlanet = async (id) => this._planets[id]

  getAllStarships = async () => this._starships
  getStarship = async (id) => this._starships[id]

  getImage = (id, imageString) => `https://placeimg.com/${id}00/500/${imageString}`
}
