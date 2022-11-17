import React, { useEffect, useState, useRef, useContext } from "react";
import Button from "../UI/Button";
import styles from "./ContactForm.module.scss";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../context/GlobalVariables";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({
    mailSent: false,
    error: false,
    loading: false,
  });
  const isMobile = useContext(GlobalVariablesContext).isMobile;
  const formRef = useRef(null);

  const sendEmail = async (mailObject) => {
    const response = await fetch(`https://rejnszu.pl/index.php`, {
      method: "POST",
      body: JSON.stringify(mailObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const wrappers = formRef.current.querySelectorAll("div");

    Array.from(wrappers).forEach((wrapper) => {
      for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");

        wrapper.append(span);
      }
    });
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNotification((prevNotifications) => {
      return { ...prevNotifications, mailSent: false, loading: true };
    });

    const mailObject = {
      name,
      mail,
      message,
    };

    sendEmail(mailObject)
      .then((result) => {
        setNotification((prevNotifications) => {
          return { ...prevNotifications, mailSent: true, loading: false };
        });
        setName("");
        setMail("");
        setMessage("");
      })
      .catch((error) => {
        setNotification((prevNotifications) => {
          return { ...prevNotifications, error: true, loading: false };
        });
      });
  };
  return (
    <motion.form
      ref={formRef}
      action="#"
      onSubmit={onFormSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: isMobile ? 1 : 4, duration: 0.5 }}
      className={styles.form}
    >
      <label
        data-content="Imie"
        className={styles["form__label"]}
        htmlFor="name"
      >
        {props.formContent.name}
      </label>
      <div className={styles["form__input-wrapper"]}>
        <input
          value={name}
          type="text"
          required
          className={styles["form__input"]}
          id="name"
          aria-label="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <label
        data-content="E-mail"
        className={styles["form__label"]}
        htmlFor="email"
      >
        {props.formContent.mail}
      </label>
      <div className={styles["form__input-wrapper"]}>
        <input
          value={mail}
          type="email"
          required
          className={styles["form__input"]}
          id="email"
          aria-label="email"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
      </div>
      <label
        data-content="Wiadomość"
        className={`${styles["form__label"]} ${styles["form__label--textarea"]}`}
        htmlFor="message"
      >
        {props.formContent.message}
      </label>
      <div className={styles["form__input-wrapper"]}>
        <textarea
          value={message}
          className={styles["form__input"]}
          id="message"
          rows="15"
          aria-label="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <Button type="submit">Wyślij</Button>
      {notification.loading && (
        <p className={styles["loading-mail"]}>
          {props.formContent.notifications.loading}
        </p>
      )}
      {notification.mailSent && (
        <p className={styles["succesful-mail"]}>
          {props.formContent.notifications.mailSent}
        </p>
      )}
      {notification.error && (
        <p className={styles["unsuccesful-mail"]}>
          {props.formContent.notifications.error}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
