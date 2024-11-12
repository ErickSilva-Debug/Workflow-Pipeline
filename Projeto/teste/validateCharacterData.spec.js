
const request = require("supertest");
const app = require("../App");

describe("Teste para validar dados de Luke Skywalker", () => {
  test("GET /api/characters/Luke%20Skywalker - Deve conter dados corretos de Luke Skywalker", async () => {
    const response = await request(app).get("/api/characters/Luke%20Skywalker");
    expect(response.body).toMatchObject({
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    });
  });
});
