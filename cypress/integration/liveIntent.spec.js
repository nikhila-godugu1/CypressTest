import { cyan } from "color-name";

describe('Validate liveIntent Website', () => {
    it('Navigate to the liveIntent webpage', () => {
        cy.visit('https://liveintent.com/');
    });
    it('Validate Get Started button is on the page', () => {
        cy.get('a[class*="white-border-btn"]').should('be.visible');
    });
    it('Click on the Get Started button', () => {
        cy.get('a[class*="white-border-btn"]').click();
    });
    it('Validate the URL to verify the navigation', () => {
        cy.url().should('eq', 'https://www.liveintent.com/get-in-touch/');
    });
    it('Validate Get Started button is on the page', () => {
        cy.get('button[class="mktoButton"]').should('be.visible');
    });
});