
const request = require("supertest");
const app = require("../App");

describe("Teste para validar dados de Yavin IV", () => {
  test("GET /api/planets/Yavin%20IV - Deve conter dados corretos de Yavin IV", async () => {
    const response = await request(app).get("/api/planets/Yavin%20IV");
    expect(response.body).toMatchObject({
      name: "Yavin IV"
    });
  });
});
