const eventWhich = document.getElementById("event-which");
const eventWhich2 = document.getElementById("event-which-2");
const eventKey = document.getElementById("event-key");
const eventCode = document.getElementById("event-code");

// const log = document.getElementById("output")

document.addEventListener("keydown", logKey);

function logKey(event) {
    eventCode.innerHTML = `event.code ${event.code}`;
    eventWhich.innerHTML = `event.which ${event.which}`;
    eventKey.innerHTML = `event.key ${event.key}`;
    eventWhich2.innerHTML = `${event.which}`;
}
