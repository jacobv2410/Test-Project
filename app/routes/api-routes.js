

app.get('/auth', function(req, res, next) {
    // Retrieve Auth information for the Item, which includes high-level
    // account information and account numbers for depository auth.
    client.getAuth(ACCESS_TOKEN, function(error, numbersData) {
      if(error != null) {
        var msg = 'Unable to pull accounts from Plaid API.';
        console.log(msg + '\n' + error);
        return response.json({error: msg});
      }
      response.json({
        error: false,
        accounts: numbersData.accounts,
        numbers: numbersData.numbers,
      });
    });
  });