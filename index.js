    /* This project is challenge for nodeJS for RocketSeat */
    express = require("express");
    myApp = express();

    const portListen = 2413;
    const mensListen = `I listen in port: ${portListen}`;
    console.log(mensListen);

    /* Routes */


    /* Route "/listen" in port  */
    myApp.get("/listen", (req, res) => {        
        res.send(mensListen);        
    });

    /* Listen port - I see my application active */
    myApp.listen(portListen);