import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              TallyHub Pro
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Professional Tally Light System for Modern Video Production
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Cost-effective, open-source tally lights for OBS Studio, vMix, ATEM, and more
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0-arm64.dmg"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Download for macOS (Apple Silicon)
              </a>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0.dmg"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors"
              >
                Download for macOS (Intel)
              </a>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-lg transition-colors"
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
              description="Use affordable ESP32 devices like M5Stick or custom displays"
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors"
          >
            View Setup Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 TallyHub Pro. Open Source Project.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/tallyhubpro/Tallyhub" className="hover:text-white">GitHub</a>
            <a href="/documentation" className="hover:text-white">Documentation</a>
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
