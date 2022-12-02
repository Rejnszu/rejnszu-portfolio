import React, { useContext } from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./ContactPage.module.scss";
import Heading from "../../components/UI/Heading";
import { motion } from "framer-motion";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import SmallTextElement from "../../components/UI/SmallTextElement";
import SocialIcons from "../../components/Contact/SocialIcons";
import ContactForm from "../../components/Contact/ContactForm";
import { GlobalVariablesContext } from "../../context/overall-context";
import { ENGLISH_VERSION, POLISH_VERSION } from "./ContactLanguages";

const Contact = () => {
  const { isMobile, isPolish } = useContext(GlobalVariablesContext);
  const content = isPolish ? POLISH_VERSION : ENGLISH_VERSION;
  let delay = isMobile ? 0.9 : 1.9;
  return (
    <AnimatedPages page="contact">
      <main className={`section-padding default-page`}>
        <Heading text={content.header} />
        <div className={styles["contact__inner-wrapper"]}>
          <div className={styles["contact__direct-message"]}>
            <SmallTextElement flexPosition="center" delay={0.7}>
              {content.firstTextElement}
            </SmallTextElement>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className={styles["contact__direct-message__item"]}
            >
              {content.phoneText}: 609-660-472
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className={styles["contact__direct-message__item"]}
            >
              Email: lukaszrejnsz@op.pl
            </motion.p>
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 1 }}
            className={styles["contact__animated-triangle"]}
            height="400"
            width="400"
          >
            <motion.polygon
              animate={{
                filter: ["brightness(1)", "brightness(1.7)", "brightness(1)"],
                rotate: [0, 360],
                scale: [1.4, 0.5, 1.4],
              }}
              transition={{ duration: 7, delay: 5.2, repeat: Infinity }}
              points="100,120 300,120 200,270"
              className={styles["triangle"]}
            />
            Sorry, your browser does not support inline SVG.
          </motion.svg>

          <div className={styles["contact__social-media"]}>
            <SmallTextElement flexPosition="center" delay={delay}>
              {content.secondTextElement}
            </SmallTextElement>
            <div className={styles["social-media__icons-wrapper"]}>
              <SocialIcons delay={delay} icon={<BsFacebook />} />
              <SocialIcons
                delay={delay + 0.2}
                icon={<BsLinkedin />}
                href="https://www.linkedin.com/in/%C5%82ukasz-rejnsz/"
              />
              <SocialIcons delay={delay + 0.4} icon={<BsTwitter />} />
              <SocialIcons
                delay={delay + 0.6}
                icon={<BsGithub />}
                href="https://github.com/Rejnszu"
              />
            </div>
          </div>
        </div>
        <SmallTextElement flexPosition="center" delay={isMobile ? 0.5 : 3.1}>
          {content.thirdTextElement}
        </SmallTextElement>
        <ContactForm formContent={content.form} />
      </main>
    </AnimatedPages>
  );
};

export default Contact;
