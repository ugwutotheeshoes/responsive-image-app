import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
          Responsive images using Next JS Image Component
        </h1>

     
      <div className={styles.imagecontainer}>
        <Image
            src="/sunset.jpg"
            alt="Sunset"
            width={650}
            height={380}
            layout="responsive"
          />
        <Image
            src="/snow.jpg"
            alt="Sunset"
            width={650}
            height={380}
            layout="responsive"
          />
        </div>
    </div>
  );
}
