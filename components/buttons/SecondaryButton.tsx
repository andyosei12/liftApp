import { ButtonProps } from "./PrimaryButton";
import styles from "../../styles/SecondaryButton.module.scss";

const SecondaryButton = ({ name }: ButtonProps) => {
  return <button className={`${styles.btn} mb-small`}>{name}</button>;
};

export default SecondaryButton;
