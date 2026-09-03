'use client';

import { ArrowUpRight, Play } from 'lucide-react';
import { useState } from 'react';

const geniallyUrl = 'https://view.genially.com/648a40f9ca5674001a0b7be0';

export default function GeniallyEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={geniallyUrl}
        title="Gaplandia: interactive GAAP learning experience"
        loading="lazy"
        allow="fullscreen"
        allowFullScreen
      />
    );
  }

  return (
    <div className="genially-consent">
      <p className="genially-kicker">Interactive case study</p>
      <h3>GAPLANDIA</h3>
      <p className="genially-intro">Explore the gamified world created for the GAAP learning programme.</p>
      <button type="button" onClick={() => setLoaded(true)}>
        <Play size={17} fill="currentColor" />
        Load interactive experience
      </button>
      <p className="genially-privacy">This content is hosted by Genially. Loading it may allow Genially to use cookies or receive technical data according to its policies.</p>
      <a href={geniallyUrl} target="_blank" rel="noreferrer">
        Open directly on Genially <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
