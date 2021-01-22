it('Should show snack bar massage with incorrect credentials error message', () => {
    cy.intercept('POST', '/api', (req) => {
        req.alias = 'gqlMutation_TokenAuth';
        expectBody(req.body.variables, {
            email: 'doh@test.com',
            password: 'doh@test.com',
        });
        req.reply({
            data: {
                tokenAuth: null,
            },
            errors: [
                {
                    message: 'Please enter valid credentials',
                    locations: [
                        {
                            line: 2,
                            column: 3,
                        },
                    ],
                    path: ['tokenAuth'],
                },
            ],
        });
    });

    cy.findByLabelText(/email/i).type('doh@test.com');
    cy.findByLabelText(/password/i).type('doh@test.com');

    cy.get('button')
        .findByText(/accedi/i)
        .click();

    cy.wait('@gqlMutation_TokenAuth');

    cy.findByText('Please enter valid credentials').should('exist');
});
