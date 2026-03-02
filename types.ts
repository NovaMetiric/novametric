import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  benefits?: string[];
  deliverables?: string[];
  icon: React.ReactNode;
}

export interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  readingTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}
