import Link from "next/link";
import AppLogo from "#/shared/app-logo";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gap}>
        <AppLogo />
        <p className="caption">© Все права защищены</p>
        <div className={styles.divider} />
        <Link href="/privacy">
          <p className={styles.link + " " + "subtitle2"}>
            Политика конфиденциальности
          </p>
        </Link>
      </div>
    </footer>
  );
}
