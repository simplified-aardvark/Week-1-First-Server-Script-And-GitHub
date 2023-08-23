let my_http = require("http");

let my_server = my_http.createServer(
  function(my_request, my_response) {
    console.log( my_request.url);

    let my_text;

    if (my_request.url === "/england-plus") {
      my_text = "It's Aluminium!";
    } else if (my_request.url == "/usa-canada") {
      my_text = "It's Aluminum!";
    } else {
      my_text = "Who?";
    }

    my_response.writeHead(200, {"Content-Type": "text/plain"});

    my_response.end(my_text);
  }
)

my_server.listen(8080, "0.0.0.0");

console.log("Server has started!");
