const mixes = [
  { name: "This profile has not uploaded any tracks yet.", meta: "Title · Artist" }
];

const fans = [
  { name: "fan_placeholder_01", city: "City, Region" },
  { name: "fan_placeholder_02", city: "City, Region" },
  { name: "fan_placeholder_03", city: "City, Region" },
  { name: "fan_placeholder_04", city: "City, Region" },
  { name: "fan_placeholder_05", city: "City, Region" }
];

const mixList = document.getElementById("profile__content");
if (mixList) {
  mixes.forEach((mix) => {
    const row = document.createElement("article");
    row.className = "profile__content-item";
    row.innerHTML = `<strong>${mix.name}</strong><p>${mix.meta}</p>`;
    mixList.appendChild(row);
  });
}

const fanList = document.getElementById("fan-list");
if (fanList) {
  fans.forEach((fan) => {
    const row = document.createElement("article");
    row.className = "profile__fan-item";
    row.innerHTML = `
      <div class="profile__fan-avatar"></div>
      <div><strong>${fan.name}</strong><p>${fan.city}</p></div>
      <button class="profile__fan-action">Fan</button>
    `;
    fanList.appendChild(row);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
