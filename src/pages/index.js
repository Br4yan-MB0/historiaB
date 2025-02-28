import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Histórias Bíblicas Infantis</h1>
      
      <h2>Velho Testamento</h2>
      <ul>
        <li><Link href="/velho-testamento/Genesis">Gênesis</Link></li>
        <li><Link href="/velho-testamento/Exodo">Êxodo</Link></li>
        <li><Link href="/velho-testamento/Juizes">Juízes</Link></li>
        <li><Link href="/velho-testamento/UmSamuel">1º Samuel</Link></li>
        <li><Link href="/velho-testamento/DoisReis">2º Reis</Link></li>
        <li><Link href="/velho-testamento/Ester">Ester</Link></li>
        <li><Link href="/velho-testamento/Jo">Jó</Link></li>
        <li><Link href="/velho-testamento/Salmos">Salmos</Link></li>
        <li><Link href="/velho-testamento/Proverbios">Provérbios</Link></li>
        <li><Link href="/velho-testamento/Daniel">Daniel</Link></li>
        <li><Link href="/velho-testamento/Jonas">Jonas</Link></li>
      </ul>

      <h2>Novo Testamento</h2>
      <ul>
        <li><Link href="/novo-testamento/matheus">Mateus</Link></li>
        <li><Link href="/novo-testamento/marcos">Marcos</Link></li>
        <li><Link href="/novo-testamento/lucas">Lucas</Link></li>
        <li><Link href="/novo-testamento/joao">João</Link></li>
      </ul>
    </div>
  );
}
