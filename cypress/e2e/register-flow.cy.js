describe('Register Flow', () => {

    it('Enter from the detail', () => {
        // Arrange
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        cy.get('#input-firstname').type('Uday');
        cy.get('#input-lastname').type('QA');
        cy.get('#input-telephone').type('8871938073');
        cy.get('#input-email').type('mishrauday138@gmail.com');
        cy.get('#input-password').type('password123');
        cy.get('#input-confirm').type('password123');
        cy.get('input[type = radio]').eq(1).check();
        cy.get("input[type ='checkbox']").check();
        cy.get('input.btn-primary').click();
    
    
    
    })
    
});


