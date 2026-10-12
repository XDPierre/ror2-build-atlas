import { useState } from 'react';
import type { SurvivorLoadout } from '../data/abilities';
import { wiki } from '../data/references';
import ExternalLink from './ExternalLink';

export default function AbilityPanel({
  survivorName,
  loadout,
}: {
  survivorName: string;
  loadout: SurvivorLoadout;
}) {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [form, setForm] = useState(0);
  return (
    <aside className="ability-panel" aria-label={`${survivorName} abilities`}>
      <p className="eyebrow">LOADOUT / QUICK REFERENCE</p>
      <h2>{survivorName} abilities</h2>
      <p className="ability-context">{loadout.context}</p>
      {loadout.forms && (
        <label className="ability-form">
          <span className="ability-role">Form</span>
          <select
            aria-label={`${survivorName} form`}
            value={form}
            onChange={(e) => setForm(Number(e.target.value))}
          >
            {loadout.forms.map((name, i) => (
              <option key={name} value={i}>
                {name}
              </option>
            ))}
          </select>
        </label>
      )}
      <div className="ability-slots">
        {loadout.slots.map((slot) => {
          const ability = slot.choices[slot.formDependent ? form : (selected[slot.role] ?? 0)];
          return (
            <article className="ability-card" key={slot.role} data-role={slot.role}>
              <p className="ability-role">{slot.role}</p>
              {slot.choices.length > 1 && !slot.formDependent ? (
                <label>
                  <span className="sr-only">
                    {survivorName} {slot.role} ability
                  </span>
                  <select
                    value={selected[slot.role] ?? 0}
                    onChange={(e) =>
                      setSelected({ ...selected, [slot.role]: Number(e.target.value) })
                    }
                  >
                    {slot.choices.map((choice, i) => (
                      <option value={i} key={choice.name}>
                        {choice.name}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <h3>{ability.name}</h3>
              )}
              {ability.cooldown && <span className="ability-cooldown">{ability.cooldown}</span>}
              <p>{ability.summary}</p>
              {ability.note && <p className="ability-note">{ability.note}</p>}
            </article>
          );
        })}
      </div>
      <p className="ability-source">
        <ExternalLink href={`${wiki(survivorName)}#Skills`}>
          Full skills, numbers & unlocks
        </ExternalLink>
        <br />
        Wiki summaries checked October 11, 2026. Match selections to your in-game loadout. This
        reference includes common variants; selections do not change infographic rankings.
      </p>
    </aside>
  );
}
