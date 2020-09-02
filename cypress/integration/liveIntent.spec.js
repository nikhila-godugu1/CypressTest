import { cyan } from "color-name";

describe('Validate liveIntent Website', () => {
    it('Navigate to the LiveIntent webpage and validate Get Started button presence', () => {
        cy.visit('https://liveintent.com/');
        cy.get('a[class*="white-border-btn"]')
          .should('be.visible')
          .click();
    });
    it('Validate the URL and Contact Us button presence', () => {
        cy.get('#FirstName',{timeout:30000}).should('have.length', 1)
        cy.url().should('eq', 'https://www.liveintent.com/get-in-touch/');
        cy.get('button[class="mktoButton"]').should('be.visible');
    });
});
