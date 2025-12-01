import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (5 requests per minute)
    const identifier = getClientIdentifier(request)
    const rateLimitResult = rateLimit(`newsletter:${identifier}`, 5, 60000)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: `Çok fazla istek gönderdiniz. Lütfen ${rateLimitResult.retryAfter} saniye bekleyin.`
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString()
          }
        }
      )
    }

    const { email } = await request.json()

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      )
    }

    // Email format validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'Bu e-posta adresi zaten kayıtlı' },
        { status: 400 }
      )
    }

    // Insert new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, status: 'active' }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Kayıt sırasında bir hata oluştu' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Bültenimize başarıyla abone oldunuz!'
    })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin' },
      { status: 500 }
    )
  }
}