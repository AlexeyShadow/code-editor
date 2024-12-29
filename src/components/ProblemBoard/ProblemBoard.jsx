import { DescriptionPage } from "./DescriptionPage/DescriptionPage";
import { ProblemBoardHeader } from "./ProblemBoardHeader/ProblemBoardHeader";
import { ProblemBoardTabs } from "./ProblemBoardTabs/ProblemBoardTabs";
import styles from "./problem-board.module.css";

export const ProblemBoard = () => {
  return (
    <div className={styles.container}>
      <ProblemBoardHeader />
      <ProblemBoardTabs />
      <DescriptionPage />
    </div>
  );
};
