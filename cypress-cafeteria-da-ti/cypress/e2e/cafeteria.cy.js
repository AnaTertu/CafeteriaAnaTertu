describe('Cafeteria da TI - Teste de Seleção de Café', () => {
    beforeEach(() => {
      // Iniciar o Cypress e acessar a página inicial da cafeteria
      cy.intercept('GET', 'https://cafeteria-da-ti-anatertu.netlify.app/**').as('getCall');
      cy.visit('https://cafeteria-da-ti-anatertu.netlify.app').wait(2000);
    });

    it('Deve exibir título', () => {
        // Verificar se a página contém menu
        cy.get('header').should('be.visible');
        cy.get('h1');
        // Verificar se a página contém nome Cafeteria da TI
        cy.contains("Cafeteria da TI")

        cy.get(':nth-child(1) > #addCarrinho')
    });

    
  });
  