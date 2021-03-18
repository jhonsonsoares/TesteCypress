/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })
  
    it('.type() - type into a DOM element', () => {
        // Clicking on Widget Menu Item
        cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
 
        //Verify number of items present under the Widget Tab
        cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);

        cy.writeFile('C:/temp/teste.txt', 'testando', {flag: 'a+'});
    })
  })
  
