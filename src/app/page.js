import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        Hello there!!!
      </main>
      <footer className={styles.footer}>
        Here is footer
      </footer>
    </div>
  );
}
