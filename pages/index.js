import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{data}</h1>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: { data: Math.random() },
    notFound: true,
    revalidate: 1,
  };
};
