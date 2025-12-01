import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
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

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      )
    }

    // Insert quote request
    const { data, error } = await supabase
      .from('quote_requests')
      .insert([{
        name,
        email,
        phone,
        company,
        sector,
        services,
        quantity: quantity || null,
        budget: budget || null,
        deadline: deadline || null,
        message: message || null,
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