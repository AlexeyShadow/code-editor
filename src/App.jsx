import { ProblemBoard } from "./components/ProblemBoard/ProblemBoard";
import { ResultPanel } from "./components/ResultPanel/ResultPanel";
import { Editor } from "./components/EditorPanel/Editor/Editor";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.problem_panel}>
        <ProblemBoard />
      </div>
      <div className={styles.editor_panel}>
        <Editor />
      </div>
      <div className={styles.result_panel}>
        <ResultPanel />
      </div>
    </div>
  );
}

export default App;
