import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}