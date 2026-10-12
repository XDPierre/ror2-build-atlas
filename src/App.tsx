import { useEffect, useRef, useState } from 'react';
import ExternalLink from './components/ExternalLink';
import HomePage from './pages/HomePage';
import SurvivorPage from './pages/SurvivorPage';
import PortalPage from './pages/PortalPage';
import { survivors } from './data/survivors';
import { wiki } from './data/references';
export default function App() {
  const [hash, setHash] = useState(location.hash);
  const main = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onHash = () => {
      setHash(location.hash);
    };
    window.addEventListener('hashchange', onHash);
    const shortcut = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)
      ) {
        const input = document.querySelector<HTMLInputElement>('input[type="search"]');
        if (input) {
          e.preventDefault();
          input.focus();
        }
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('keydown', shortcut);
    };
  }, []);
  const s = survivors.find((s) => hash === `#survivor/${s.id}`);
  const portal = hash === '#portals';
  useEffect(() => {
    document.title = s
      ? `${s.name} — ROR2 Build Atlas`
      : portal
        ? 'Portal references — ROR2 Build Atlas'
        : 'ROR2 Build Atlas — Survivor field guide';
    if (hash === '#survivors') {
      requestAnimationFrame(() => document.getElementById('survivors')?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
      if (hash) {
        main.current?.focus();
      }
    }
  }, [hash, s, portal]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="ROR2 Build Atlas home">
          <span className="brand-mark">Λ</span>
          <span>
            ROR2 <strong>BUILD ATLAS</strong>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a className={!portal ? 'selected' : ''} href="#survivors">
            Survivors
          </a>
          <a className={portal ? 'selected' : ''} href="#portals">
            Portal guide
          </a>
          <ExternalLink href={wiki('Risk_of_Rain_2_Wiki')}>Wiki</ExternalLink>
        </nav>
        <span className="fan-label">AN UNOFFICIAL FIELD GUIDE</span>
      </header>
      <div ref={main} tabIndex={-1} className="page-content">
        {s ? (
          <SurvivorPage survivor={s} />
        ) : portal ? (
          <PortalPage />
        ) : hash.startsWith('#survivor/') ? (
          <main id="main" className="empty">
            <h1>Unknown survivor.</h1>
            <a href="#survivors">Return to the collection</a>
          </main>
        ) : (
          <HomePage />
        )}
      </div>
      <footer>
        <a className="brand" href="#">
          <span className="brand-mark">Λ</span>
          <span>
            ROR2 <strong>BUILD ATLAS</strong>
          </span>
        </a>
        <p>Made for the next run.</p>
        <span>
          Fan-made · Not affiliated with Hopoo Games, Gearbox, or 2K.
          <br />
          Risk of Rain 2 belongs to its respective owners. AI-generated reference artwork.
        </span>
      </footer>
    </>
  );
}
