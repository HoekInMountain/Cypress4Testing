describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    cy.visit('http://127.0.0.1:3001');
  });

  it('runs through the quiz and allows restarting', () => {
    cy.contains(/Start Quiz/i, { timeout: 5000 }).click();
    cy.wait('@getQuestions');
    cy.wait(500); // Let the UI render

    cy.fixture('questions.json').then((questions) => {
      const totalQuestions = questions.length;

      for (let i = 0; i < totalQuestions; i++) {
        cy.get('button.btn.btn-primary', { timeout: 3000 })
          .first()
          .click({ force: true });
        cy.wait(200); // smooth transition
      }

      // Score/result screen appears
      cy.contains(/score|out of|result/i, { timeout: 7000 }).should('exist');

      // Restart the quiz
      cy.contains(/Take New Quiz/i, { timeout: 5000 }).click();

      // Check that a new question has appeared — just check a question-like DOM exists
      cy.get('.card h2', { timeout: 5000 }).should('exist');
      cy.get('button.btn.btn-primary').should('have.length', 4); // 4 options per question
    });
  });
});
