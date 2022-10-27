import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import styles from "./AboutMe.module.scss";
import myImage from "../../assets/hobbiton-min.webp";
import DescriptionItem from "../../components/AboutMe/DescriptionItem";

import SmallTextElement from "../../components/UI/SmallTextElement";

import CustomLink from "../../components/UI/CustomLink";
const AboutMe = () => {
  return (
    <AnimatedPages page="aboutme">
      <section className={`${styles["about-me"]} section-padding`}>
        <Heading text="Łukasz Rejnsz, Twój nowy Front-End Developer" />
        <div className={styles["about-me__informations"]}>
          <div className={styles["informations__my-photo__wrapper"]}>
            <img
              src={myImage}
              className={styles["informations__my-photo"]}
              alt="photo_of_me"
            />
            <figcaption>
              Jakby kogoś interesowało jak wyglądam.
              <br />
              Lepszego nie znalazłem.
            </figcaption>
          </div>
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
              tworzenia stron oraz aplikacji internetowych, a także wszystkiego
              co związane jest z designem treści internetowych. Moja przygoda z
              "kodowaniem" zaczęła się ponad półtora roku temu, kiedy doszedłem
              do wniosku, że moja obecna praca jest mało rozwijająca i wypadało
              by znaleźć sobie nowe wyzwanie. Nie żebym jej nie lubił, ale
              potrzebowałem czegoś co będzie wymagało ode mnie ciągłego rozwoju.
              Jako entuzjasta nowych technologii oraz osoba ciekawa świata
              stwierdziłem, że warto by zainteresować się tematyką, na której
              opiera się połowa naszej obecnej cywilizacji.
            </DescriptionItem>
            <DescriptionItem title="Moja kariera" delay={1.1}>
              Skończyłem studia inżynierskie na kierunku energetyka, ale w
              zasadzie od początku wiedziałem, że to nie jest dla mnie. W tamtym
              okresie również nie czułem jakiegoś większego zainteresowania
              informatyką, może dlatego iż zawsze kojarzyło mi się to z nudnym
              podpinaniem monitorów i myszek pod komputery, no cóż, byłem w
              błędzie. Przez ostatnie 7 lat kariery zawodowej zajmowałem się
              różnymi rzeczami. Głównie sprzedażą, zarówno na miejscu jak i
              internetową, opieką nad sklepami internetowymi, projektowaniem
              oświetlenia, a także pomocą przy rozwoju dużych projektów z
              zakresu fotowoltaiki. Generalnie kontakt z klientem nie jest mi
              obcy i potrafię rozmawiać z ludźmi.
            </DescriptionItem>
            <DescriptionItem title="Moje cele" delay={1.4}>
              Mam pełną świadomość, iż ciągle popełniam wiele błędów, mam braki
              w wiedzy, a także brak mi pewnych nawyków, które poprawiły by
              jakość mojego kodu dlatego też zależy mi na tym, aby podjąć
              współpracę z ludźmi, którzy w branży siędzą już jakiś czas i mogli
              by mnie odpowiednio nakierować, a także pokazać mi co jest
              naistotniejsze w tym środowisku.
            </DescriptionItem>
          </div>
        </div>
        <SmallTextElement flexPosition="center">
          Wciąż za mało informacji? Sprawdź się moim{" "}
          <CustomLink href="https://rejnszu.github.io/Quiz/">quizie</CustomLink>
          !
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
