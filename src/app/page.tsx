import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello word!!</h1>
      <Link href="/spotify">My Spotify Page</Link>
      <Link href="/steam">My Steam Games</Link>
    </main>
  );
}
