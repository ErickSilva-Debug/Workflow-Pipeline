
const request = require("supertest");
const app = require("../App");

describe("Teste para obter todos os personagens", () => {
  test("GET /api/characters - Deve retornar todos os personagens", async () => {
    const response = await request(app).get("/api/characters");
    expect(response.body.length).toBeGreaterThan(0);
  });
});
