const features = [
  {
    title: "Live Streaming",
    text: "Spin live with advanced broadcasting tools, including breakthrough integration with Icecast."
  },
  {
    title: "Fan Engagement",
    text: "Build your global fanbase in virtual venues where fans can chat and follow your socials."
  },
  {
    title: "Content Distribution",
    text: "Record your live sets and upload mixes for fans to stream and download."
  }
];

const container = document.getElementById("feature-list");
if (container) {
  features.forEach((item) => {
    const card = document.createElement("article");
    card.className = "feature-item";
    card.innerHTML = `<div class="feature-icon"></div><h3>${item.title}</h3><p>${item.text}</p>`;
    container.appendChild(card);
  });
}

const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
