import drifterGuide from './drifter-guide.json';

export type EditableGuide = {
  title: string;
  subtitle: string;
  intro: string;
  rows: {
    title: string;
    summary: string;
    color: string;
    items: { name: string; description: string; badge: string; badgeLabel?: string }[];
  }[];
  legend: { label: string; text: string }[];
  notes: string[];
  footer: string;
};

const files = import.meta.glob('./editable-guides/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, EditableGuide>;

export const editableGuides: Record<string, EditableGuide> = Object.fromEntries(
  Object.entries(files).map(([path, guide]) => [
    path.split('/').pop()!.replace('.json', ''),
    guide,
  ]),
);
editableGuides.drifter = drifterGuide;
