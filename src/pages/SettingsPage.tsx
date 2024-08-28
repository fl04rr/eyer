import { useEffect, useState } from "react";
import { Container } from "../components/Container/styled";
import Header from "../components/Header/Header";
import { Heading } from "../components/Heading/styled";
import Navbar from "../components/Navbar/Navbar";
import NotificationTimer from "../components/NotificationTimer/NotificationTimer";
import { SettingItem } from "../components/SettingItem/styled";
import Swithcer from "../components/Swithcer/Switcher";
import { getNotificationPeriod } from "../utils/getNotificationPeriod";

export default function SettingsPage() {
  const [notificationPeriod, setNotificationPeriod] = useState<number>(100);
  const [notificationAllowed, setNotificationAllowed] = useState(true);

  useEffect(() => {
    const fetchMinutes = async () => {
      const { minutes, notification } = await getNotificationPeriod();
      setNotificationPeriod(minutes);
      setNotificationAllowed(notification);
    };
    fetchMinutes();
  }, []);

  const changeNotificationPeriod = (step: number) => {
    setNotificationPeriod(notificationPeriod + step);
    chrome.storage.sync.set({ minutes: notificationPeriod + step });
  };

  const setNotificationPermission = (isAllowed: boolean) => {
    setNotificationAllowed(isAllowed);
    chrome.storage.sync.set({ notification: isAllowed });
  };

  return (
    <>
      <Header heading="Settings" />
      <Container>
        <SettingItem>
          <Heading>Send Notification</Heading>
          <Swithcer
            switcherChecked={notificationAllowed}
            setSwitcherChecked={setNotificationPermission}
          />
        </SettingItem>
        <SettingItem $disabled={!notificationAllowed}>
          <Heading>Send Every</Heading>
          <NotificationTimer
            disabled={!notificationAllowed}
            time={notificationPeriod}
            changeTimer={changeNotificationPeriod}
          />
        </SettingItem>
      </Container>

      <Navbar />
    </>
  );
}
