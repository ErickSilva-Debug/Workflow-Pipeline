
const request = require("supertest");
const app = require("../App");

describe("Teste para obter todos os planetas", () => {
  test("GET /api/planets - Deve retornar todos os planetas", async () => {
    const response = await request(app).get("/api/planets");
    expect(response.body.length).toBeGreaterThan(0);
  });
});
