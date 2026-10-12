import { useRef, useState } from 'react';
import ExternalLink from './ExternalLink';
export default function ImageViewer({ src, name }: { src: string; name: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(100);
  return (
    <>
      <button
        className="image-open"
        onClick={() => {
          setZoom(100);
          dialog.current?.showModal();
        }}
      >
        <img src={src} alt={`${name} AI-generated infographic; recommendations are unverified`} />
        <span>⤢ Inspect full-resolution guide</span>
      </button>
      <dialog
        ref={dialog}
        className="viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="viewer-toolbar">
          <strong>{name}</strong>
          <div className="zoom-controls">
            <button
              aria-label="Zoom out"
              disabled={zoom <= 50}
              onClick={() => setZoom(Math.max(50, zoom - 25))}
            >
              −
            </button>
            <output>{zoom}%</output>
            <button
              aria-label="Zoom in"
              disabled={zoom >= 250}
              onClick={() => setZoom(Math.min(250, zoom + 25))}
            >
              +
            </button>
            <button onClick={() => setZoom(100)}>Reset</button>
          </div>
          <button aria-label="Close image viewer" onClick={() => dialog.current?.close()}>
            ✕
          </button>
        </div>
        <div className="viewer-scroll">
          <img
            src={src}
            alt={`${name} full-resolution infographic`}
            style={{ width: `${zoom}%` }}
          />
        </div>
        <p className="viewer-help">
          Scroll or swipe to inspect · Escape to close ·{' '}
          <ExternalLink href={src}>Open original image</ExternalLink>
        </p>
      </dialog>
    </>
  );
}
