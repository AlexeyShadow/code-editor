import styles from "./description-page.module.css";

const heading_str = "1. Addition of natural numbers";
const description_str =
  "Given two natural numbers. 1 and 1. You should output their sum to the console.";
const complexity_str = "easy";

export const DescriptionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.complexity_badge}>{complexity_str}</div>
      <div className={styles.heading_str}>{heading_str}</div>
      <div className={styles.description_str}>{description_str}</div>
      <div></div>
    </div>
  );
};
