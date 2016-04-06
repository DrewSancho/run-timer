

function stopWatch () {

    var api = { };

    function counter () {

        clockModel.set(clockModel.get('currentTime' + 1));

        if (stopTimer === false) {
            setTimeout(counter, 1000);

        }

    };

    
    api.startTimer = function () {

        stopTimer = false;
        setTimeout(counter, 1000);


    };

    api.pauseTimer = function () {


    };

    api.stopTimer = function () {

        stopTimer = true;



    };



    return api;

}

module.exports = stopWatch();