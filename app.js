const events = [
  { artist: "midiocore", genre: "Open Format", listeners: 20 },
  { artist: "Boltcutter", genre: "Dubstep", listeners: 9 },
  { artist: "Todd Twiggs", genre: "House", listeners: 7 },
  { artist: "DJ Morbln", genre: "Open Format", listeners: 6 },
  { artist: "Gent & Jawns", genre: "Trap", listeners: 12 },
  { artist: "Candyland", genre: "Electro", listeners: 18 }
];

const featured = [
  { artist: "Brillz", time: "Apr 24 @ 09:00 AM JST" },
  { artist: "Gent & Jawns", time: "Apr 25 @ 02:00 AM JST" },
  { artist: "Candyland", time: "Apr 25 @ 03:00 AM JST" },
  { artist: "MING", time: "Apr 25 @ 04:00 AM JST" }
];

const eventGrid = document.getElementById("event-grid");
const featuredList = document.getElementById("featured-list");

events.forEach((event) => {
  const card = document.createElement("article");
  card.className = "event-card";
  card.innerHTML = `
    <div class="cover">
      <h4>${event.artist}</h4>
    </div>
    <div class="event-meta">
      <div>
        <p><strong>Now Live</strong> | ${event.genre}</p>
        <p>👥 ${event.listeners}</p>
      </div>
      <button class="join">Join</button>
    </div>
  `;
  eventGrid.appendChild(card);
});

featured.forEach((item) => {
  const row = document.createElement("article");
  row.className = "featured-row";
  row.innerHTML = `
    <div class="thumb"></div>
    <div>
      <strong>${item.artist}</strong>
      <span>${item.time}</span>
    </div>
    <button class="rsvp">RSVP</button>
  `;
  featuredList.appendChild(row);
});

document.getElementById("year").textContent = new Date().getFullYear();
