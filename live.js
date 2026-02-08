const chat = [
  { user: "listener_01", msg: "Great transition." },
  { user: "listener_02", msg: "Audio sounds clean." },
  { user: "listener_03", msg: "Track ID please?" },
  { user: "host_account", msg: "Thanks for tuning in." },
  { user: "listener_04", msg: "This set is on point." },
  { user: "listener_05", msg: "Love this groove." },
  { user: "listener_06", msg: "Drop incoming?" },
  { user: "listener_07", msg: "Crowd energy is high." },
  { user: "listener_08", msg: "Following now." },
  { user: "listener_09", msg: "Replay later please." },
  { user: "listener_10", msg: "Big vibes." },
  { user: "listener_11", msg: "Amazing mix." }
];

const chatLog = document.getElementById("live__chat-log");
if (chatLog) {
  chat.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "live__chat-message";
    item.innerHTML = `<strong>${entry.user}:</strong> ${entry.msg}`;
    chatLog.appendChild(item);
  });
}
