import Select from "react-select";
import styles from "./language-select.module.css";

const selectStyles = {
  control: (styles) => ({
    ...styles,
    background: "#2D2D2D",
    marginBottom: "4px",
  }),
};

export const LanguageSelect = (props) => {
  const { selectedLanguage, setSelectedLanguage, selectLanguageOptions } =
    props;

  return (
    <Select
      defaultValue={selectedLanguage}
      onChange={setSelectedLanguage}
      options={selectLanguageOptions}
      className={styles.custom_select}
      isSearchable={false}
      placeholder={false}
      formatOptionLabel={(option) => (
        <div className={styles.image_wrapper}>
          <img src={option.image} />
          <span className={styles.label_option}>{option.label}</span>
        </div>
      )}
      styles={selectStyles}
    />
  );
};
