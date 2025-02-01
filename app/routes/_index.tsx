import { useLoaderData } from 'react-router-dom';
import links from '../../links.json';
import type { Site } from '../types';
import { SiteLink } from '../components/SiteLink/SiteLink';

export async function loader() {
  return { links };
}

const sitesListStyles = {
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '1.5rem',
  '@media (maxWidth: 600px)': {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
};

export default function Index() {
  const { links } = useLoaderData() as { links: Site[] };

  return (
    <ul style={sitesListStyles}>
      {links.map((site: Site) => (
        <SiteLink key={site.url} site={site} />
      ))}
    </ul>
  );
}
