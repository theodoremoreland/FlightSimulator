//! Use the window load event to ensure all elements have loaded before attaching event handlers.

//? When the "Take off" button is clicked, the following should happen:
// TODO: A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add steps 2-4.
// TODO: The flight status should change to "Shuttle in flight."
// TODO: The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
// TODO: The shuttle height should increase by 10,000 miles.

//? When the "Land" button is clicked, the following should happen:
// TODO: A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// TODO: The flight status should change to "The shuttle has landed."
// TODO: The background color of the shuttle flight screen should change from blue to green.
// TODO: The shuttle height should go down to 0.

//? When the "Abort Mission" button is clicked, the following should happen:
// TODO: A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add steps 2-4.
// TODO: The flight status should change to "Mission aborted."
// TODO: The background color of the shuttle flight screen should change from blue to green.
// TODO: The shuttle height should go down to 0.

//? When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// TODO: The rocket image should move 10 px in the direction of the button that was clicked.
// TODO: If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

//? 23.8.3. Bonus Mission
// TODO: Keep the rocket from flying off of the background.
// TODO: Return the rocket to its original position on the background when it has been landed or the mission was aborted.

//? Write your JavaScript code here.
//? Remember to pay attention to page loading!

window.addEventListener("load", function(event) {
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

    button.addEventListener("click", function() {
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

    button.addEventListener("click", function() {
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

    button.addEventListener("click", function() {
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
        else if (direction === 'left' && rocketLeft > -170) { rocket.style.left = (rocketLeft - 10) + `px`;}
        else if (direction === 'right' && rocketLeft < 170) { rocket.style.left = (rocketLeft + 10) + `px`; }
    }
}