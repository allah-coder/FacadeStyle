import Header from "#/shared/header";
import Footer from "#/shared/footer";

import styles from "./page.module.css";

export const metadata = {
  title: "О компании FacadeStyle",
};

export default function Company() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.window}>
          <div className={styles.container}>
            <div className={styles.hero}>
              <h1 className={styles.h1}>
                О нашей
                <br />
                <span className={styles.h1_span}>компании</span>
              </h1>
              <ul className={styles.ul}>
                <li>
                  <h6>999+</h6>
                  <p className={styles.li_p + " " + "body2"}>
                    постоянных клиентов
                  </p>
                </li>
                <li>
                  <h6>2 года</h6>
                  <p className={styles.li_p + " " + "body2"}>
                    оказываем наши услуги
                  </p>
                </li>
                <li>
                  <h6>$10 млн</h6>
                  <p className={styles.li_p + " " + "body2"}>
                    ежегодная выручка компании
                  </p>
                </li>
                <li>
                  <h6>#1</h6>
                  <p className={styles.li_p + " " + "body2"}>
                    по версии журнала Forbes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.center}>
              <h3>Cкоро появится!</h3>
              <p className={styles.h3_p + " " + "body1"}>
                Мы уже работаем над этой страницей.
              </p>
              <tgs-player
                loop
                autoplay
                mode="normal"
                className={styles.tgs}
                src="/video/duck-podmetaet.tgs"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
