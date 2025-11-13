import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Gold Rates',
  description: 'Terms of Service for Gold Rates mobile application',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 border-b border-navy-700">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gold-500">Gold Rates</Link>
          <Link href="/" className="text-navy-100 hover:text-gold-500 transition">← Back to Home</Link>
        </nav>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-navy-300 mb-12">Last updated: November 13, 2024</p>

        <div className="space-y-8 text-navy-200">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to Gold Rates. By accessing or using the Gold Rates mobile application (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
            </p>
            <p className="mb-4">
              These Terms constitute a legally binding agreement between you and Sindtechx (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the provider of Gold Rates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Gold Rates is a mobile application that provides real-time gold price information for the Dubai market. The App displays prices for various gold types (24K, 22K, 21K, and 18K), historical trends, statistics, and includes a gold calculator feature.
            </p>
            <p className="mb-4">
              The service is provided for informational purposes only and should not be considered as financial, investment, or professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Eligibility</h2>
            <p className="mb-4">
              By using Gold Rates, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>You are at least 13 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>All information you provide is accurate and truthful</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Informational Purpose and Disclaimer</h2>
            <h3 className="text-xl font-semibold text-white mb-3">4.1 No Financial Advice</h3>
            <p className="mb-4">
              Gold Rates provides gold price information for informational purposes only. The App does not provide financial, investment, trading, or professional advice. You should not rely on the information provided by the App as a substitute for professional financial advice from qualified advisors.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 No Warranty of Accuracy</h3>
            <p className="mb-4">
              While we strive to provide accurate and up-to-date gold price information, we do not warrant or guarantee the accuracy, completeness, timeliness, or reliability of any gold prices or related information displayed in the App. Gold prices are subject to market fluctuations and may vary.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.3 Your Responsibility</h3>
            <p className="mb-4">
              Any investment, trading, or purchasing decisions you make based on information from Gold Rates are your sole responsibility. We are not responsible for any losses, damages, or consequences resulting from your use of the information provided by the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
            <p className="mb-4">You agree to use Gold Rates only for lawful purposes. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Use the App in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App&apos;s functionality or servers</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use automated tools to access or scrape data from the App</li>
              <li>Reproduce, duplicate, or copy any part of the App without authorization</li>
              <li>Use the App for any commercial purpose without our written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-4">
              Gold Rates and all its content, features, and functionality are owned by Sindtechx and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-4">
              You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes, subject to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Data Sources</h2>
            <p className="mb-4">
              Gold Rates obtains gold price information from third-party data providers. We do not control these data sources and are not responsible for their accuracy, availability, or reliability. The App may be temporarily unavailable if our data providers experience technical issues or disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SINDTECHX AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the App</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
              <li>Any errors or omissions in any content or data</li>
              <li>Any investment or financial losses resulting from use of the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Sindtechx and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. App Availability and Modifications</h2>
            <p className="mb-4">
              We strive to keep Gold Rates available at all times, but we do not guarantee uninterrupted access. The App may be unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.
            </p>
            <p className="mb-4">
              We reserve the right to modify, suspend, or discontinue the App (or any part thereof) at any time without notice. We will not be liable for any modification, suspension, or discontinuation of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Updates and Changes</h2>
            <p className="mb-4">
              We may release updates to improve the App&apos;s functionality, fix bugs, or add new features. You may be required to update the App to continue using it. We are not obligated to provide updates or support for older versions of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to Gold Rates immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately.
            </p>
            <p className="mb-4">
              You may stop using the App at any time by uninstalling it from your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts located in Dubai, United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. If we make material changes, we will notify you by updating the &quot;Last updated&quot; date at the top of these Terms. Your continued use of the App after such changes constitutes acceptance of the new Terms.
            </p>
            <p className="mb-4">
              We encourage you to review these Terms periodically for any updates or changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sindtechx regarding your use of Gold Rates and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-navy-800 border border-navy-700 rounded-lg p-6">
              <p className="mb-2"><strong className="text-white">Email:</strong> <a href="mailto:goldrates@sindtechx.com" className="text-gold-500 hover:text-gold-400">goldrates@sindtechx.com</a></p>
              <p><strong className="text-white">Product of:</strong> Sindtechx</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">18. Acknowledgment</h2>
            <p className="mb-4">
              BY USING GOLD RATES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700">
          <Link href="/" className="text-gold-500 hover:text-gold-400 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-navy-700 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-navy-400">&copy; 2024 Gold Rates by Sindtechx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
