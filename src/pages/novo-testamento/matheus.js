import Layout from '../../components/Layout';
import styles from '../../styles/matheus.module.css';

export default function Mateus() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>📖 Mateus</h1>
        <p className={styles.subtitle}>O Evangelho do Rei</p>
      </div>

      <div className={styles.section}>
        <h2>👶 O Nascimento do Rei Jesus</h2>
        <p>
          Mateus começa contando que Jesus nasceu de maneira especial. Sua mãe, Maria, estava noiva de José, 
          mas antes de se casarem, ela ficou grávida pelo poder do Espírito Santo.
        </p>
        <p className={styles.highlight}>
          ✨ Um anjo apareceu para José em sonho e disse:
        </p>
        <p className={styles.quote}>
          — José, não tenha medo de aceitar Maria como esposa. O filho que ela espera vem de Deus!
        </p>
      </div>

      <div className={styles.section}>
        <h2>💦 O Batismo de Jesus e Sua Missão</h2>
        <p>
          Quando Jesus tinha cerca de 30 anos, foi batizado por João Batista no rio Jordão. No momento do batismo, 
          o céu se abriu e uma voz disse:
        </p>
        <p className={styles.quote}>
          — Este é o meu Filho amado, em quem tenho prazer!
        </p>
      </div>

      <div className={styles.section}>
        <h2>🌟 O Sermão do Monte</h2>
        <p>
          Jesus ensinou as Bem-aventuranças:
        </p>
        <ul className={styles.list}>
          <li>🌿 Felizes os humildes, pois herdarão o Reino dos Céus.</li>
          <li>❤️ Felizes os misericordiosos, pois receberão misericórdia.</li>
          <li>🕊 Felizes os pacificadores, pois serão chamados filhos de Deus.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>✨ Milagres que Provaram que Jesus Era o Rei</h2>
        <ul className={styles.list}>
          <li>🌊 Acalmou uma tempestade só com a palavra.</li>
          <li>🤲 Multiplicou pães e peixes para alimentar milhares.</li>
          <li>👀 Curou cegos, paralíticos e leprosos.</li>
          <li>💀 Ressuscitou mortos.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>📜 As Parábolas do Reino</h2>
        <ul className={styles.list}>
          <li>🌱 Parábola do Semeador – O Reino de Deus é como sementes.</li>
          <li>👑 Parábola do Tesouro Escondido – O Reino é muito valioso!</li>
          <li>🐑 Parábola da Ovelha Perdida – Deus se alegra quando um pecador volta para Ele.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>✝️ A Morte e Ressurreição de Jesus</h2>
        <p>
          Jesus foi crucificado, mas no terceiro dia Ele ressuscitou! Um anjo anunciou:
        </p>
        <p className={styles.quote}>
          — Ele não está aqui! Ele ressuscitou como disse!
        </p>
      </div>

      <p className={styles.finalMessage}>
        🎉 Jesus é o Rei verdadeiro e Seu Reino nunca terá fim!
      </p>
    </Layout>
  );
}
