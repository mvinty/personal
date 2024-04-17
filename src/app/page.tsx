import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar";
import DownloadBTN from "./components/DownloadBTN";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <div>
        <h1>Hello, I am Vinh, a Computer Science student at the University of Michigan.</h1>
        <DownloadBTN/>
        <h2>About me</h2>
        <p>
          I enjoy listening to music and being an avid gamer. Please take a look at what I am listening to, or the games I am playing. Enjoy!
        </p>
      </div>
    </main>
  );
}
