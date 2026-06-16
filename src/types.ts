/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'team'
  | 'careers'
  | 'practice-areas'
  | 'real-estate'
  | 'business-corporate'
  | 'estate-planning'
  | 'personal-injury'
  | 'resources-videos'
  | 'resources-testimonials'
  | 'contact'
  | 'order-title';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
  email: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface VideoGuide {
  id: string;
  title: string;
  category: 'buying-mortgage' | 'financing' | 'closing-credit' | 'selling' | 'trid';
  duration: string;
  embedUrl: string; // fallback preview embed or styled layout
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string; // e.g. Homeowner, Business Owner, Advisor
  quote: string;
  stars: number;
}
