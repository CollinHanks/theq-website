import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowLeft } from 'lucide-react'

// Industry data
const industriesData = {
  'luxury-hotels': {
    name: 'Luxury Hotels',
    description: 'Premium textile solutions for 5-star hotels and luxury accommodations worldwide',
    fullDescription: 'Transform your luxury hotel with our signature textile collections. From ultra-premium Egyptian cotton bedding to bespoke terry towels and elegant table linens, we deliver exceptional quality that elevates guest experiences. Our hotel textile solutions meet the highest international standards while reflecting your property\'s unique character and brand identity.',
    products: [
      'Egyptian Cotton Bed Linens (300-1000 thread count)',
      'Premium Terry Towels & Bathrobes',
      'Duvet Covers & Pillow Collections',
      'Mattress Protectors & Toppers',
      'Decorative Cushions & Throws',
      'Blackout Curtains & Drapery',
      'Table Linens for Hotel Restaurants',
      'Custom Embroidery & Branding'
    ],
    benefits: [
      'Luxury guest experience that exceeds 5-star standards',
      'Durable construction for commercial laundering cycles',
      'Fully customizable to match your brand standards',
      'Fast turnaround times for large volume orders',
      'Volume pricing for hotel chains and groups',
      'Dedicated account management'
    ],
    features: [
      {
        title: 'Premium Materials',
        description: 'Only the finest Egyptian cotton, Turkish terry, and European linens'
      },
      {
        title: 'Custom Branding',
        description: 'Embroidery, monogramming, and custom color matching available'
      },
      {
        title: 'Commercial Grade',
        description: 'Tested to withstand 300+ industrial wash cycles'
      },
      {
        title: 'Quick Delivery',
        description: 'Standard orders delivered within 4-6 weeks worldwide'
      }
    ],
    stats: {
      projects: '150+',
      clients: 'Global 5-Star Chains',
      satisfaction: '98%',
      experience: '7+ Years'
    }
  },
  'fine-dining': {
    name: 'Fine Dining',
    description: 'Elegant table linens and restaurant textiles for upscale dining establishments',
    fullDescription: 'Elevate your restaurant\'s ambiance with our curated collection of fine dining textiles. Our restaurant linens combine sophisticated design with practical durability, featuring stain-resistant tablecloths, premium napkins, and elegant table runners. Perfect for Michelin-starred restaurants, hotel dining rooms, and upscale bistros seeking to create memorable dining experiences.',
    products: [
      'Jacquard & Damask Tablecloths',
      'Premium Cloth Napkins (Multiple Sizes)',
      'Table Runners & Placemats',
      'Chef Uniforms & Aprons',
      'Service Towels & Bar Mops',
      'Banquet Linens for Events',
      'Chair Covers & Sashes',
      'Custom Restaurant Branding'
    ],
    benefits: [
      'Stain-resistant finishes for easy maintenance',
      'Color-fast fabrics that maintain vibrancy',
      'Commercial laundering compatible',
      'Custom embroidery with restaurant logo',
      'Matching sets for brand consistency',
      'Multiple size options available'
    ],
    features: [
      {
        title: 'Stain Protection',
        description: 'Advanced stain-resistant treatments for wine, oil, and food spills'
      },
      {
        title: 'Elegant Designs',
        description: 'Classic and contemporary patterns to match any restaurant aesthetic'
      },
      {
        title: 'Easy Care',
        description: 'Wrinkle-resistant fabrics that maintain crisp appearance'
      },
      {
        title: 'Bulk Orders',
        description: 'Special pricing for restaurant groups and chain establishments'
      }
    ],
    stats: {
      projects: '120+',
      clients: 'Michelin Restaurants',
      satisfaction: '99%',
      experience: '7+ Years'
    }
  },
  'boutique-resorts': {
    name: 'Boutique Resorts',
    description: 'Bespoke textile collections for exclusive resort properties and destination hotels',
    fullDescription: 'Create unforgettable guest experiences with our bespoke resort textile collections. We specialize in crafting unique textile programs that reflect your property\'s distinctive character and location. From beachfront villas to mountain retreats, our customizable solutions include everything from guest room linens to spa textiles, all designed to enhance your brand story and guest satisfaction.',
    products: [
      'Custom Guest Room Textiles',
      'Outdoor & Poolside Linens',
      'Spa & Wellness Textiles',
      'Beach Towels & Cabana Sets',
      'Restaurant & Bar Linens',
      'Staff Uniforms & Accessories',
      'Decorative Pillows & Throws',
      'Complete Textile Programs'
    ],
    benefits: [
      'Fully customizable designs unique to your property',
      'Reflects your resort\'s character and location',
      'Premium quality materials and craftsmanship',
      'Comprehensive textile programs from concept to delivery',
      'Dedicated account management and design support',
      'Seasonal collection updates available'
    ],
    features: [
      {
        title: 'Bespoke Design',
        description: 'Custom patterns, colors, and textures created exclusively for your resort'
      },
      {
        title: 'Location-Inspired',
        description: 'Designs that reflect your destination\'s culture and environment'
      },
      {
        title: 'Full Programs',
        description: 'Complete textile solutions for every area of your property'
      },
      {
        title: 'Personal Service',
        description: 'Dedicated design team working directly with your property'
      }
    ],
    stats: {
      projects: '80+',
      clients: 'Boutique Properties',
      satisfaction: '100%',
      experience: '7+ Years'
    }
  },
  'wellness-centers': {
    name: 'Wellness Centers',
    description: 'Spa and wellness textiles designed for comfort, hygiene, and luxury',
    fullDescription: 'Enhance your wellness center with our specialized spa textile collection. Designed specifically for high-traffic spa and wellness environments, our products combine ultimate softness with exceptional durability. From ultra-absorbent spa towels to hypoallergenic treatment linens, every item is crafted to promote relaxation while meeting stringent hygiene standards.',
    products: [
      'Ultra-Soft Spa Towels (Multiple Sizes)',
      'Treatment Table Linens & Sheets',
      'Luxury Bathrobes & Slippers',
      'Yoga & Meditation Blankets',
      'Sauna & Hammam Towels',
      'Staff Uniforms & Scrubs',
      'Pillow Cases & Bolster Covers',
      'Antimicrobial Options Available'
    ],
    benefits: [
      'Hypoallergenic materials for sensitive skin',
      'Exceptional absorbency and quick-dry technology',
      'Ultra-soft texture for maximum comfort',
      'Antimicrobial finishes available',
      'Spa-grade quality that lasts',
      'Commercial laundering tested'
    ],
    features: [
      {
        title: 'Hygiene First',
        description: 'Antimicrobial treatments and hypoallergenic materials'
      },
      {
        title: 'Ultra Absorbent',
        description: 'Premium terry cloth with superior water absorption'
      },
      {
        title: 'Soft Touch',
        description: 'Specially combed cotton for cloud-like softness'
      },
      {
        title: 'Durable',
        description: 'Maintains quality after hundreds of commercial washes'
      }
    ],
    stats: {
      projects: '90+',
      clients: 'Wellness Facilities',
      satisfaction: '97%',
      experience: '7+ Years'
    }
  },
  'corporate-venues': {
    name: 'Corporate Venues',
    description: 'Professional textile solutions for conference centers, offices, and corporate events',
    fullDescription: 'Outfit your corporate venue with professional-grade textiles that reflect your business excellence. Our corporate textile solutions are designed for high-traffic environments, offering durability and style for conference centers, executive offices, and corporate hospitality spaces. From boardroom table linens to event banquet textiles, we provide complete textile programs that enhance your professional image.',
    products: [
      'Conference Table Linens & Runners',
      'Banquet & Event Textiles',
      'Office Curtains & Window Treatments',
      'Executive Lounge Linens',
      'Corporate Uniforms & Aprons',
      'Branded Napkins & Towels',
      'Stage Draping & Backdrops',
      'Custom Corporate Colors'
    ],
    benefits: [
      'Professional appearance for business settings',
      'Corporate branding and logo options',
      'Bulk order discounts for large organizations',
      'Long-lasting durability for frequent use',
      'Easy maintenance and care',
      'Fast reordering for repeat clients'
    ],
    features: [
      {
        title: 'Professional Quality',
        description: 'Polished appearance suitable for executive environments'
      },
      {
        title: 'Brand Integration',
        description: 'Custom colors, logos, and corporate branding available'
      },
      {
        title: 'Bulk Pricing',
        description: 'Competitive rates for large volume corporate orders'
      },
      {
        title: 'Quick Turnaround',
        description: 'Priority production for urgent corporate events'
      }
    ],
    stats: {
      projects: '110+',
      clients: 'Corporate Clients',
      satisfaction: '96%',
      experience: '7+ Years'
    }
  },
  'cafes-bistros': {
    name: 'Cafés & Bistros',
    description: 'Casual yet stylish textile solutions for cafes, bistros, and casual dining',
    fullDescription: 'Add warmth and character to your cafe or bistro with our carefully curated textile collection. Designed for the fast-paced casual dining environment, our products balance style with practicality. From charming tablecloths to durable staff aprons, each piece is crafted to withstand daily use while maintaining its appeal. Perfect for cafes, bistros, and casual restaurants that want to create a welcoming atmosphere.',
    products: [
      'Casual Table Linens & Tablecloths',
      'Barista & Server Aprons',
      'Kitchen Towels & Cleaning Cloths',
      'Outdoor Seating Cushions',
      'Cloth Napkins & Placemats',
      'Window Treatments & Curtains',
      'Menu Covers & Holders',
      'Trendy Patterns & Colors'
    ],
    benefits: [
      'Affordable pricing for small businesses',
      'Easy care and maintenance fabrics',
      'Trendy designs and contemporary patterns',
      'Quick replacement turnaround',
      'Mix and match options for variety',
      'Small order quantities available'
    ],
    features: [
      {
        title: 'Affordable',
        description: 'Budget-friendly options without compromising quality'
      },
      {
        title: 'Trendy Styles',
        description: 'Contemporary designs that appeal to modern cafe culture'
      },
      {
        title: 'Easy Care',
        description: 'Machine washable and low maintenance fabrics'
      },
      {
        title: 'Small Batches',
        description: 'No minimum order requirements for independent cafes'
      }
    ],
    stats: {
      projects: '200+',
      clients: 'Cafe Establishments',
      satisfaction: '95%',
      experience: '7+ Years'
    }
  },
  'beach-clubs': {
    name: 'Beach Clubs',
    description: 'Durable outdoor textiles for beach clubs, pool areas, and waterfront venues',
    fullDescription: 'Equip your beach club with textiles built to withstand sun, sand, and sea. Our specialized beach club collection features fade-resistant, quick-dry fabrics designed for outdoor hospitality environments. From oversized beach towels to weather-resistant cushions, every product is engineered for durability in coastal conditions while maintaining luxury appeal that impresses discerning guests.',
    products: [
      'Beach & Pool Towels (XL & XXL)',
      'Outdoor Cushions & Furniture Covers',
      'Cabana Curtains & Drapes',
      'Weather-Resistant Linens',
      'Beach Bags & Tote Accessories',
      'Staff Uniforms (Resort Wear Style)',
      'Shade Umbrellas & Canopies',
      'UV-Resistant Fabrics'
    ],
    benefits: [
      'UV-resistant fabrics prevent fading',
      'Quick-dry technology for poolside use',
      'Sand-resistant weaves stay clean longer',
      'Chlorine and saltwater resistant materials',
      'Vibrant, fade-proof colors',
      'Extra-large sizes for comfort'
    ],
    features: [
      {
        title: 'UV Protection',
        description: 'Fabrics treated to resist sun damage and fading'
      },
      {
        title: 'Quick Dry',
        description: 'Moisture-wicking materials dry fast in humid conditions'
      },
      {
        title: 'Saltwater Safe',
        description: 'Materials that resist saltwater and chlorine damage'
      },
      {
        title: 'Oversized',
        description: 'Extra-large towels and cushions for premium comfort'
      }
    ],
    stats: {
      projects: '60+',
      clients: 'Beach Destinations',
      satisfaction: '98%',
      experience: '7+ Years'
    }
  },
  'private-yachts': {
    name: 'Private Yachts',
    description: 'Luxury marine textiles for superyachts and private vessels',
    fullDescription: 'Outfit your yacht with premium marine-grade textiles that combine luxury with functionality. Our yacht textile collection is specifically designed for the unique demands of maritime environments, featuring materials that resist moisture, mildew, and salt while maintaining the elegance expected on luxury vessels. From guest cabin linens to outdoor seating, we provide complete textile solutions for superyachts and private boats.',
    products: [
      'Marine-Grade Bed Linens',
      'Moisture-Resistant Bath Towels',
      'Outdoor Deck Cushions & Covers',
      'Galley & Dining Textiles',
      'Crew Uniforms (Nautical Style)',
      'Yacht Curtains & Blinds',
      'Non-Slip Mats & Rugs',
      'Compact Storage Solutions'
    ],
    benefits: [
      'Marine-grade materials built for sea conditions',
      'Mildew and mold resistant treatments',
      'Compact storage friendly designs',
      'Salt and moisture resistant',
      'Luxury finishing and details',
      'Custom sizing for yacht spaces'
    ],
    features: [
      {
        title: 'Marine Grade',
        description: 'Materials specifically engineered for maritime environments'
      },
      {
        title: 'Moisture Resistant',
        description: 'Advanced treatments prevent mildew and mold growth'
      },
      {
        title: 'Luxury Quality',
        description: 'Premium materials with elegant finishing details'
      },
      {
        title: 'Custom Fit',
        description: 'Tailored sizing to fit unique yacht cabin dimensions'
      }
    ],
    stats: {
      projects: '40+',
      clients: 'Superyachts',
      satisfaction: '100%',
      experience: '7+ Years'
    }
  }
}

