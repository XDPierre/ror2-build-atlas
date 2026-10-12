import { useState } from 'react';
import ExternalLink from '../components/ExternalLink';
import ImageViewer from '../components/ImageViewer';
import { maps } from '../data/assets';
import { dlcs, survivors } from '../data/survivors';
import { wiki } from '../data/references';
export default function HomePage() {
  const [query, setQuery] = useState('');
  const [dlc, setDlc] = useState('All expansions');
  const [style, setStyle] = useState('All playstyles');
  const [expanded, setExpanded] = useState(false);
  const tags = [...new Set(survivors.flatMap((s) => s.tags))].sort();
  const filtered = survivors.filter(
    (s) =>
      (dlc === 'All expansions' || s.dlc === dlc) &&
      (style === 'All playstyles' || s.tags.includes(style)) &&
      [s.name, s.style, ...s.tags, ...s.items]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="signal" /> COMMUNITY FIELD GUIDE / VOL. 01
          </p>
          <h1>
            Know your survivor.
            <br />
            <em>Shape your run.</em>
          </h1>
          <p className="intro">
            Twenty survivors. Countless ways to survive.
            <br />
            Find your next build in a visual atlas of Petrichor V.
          </p>
          <a href="#survivors" className="primary">
            Explore the atlas <span>↘</span>
          </a>
          <div className="hero-stats">
            <span>
              <strong>20</strong> survivor guides
            </span>
            <span>
              <strong>04</strong> expansions
            </span>
            <span>
              <strong>{String(survivors.filter((survivor) => survivor.tierImage).length).padStart(2, '0')}</strong> tier editions
            </span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="AI-generated Railgunner illustration">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="hero-caption">
            <span className="eyebrow">FEATURED DOSSIER / 013</span>
            <a href="#survivor/railgunner">
              Railgunner <span>↗</span>
            </a>
            <small>Precision / Burst · Four-tier guide</small>
          </div>
        </div>
      </section>
      <section id="survivors" className="gallery-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE COLLECTION</p>
            <h2>Select your survivor.</h2>
          </div>
          <span className="collection-label">
            BUILD INFOGRAPHICS <span className="signal" />
          </span>
        </div>
        <div className="filter-bar">
          <label className="search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search survivors, items, or playstyles…"
              aria-label="Search survivors, items, or playstyles"
            />
            <kbd>/</kbd>
          </label>
          <label className="style-filter">
            <span className="sr-only">Playstyle</span>
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              <option>All playstyles</option>
              {tags.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="dlc-tabs" role="group" aria-label="Filter by expansion">
          {['All expansions', ...dlcs].map((d) => (
            <button
              key={d}
              aria-pressed={dlc === d}
              className={dlc === d ? 'active' : ''}
              onClick={() => setDlc(d)}
            >
              {d}
              <span>
                {d === 'All expansions' ? 20 : survivors.filter((s) => s.dlc === d).length}
              </span>
            </button>
          ))}
        </div>
        <div className="results">
          <span role="status" aria-live="polite">
            {filtered.length} of 20 guides
          </span>
          <span>AI-generated artwork · Community reference</span>
        </div>
        {filtered.length === 0 && (
          <div className="empty">
            <h3>No survivors found.</h3>
            <p>Try another name, item, or playstyle.</p>
            <button
              onClick={() => {
                setQuery('');
                setDlc('All expansions');
                setStyle('All playstyles');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
        {dlcs.map((d, group) => {
          const list = filtered.filter((s) => s.dlc === d);
          return (
            list.length > 0 && (
              <section className="dlc-group" key={d}>
                <div className="group-heading">
                  <h3>
                    <span className={`dlc-dot dot-${group}`} />
                    {d}
                  </h3>
                  <span>{String(list.length).padStart(2, '0')} GUIDES</span>
                </div>
                <div className="card-grid">
                  {list.map((s) => (
                    <a className="survivor-card" href={`#survivor/${s.id}`} key={s.id}>
                      <div className="card-art">
                        <img
                          src={s.image}
                          alt={`${s.name} full survivor infographic, AI-generated and unverified`}
                          loading="lazy"
                        />
                        <span className="card-number">
                          {String(survivors.indexOf(s) + 1).padStart(2, '0')}
                        </span>
                        {s.tierImage && <span className="tier-badge">TIER GUIDE AVAILABLE</span>}
                        <span className="card-arrow">↗</span>
                      </div>
                      <div className="card-copy">
                        <h4>{s.name}</h4>
                        <p>{s.style}</p>
                        <div className="tags">
                          {s.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )
          );
        })}
        <div className="coming-soon">
          <span className="coming-mark">＋</span>
          <div>
            <span className="eyebrow">NEXT DOSSIER</span>
            <h3>Acolyte</h3>
            <p>Hallowed Concepts · Infographic coming soon.</p>
          </div>
          <ExternalLink href={wiki('Acolyte')}>Explore the wiki</ExternalLink>
        </div>
      </section>
      <section className="home-maps" aria-labelledby="maps-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / MAP COLLECTION</p>
            <h2 id="maps-heading">Explore the maps.</h2>
          </div>
          <a className="outline-button" href="#portals">
            Portal references ↗
          </a>
        </div>
        <div className="notice">
          <strong>Conceptual maps · unverified routes</strong>
          <p>
            These supplied AI-generated maps may contain inaccurate routes. Consult the portal
            references for sourced corrections.
          </p>
        </div>
        {maps.map((map) => (
          <article key={map.id}>
            <h3>{map.name}</h3>
            <ImageViewer src={map.image} name={map.name} />
          </article>
        ))}
      </section>
      <section className="editorial-note">
        <button aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          <span>ⓘ About this atlas & its sources</span>
          <span>{expanded ? '−' : '+'}</span>
        </button>
        {expanded && (
          <div>
            <p>
              This independent fan project collects supplied AI-generated infographics. The images
              are illustrations, not official sprites, and their rankings are not verified.
              Structured item indexes preserve the image’s proposed build; source links and
              corrections are kept separately.
            </p>
            <p>
              The collection covers 20 supplied survivors, not every playable survivor. The Acolyte
              guide is still to come.{' '}
              <ExternalLink href={wiki('Survivors')}>Survivor reference</ExternalLink> ·{' '}
              <ExternalLink href={wiki('Items')}>Item reference</ExternalLink>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
