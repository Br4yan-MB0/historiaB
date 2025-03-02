import Layout from '../../components/Layout';
//import styles from '@/styles/1samuel.css';

export default function Samuel() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>📖 1 Samuel</h1>
        <p className={styles.subtitle}>A história do profeta Samuel e do rei Davi</p>
      </div>

      <div className={styles.section}>
        <h2>👶 O Nascimento de Samuel</h2>
        <p>
          Havia uma mulher chamada Ana que queria muito ter um filho. Ela orou a Deus pedindo um bebê e prometeu 
          que, se tivesse um filho, o entregaria para servir no templo. 
        </p>
        <p className={styles.highlight}>
          🙏 Deus ouviu sua oração, e ela teve um menino chamado Samuel!
        </p>
      </div>

      <div className={styles.section}>
        <h2>🔊 Samuel Ouve Deus Chamando</h2>
        <p>
          Quando Samuel cresceu um pouco, foi morar no templo e ajudar o sacerdote Eli. Uma noite, ele ouviu alguém chamando:
        </p>
        <p className={styles.quote}> 
          "Samuel! Samuel!" 
        </p>
        <p>
          Ele pensou que era Eli e correu até ele, mas Eli disse que não tinha chamado. Isso aconteceu três vezes até que Eli percebeu que era Deus falando com Samuel. 
        </p>
        <p className={styles.highlight}>🙌 Então, Eli disse para Samuel responder:</p>
        <p className={styles.quote}> 
          "Fala, Senhor, pois o teu servo ouve."
        </p>
      </div>

      <div className={styles.section}>
        <h2>👑 A Escolha de Davi</h2>
        <p>
          Quando Samuel cresceu, Deus pediu que ele escolhesse um novo rei para Israel. Ele foi até a casa de Jessé e viu vários filhos fortes e altos, mas Deus disse que o escolhido não era nenhum deles. 
        </p>
        <p className={styles.quote}>
          "O homem vê a aparência, mas Eu vejo o coração."
        </p>
        <p>
          Então, Jessé chamou seu filho mais novo, Davi, um menino pastor de ovelhas. E assim, Davi foi escolhido para ser rei!
        </p>
      </div>

      <div className={styles.section}>
        <h2>⚔️ Davi e o Gigante Golias</h2>
        <p>
          Davi cresceu e se tornou um grande guerreiro, vencendo até o gigante Golias com apenas uma pedra e sua fé em Deus.
        </p>
        <ul className={styles.list}>
          <li>🏹 Golias era um guerreiro gigante que desafiava o povo de Deus.</li>
          <li>🛡 Todos tinham medo, mas Davi confiou no Senhor.</li>
          <li>💥 Com uma pedra e sua funda, Davi derrotou Golias!</li>
        </ul>
      </div>

      <p className={styles.finalMessage}>
        🎉 Ensinamento: Deus fala conosco e nos escolhe pelo nosso coração, não pela aparência. Ele usa pessoas simples para fazer coisas grandiosas!
      </p>
    </Layout>
  );
}
