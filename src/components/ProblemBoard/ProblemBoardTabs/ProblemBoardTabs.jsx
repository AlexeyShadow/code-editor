import styles from "./problem-board-tabs.module.css";

export const ProblemBoardTabs = () => {
  return (
    <div className={styles.container}>
      <img
        src="C:\Work\code-editor\src\assets\description.png"
        className={styles.description_icon}
      />
      <span>Description</span>
    </div>
  );
};
