
// Import React to provide namespace for ReactNode
import React from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface PolicyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  large?: boolean;
}

export interface StatProps {
  label: string;
  value: string;
}

export type ViewType = 
  | 'home' 
  | 'about' 
  | 'donate' 
  | 'join-group' 
  | 'volunteer' 
  | 'news' 
  | 'contact' 
  | 'agriculture' 
  | 'infrastructure'
  | 'history-policies'
  | 'privacy-policy'
  | 'terms-of-service'
  | 'membership-registration';