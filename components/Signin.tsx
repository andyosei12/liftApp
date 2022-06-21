import Input from "./Input";
import styles from "../styles/Signup.module.scss";
import PrimaryButton from "./buttons/PrimaryButton";

const Signin = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading-1 mb-small">Sign in</h1>
      <form>
        <Input label="Email" type="email" />
        <Input label="password" type="password" />
        <PrimaryButton name="Log in" />
      </form>
    </div>
  );
};

export default Signin;
