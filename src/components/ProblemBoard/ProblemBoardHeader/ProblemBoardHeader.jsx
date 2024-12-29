import styles from "./problem-board-header.module.css";

export const ProblemBoardHeader = () => {
  return (
    <div className={styles.container}>
      <img src="./src/assets/problems-list.png" className={styles.list_icon} />
      <span>Problem list</span>
    </div>
  );
};
