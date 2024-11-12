
const request = require("supertest");
const app = require("../App");

describe("Teste para contar planetas", () => {
  test("GET /api/planets - Deve retornar pelo menos um planeta", async () => {
    const response = await request(app).get("/api/planets");
    expect(response.body.length).toBe(1); // Mude conforme necessário
  });
});
