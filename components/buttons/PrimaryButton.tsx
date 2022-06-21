import styles from "../../styles/PrimaryButton.module.scss";

export interface ButtonProps {
  name: string;
}

const PrimaryButton = ({ name }: ButtonProps) => {
  return <button className={`${styles.btn} mb-small`}>{name}</button>;
};

export default PrimaryButton;
