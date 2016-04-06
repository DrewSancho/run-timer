

function stopWatch () {
    
    api.StartTimer function () {

        stopTimer = false;
        setTimeout(Counter, 1000);


    };

    function PauseTimer () {


    };

    function StopTimer () {

        stopTimer = true;



    }


    function Counter () {

        clockModel.set(clockModel.get('currentTime' + 1));

    }

}