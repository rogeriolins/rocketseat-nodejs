    /*
    
        This project is challenge for nodeJS for RocketSeat 

        url: https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/README.md#desafio-01-conceitos-do-nodejs
    
    */
    express = require("express");
    myApp = express();

    /* Need for use JSON in method body  */
    myApp.use(express.json());

    const urlListen = "http://localhost";
    const portListen = 2413;

    const mensListen = `I listen in ${urlListen}:${portListen}`;
    console.log(mensListen);

    /* array Projects */
    const arrProjects = []; 
    arrProjects.push({ "id": "1", "title": "Novo projeto", tasks: [] });

    /* Function for middlewares */
    function verifyId(req,res,next) {
        const { id } = req.params;
        const myProjectIndex = arrProjects.findIndex(myId => myId.id == id);
        if(myProjectIndex == -1) {
            res.status(400).json({"error": `id ${id} not found!`});
        }
        return next();
    }

    function myRequests(req,res,next){
        console.count("myRequests");
        next();
    }

    myApp.use(myRequests);

    /* Routes */

    /* Route "/" list all routes */
    myApp.get("/", (req, res) => {
        var allRotes = urlListen+":"+portListen+"/projects => Listen all project = GET Method";
        allRotes += "<br>- - -<br>";
        allRotes += urlListen+":"+portListen+"/projects => Modified title project = PUT Method";
        allRotes += "<br>- - -<br>";
        allRotes += urlListen+":"+portListen+"/projects/=> Insert :id, :title and new :task = POST Method";
        allRotes += "<br>- - -<br>";
        allRotes += urlListen+":"+portListen+"/projects/=> Delete :id project = DELETE Method";
        allRotes += "<br>- - -<br>";
        allRotes += urlListen+":"+portListen+"/:id/tasks/=> Insert new :task the :id project = POST Method";
        allRotes += "<br>- - -<br>";
        allRotes += urlListen+":"+portListen+"/listen => Send string listen in browser = GET Method";
        allRotes += "<br>- - -<br>";
        res.send(allRotes);
    })

    /* Route "/projects" list all routes and tasks */
    myApp.get("/projects", (req, res) => {
        res.json(arrProjects);
    });

    /* Route "/projects/:id" modified title this project :id */
    myApp.put("/projects/:id", verifyId, (req, res) => {
        const { id } = req.params;
        const { title } = req.body;
        /* Use method .find to search element in json object  */
        const myProject = arrProjects.find(myId => myId.id === id);
        myProject.title = title;
        /* Return status code 200 (ok) */
        res.status(200).send();
    });

    /* Route "/projects/" insert :id, :title and new :task */
    myApp.post("/projects/", (req, res) => {
        const { id } = req.body;
        const { title } = req.body;
        /* Add new project in json object */
        arrProjects.push( {"id": `${id}`, "title": `${title}`, "tasks": [] } );
        /* Return status code 200 (ok) */
        return res.status(200).send();
    });

    /* Route "/projects/:id" delete project :id */
    myApp.delete("/projects/:id", verifyId, (req, res) => {
        const { id } = req.params;
        const myProjectIndex = arrProjects.findIndex(myId => myId.id == id);
        arrProjects.splice(myProjectIndex,1);
        return res.status(200).send();
    });

    /* Route "/projects/:id/tasks" insert new :task  */
    myApp.post("/projects/:id/tasks", verifyId, (req, res) => {
        const { id } = req.params;
        const { task } = req.body;
        /* Use method .find to search element in json object */
        const myProject = arrProjects.find(myId => myId.id == id);
        myProject.tasks.push(task);
        /* return status code 200 (ok) */
        return res.status(200).send();
    });

    /* Route "/listen" in port  */
    myApp.get("/listen", (req, res) => {        
        res.send(mensListen);        
    });

    /* end Routes */

    /* Listen port - I see my application active */
    myApp.listen(portListen);