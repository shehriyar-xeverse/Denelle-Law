/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, JobPosting, VideoGuide, Testimonial } from './types';

export const PARTNERS_LOGOS = [
  { name: 'CATIC', desc: 'New England’s Largest Title Insurer' },
  { name: 'Simplifile', desc: 'Secure E-Recording Solutions' },
  { name: 'ARAG', desc: 'Top legal insurance networks' },
  { name: 'Commonwealth', desc: 'Commonwealth Land Title Insurance' },
  { name: 'Secure Insight', desc: 'Verified Closing Professionals' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Raymond A. Denelle, Esq.',
    role: 'Managing Partner & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    bio: 'Raymond Denelle founded the firm with a vision of blending classical advocacy and cutting-edge operational speed. He specializes in intricate commercial real estate acquisitions, zoning approvals, and corporate strategy, holding over twenty-five years of experience across New England courts.',
    credentials: [
      'J.D., Boston University School of Law',
      'B.A. in Political Science, Brown University',
      'Member, Rhode Island & Massachusetts Bar Associations',
    ],
    email: 'rdenelle@denellelaw.com',
  },
  {
    id: '2',
    name: 'Clarissa Vance, Esq.',
    role: 'Senior Associate — Real Estate & Closing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    bio: 'Clarissa manages the residential conveyance and estate division. Drawing from her deep background in lender compliance and title curation, she guides families and brokers securely through purchase, refinance, and title clearing operations.',
    credentials: [
      'J.D., Fordham University School of Law',
      'B.A. in Finance, Boston College',
      'Affiliated with ALTA (American Land Title Association)',
    ],
    email: 'cvance@denellelaw.com',
  },
  {
    id: '3',
    name: 'Marcus K. Sterling, Esq.',
    role: 'Partner — Business & Corporate Law',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    bio: 'Marcus consults mid-sized corporations, venture funds, and founders on mergers, equity restructuring, and operational compliance. He takes a proactive approach to risk management, positioning entities for sustainable growth.',
    credentials: [
      'J.D., Columbia Law School',
      'B.S. in Economics, Wharton School of Pennsylvania',
      'Admitted to US District Court of Rhode Island',
    ],
    email: 'msterling@denellelaw.com',
  },
];

export const TIMELINE_EVENTS = [
  {
    year: '1998',
    title: 'Inception of Excellence',
    desc: 'Raymond A. Denelle launches counsel chambers in Providence, focusing on bespoke commercial real estate and regional bank advocacy.',
  },
  {
    year: '2005',
    title: 'Expansion of Practice Areas',
    desc: 'We integrate dedicated Corporate Formations and Estate Management divisions, hosting multi-generational wealth preservation councils.',
  },
  {
    year: '2012',
    title: 'National Digital Compliance',
    desc: 'Denelle Law becomes one of the fast adopters of certified e-closing technologies, partnering with CATIC, Simplifile and Secure Insight.',
  },
  {
    year: '2019',
    title: 'Providence Headquarters Expansion',
    desc: 'The firm moves to the suite of the Providence Capital Building on Westminster St, doubling team count and client resources.',
  },
  {
    year: '2026',
    title: 'A Vision for Modern Advisory',
    desc: 'Refining legal frameworks to support modern investment portfolios, digital land agreements, and high-impact enterprise representation.',
  },
];

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Senior Conveyancing Paralegal',
    department: 'Real Estate Division',
    location: 'Providence, RI (Hybrid)',
    type: 'Full-time',
    description: 'We are seeking an expert Conveyancing Paralegal with verified experience in TRID disclosure preparation, title compilation, and coordinator communication to manage transaction lifecycles.',
    requirements: [
      'Minimum of 4 years of residential/commercial closing experience',
      'High proficiency with CloserWare or similar settlement software',
      'Deep mastery of TRID, ALTA settlement statements, and CD balancing',
      'Excellent organizational coordination and client containment',
    ],
    responsibilities: [
      'Prepare comprehensive closing packages and balance settlement statements with lenders.',
      'Order and analyze municipal liens, structural files, and title insurance binders.',
      'Serve as direct contact to buyers, sellers, brokers, and banking representatives.',
      'Prepare post-closing disbursement files and recording packets.',
    ],
  },
  {
    id: 'job-2',
    title: 'Corporate & Estate Planning Associate',
    department: 'Business & Estate Division',
    location: 'Providence, RI',
    type: 'Full-time',
    description: 'Seeking a licensed Attorney with 2-4 years of experience drafted agreements, trust documents, and corporate filings to service high-net-worth individuals and corporate client structures.',
    requirements: [
      'Juris Doctor (J.D.) degree and active Bar Membership in RI (MA/CT admission is a plus)',
      'Strong research background and contract preparation expertise',
      'Outstanding interpersonal presentation and consultative prowess',
    ],
    responsibilities: [
      'Formulate tailored trusts, wills, powers of attorney, and healthcare mandates.',
      'Draft partnership agreements, operating manuals, and merger resolutions.',
      'Advise clients on wealth preservation techniques, tax liability, and asset curation.',
      'Represent corporate clients in contractual disputes and regional negotiations.',
    ],
  },
];

