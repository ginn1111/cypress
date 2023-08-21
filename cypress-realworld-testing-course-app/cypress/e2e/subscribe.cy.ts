describe("Newsletter Subscribe Form", () => {
  beforeEach(() => cy.visit("http://localhost:3000"))

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("vanthuanjw@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message")
      .should("exist")
      .contains("vanthuanjw@gmail.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it.only("does NOT allow an exist email address", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
  })
})
