import styles from "../styles/Input.module.scss";

interface InputProps {
  label: string;
  type: string;
}

const Input = ({ label, ...otherProps }: InputProps) => {
  return (
    <p className={`${styles["input-group"]} mb-small`}>
      <label className={`${styles.label} mb-small-1`}>{label}</label>
      <input {...otherProps} />
    </p>
  );
};

export default Input;
