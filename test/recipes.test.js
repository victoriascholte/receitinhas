const Recipe = require("../src/models/recipeModel");

describe("Model test", () => {
  const recipe = new Recipe({
    id: " 5 ",
    title: "Bolo de Chocolate",
    ingredients: ["Farinha de Trigo"],
    categories: ["Doces"],
    preparation: "15 min no forno",
    age: "A partir de 2 anos",
  });

  it("Test title", () => {
    expect(recipe.title).toBe("Bolo de Chocolate");
  });
  it("Test ingredients", () => {
    expect(recipe.ingredients).toStrictEqual(["Farinha de Trigo"]);
  });
  it("Test categories", () => {
    expect(recipe.categories).toStrictEqual(["Doces"]);
  });
  it("Test preparation", () => {
    expect(recipe.preparation).toBe("15 min no forno");
  });
  it("New recipe in database", () => {
    recipe.save().then((dados) => {
      expect(dados.title).toBe(" ");
    });
  });
});