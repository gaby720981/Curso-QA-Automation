describe('Métodos de Cypress', () => {
    beforeEach(() => {
      cy.visit('https://automationintesting.online/');
    });
  
    it('Verificar que la información del hotel esté presente', () => {
        cy.get('p').contains('Shady Meadows B&B');
        cy.get('p').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
        cy.get('p').contains('012345678901');
        cy.get('p').contains('fake@fakeemail.com');
    });

    it('Verificar de que haya al menos una imagen visible.', () => {
        cy.get('.hotel-logoUrl').should('be.visible')
        cy.get('.img-responsive.hotel-img').should('be.visible')
    });
    
    it('Confirma que el texto de la descripción del hotel sea el esperado', () => {
        cy.get('p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
    });

 
   
    

  });
  