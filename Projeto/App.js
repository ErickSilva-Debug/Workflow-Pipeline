// app.js
const express = require("express");
const app = express();

// Dados fictícios de personagens e planetas
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/6/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/7/"
    ],
    species: ["https://swapi.dev/api/species/1/"],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/"
  }
];

const planets = [
  {
    name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical",
    gravity: "1 standard",
    terrain: "jungle, rainforests",
    surface_water: "8",
    population: "1000",
    residents: [],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-10T11:37:19.144000Z",
    edited: "2014-12-20T20:58:18.421000Z",
    url: "https://swapi.dev/api/planets/3/"
  }
];

// Configuração das rotas
app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.get("/api/characters/:name", (req, res) => {
  const character = characters.find((c) => c.name.toLowerCase() === req.params.name.toLowerCase());
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ message: "Character not found" });
  }
});

app.get("/api/planets", (req, res) => {
  res.json(planets);
});

app.get("/api/planets/:name", (req, res) => {
  const planet = planets.find((p) => p.name.toLowerCase() === req.params.name.toLowerCase());
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ message: "Planet not found" });
  }
});

module.exports = app; // Exporta a aplicação
