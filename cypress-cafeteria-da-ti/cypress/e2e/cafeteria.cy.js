describe('Cafeteria da TI - Teste de Seleção de Café', () => {
    beforeEach(() => {
      // Iniciar o Cypress e acessar a página inicial da cafeteria
      cy.intercept('GET', 'https://cafeteria-da-ti-anatertu.netlify.app/**').as('getCall');
      cy.visit('https://cafeteria-da-ti-anatertu.netlify.app').wait(2000);
    });

    it('Deve exibir uma lista de cafés disponíveis', () => {
      // Verificar se a página contém a lista de cafés
      cy.get('.coffee-item').should('be.visible');
      
      // Verificar se pelo menos um café está visível na lista
      cy.get('.cafe-item').should('have.length.above', 0);
    });
  
    it('Deve permitir adicionar um café ao carrinho', () => {
      // Clicar no botão de adicionar do primeiro café na lista
      cy.get('.cafe-item').first().find('.add-button').click();
  
      // Verificar se o carrinho exibe a quantidade correta de itens
      cy.get('.cart-count').should('contain', '1');
    });
  
    it('Deve permitir remover um café do carrinho', () => {
      // Adicionar um café ao carrinho
      cy.get('.cafe-item').first().find('.add-button').click();
  
      // Clicar no botão de remover do primeiro item no carrinho
      cy.get('.cart-item').first().find('.remove-button').click();
  
      // Verificar se o carrinho está vazio
      cy.get('.cart-empty').should('be.visible');
    });
  
    it('Deve calcular o total corretamente no carrinho', () => {
      // Adicionar dois cafés diferentes ao carrinho
      cy.get('.cafe-item').first().find('.add-button').click();
      cy.get('.cafe-item').eq(1).find('.add-button').click();
  
      // Verificar se o total exibido no carrinho é a soma dos preços dos cafés
      cy.get('.cart-total').should('contain', 'Total: R$ XX.XX'); // Substituir com o valor correto
    });
  });
  