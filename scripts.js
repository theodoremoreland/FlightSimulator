window.addEventListener("load", function (event) {
    takeoff();
    land();
    abort();
    move();
});

function takeoff() {
    let button = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");

    button.addEventListener("click", function () {
        let ready = confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready) {
            status.innerHTML = `Shuttle in flight.`;
            background.style.backgroundColor = `blue`;
            height.innerHTML = +height.innerHTML + 10000;
        }
    });
}

function land() {
    let button = document.getElementById("landing");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");

    button.addEventListener("click", function () {
        alert(`The shuttle is landing. Landing gear engaged.`);
        status.innerHTML = `The shuttle has landed.`;
        background.style.backgroundColor = `green`;
        height.innerHTML = 0;
        rocket.style.top = "250px";
        rocket.style.left = "0px";
    });
}

function abort() {
    let button = document.getElementById("missionAbort");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");

    button.addEventListener("click", function () {
        let ready = confirm("Confirm that you want to abort the mission.");
        if (ready) {
            status.innerHTML = `Mission aborted.`;
            background.style.backgroundColor = `green`;
            height.innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.left = "0px";
        }
    });
}

function move() {
    let height = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    let background = document.getElementById("shuttleBackground");

    // Sets rocket position programmatically as to add inline styling thus enabling accurate references via
    // ...JavaScript .style
    rocket.style.top = "250px";
    rocket.style.left = "0px";

    // adds event handler to each button that creates a function that calls another function via .bind().
    document.getElementById(`up`).addEventListener("click", position.bind(position, `up`));
    document.getElementById(`down`).addEventListener("click", position.bind(position, `down`));
    document.getElementById(`left`).addEventListener("click", position.bind(position, `left`));
    document.getElementById(`right`).addEventListener("click", position.bind(position, `right`));

    function position(direction) {
        let rocketTop = parseInt(rocket.style.top);
        let rocketLeft = parseInt(rocket.style.left);

        if (direction === 'up' && rocketTop > 0) {
            rocket.style.top = (rocketTop - 10) + `px`;
            height.innerHTML = +height.innerHTML + 10000;
            background.style.backgroundColor = `blue`;
        }
        else if (direction === 'down' && rocketTop <= 249) {
            rocket.style.top = (rocketTop + 10) + `px`;
            height.innerHTML = +height.innerHTML - 10000;
        }
        else if (direction === 'left' && rocketLeft > -170) { rocket.style.left = (rocketLeft - 10) + `px`; }
        else if (direction === 'right' && rocketLeft < 170) { rocket.style.left = (rocketLeft + 10) + `px`; }
    }
}