# monitorcommits

The following packages are needed on the browser 


angular (1.6.6)
angular-route
ng-websocket

The SPA works as follows - 

1. Git clone and build this repo
    a) it starts off with a blank page when you navigate to http://localhost:8080
    b) headers for the event data should show up 
2. Git clone the bytion repo
3. npm install in the bytion repo
4. run 'npm test' - this starts the REST API server, embedded DB and the websockets server
5. Now open a REST client of your choice  - Postman works (or CURL if you like the command line)
6. POST the following JSON to the URL http://localhost:12345
        ```json
        {

          "name":"Commit",
          "user":"hari@microsoft.com",
        "timestamp":"12:02:1989T00:02:23"
        }
        ```
          
