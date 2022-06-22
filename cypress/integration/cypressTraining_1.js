import urls from "../fixtures/urls.json";

describe("Cypress Training Assignment Part 1", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigate to Kitchen Sink Page", () => {
    // cy.visit(urls.kitchenSinkUrl);
    cy.url().should("eq", urls.kitchenSinkUrl);

    cy.get(".home-list").first().first().click();
  });

  it("Verify 'Querying' Page Links", { browser: "firefox" }, () => {
    cy.get(".home-list li:first a:first").click();
    cy.url().should("eq", urls.queryingUrl);

    // Verify cy.get() link
    cy.get("#get a").should("be.visible");
    cy.get("#get a")
      .click()
      .then(() => {
        cy.url().should("eq", urls.getUrl);
        cy.go("back");
      });

    // Verify cy.contains() link
    cy.get("#contains a").should("be.visible");
    cy.get("#contains a")
      .click()
      .then(() => {
        cy.url().should("eq", urls.containsUrl);
        cy.go("back");
      });

    // Verify .within() link
    cy.get("#within a").should("be.visible");
    cy.get("#within a")
      .click()
      .then(() => {
        cy.url().should("eq", urls.withinUrl);
        cy.go("back");
      });

    // Verify cy.root() link
    cy.get("#root a").should("be.visible");
    cy.get("#root a")
      .click()
      .then(() => {
        cy.url().should("eq", urls.rootsUrl);
        cy.go("back");
      });
  });

  it("Verify 'Window' page links", { browser: "edge" }, () => {
    // cy.visit(urls.kitchenSinkUrl);

    cy.get(".home-list > li:nth-of-type(4) > a")
      .click()
      .then(() => {
        cy.url().should("eq", urls.windowUrl);
      });

    cy.get("#window > .row > div > h4 > a", { timeout: 10000 }).then(
      ($links) => {
        expect($links).to.have.lengthOf(3);
      }
    );
  });

  it("Verify Cypress Cookies", () => {
    cy.getCookies().should("be.empty");

    cy.setCookie("token", "asdfjkl;");
    cy.getCookie("token").should("have.property", "value", "asdfjkl;");

    cy.clearCookie("token").should("be.null");
    cy.getCookie("token").should("be.null");
  });
});
