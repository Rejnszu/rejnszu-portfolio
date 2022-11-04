import React, { useState, useEffect } from "react";
import styles from "./AboutMe.module.scss";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import myImage from "../../assets/others/hobbiton-min.webp";
import DescriptionItem from "../../components/AboutMe/DescriptionItem";
import CustomLink from "../../components/UI/CustomLink";

import SmallTextElement from "../../components/UI/SmallTextElement";

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 1200);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });

  const photoSection = !isMobile ? (
    <div className={styles["informations__my-photo__wrapper"]}>
      <img
        src={myImage}
        className={styles["informations__my-photo"]}
        alt="photo_of_me"
      />
      <img
        src={myImage}
        className={styles["informations__my-photo"]}
        alt="photo_of_me"
      />
      <img
        src={myImage}
        className={styles["informations__my-photo"]}
        alt="photo_of_me"
      />
      <img
        src={myImage}
        className={styles["informations__my-photo"]}
        alt="photo_of_me"
      ></img>
    </div>
  ) : (
    <div className={styles["informations__my-photo__wrapper--mobile"]}>
      <img
        src={myImage}
        className={styles["informations__my-photo--mobile"]}
        alt="photo_of_me"
      />
      <figcaption>
        Jakby kogoś interesowało jak wyglądam.
        <br />
        Lepszego nie znalazłem.
      </figcaption>
    </div>
  );

  return (
    <AnimatedPages page="aboutme">
      <section className={`section-padding default-page`}>
        <Heading text="Łukasz Rejnsz, Twój nowy Front-End Developer" />
        <div className={styles["about-me__informations"]}>
          {photoSection}
          <div className={styles["informations__description"]}>
            <DescriptionItem title="Wprowadzenie" delay={0.5}>
              Witam wszystkich! Nazywam się Łukasz, a oto moja strona wizytówka,
              która ma was przekonać do zatrudnienia mnie jako waszego
              profesjonalnego, no może nie do końca profesjonalnego...ehhh po
              prostu web/front-end developera. Wszystko co znajdziecie na tej
              stronie jest przykładem moich umiejętności i dedykacji dla tej
              pracy, którą cały czas staram się udoskonalać.
            </DescriptionItem>
            <DescriptionItem title="Trochę faktów o mnie" delay={0.8}>
              Jestem samoukiem, który próboje przebić się do świata komercyjnego
              tworzenia stron oraz aplikacji internetowych. Moja przygoda z
              programowaniem zaczęła się raczej hobbystycznie. Początkowo nie
              zakładałem, że kiedykolwiek bede szukał zatrudnienia w tej branży.
              Już sam fakt tworzenia czegokolwiek co byłoby dostępne w
              internecie dla każdego, sprawiał że czułem się spełniony. Z czasem
              jednak doszedłem do wniosku, że czemu by nie spróbować pójś o krok
              dalej i nie sprawdzić swoich sił w prawdziwym świecie. Po długich
              analizach wymagań i odpowiednim, tak mi się wydaje, doszkoleniu
              się, doszedłem do punktu w którym mogę probówać połączyć swoje
              hobby z karierą zawodową. Chcesz dowiedzieć się więcej na mój
              temat? Sprawdź mój{" "}
              <CustomLink
                delay={isMobile ? 0.3 : 2}
                href="https://rejnszu.pl/cover.pdf"
              >
                list motywacyjny
              </CustomLink>
              .
            </DescriptionItem>
            <DescriptionItem title="Moja kariera" delay={1.1}>
              Skończyłem studia inżynierskie na kierunku energetyka, ale w
              zasadzie od początku wiedziałem, że to nie jest dla mnie. W tamtym
              okresie również nie czułem jakiegoś większego zainteresowania
              informatyką, może dlatego iż zawsze kojarzyło mi się to z nudnym
              podpinaniem monitorów i myszek pod komputery, no cóż, byłem w
              błędzie. Przez ostatnie 7 lat kariery zawodowej zajmowałem się
              wieloma rzeczami. Głównie sprzedażą, zarówno na miejscu jak i
              internetową, opieką nad sklepami internetowymi, projektowaniem
              oświetlenia, a także pomocą przy rozwoju dużych projektów z
              zakresu fotowoltaiki. Generalnie kontakt z klientem nie jest mi
              obcy i potrafię rozmawiać z ludźmi.
            </DescriptionItem>
            <DescriptionItem title="Moje cele" delay={1.4}>
              Mam pełną świadomość, iż ciągle popełniam wiele błędów, mam braki
              w wiedzy, a także brak mi pewnych nawyków, które poprawiły by
              jakość mojego kodu, dlatego też zależy mi na tym, aby podjąć
              współpracę z ludźmi, którzy w branży siędzą już jakiś czas i mogli
              by mnie odpowiednio nakierować, a także pokazać mi co jest
              naistotniejsze w tym środowisku.
            </DescriptionItem>
          </div>
        </div>
        <SmallTextElement flexPosition="center">
          Wciąż za mało informacji? Sprawdź się moim{" "}
          <CustomLink delay={0.4} href="https://rejnszu.github.io/Quiz/">
            quizie
          </CustomLink>
          !
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
