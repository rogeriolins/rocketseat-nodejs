    /*
    
        This project is challenge for nodeJS for RocketSeat 

        url: https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs
    
    */
    express = require("express");
    myApp = express();

    const portListen = 2413;
    const mensListen = `I listen in port: ${portListen}`;
    console.log(mensListen);

    /* Routes */

    /* Route "/projects" list all routes and tasks */
    myApp.get("/projects", (req, res) => {

    });

    /* Route "/projects/:id" modified title this project :id */
    myApp.put("/projects", (req, res) => {

    });

    /* Route "/projects/" insert :id, :title and new :project */
    myApp.post("/projects", (req, res) => {

    });

    /* Route "/projects/:id" delete project :id */
    myApp.delete("/projects/:id", (req, res) => {

    });

    /* Route "/projects/:id/tasks" insert new :task  */
    myApp.post("/projects/:id/tasks", (req, res) => {

    });

    /* Route "/listen" in port  */
    myApp.get("/listen", (req, res) => {        
        res.send(mensListen);        
    });

    /* end Routes */

    /* Listen port - I see my application active */
    myApp.listen(portListen);