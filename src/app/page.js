import Image from "next/image";
import styles from "./page.module.css";
import Filter from "./filter/Filter";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div>Filter Persist</div> */}
      <Filter />
    </main>
  );
}
