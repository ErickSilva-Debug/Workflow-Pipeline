
const request = require("supertest");
const app = require("../App");

describe("Teste para quando personagem não existe", () => {
  test("GET /api/characters/NonExistentCharacter - Deve retornar status 404", async () => {
    const response = await request(app).get("/api/characters/NonExistentCharacter");
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Character not found");
  });
});
