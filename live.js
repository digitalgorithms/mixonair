const chat = [
  { user: "midiocore", msg: "and it's FUCKING EPIC" },
  { user: "BassAction", msg: "oh fuck its saturday" },
  { user: "BassAction", msg: "midi is drinking" },
  { user: "midiocore", msg: "indeed" },
  { user: "BassAction", msg: "utube is frozen" },
  { user: "BassAction", msg: "utube is workin" },
  { user: "Zalrium", msg: "refresh BA" },
  { user: "BassAction", msg: "zanthium!!" },
  { user: "Zalrium", msg: "ZALRIUM" },
  { user: "BassAction", msg: "says processing" },
  { user: "BassAction", msg: "so gay" },
  { user: "BassAction", msg: "fuck" }
];

const chatLog = document.getElementById("chat-log");
if (chatLog) {
  chat.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "msg";
    item.innerHTML = `<strong>${entry.user}:</strong> ${entry.msg}`;
    chatLog.appendChild(item);
  });
}
