const events = [
  { artist: "DJ Placeholder A", genre: "Open Format", listeners: 20 },
  { artist: "DJ Placeholder B", genre: "Dubstep", listeners: 9 },
  { artist: "DJ Placeholder C", genre: "House", listeners: 7 },
  { artist: "DJ Placeholder D", genre: "Open Format", listeners: 6 },
  { artist: "DJ Placeholder E", genre: "Trap", listeners: 12 },
  { artist: "DJ Placeholder F", genre: "Electro", listeners: 18 }
];

const featured = [
  { artist: "Featured DJ 01", time: "Apr 24 @ 09:00 AM JST" },
  { artist: "Featured DJ 02", time: "Apr 25 @ 02:00 AM JST" },
  { artist: "Featured DJ 03", time: "Apr 25 @ 03:00 AM JST" },
  { artist: "Featured DJ 04", time: "Apr 25 @ 04:00 AM JST" }
];

const eventGrid = document.getElementById("events__grid");
const featuredList = document.getElementById("featured-list");

if (eventGrid) {
  events.forEach((event) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-card__cover">
        <h4>${event.artist}</h4>
      </div>
      <div class="event-card__meta">
        <div>
          <p><strong>Now Live</strong> | ${event.genre}</p>
          <p>${event.listeners} listeners</p>
        </div>
        <a class="event-card__join" href="/live/synthetic-pleasures/">Join</a>
      </div>
    `;
    eventGrid.appendChild(card);
  });
}

if (featuredList) {
  featured.forEach((item) => {
    const row = document.createElement("article");
    row.className = "featured-item";
    row.innerHTML = `
      <div class="featured-item__thumb"></div>
      <div>
        <strong>${item.artist}</strong>
        <span>${item.time}</span>
      </div>
      <button class="featured-item__rsvp">RSVP</button>
    `;
    featuredList.appendChild(row);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
