
const request = require("supertest");
const app = require("../App");

describe("Teste para quando planeta não existe", () => {
  test("GET /api/planets/NonExistentPlanet - Deve retornar status 404", async () => {
    const response = await request(app).get("/api/planets/NonExistentPlanet");
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Planet not found");
  });
});
