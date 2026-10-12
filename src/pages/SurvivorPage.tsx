import ExternalLink from '../components/ExternalLink';
import ImageViewer from '../components/ImageViewer';
import { survivors, type Survivor } from '../data/survivors';
import { corrections, itemWiki, uncertainItems, wiki } from '../data/references';
import { itemRarity } from '../data/rarities';
import AbilityPanel from '../components/AbilityPanel';
import { survivorLoadouts } from '../data/abilities';
export default function SurvivorPage({ survivor: s }: { survivor: Survivor }) {
  const loadout = survivorLoadouts[s.id];
  return (
    <main id="main" className="detail">
      <a className="back" href="#survivors">
        ← Back to the atlas
      </a>
      <div className="detail-heading">
        <div>
          <p className="eyebrow">{s.dlc} / SURVIVOR DOSSIER</p>
          <h1>{s.name}</h1>
          <p>{s.style}</p>
        </div>
        <ExternalLink href={wiki(s.name)}>Survivor wiki</ExternalLink>
      </div>
      <div className="detail-grid">
        <div className="survivor-images">
          <section aria-label="Survivor infographic">
            <p className="eyebrow">SURVIVOR INFOGRAPHIC</p>
            <ImageViewer src={s.image} name={s.name} />
          </section>
          {s.tierImage && !loadout && (
            <section id="tier-guide" className="available-tier-guide">
              <p className="eyebrow">AVAILABLE TIER GUIDE</p>
              <h2>{s.name} tier guide</h2>
              <ImageViewer src={s.tierImage} name={`${s.name} tier guide`} />
            </section>
          )}
        </div>
        <aside>
          <p className="eyebrow">
            FIELD NOTES / {s.tiers ? 'FOUR-TIER EDITION' : 'CORE-ITEM EDITION'}
          </p>
          <h2>A build to explore.</h2>
          {s.tierImage && (
            <a
              className="outline-button"
              href="#tier-guide"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('tier-guide')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View available tier guide ↓
            </a>
          )}
          <p className="muted">
            {s.tags.join(' · ')}. Build labels describe the supplied artwork, rather than a verified
            optimal loadout.
          </p>
          <div className="notice">
            <strong>Illustration, not game data</strong>
            <p>
              This AI-generated guide may contain inaccurate icons, item names, mechanics, and
              rankings. Use the linked wiki for current information. An item’s DLC requirement is
              independent of the survivor’s expansion.
            </p>
          </div>
          <h3>{s.tiers ? 'Infographic tier index' : 'Infographic item index'}</h3>
          <p className="muted small">
            Item index for this illustration. Rankings have not been validated; “Not Good” is a
            context-dependent image label. Tile colors and rarity labels describe game rarity,
            independently of build priority.
          </p>
          {s.tiers ? (
            Object.entries(s.tiers).map(([tier, items], i) => (
              <details className={`tier tier-${i}`} key={tier} open={i === 0}>
                <summary>
                  <span>{tier}</span>
                  <small>{items.length} items</small>
                </summary>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <ExternalLink href={itemWiki(item)}>{item}</ExternalLink>
                      {itemRarity(item) && (
                        <small
                          className="item-rarity"
                          style={{
                            color: itemRarity(item).color,
                            borderColor: itemRarity(item).color,
                          }}
                        >
                          {itemRarity(item).rarity}
                        </small>
                      )}
                      {uncertainItems.has(item) && (
                        <small className="unverified-name">Name unverified · wiki search</small>
                      )}
                    </li>
                  ))}
                </ul>
              </details>
            ))
          ) : (
            <ul className="item-list">
              {s.items.map((item) => (
                <li key={item}>
                  <ExternalLink href={itemWiki(item)}>{item}</ExternalLink>
                  {uncertainItems.has(item) && (
                    <small className="unverified-name">Name unverified · wiki search</small>
                  )}
                </li>
              ))}
            </ul>
          )}
          <details className="corrections" open={!!s.tiers}>
            <summary>Checked mechanics & image corrections</summary>
            {corrections.map((c) => (
              <div key={c.title}>
                <strong>{c.title}</strong>
                <p>
                  {c.text} <ExternalLink href={wiki(c.page)}>Source</ExternalLink>
                </p>
              </div>
            ))}
            <p className="small muted">
              Mechanics checked against wiki search excerpts on October 11, 2026. Rankings and other
              baked-in claims remain unverified.
            </p>
          </details>
        </aside>
      </div>
      {s.tierImage && loadout && (
        <section
          id="tier-guide"
          className="available-tier-guide tier-guide-with-abilities"
          aria-label={`${s.name} tier guide and abilities`}
        >
          <p className="eyebrow">AVAILABLE TIER GUIDE</p>
          <h2>{s.name} tier guide</h2>
          <div className="tier-guide-layout">
            <ImageViewer src={s.tierImage} name={`${s.name} tier guide`} />
            <AbilityPanel key={s.id} survivorName={s.name} loadout={loadout} />
          </div>
        </section>
      )}
      <nav className="detail-next" aria-label="Other survivor guides">
        {survivors
          .filter((x) => x.dlc === s.dlc && x.id !== s.id)
          .map((x) => (
            <a key={x.id} href={`#survivor/${x.id}`}>
              {x.name} ↗
            </a>
          ))}
      </nav>
    </main>
  );
}
