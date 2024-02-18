// Interface automatically generated by schemas-to-ts

import { Logo } from './Logo';
import { Link } from '../../links/interfaces/Link';
import { SocialLink } from '../../links/interfaces/SocialLink';
import { Category } from '../../../api/category/content-types/category/category';
import { Logo_Plain } from './Logo';
import { Link_Plain } from '../../links/interfaces/Link';
import { SocialLink_Plain } from '../../links/interfaces/SocialLink';
import { Category_Plain } from '../../../api/category/content-types/category/category';
import { Logo_NoRelations } from './Logo';
import { Link_NoRelations } from '../../links/interfaces/Link';
import { SocialLink_NoRelations } from '../../links/interfaces/SocialLink';

export interface Footer {
  footerLogo?: Logo;
  menuLinks: Link[];
  legalLinks: Link[];
  socialLinks: SocialLink[];
  categories: { data: Category[] };
}
export interface Footer_Plain {
  footerLogo?: Logo_Plain;
  menuLinks: Link_Plain[];
  legalLinks: Link_Plain[];
  socialLinks: SocialLink_Plain[];
  categories: Category_Plain[];
}

export interface Footer_NoRelations {
  footerLogo?: Logo_NoRelations;
  menuLinks: Link_NoRelations[];
  legalLinks: Link_NoRelations[];
  socialLinks: SocialLink_NoRelations[];
  categories: number[];
}

