import Link from 'next/link';
import styles from '../styles/home.module.css';  // Importando o CSS

export default function Home() {
  return (
    <div>
      <h1>Histórias Bíblicas Infantis</h1>
      
      <h2>Velho Testamento</h2>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Genesis">
            <button className={styles.btn}>Gênesis</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Exodo">
            <button className={styles.btn}>Êxodo</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Juizes">
            <button className={styles.btn}>Juízes</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/UmSamuel">
            <button className={styles.btn}>1º Samuel</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/DoisReis">
            <button className={styles.btn}>2º Reis</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Ester">
            <button className={styles.btn}>Ester</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Jo">
            <button className={styles.btn}>Jó</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Salmos">
            <button className={styles.btn}>Salmos</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Proverbios">
            <button className={styles.btn}>Provérbios</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Daniel">
            <button className={styles.btn}>Daniel</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/velho-testamento/Jonas">
            <button className={styles.btn}>Jonas</button>
          </Link>
        </li>
      </ul>

      <h2>Novo Testamento</h2>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="/novo-testamento/matheus">
            <button className={styles.btn}>Mateus</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/novo-testamento/marcos">
            <button className={styles.btn}>Marcos</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/novo-testamento/lucas">
            <button className={styles.btn}>Lucas</button>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/novo-testamento/joao">
            <button className={styles.btn}>João</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
