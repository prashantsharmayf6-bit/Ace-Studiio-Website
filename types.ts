import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: boolean;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}