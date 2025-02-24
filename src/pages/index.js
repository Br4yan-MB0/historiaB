import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Histórias Bíblicas Infantis</h1>
      
      <h2>Velho Testamento</h2>
      <ul>
        <li><Link href="/velho-testamento/Genesis">Gênesis</Link></li>
        <li><Link href="/velho-testamento/Exodo">Êxodo</Link></li>
      </ul>

      <h2>Novo Testamento</h2>
      <ul>
        <li><Link href="/novo-testamento/matheus">Mateus</Link></li>
        <li><Link href="/novo-testamento/marcos">Marcos</Link></li>
      </ul>
    </div>
  );
}
