import type { CSSProperties } from 'react';
import ExternalLink from '../components/ExternalLink';
import ImageViewer from '../components/ImageViewer';
import { asset } from '../data/assets';
import { portals } from '../data/portals';
import { wiki } from '../data/references';
export default function PortalPage() {
  return (
    <main id="main" className="portal-page">
      <a className="back" href="#survivors">
        ← Back to the atlas
      </a>
      <p className="eyebrow">PETRICHOR V / NAVIGATION</p>
      <h1>Beyond the teleporter.</h1>
      <p className="intro">
        A few sourced routes through the hidden realms. This is a partial reference, not a complete
        map of every expansion.
      </p>
      <div className="route-grid">
        {portals.map((p) => (
          <article
            key={p.name}
            className="route"
            style={{ '--route-color': p.color } as CSSProperties}
          >
            <p className="eyebrow">{p.name}</p>
            <p className="muted">{p.from} →</p>
            <h2>
              <ExternalLink href={wiki(p.destination)}>{p.destination}</ExternalLink>
            </h2>
            <p>{p.note}</p>
            <p className="small muted">Wiki reference · checked October 11, 2026</p>
          </article>
        ))}
      </div>
      <div className="notice">
        <strong>Conceptual map · unverified routes</strong>
        <p>
          The supplied illustration contains errors and omits newer routes. In particular, Beads of
          Fealty lead from the Obelisk to A Moment, Whole, not to Commencement. Gold Portal
          conditions are simplified in the image. Use the clickable realm references above.
        </p>
      </div>
      <ImageViewer src={asset('maps/portal-map.png')} name="Conceptual portal map" />
    </main>
  );
}
