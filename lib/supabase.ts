import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface NewsletterSubscriber {
  id?: string
  email: string
  subscribed_at?: string
  status?: 'active' | 'unsubscribed'
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  created_at?: string
  status?: 'new' | 'read' | 'replied'
}

export interface QuoteRequest {
  id?: string
  name: string
  email: string
  phone: string
  company: string
  sector: string
  services: string[]
  quantity?: string
  budget?: string
  deadline?: string
  message?: string
  created_at?: string
  status?: 'new' | 'processing' | 'sent' | 'rejected'
}