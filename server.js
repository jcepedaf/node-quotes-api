const express = require("express");
const app = express();

app.use(express.json());

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.send('/quotes/17 should return one quote, by id')
});

app.get("/quotes", function(request, response){
  response.json(quotes);
});

app.get("/quotes/:id", function(request, response){
  const id= request.params.id;
const quote = quotes.find(quote => quote.id == id);
return response.send(quote)

});

app.post("/quotes", function(request, response){
const quote = {
  author: request.body.author,
  quote: request.body.quote,
  id: quotes.length
};
quotes.push(quote);
return response.send(quote)
});

app.listen(3000, () => console.log("Listening on port 3000"));
