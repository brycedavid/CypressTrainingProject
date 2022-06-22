import attributes from "../fixtures/keys.json";

describe("Cypress Training Assignment Part 2", () => {
  it("Verify 'Comments' API Request", () => {
    cy.request("https://jsonplaceholder.cypress.io/comments").then(
      (response) => {
        expect(response.status).to.eq(200);

        let keys = Object.keys(response.body[0]);
        expect(keys[0]).to.eq(attributes.postId);
        expect(keys[1]).to.eq(attributes.id);
        expect(keys[2]).to.eq(attributes.name);
        expect(keys[3]).to.eq(attributes.email);
        expect(keys[4]).to.eq(attributes.body);

        expect(response.body).to.have.length(500);
      }
    );
  });
});
