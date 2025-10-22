import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-neutral-300 text-lg">
              Last updated: October 23, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Introduction</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The Q Atelier ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website theqatelier.com (the "Site") or use our services.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Information We Collect</h2>
              
              <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">Personal Information</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
                <li>Fill out a contact form or request a quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our Site</li>
                <li>Place an order for our products or services</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-6">
                This information may include: name, email address, phone number, company name, job title, mailing address, billing information, and any other information you choose to provide.
              </p>

              <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">Automatically Collected Information</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Search terms used to reach our Site</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">How We Use Your Information</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Process and fulfill your orders and requests</li>
                <li>Communicate with you about our products and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and customer service</li>
                <li>Analyze usage trends and preferences</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Cookies and Tracking Technologies</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">How We Share Your Information</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., payment processing, shipping, email marketing)</li>
                <li><strong>Business Partners:</strong> Trusted partners who help us deliver our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Data Security</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Your Privacy Rights</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Portability:</strong> Request transfer of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:privacy@theqatelier.com" className="text-brand-lilac hover:text-brand-lilac-dark">privacy@theqatelier.com</a>
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">International Data Transfers</h2>
              <p className="text-neutral-700 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our Site, you consent to such transfers.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Children's Privacy</h2>
              <p className="text-neutral-700 leading-relaxed">
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Changes to This Privacy Policy</h2>
              <p className="text-neutral-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Contact Us</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <p className="text-neutral-700 mb-2"><strong>The Q Atelier</strong></p>
                <p className="text-neutral-700 mb-2">Istanbul, Türkiye</p>
                <p className="text-neutral-700 mb-2">Email: <a href="mailto:privacy@theqatelier.com" className="text-brand-lilac hover:text-brand-lilac-dark">privacy@theqatelier.com</a></p>
                <p className="text-neutral-700">Phone: <Link href="/contact" className="text-brand-lilac hover:text-brand-lilac-dark">Contact Page</Link></p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center py-8 border-t border-neutral-300">
              <Link 
                href="/" 
                className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}