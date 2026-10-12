import { useId, type CSSProperties } from 'react';
import type { EditableGuide } from '../data/editable-guides';
import iconSources from '../data/item-icons.json';
import { asset } from '../data/assets';
import { itemRarity } from '../data/rarities';
import { itemWiki } from '../data/references';
import ExternalLink from './ExternalLink';

const itemIcons = new Map(
  iconSources.map((icon) => [icon.name.replaceAll('’', "'"), asset(icon.path)]),
);

// SVG viewports crop the existing illustration; labels and numbers are live HTML.
function ArtworkCrop({
  source,
  crop,
  className,
}: {
  source: string;
  crop: number[];
  className?: string;
}) {
  const clipId = useId();
  return (
    <svg
      className={className}
      viewBox={crop.join(' ')}
      preserveAspectRatio={className ? 'xMidYMid slice' : 'xMidYMid meet'}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={crop[0]} y={crop[1]} width={crop[2]} height={crop[3]} />
        </clipPath>
      </defs>
      <image href={source} width="1024" height="1536" clipPath={`url(#${clipId})`} />
    </svg>
  );
}

export default function EditableTierGuide({
  source,
  guide,
}: {
  source: string;
  guide: EditableGuide;
}) {
  return (
    <div
      className={`editable-guide${guide.rows.some((row) => row.items.length > 4) ? ' editable-guide-dense' : ''}`}
      aria-label={`${guide.title} editable tier guide`}
    >
      <header className="editable-guide-header">
        <ArtworkCrop source={source} crop={[520, 0, 504, 310]} className="editable-guide-hero" />
        <div>
          <h3>{guide.title}</h3>
          <p className="editable-guide-subtitle">{guide.subtitle}</p>
          <p>{guide.intro}</p>
        </div>
      </header>
      {guide.rows.map((row) => (
        <section
          className="editable-guide-row"
          key={row.title}
          style={{ '--row-color': row.color } as CSSProperties}
          aria-label={`${row.title} items`}
        >
          <header>
            <h3>{row.title}</h3>
            <p>{row.summary}</p>
          </header>
          <ul
            className="editable-guide-items"
            style={{ '--item-columns': row.items.length } as CSSProperties}
          >
            {row.items.map((item) => {
              const rarity = itemRarity(item.name);
              return (
                <li
                  className="editable-guide-item"
                  key={item.name}
                  style={{ '--rarity-color': rarity.color } as CSSProperties}
                >
                  <div className="editable-guide-icon">
                    <img
                      src={itemIcons.get(item.name.replaceAll('’', "'"))}
                      alt={`${item.name} game icon`}
                      width="128"
                      height="128"
                    />
                    <span className="editable-guide-rarity">{rarity.rarity}</span>
                    <span
                      className="editable-guide-ratio"
                      aria-label={`${item.badge} ${item.badgeLabel ?? 'relative stack weight'}`}
                    >
                      {item.badge}
                      {item.badgeLabel && <small>{item.badgeLabel}</small>}
                    </span>
                  </div>
                  <h4>
                    <ExternalLink href={itemWiki(item.name)}>{item.name}</ExternalLink>
                  </h4>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <footer className="editable-guide-legend">
        <div className="editable-guide-legend-title">
          <h3>How to read the numbers</h3>
          <p className="editable-guide-disclaimer">{guide.footer}</p>
        </div>
        <div className="editable-guide-legend-copy">
          <ul>
            {guide.legend.map((line) => (
              <li key={line.label}>
                <strong>{line.label}</strong> = {line.text}
              </li>
            ))}
          </ul>
          {guide.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </footer>
    </div>
  );
}
