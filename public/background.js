async function sendNotification() {
  const { notification = false } = await chrome.storage.sync.get(["notification"]);
  if (notification) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "./eye128.png",
      title: "Глязки напряглись",
      message: "Пришло время позаниматься",
      priority: 0,
    });
    console.log("send notification");
  } else {
    chrome.alarms.clearAll();
  }
}

async function getTime() {
  const { minutes = 1 } = await chrome.storage.sync.get(["minutes"]);
  return minutes;
}

async function setAlarm() {
  chrome.alarms.clearAll();

  const minutes = await getTime();
  if (minutes > 0) {
    console.log(`Setting alarm for ${minutes} minutes`);
    chrome.alarms.create("notificationAlarm", { periodInMinutes: minutes });
  }
}

chrome.storage.onChanged.addListener(async (changes, areaName) => {
  if (areaName === 'sync' && 'minutes' in changes) {
    await setAlarm();
  }
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === "notificationAlarm") {
    sendNotification();
  }
});

chrome.notifications.onClicked.addListener(function () {
  console.log("Уведомление было открыто");
});

setAlarm();