
function StartTimer () {

};

function PauseTimer () {

};

function StopTimer () {

}

setTimeout(Counter, 1000);

function Counter () {

    clockModel.set(clockModel.get('currentTime' + 1));

}