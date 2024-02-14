describe('Cats API Testing', () => {
    it('Retrieve information about a specific cat breed', () => {
      var name = 'abyssinian';
      cy.request({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
        headers: {
          'x-api-key': 'az6z3CilD/ApNTJQx3Q/Iw==gTWTTz8KlfKrz0k6' // Replace 'YOUR_API_KEY_HERE' with your actual API key
        },
        failOnStatusCode: true
      }).then((response) => {
        // Validate the response status code
        expect(response.status).to.eq(200);
  
        // Validate the response body contains valid data about the specified cat's length
        var abyssinian = response.body[0]
        expect(abyssinian).to.have.property("name");
        expect(abyssinian).to.have.property("min_weight");
        expect(abyssinian).to.have.property("max_weight");
      });
    });
  });