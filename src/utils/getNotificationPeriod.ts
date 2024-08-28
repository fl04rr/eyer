export const getNotificationPeriod = async (): Promise<{
  minutes: number;
  notification: boolean;
}> => {
  const { minutes } = await chrome.storage.sync.get(["minutes"]);
  const { notification } = await chrome.storage.sync.get(["notification"]);
  return { minutes, notification };
};
