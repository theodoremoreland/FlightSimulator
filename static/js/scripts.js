window.addEventListener("load", function (event) {
    takeoff();
    land();
    abort();
    move();
});

function takeoff() {
    let button = document.querySelector("#takeoff");
    let status = document.querySelector("#flightStatus");
    let background = document.querySelector("#shuttleBackground");
    let height = document.querySelector("#spaceShuttleHeight");
    let rocket = document.querySelector("#rocket");

    
    rocket.style.top = "250px";
    let rocketTop = parseInt(rocket.style.top);

    button.addEventListener("click", function () {
        if (height.innerHTML !== "0") {
            alert("Shuttle is already in flight.");
            return undefined;
        }
        let ready = confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready) {
            rocket.style.top = (rocketTop - 10) + "px";
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height.innerHTML = +height.innerHTML + 10000;
        }
    });
}

function land() {
    let button = document.querySelector("#landing");
    let status = document.querySelector("#flightStatus");
    let background = document.querySelector("#shuttleBackground");
    let height = document.querySelector("#spaceShuttleHeight");
    let rocket = document.querySelector("#rocket");

    button.addEventListener("click", function () {
        if (height.innerHTML === "0") {
            alert("Shuttle isn't in flight.");
            return undefined;
        }
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        height.innerHTML = 0;
        rocket.style.top = "250px";
        rocket.style.left = "0px";
    });
}

function abort() {
    let button = document.querySelector("#missionAbort");
    let status = document.querySelector("#flightStatus");
    let background = document.querySelector("#shuttleBackground");
    let height = document.querySelector("#spaceShuttleHeight");
    let rocket = document.querySelector("#rocket");

    button.addEventListener("click", function () {
        let ready = confirm("Confirm that you want to abort the mission.");
        if (ready) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "red";
            height.innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.left = "0px";
        }
    });
}

function move() {
    let height = document.querySelector("#spaceShuttleHeight");
    let rocket = document.querySelector("#rocket");
    let status = document.querySelector("#flightStatus");
    let background = document.querySelector("#shuttleBackground");

    // Sets rocket position programmatically as to add inline styling thus enabling accurate references via
    // ...JavaScript .style
    rocket.style.top = "250px";
    rocket.style.left = "0px";

    // Adds event handler to each button that creates a function that calls another function via .bind().
    document.querySelector("#up").addEventListener("click", position.bind(position, "up"));
    document.querySelector("#down").addEventListener("click", position.bind(position, "down"));
    document.querySelector("#left").addEventListener("click", position.bind(position, "left"));
    document.querySelector("#right").addEventListener("click", position.bind(position, "right"));

    function position(direction) {
        let rocketTop = parseInt(rocket.style.top);
        let rocketLeft = parseInt(rocket.style.left);

        if (direction === "up" && rocketTop > 0) {
            rocket.style.top = (rocketTop - 10) + "px";
            height.innerHTML = +height.innerHTML + 10000;
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
        }
        else if (direction === "down" && rocketTop <= 249) {
            rocket.style.top = (rocketTop + 10) + "px";
            height.innerHTML = +height.innerHTML - 10000;
            if (height.innerHTML === "0") {
                status.innerHTML = "The shuttle has landed.";
                background.style.backgroundColor = "green";
            }
        }
        else if (direction === "left" && rocketLeft > -170) { rocket.style.left = (rocketLeft - 10) + "px"; }
        else if (direction === "right" && rocketLeft < 170) { rocket.style.left = (rocketLeft + 10) + "px"; }

       
    }
}