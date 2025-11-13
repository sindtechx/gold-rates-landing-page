import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Gold Rates',
  description: 'Privacy Policy for Gold Rates mobile application',
};

export default function PrivacyPolicy() {
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
        <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-navy-300 mb-12">Last updated: November 13, 2024</p>

        <div className="space-y-8 text-navy-200">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Gold Rates (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring transparency about how we handle your information. This Privacy Policy explains our practices regarding data collection, use, and protection when you use the Gold Rates mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide</h3>
            <p className="mb-4">
              Gold Rates is designed to be a lightweight, privacy-focused application. We do not require you to create an account or provide personal information to use our app.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Device Information:</strong> We may collect basic device information such as device type, operating system version, and app version for troubleshooting and app improvement purposes.</li>
              <li><strong>Usage Data:</strong> We may collect anonymous usage statistics such as which features are used most frequently to improve the user experience.</li>
              <li><strong>App Preferences:</strong> Your app settings and preferences (such as theme selection and gold type preferences) are stored locally on your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Provide and maintain the Gold Rates application</li>
              <li>Display real-time gold prices and historical data</li>
              <li>Improve app performance and user experience</li>
              <li>Fix bugs and technical issues</li>
              <li>Analyze usage patterns to enhance features</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
            <p className="mb-4">
              All app preferences and settings are stored locally on your device. We implement industry-standard security measures to protect any data transmitted through our app. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="mb-4">
              Gold Rates may use third-party services for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Gold Price Data:</strong> We obtain gold price information from reliable third-party sources and APIs</li>
              <li><strong>Analytics:</strong> We may use analytics services to understand app usage patterns</li>
              <li><strong>Crash Reporting:</strong> We may use crash reporting tools to identify and fix technical issues</li>
            </ul>
            <p className="mb-4">
              These third-party services have their own privacy policies. We encourage you to review their policies when using our app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
            <p className="mb-4">
              Gold Rates is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Access any personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mb-4">
              Since Gold Rates stores most data locally on your device, you can delete your data by uninstalling the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              Gold Rates is operated from the United Arab Emirates. If you access our app from outside the UAE, your information may be transferred to and processed in the UAE. By using our app, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-navy-800 border border-navy-700 rounded-lg p-6">
              <p className="mb-2"><strong className="text-white">Email:</strong> <a href="mailto:goldrates@sindtechx.com" className="text-gold-500 hover:text-gold-400">goldrates@sindtechx.com</a></p>
              <p><strong className="text-white">Product of:</strong> Sindtechx</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Consent</h2>
            <p className="mb-4">
              By using Gold Rates, you consent to this Privacy Policy and agree to its terms.
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
