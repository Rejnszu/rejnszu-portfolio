import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./ContactPage.module.scss";
import Heading from "../../components/UI/Heading";
import { motion } from "framer-motion";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import SmallTextElement from "../../components/UI/SmallTextElement";
import SocialIcons from "../../components/Contact/SocialIcons";

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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={styles["contact__direct-message__item"]}
            >
              Numer Telefonu: 609-660-472
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={styles["contact__direct-message__item"]}
            >
              Email: lukaszrejnsz@op.pl
            </motion.p>
          </div>

          <svg
            className={styles["contact__animated-triangle"]}
            height="400"
            width="400"
          >
            <motion.polygon
              animate={{
                rotate: [0, 360],
                scale: [1.4, 0.5, 1.4],
              }}
              transition={{ duration: 7, delay: 1, repeat: Infinity }}
              points="100,120 300,120 200,270"
              className={styles["triangle"]}
            />
            Sorry, your browser does not support inline SVG.
          </svg>

          <div className={styles["contact__social-media"]}>
            <SmallTextElement flexPosition="center" delay={0.9}>
              Przez media społecznościowe
            </SmallTextElement>
            <div className={styles["social-media__icons-wrapper"]}>
              <SocialIcons delay={0.3} icon={<BsFacebook />} />
              <SocialIcons
                delay={0.6}
                icon={<BsLinkedin />}
                href="https://www.linkedin.com/in/%C5%82ukasz-rejnsz/"
              />
              <SocialIcons delay={0.9} icon={<BsTwitter />} />
              <SocialIcons
                delay={1.2}
                icon={<BsGithub />}
                href="https://github.com/Rejnszu"
              />
            </div>
          </div>
        </div>
        <SmallTextElement flexPosition="center" delay={1}>
          Kontakuj się śmiało!
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default Contact;
