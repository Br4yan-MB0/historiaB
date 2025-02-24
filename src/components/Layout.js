import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
      <header>
        {router.pathname !== '/' && ( // Só exibe o link se NÃO estiver na página inicial
          <nav>
            <Link href="/">🏠</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
