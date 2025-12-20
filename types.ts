import { LucideIcon } from 'lucide-react';

export enum ServiceType {
  TRANSPORT = 'TRANSPORT',
  DATA_IA = 'DATA_IA'
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}