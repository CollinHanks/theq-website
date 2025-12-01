import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (2 requests per 10 minutes)
    const identifier = getClientIdentifier(request)
    const rateLimitResult = rateLimit(`quote:${identifier}`, 2, 600000)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: `Çok fazla teklif talebi gönderdiniz. Lütfen ${Math.ceil(rateLimitResult.retryAfter / 60)} dakika bekleyin.`
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString()
          }
        }
      )
    }

    const {
      name,
      email,
      phone,
      company,
      sector,
      services,
      quantity,
      budget,
      deadline,
      message
    } = await request.json()

    // Validation
    if (!name || !email || !phone || !company || !sector || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'Lütfen zorunlu alanları doldurun' },
        { status: 400 }
      )
    }

    // Name validation
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

    // Phone validation
    const phoneRegex = /^[\d\s\+\-\(\)]+$/
    if (!phoneRegex.test(phone) || phone.length < 10) {
      return NextResponse.json(
        { error: 'Geçerli bir telefon numarası giriniz' },
        { status: 400 }
      )
    }

    // Company validation
    if (company.trim().length < 2 || company.length > 100) {
      return NextResponse.json(
        { error: 'Lütfen geçerli bir şirket adı giriniz' },
        { status: 400 }
      )
    }

    // Services validation (max 10)
    if (!Array.isArray(services) || services.length > 10) {
      return NextResponse.json(
        { error: 'Lütfen en fazla 10 hizmet seçiniz' },
        { status: 400 }
      )
    }

    // Message validation (optional, but if provided must be valid)
    if (message && message.length > 1000) {
      return NextResponse.json(
        { error: 'Mesajınız en fazla 1000 karakter olabilir' },
        { status: 400 }
      )
    }

    // Insert quote request
    const { data, error } = await supabase
      .from('quote_requests')
      .insert([{
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company.trim(),
        sector: sector.trim(),
        services: services,
        quantity: quantity?.trim() || null,
        budget: budget?.trim() || null,
        deadline: deadline?.trim() || null,
        message: message?.trim() || null,
        status: 'new'
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Teklif talebi gönderilirken bir hata oluştu' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Teklif talebiniz başarıyla alındı! En kısa sürede size özel bir teklif hazırlayacağız.'
    })
  } catch (error) {
    console.error('Quote error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin' },
      { status: 500 }
    )
  }
}