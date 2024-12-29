import { useState, useEffect } from "react";
import { Console, Hook, Unhook } from "console-feed";
import styles from "./result-panel.module.css";

export const ResultPanel = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    );
    return () => Unhook(hookedConsole);
  }, []);

  return (
    <div className={styles.container}>
      <Console logs={logs} variant="dark" />
    </div>
  );
};
