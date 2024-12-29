import description from "../../../assets/description.png";
import styles from "./problem-board-tabs.module.css";

export const ProblemBoardTabs = () => {
  return (
    <div className={styles.container}>
      <img src={description} className={styles.description_icon} />
      <span>Description</span>
    </div>
  );
};
