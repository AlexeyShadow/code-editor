import problems_list from "../../../assets/problems_list.png";
import styles from "./problem-board-header.module.css";

export const ProblemBoardHeader = () => {
  return (
    <div className={styles.container}>
      <img src={problems_list} className={styles.list_icon} />
      <span>Problem list</span>
    </div>
  );
};
