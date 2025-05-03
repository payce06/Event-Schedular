const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
let events = [];

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

function loadEvents() {
    const saved = localStorage.getItem('eventd');
    if (saved) events = JSON.parse(saved);
}