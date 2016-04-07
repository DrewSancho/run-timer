var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var data = [
    {
        runTime: 5025,
        runDate: '4/7/2016, 12:43:29pm',
        runNotes: 'test',
        runDistance: 10.1,
        runCalories: 2733.25,
        id: 1
    }
];

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.get('/api/runs', function (req, res) {
    res.json(data);
});

var id = 1;

app.post('/api/runs', function (req, res) {
    var item = {
        runTime: req.body.runTime,
        runDate: req.body.runDate,
        runNotes: req.body.runNotes,
        runDistance: req.body.runDistance,
        runName: req.body.runName,
        runCalories: req.body.runCalories,
        id: ++id
    };
    data.push(item);
    res.json(item);
});

app.delete('/api/runs/:id', function (req, res) {
    var id = parseInt(req.params.id);
    // find the corresponding id in the data array and delete it
    var run = data.filter(function (run) {
        return run.id === id;
        // access the index[0] in the run array which is what we filtered for
    })[0];
    // using the original data array we will, starting at the index[run], splice,
    // and and move up one position
    data.splice(data.indexOf(run), 1);
});

app.put('/api/runs/:id', function (req, res) {
    var id = parseInt(req.params.id);
    // find the corresponding id in the data array and delete it
    var run = data.filter(function (run) {
        return run.id === id;
        // access the index[0] in the run array which is what we filtered for
    })[0];
    // using the Object.assign we will, update the data with what we edited
    Object.assign(run, { id: id, runName: req.body.runName, runNotes: req.body.runNotes, runTime: req.body.runTime, runDistance: req.body.runDistance });
    // our response is to return the json form of the run we just edited
    res.json(run);
});
app.listen(3000);