export const VIDEO_GUIDES: VideoGuide[] = [
  {
    id: 'vid-1',
    title: 'The Home Buying Roadmap & Mortgage Underwriting',
    category: 'buying-mortgage',
    duration: '6:45',
    embedUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'A detailed legal layout on preparing for a purchase. Learn how purchase-and-sale agreements dictate real estate commitments and how to prepare for lender audits during banking reviews.',
  },
  {
    id: 'vid-2',
    title: 'Commercial vs. Residential Financing Education',
    category: 'financing',
    duration: '8:12',
    embedUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    description: 'Our lead corporate partners detail the legal variances between institutional mortgages, private-equity backing, interest options, and zoning contingency riders.',
  },
  {
    id: 'vid-3',
    title: 'Closing Disclosure Mechanics & TRID Standards',
    category: 'trid',
    duration: '5:30',
    embedUrl: 'https://images.unsplash.com/photo-1543185377-b75220ac9b51?auto=format&fit=crop&q=80&w=800',
    description: 'Understand TRID guidelines (TILA-RESPA Integrated Disclosure). Learn the essential 3-day rule that prevents mortgage delays and guarantees fully transparent settlement layouts.',
  },
  {
    id: 'vid-4',
    title: 'Curating Title Searches & Closing Assets',
    category: 'closing-credit',
    duration: '7:00',
    embedUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800',
    description: 'A walkthrough on clearing municipal clouds, easement challenges, tax liens, and mortgage discharges to secure clean title policies before transaction closing.',
  },
  {
    id: 'vid-5',
    title: 'Guide to Selling Your Property Securely',
    category: 'selling',
    duration: '5:50',
    embedUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    description: 'For property owners. Discover seller legal disclosure liabilities, title curative deeds, power of attorney setups for closing, and wire fraud protection instructions.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Alexander Vance',
    role: 'Founder, Vance Properties LLC',
    quote: 'Denelle Law is of unparalleled execution caliber. They navigated an extremely complex zoning variance and commercial closing of $14.5M on tight timelines. Their digitised title clearing and closing process is incredible.',
    stars: 5,
  },
  {
    id: 't-2',
    clientName: 'Elena Rostova',
    role: 'Homeowner & Seller',
    quote: 'Selling a family estate from another state is terrifying, but their real estate team coordinated everything. The visual video guides prepared us, and their title experts cleared decades of old municipal errors effortlessly.',
    stars: 5,
  },
  {
    id: 't-3',
    clientName: 'Julian Sterling',
    role: 'Managing Director, Sterling FinTech',
    quote: 'Raymond and Marcus have advised us through angel rounds, restructuring, and contract compliance. Their corporate acumen matches top-tier big-law firms, but is combined with custom-tailored partner-level attention.',
    stars: 5,
  },
  {
    id: 't-4',
    clientName: 'The Montgomery Family',
    role: 'Estate Planning Clients',
    quote: 'We spent months putting off our family trusts and estate design until meeting with Vance. She explained everything beautifully and curated a legacy package that gives our family complete security.',
    stars: 5,
  },
];
