const express = require("express");

var users = [
    {
        name: "Akshat Jha",
        kidneys: [
            { 
                healthy: true
            },
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

});

app.listen(port, function(req, res) {
    console.log("Listening on port ", port);
});