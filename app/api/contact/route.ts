import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (3 requests per 5 minutes)
    const identifier = getClientIdentifier(request)
    const rateLimitResult = rateLimit(`contact:${identifier}`, 3, 300000)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: `Çok fazla mesaj gönderdiniz. Lütfen ${Math.ceil(rateLimitResult.retryAfter / 60)} dakika bekleyin.`
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString()
          }
        }
      )
    }

    const { name, email, phone, company, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen zorunlu alanları doldurun' },
        { status: 400 }
      )
    }

    // Name validation (min 2 chars, max 100)
    if (name.trim().length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir isim giriniz' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      )
    }

    // Message validation (min 10 chars, max 1000)
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Mesajınız en az 10 karakter olmalıdır' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Mesajınız en fazla 1000 karakter olabilir' },
        { status: 400 }
      )
    }

    // Phone validation (optional, but if provided must be valid)
    if (phone && phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/
      if (!phoneRegex.test(phone) || phone.length < 10) {
        return NextResponse.json(
          { error: 'Geçerli bir telefon numarası giriniz' },
          { status: 400 }
        )
      }
    }

    // Insert contact message
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        message: message.trim(),
        status: 'new'
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Mesaj gönderilirken bir hata oluştu' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
    })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin' },
      { status: 500 }
    )
  }
}