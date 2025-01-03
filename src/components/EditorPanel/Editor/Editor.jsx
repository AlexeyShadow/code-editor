import { go } from "@codemirror/lang-go";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useCallback, useEffect, useState } from "react";
import { ExecuteButton } from "../ExecuteButton/ExecuteButton";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import {
  success,
  error,
  pythonCode,
  golangCode,
} from "../../../../server/MockedData/mockedData";
import pythonIcon from "../../../assets/python.png";
import golangIcon from "../../../assets/golang.png";
import styles from "./editor.module.css";

const selectLanguageOptions = [
  {
    value: "python",
    label: (
      <div className={styles.icon_wrapper}>
        <img src={pythonIcon} height="24px" width="24px" />
        <span>Python</span>
      </div>
    ),
  },
  {
    value: "golang",
    label: (
      <div className={styles.icon_wrapper}>
        <img src={golangIcon} height="24px" width="24px" />
        <span>Golang</span>
      </div>
    ),
  },
];

export const Editor = () => {
  const [value, setValue] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState(
    selectLanguageOptions[0]
  );

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const codeCurrenValue = window.localStorage.getItem("current_editor_state");
    if (codeCurrenValue) {
      setValue(codeCurrenValue);
    }
  }, []);

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
    window.localStorage.setItem("current_editor_state", val);
  }, []);

  const executeCode = useCallback(() => {
    setIsDisabled(true);
    setTimeout(async () => {
      try {
        await fetch(`http://localhost:3000/languages`, {
          method: "POST",
          body: JSON.stringify({
            language: selectedLanguage.value,
            code: value,
          }),
          headers: { "Content-Type": "application/json;charset=utf-8" },
        })
          .then((response) => response.json())
          .then((data) => {
            const code = data.code;
            const trimCode = code.replaceAll(/[\s\n\r]+/g, "");
            if (data.language === "python" && trimCode === pythonCode) {
              return console.log(success);
            }
            if (data.language === "golang" && trimCode === golangCode) {
              return console.log(success);
            } else {
              return console.log(error);
            }
          });
        setIsDisabled(false);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsDisabled(false);
      }
    }, 2000);
  }, [selectedLanguage.value, value]);

  return (
    <div className={styles.container}>
      <div>
        <LanguageSelect
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
          selectLanguageOptions={selectLanguageOptions}
        />
        <CodeMirror
          value={value}
          height="60vh"
          minHeight="0"
          extensions={[
            selectedLanguage.value === "python" ? python() : go(),
            EditorView.lineWrapping,
          ]}
          onChange={onChange}
          className={styles.editor}
          theme={oneDark}
        />
      </div>
      <div className={styles.executeButton}>
        <ExecuteButton executeCode={executeCode} isDisabled={isDisabled} />
      </div>
    </div>
  );
};
