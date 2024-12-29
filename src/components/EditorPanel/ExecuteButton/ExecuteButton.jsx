import styles from "./execute-button.module.css";

export const ExecuteButton = (props) => {
  const { executeCode, isDisabled } = props;

  return (
    <button
      className={styles.button}
      onClick={executeCode}
      disabled={isDisabled}
    >
      Run
    </button>
  );
};
