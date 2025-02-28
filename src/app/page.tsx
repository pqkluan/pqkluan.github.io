import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/staffun-logo.svg"
          alt="Next.js logo"
          width={674}
          height={224}
          priority
        />
        <p>{"Coming soon 👋"}</p>
      </main>
    </div>
  );
}
