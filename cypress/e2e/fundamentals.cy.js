describe("Fundamentals tets", () => {
  beforeEach(()=>{
    cy.visit("fundamentals");
  })
  // it("contain correct header text", () => {
  //   // cy.get('[data-test="fundamentals-header"]').contains(
  //   //   /Testing Fundamentals/i
  //   // );
  //   cy.get('[data-test="fundamentals-header"]').should('contain.text',"Testing FundamentalsF")
  // });
  // it("accordion works", () => {
  //   cy.contains(/Your tests will exist in a describe block./i).should("not.be.visible")
  // cy.get('[data-test="accordion-1"] div[role="button"]').click()
  //   cy.contains(/Your tests will exist in a describe block./i).should("be.visible")
  //   cy.get('[data-test="accordion-1"] div[role="button"]').click()
  //   cy.contains(/Your tests will exist in a describe block/i).should("not.be.visible")
  // });
});
