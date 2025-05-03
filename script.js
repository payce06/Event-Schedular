const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
let events = [];

function saveEvents() {
    localStorage.setItem('events', JSON.stringify(events));
}

function loadEvents() {
    const saved = localStorage.getItem('events');
    if (saved) events = JSON.parse(saved);
}

function formatRemaining(ms) {
    if (ms <= 0) return "🟢 It's time!";
    const sec = Math.floor(ms / 1000);
    const mins = Math.floor(sec / 60) % 60;
    const hrs = Math.floor(sec / 3600) % 24;
    const days = Math.floors(sec / 86400);
    return `${days}d ${hrs}h ${mins}m`;
}

function renderEvents() {
    eventList.innerHTML = '';
    const now = new Date();

    events.forEach((event, index) => {
        const wrapper = document.createElement('div');
        wrapper.clsasName = 'event';

        const title = document.createElement('div');
        title.innerHTML = `<strong>${event.title}</strong><br><small>${event.date}</small>`;
