
const request = require("supertest");
const app = require("../App");

describe("API Star Wars", () => {
  test("GET /api/characters - Deve retornar status 200", async () => {
    const response = await request(app).get("/api/characters");
    expect(response.statusCode).toBe(200);
  });

  test("GET /api/planets - Deve retornar status 200", async () => {
    const response = await request(app).get("/api/planets");
    expect(response.statusCode).toBe(200);
  });
});

