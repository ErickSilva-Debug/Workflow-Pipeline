
const request = require("supertest");
const app = require("../App");

describe("Teste para contar personagens", () => {
  test("GET /api/characters - Deve retornar pelo menos um personagem", async () => {
    const response = await request(app).get("/api/characters");
    expect(response.body.length).toBe(1); // Mude conforme necessário
  });
});
