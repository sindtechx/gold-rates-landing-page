import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gold-500">Gold Rates</div>
          <div className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-navy-100 hover:text-gold-500 transition"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-navy-100 hover:text-gold-500 transition"
            >
              FAQ
            </a>
            <a
              href="#download"
              className="text-navy-100 hover:text-gold-500 transition"
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto shadow-lg shadow-gold-500/50"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Track Dubai&apos;s Gold Rates in{" "}
            <span className="text-gold-500">Real-Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 mb-12 leading-relaxed">
            24K, 22K, 21K, 18K — Live prices, trends, and insights at your
            fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-navy-800 border border-navy-700 rounded-lg px-8 py-4 flex items-center gap-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-xs text-navy-400">Coming Soon</div>
                <div className="text-white font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-navy-800 border border-navy-700 rounded-lg px-8 py-4 flex items-center gap-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60867 2.34375C3.38867 2.58375 3.25867 2.94375 3.25867 3.40375V20.5938C3.25867 21.0538 3.38867 21.4138 3.60867 21.6538L3.67867 21.7238L13.5787 11.8238V11.6438L3.67867 1.74375L3.60867 2.34375Z"
                  fill="white"
                />
                <path
                  d="M16.8787 15.1237L13.5787 11.8237V11.6437L16.8787 8.34375L16.9687 8.39375L20.8587 10.5737C21.9687 11.1937 21.9687 12.1937 20.8587 12.8137L16.9687 14.9937L16.8787 15.1237Z"
                  fill="white"
                />
                <path
                  d="M16.9687 15.0737L13.5787 11.6837L3.60867 21.6537C3.98867 22.0537 4.60867 22.0937 5.30867 21.6937L16.9687 15.0737Z"
                  fill="white"
                />
                <path
                  d="M16.9687 8.39375L5.30867 1.77375C4.60867 1.37375 3.98867 1.41375 3.60867 1.81375L13.5787 11.7837L16.9687 8.39375Z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-xs text-navy-400">Coming Soon</div>
                <div className="text-white font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto px-6 py-20 bg-navy-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-navy-300">
              Powerful features to track and analyze gold prices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Real-Time Prices
              </h3>
              <p className="text-navy-300">
                Live updates for 24K, 22K, 21K, and 18K gold. Refreshed every 5
                minutes.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Historical Trends
              </h3>
              <p className="text-navy-300">
                30-day price charts and patterns. Make data-driven decisions.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Daily Rate Tracking
              </h3>
              <p className="text-navy-300">
                Morning, afternoon, and evening rates. Never miss a price
                movement.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Statistics
              </h3>
              <p className="text-navy-300">
                Track highs, lows, and changes. Comprehensive 30-day analytics.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Gold Calculator
              </h3>
              <p className="text-navy-300">
                Instant price calculations. Plan your purchases accurately.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-8 hover:border-gold-500 transition">
              <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Dubai Authentic
              </h3>
              <p className="text-navy-300">
                Official Dubai gold market rates. Trusted and accurate data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-navy-300">
              Everything you need to know about Gold Rates
            </p>
          </div>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                When will the app be available?
              </h3>
              <p className="text-navy-300">
                Gold Rates is coming soon to both App Store and Play Store. Stay
                tuned for the official launch announcement.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Is the app free?
              </h3>
              <p className="text-navy-300">
                Yes, Gold Rates is completely free to download and use. No
                subscriptions or hidden fees.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                What gold types are supported?
              </h3>
              <p className="text-navy-300">
                We support all major gold types: 24K, 22K, 21K, and 18K gold
                with real-time price tracking for each.
              </p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                How often are prices updated?
              </h3>
              <p className="text-navy-300">
                Gold prices are updated in real-time, with automatic refresh
                every 5 minutes to ensure you always have the latest rates.
              </p>
            </div>
            {/* FAQ 5 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Are these prices for Dubai only?
              </h3>
              <p className="text-navy-300">
                Yes, Gold Rates provides official Dubai gold market rates,
                ensuring accuracy and reliability for the UAE market.
              </p>
            </div>
            {/* FAQ 6 */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Can I use this for investment advice?
              </h3>
              <p className="text-navy-300">
                Gold Rates is for informational purposes only. Please consult
                our{" "}
                <Link
                  href="/terms-of-service"
                  className="text-gold-500 hover:text-gold-400"
                >
                  Terms of Service
                </Link>{" "}
                and seek professional advice for investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section
        id="download"
        className="container mx-auto px-6 py-20 bg-navy-800/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto shadow-lg shadow-gold-500/50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Gold Rates Today
          </h2>
          <p className="text-xl text-navy-300 mb-12">
            Join thousands tracking Dubai gold prices in real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-navy-900 border-2 border-navy-700 rounded-lg px-10 py-5 flex items-center gap-3 opacity-75">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-sm text-navy-400 font-semibold">
                  Coming Soon
                </div>
                <div className="text-white font-bold text-lg">App Store</div>
              </div>
            </div>
            <div className="bg-navy-900 border-2 border-navy-700 rounded-lg px-10 py-5 flex items-center gap-3 opacity-75">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60867 2.34375C3.38867 2.58375 3.25867 2.94375 3.25867 3.40375V20.5938C3.25867 21.0538 3.38867 21.4138 3.60867 21.6538L3.67867 21.7238L13.5787 11.8238V11.6438L3.67867 1.74375L3.60867 2.34375Z"
                  fill="white"
                />
                <path
                  d="M16.8787 15.1237L13.5787 11.8237V11.6437L16.8787 8.34375L16.9687 8.39375L20.8587 10.5737C21.9687 11.1937 21.9687 12.1937 20.8587 12.8137L16.9687 14.9937L16.8787 15.1237Z"
                  fill="white"
                />
                <path
                  d="M16.9687 15.0737L13.5787 11.6837L3.60867 21.6537C3.98867 22.0537 4.60867 22.0937 5.30867 21.6937L16.9687 15.0737Z"
                  fill="white"
                />
                <path
                  d="M16.9687 8.39375L5.30867 1.77375C4.60867 1.37375 3.98867 1.41375 3.60867 1.81375L13.5787 11.7837L16.9687 8.39375Z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-sm text-navy-400 font-semibold">
                  Coming Soon
                </div>
                <div className="text-white font-bold text-lg">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-navy-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gold-500 mb-4">
                Gold Rates
              </div>
              <p className="text-navy-300">
                Track Dubai gold prices in real-time with accurate data and
                powerful insights.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link
                  href="/privacy-policy"
                  className="block text-navy-300 hover:text-gold-500 transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="block text-navy-300 hover:text-gold-500 transition"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <a
                href="mailto:goldrates@sindtechx.com"
                className="text-navy-300 hover:text-gold-500 transition"
              >
                goldrates@sindtechx.com
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-navy-700 text-center text-navy-400">
            <p>&copy; 2024 Gold Rates by Sindtechx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
