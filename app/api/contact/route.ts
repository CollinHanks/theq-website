import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
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

    // Insert contact message
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
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