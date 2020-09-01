import { cyan } from "color-name";

describe('Validate liveIntent Website', () => {
    it('Navigate to the liveIntent webpage and validate Get Started button is displayed', () => {
        cy.visit('https://liveintent.com/');
        cy.get('a[class*="white-border-btn"]').should('be.visible');
    });
    it('Click on the Get Started button and validate the navigation', () => {
        cy.get('a[class*="white-border-btn"]').click();
        cy.url().should('eq', 'https://www.liveintent.com/get-in-touch/');
        cy.get('button[class="mktoButton"]').should('be.visible');
    });
});
