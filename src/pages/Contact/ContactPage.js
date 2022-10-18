import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./ContactPage.module.scss";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
const Contact = () => {
  return (
    <AnimatedPages page="contact">
      <section className={`${styles["contact"]} section-padding`}>
        <Heading text="Jak się można ze mną skontaktować" />
        <div className={styles["contact__inner-wrapper"]}>
          <div className={styles["contact__direct-message"]}>
            <SmallTextElement flexPosition="center" delay={0.4}>
              Bezpośrednio
            </SmallTextElement>
            <p className={styles["contact__direct-message__item"]}>
              Numer Telefonu: 609-660-472
            </p>
            <p className={styles["contact__direct-message__item"]}>
              Email: lukaszrejnsz@op.pl
            </p>
          </div>

          <div className={styles["contact__social-media"]}>
            <SmallTextElement flexPosition="center" delay={0.9}>
              Przez media społecznościowe
            </SmallTextElement>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
};

export default Contact;
