import React from "react";
import Lottie from "react-lottie";
import styles from "./LoginPage.module.css";
import { LoginForm } from "./components/LoginForm";

import animationData from "./components/Animation.json";

export const LoginPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
        <div className={styles.formColumn}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
