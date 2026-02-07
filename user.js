const mixes = [
  { name: "DJ Antomattei of Tokyo has not uploaded any tracks.", meta: "Title · Artist" }
];

const fans = [
  { name: "RyanShutup", city: "Weston, FL" },
  { name: "Matt Sim", city: "Toronto, Canada" },
  { name: "Joseph davis", city: "" },
  { name: "Misha Rebristy", city: "" },
  { name: "DJ Defile", city: "" }
];

const mixList = document.getElementById("mix-list");
if (mixList) {
  mixes.forEach((mix) => {
    const row = document.createElement("article");
    row.className = "mix-item";
    row.innerHTML = `<strong>${mix.name}</strong><p>${mix.meta}</p>`;
    mixList.appendChild(row);
  });
}

const fanList = document.getElementById("fan-list");
if (fanList) {
  fans.forEach((fan) => {
    const row = document.createElement("article");
    row.className = "fan-row";
    row.innerHTML = `
      <div class="fan-avatar"></div>
      <div><strong>${fan.name}</strong><p>${fan.city}</p></div>
      <button class="join">Fan</button>
    `;
    fanList.appendChild(row);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
