const eyeMessages = [
  {
    title: "Eye Break Time!",
    message: "Give those peepers a breather, they’ve been staring too hard! 🌟",
  },
  {
    title: "Blink and Chill!",
    message: "Time to give those sockets some love. Blink it out! 😎",
  },
  {
    title: "Focus Fizz!",
    message: "Shift your gaze and let those eye muscles dance! 💃",
  },
  {
    title: "Squint and Stretch!",
    message: "Time to shake it off—let those peepers move! 🚀",
  },
  {
    title: "Gaze Game On!",
    message: "Let’s switch it up! Eye workout time, folks! 👀",
  },
  {
    title: "Wink and Win!",
    message: "Give a wink to those tired eyes—let’s refresh! ✨",
  },
];

function getRandomEyeMessage() {
  const randomIndex = Math.floor(Math.random() * eyeMessages.length);
  return eyeMessages[randomIndex];
}

async function sendNotification() {
  const { notification = false } = await chrome.storage.sync.get([
    "notification",
  ]);
  if (notification) {
    const phrases = getRandomEyeMessage();
    chrome.notifications.create({
      type: "basic",
      iconUrl: "./eye128.png",
      title: phrases.title,
      message: phrases.message,
      priority: 0,
    });
  }
}

async function getTime() {
  const { minutes = 5 } = await chrome.storage.sync.get(["minutes"]);
  return minutes;
}

async function checkAndSendNotification() {
  const { notification = false } = await chrome.storage.sync.get([
    "notification",
  ]);
  if (notification) {
    await sendNotification();
  }
}

async function setAlarm() {
  chrome.alarms.clearAll();
  const minutes = await getTime();
  if (minutes > 0) {
    console.log(`Setting alarm for ${minutes} minutes`);
    chrome.alarms.create("notificationAlarm", {
      periodInMinutes: minutes || 5,
    });
  }
}

chrome.storage.onChanged.addListener(async (changes, areaName) => {
  if (areaName === "sync") {
    if ("minutes" in changes) {
      await setAlarm();
    }
    if ("notification" in changes) {
      const newValue = changes.notification.newValue;
      if (newValue) {
        await sendNotification();
      } else {
        console.log("Notification setting turned off.");
      }
    }
  }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "notificationAlarm") {
    checkAndSendNotification();
  }
});

chrome.notifications.onClicked.addListener(function () {
  console.log("Notification clicked");
  chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});

// Set the alarm at startup
setAlarm();
