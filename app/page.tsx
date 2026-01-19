import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen brand-gradient text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              TallyHub Pro
            </h1>
            <div className="flex justify-center mb-6">
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
                v1.2.0 Latest Release
              </span>
            </div>
            <p className="text-2xl text-gray-300 mb-8">
              Professional Tally Light System for Modern Video Production
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Affordable, open-source tally lights that integrate with OBS Studio, vMix, ATEM, and more
            </p>

            <p className="text-base text-gray-300 mb-10">
              <span className="font-semibold">What problem this solves:</span> eliminates “who’s live?” confusion so operators and talent always know when they’re on-air.
            </p>
            
            {/* Download Buttons */}

                  {/* Top Quick Links */}
                  <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <Link 
                      href="/browser-tally"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      📱 Browser Tally
                    </Link>
                    <Link 
                      href="/installation"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      📦 Installation
                    </Link>
                    <Link 
                      href="/flash"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      ⚡ Flash Firmware
                    </Link>
                    <Link 
                      href="/docker"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      🐳 Docker/Pi
                    </Link>
                    <Link 
                      href="/developers"
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      👨‍💻 Developers
                    </Link>
                  </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0-arm64.dmg"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Download for macOS (Apple Silicon)
              </a>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0.dmg"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Download for macOS (Intel)
              </a>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Download for Windows
              </a>
            </div>

            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>✓ Free & Open Source</span>
              <span>✓ No Subscription</span>
              <span>✓ Easy Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose TallyHub?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              title="Multiple Mixer Support"
              description="Works with OBS Studio, vMix, Blackmagic ATEM, and more"
              icon="🎚️"
            />
            <FeatureCard 
              title="Cost-Effective Hardware"
              description="Use affordable ESP32 devices, phones, tablets, or any web browser"
              icon="💰"
            />
            <FeatureCard 
              title="Easy WiFi Setup"
              description="Simple web interface for device configuration and management"
              icon="📡"
            />
            <FeatureCard 
              title="Server & Desktop Apps"
              description="Run as standalone server or desktop app on Windows/macOS"
              icon="💻"
            />
            <FeatureCard 
              title="Firmware Flashing"
              description="Built-in firmware flasher with GitHub integration"
              icon="⚡"
            />
            <FeatureCard 
              title="Open Source"
              description="Transparent, community-driven development"
              icon="🔓"
            />
          </div>
        </div>
      </section>

      {/* Supported Hardware */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Supported Hardware</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <HardwareCard 
              name="Phone/Tablet"
              description="Any device with a browser"
              price="Free"
            />
            <HardwareCard 
              name="M5Stick Tally"
              description="Compact and affordable"
              price="~$15"
            />
            <HardwareCard 
              name="M5Stick Plus2"
              description="Larger display, better battery"
              price="~$25"
            />
            <HardwareCard 
              name="ESP32-1732S019"
              description="2.4 inch touchscreen display"
              price="~$12"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600/20 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Download the app, flash your devices, and start broadcasting
          </p>
          <Link 
            href="/getting-started"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
          >
            View Setup Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">© 2026 TallyHub Pro. Open Source Project.</p>
          <p className="text-sm mb-4">Licensed under MIT • <a href="mailto:hello@tallyhub.pro" className="hover:text-white">hello@tallyhub.pro</a></p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="https://github.com/tallyhubpro/Tallyhub" className="hover:text-white">GitHub</a>
            <Link href="/installation" className="hover:text-white">Installation</Link>
            <Link href="/documentation" className="hover:text-white">Documentation</Link>
            <Link href="/docker" className="hover:text-white">Docker</Link>
            <Link href="/developers" className="hover:text-white">Developers</Link>
            <a href="https://github.com/tallyhubpro/Tallyhub/issues" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function HardwareCard({ name, description, price }: { name: string; description: string; price: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-2xl font-bold text-red-500">{price}</p>
    </div>
  );
}
