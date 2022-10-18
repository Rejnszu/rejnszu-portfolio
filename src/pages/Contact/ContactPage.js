import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./ContactPage.module.scss";
import Heading from "../../components/UI/Heading";
const Contact = () => {
  return (
    <AnimatedPages page="contact">
      <section className={`${styles["contact"]} section-padding`}>
        <Heading text="Jak się można ze mną skontaktować" />
      </section>
    </AnimatedPages>
  );
};

export default Contact;
