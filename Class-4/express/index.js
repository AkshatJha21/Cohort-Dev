const express = require("express");

var users = [
    {
        name: "Akshat Jha",
        kidneys: [
            { 
                healthy: true
            },
            {
                healthy: false
            }
        ]
    },
]

const app = express();
const port = 3000;

app.use(express.json());

// CHECK HEALTH OF KIDNEY(S)
app.get("/", function(req, res) {
    const kidneys = users[0].kidneys;
    const numOfKidneys = kidneys.length;
    let healthyKidneys = 0;
    for (let i = 0; i < numOfKidneys; i++) {
        if (kidneys[i].healthy) {
            healthyKidneys++;
        }
    };
    const unhealthyKidneys = numOfKidneys - healthyKidneys;

    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    });
});

// ADD KIDNEY
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done"
    })
});

// HEAL KIDNEY
app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy){
            users[0].kidneys[i].healthy = true;
        }
    }
    res.send("Done");
});

//REMOVE UNHEALTHY KIDNEY
app.delete("/", function(req, res) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            });
        }
    };
    if (newKidneys.length == 0) {
        newKidneys.push({
            healthy: true
        });
    };
    users[0].kidneys = newKidneys;
    res.send("Done");
});

app.listen(port, function(req, res) {
    console.log("Listening on port ", port);
});