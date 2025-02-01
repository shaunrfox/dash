import { Site } from '../../types';
import {
  siteItemStyles,
  linkStyles,
  titleStyles,
  descriptionStyles,
} from './siteLinkStyles';

export const SiteLink = ({ site }: { site: Site }) => {
  return (
    <li className={siteItemStyles}>
      <a href={site.url} className={linkStyles}>
        <div className={titleStyles}>{site.name}</div>
        <div className={descriptionStyles}>{site.description}</div>
      </a>
    </li>
  );
};
