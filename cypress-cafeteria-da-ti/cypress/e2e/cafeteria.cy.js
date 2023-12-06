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

        cy.get('nav')
        cy.contains("Home")
        cy.get('h3 > a')
        cy.contains("Carrinho")
        cy.get('[href="/page/carrinho"]')
        cy.contains("Cadastro")
        cy.get('ul > :nth-child(4) > a')

        cy.get(':nth-child(1) > img')
        cy.get(':nth-child(2) > img')
        cy.get(':nth-child(3) > img')
        cy.get(':nth-child(4) > img')
        cy.get(':nth-child(5) > img')
        cy.get(':nth-child(6) > img')
        cy.get(':nth-child(7) > img')
        cy.get(':nth-child(8) > img')

    });

    
  });
  