type IndustrySlug = keyof typeof industriesData

// Generate static params for all industry pages
export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each industry page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industriesData[slug as IndustrySlug]
  
  if (!industry) {
    return {
      title: 'Industry Not Found | The Q',
    }
  }

  return {
    title: `${industry.name} Textiles | Premium Solutions | The Q`,
    description: industry.fullDescription,
  }
}

export default async function IndustryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const industry = industriesData[slug as IndustrySlug]

  if (!industry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-white py-20">
        <div className="container mx-auto px-6">
          <Link 
            href="/#industries"
            className="inline-flex items-center gap-2 text-brand-lilac hover:text-brand-lilac-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Industries</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="font-playfair text-5xl md:text-6xl mb-6">
              {industry.name}
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              {industry.fullDescription}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-lilac mb-2">
                  {industry.stats.projects}
                </div>
                <div className="text-sm text-neutral-400">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-lilac mb-2">
                  {industry.stats.satisfaction}
                </div>
                <div className="text-sm text-neutral-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-lilac mb-2">
                  {industry.stats.experience}
                </div>
                <div className="text-sm text-neutral-400">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl mb-8 text-brand-charcoal">
              Our Products
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.products.map((product, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-lilac mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl mb-8 text-brand-charcoal">
              Key Benefits
            </h2>
            <div className="space-y-4">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-brand-cream rounded-lg">
                  <Check className="w-5 h-5 text-brand-lilac mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl mb-12 text-brand-charcoal text-center">
              Why Choose Our {industry.name} Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industry.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Ready to Transform Your {industry.name}?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your textile needs and create a custom solution that elevates your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors inline-block"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}