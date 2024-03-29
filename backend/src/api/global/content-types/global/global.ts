// Interface automatically generated by schemas-to-ts

import { Metadata } from '../../../../components/meta/interfaces/Metadata';
import { Media } from '../../../../components/shared/interfaces/Media';
import { NotificationBanner } from '../../../../components/elements/interfaces/NotificationBanner';
import { Navbar } from '../../../../components/layout/interfaces/Navbar';
import { Footer } from '../../../../components/layout/interfaces/Footer';
import { Metadata_Plain } from '../../../../components/meta/interfaces/Metadata';
import { NotificationBanner_Plain } from '../../../../components/elements/interfaces/NotificationBanner';
import { Navbar_Plain } from '../../../../components/layout/interfaces/Navbar';
import { Footer_Plain } from '../../../../components/layout/interfaces/Footer';
import { Metadata_NoRelations } from '../../../../components/meta/interfaces/Metadata';
import { NotificationBanner_NoRelations } from '../../../../components/elements/interfaces/NotificationBanner';
import { Navbar_NoRelations } from '../../../../components/layout/interfaces/Navbar';
import { Footer_NoRelations } from '../../../../components/layout/interfaces/Footer';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Global {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    metadata?: Metadata;
    favicon: { data: Media };
    notificationBanner?: NotificationBanner;
    navbar?: Navbar;
    footer?: Footer;
    locale: string;
    localizations?: { data: Global[] };
  };
}
export interface Global_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  metadata?: Metadata_Plain;
  favicon: Media;
  notificationBanner?: NotificationBanner_Plain;
  navbar?: Navbar_Plain;
  footer?: Footer_Plain;
  locale: string;
  localizations?: Global[];
}

export interface Global_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  metadata?: Metadata_NoRelations;
  favicon: number;
  notificationBanner?: NotificationBanner_NoRelations;
  navbar?: Navbar_NoRelations;
  footer?: Footer_NoRelations;
  locale: string;
  localizations?: Global[];
}

export interface Global_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  metadata?: Metadata_Plain;
  favicon: AdminPanelRelationPropertyModification<Media>;
  notificationBanner?: NotificationBanner_Plain;
  navbar?: Navbar_Plain;
  footer?: Footer_Plain;
  locale: string;
  localizations?: Global[];
}
