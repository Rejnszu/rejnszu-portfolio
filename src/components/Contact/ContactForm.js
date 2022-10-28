import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import styles from "./ContactForm.module.scss";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = async (mailObject) => {
    const response = await fetch(`https://rejnszu.pl/index.php`, {
      method: "POST",
      body: JSON.stringify(mailObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setMailSent(false);
    setLoading(true);
    const mailObject = {
      name,
      mail,
      message,
    };

    sendEmail(mailObject)
      .then((result) => {
        setLoading(false);
        setMailSent(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });

    setName("");
    setMail("");
    setMessage("");
  };
  return (
    <motion.form
      action="#"
      onSubmit={onFormSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className={styles.form}
    >
      <label className={styles["form__label"]} htmlFor="name">
        Imie
      </label>
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
      <label className={styles["form__label"]} htmlFor="email">
        E-mail
      </label>
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
      <label className={styles["form__label"]} htmlFor="message">
        Wiadomość
      </label>
      <textarea
        value={message}
        className={styles["form__input"]}
        id="message"
        rows="10"
        aria-label="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <Button type="submit">Wyślij</Button>
      {loading && <p className={styles["loading-mail"]}>Trwa wysyłanie.</p>}
      {mailSent && (
        <p className={styles["succesful-mail"]}>Mail wysłany pomyślnie.</p>
      )}
      {error && (
        <p className={styles["unsuccesful-mail"]}>
          Coś poszło nie tak, spróboj ponownie.
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
