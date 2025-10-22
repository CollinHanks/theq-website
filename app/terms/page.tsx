import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl mb-4">Terms of Service</h1>
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
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Agreement to Terms</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and The Q Atelier ("Company," "we," "us," or "our") concerning your access to and use of the theqatelier.com website (the "Site") and our products and services.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Site.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Intellectual Property Rights</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Unless otherwise indicated, the Site and all content, features, and functionality are owned by The Q Atelier and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Reproduce, distribute, modify, or create derivative works of our content</li>
                <li>Use our trademarks, logos, or branding without written permission</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                <li>Use our content for commercial purposes without authorization</li>
              </ul>
            </div>

            {/* User Representations */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">User Representations</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You are at least 18 years of age</li>
                <li>You will not access the Site through automated means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Prohibited Activities</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You may not access or use the Site for any purpose other than that for which we make it available. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Systematically retrieving data to create a collection or database</li>
                <li>Making unauthorized use of the Site</li>
                <li>Using the Site to advertise or offer to sell goods and services</li>
                <li>Engaging in unauthorized framing of or linking to the Site</li>
                <li>Interfering with or disrupting the Site's functionality</li>
                <li>Attempting to bypass any security measures</li>
                <li>Harassing, annoying, intimidating, or threatening our employees or agents</li>
                <li>Deleting copyright or proprietary rights notices</li>
                <li>Impersonating another user or person</li>
                <li>Uploading or transmitting viruses or malicious code</li>
              </ul>
            </div>

            {/* Products and Services */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Products and Services</h2>
              
              <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">Product Information</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We make every effort to display our products as accurately as possible. However, we do not guarantee that product descriptions, colors, or other content are accurate, complete, reliable, or error-free. Product images are for illustrative purposes only.
              </p>

              <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">Pricing</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We reserve the right to change prices at any time without notice. Prices are subject to change without prior notification. We are not responsible for pricing errors.
              </p>

              <h3 className="font-semibold text-xl mb-3 text-brand-charcoal">Orders and Payment</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We reserve the right to refuse or cancel any order for any reason, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Product availability</li>
                <li>Errors in product or pricing information</li>
                <li>Suspected fraud or unauthorized transactions</li>
              </ul>
            </div>

            {/* Returns and Refunds */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Returns and Refunds</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Due to the bespoke and custom nature of our textile products, all sales are final unless the product is defective or damaged upon arrival. Custom orders cannot be returned or refunded once production has begun.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                For defective or damaged items, please contact us within 7 days of receipt. We will evaluate each case and determine whether a refund, replacement, or repair is appropriate.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Limitation of Liability</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, in no event shall The Q Atelier, its affiliates, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Your access to or use of (or inability to access or use) the Site</li>
                <li>Any conduct or content of third parties on the Site</li>
                <li>Unauthorized access or alteration of your data</li>
                <li>Any other matter relating to the Site</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Disclaimer</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                THE SITE AND ALL PRODUCTS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement and title</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted, secure, or error-free operation</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Indemnification</h2>
              <p className="text-neutral-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless The Q Atelier and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of your violation of these Terms or your use of the Site.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Governing Law</h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Türkiye, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Istanbul, Türkiye.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Dispute Resolution</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                In the event of any dispute, claim, or controversy arising from or relating to these Terms, you agree to first attempt to resolve the dispute informally by contacting us. If we cannot resolve the dispute within 30 days, either party may pursue formal dispute resolution.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Modifications to Terms</h2>
              <p className="text-neutral-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Site after any modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Severability</h2>
              <p className="text-neutral-700 leading-relaxed">
                If any provision of these Terms is held to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="font-playfair text-3xl mb-4 text-brand-charcoal">Contact Us</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <p className="text-neutral-700 mb-2"><strong>The Q Atelier</strong></p>
                <p className="text-neutral-700 mb-2">Istanbul, Türkiye</p>
                <p className="text-neutral-700 mb-2">Email: <a href="mailto:legal@theqatelier.com" className="text-brand-lilac hover:text-brand-lilac-dark">legal@theqatelier.com</a></p>
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