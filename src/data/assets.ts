const images = import.meta.glob('../../assets/**/*.{png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
export const asset = (path: string) => images[`../../assets/${path}`];

export const maps = Object.entries(images)
  .filter(([path]) => path.startsWith('../../assets/maps/'))
  .map(([path, image]) => ({
    id: path.split('/').pop()!.replace('.png', ''),
    name: path.split('/').pop()!.replace('.png', '').replaceAll('-', ' '),
    image,
  }));
