import Link from 'next/link';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TallyHub Pro",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "description": "Professional tally light system for video production and live streaming. Compatible with OBS Studio, vMix, Blackmagic ATEM, TriCaster, and 15+ professional video mixers.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "featureList": [
      "Compatible with 15+ professional video mixers",
      "Sub-100ms latency",
      "Wireless WiFi setup",
      "Web-based admin panel",
      "Open source",
      "Multiple device support (ESP32, M5Stack, browser)",
      "Real-time monitoring",
      "Auto-reconnection"
    ],
    "softwareVersion": "1.2.0",
    "author": {
      "@type": "Organization",
      "name": "TallyHub Pro",
      "url": "https://tallyhub.pro"
    },
    "url": "https://tallyhub.pro",
    "downloadUrl": "https://github.com/tallyhubpro/Tallyhub/releases",
    "screenshot": "https://tallyhub.pro/og-image-v2.png"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TallyHub Pro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TallyHub Pro is a professional, open-source tally light system that works with OBS Studio, vMix, Blackmagic ATEM, TriCaster, and 15+ other professional video mixers. It provides real-time camera tally indicators at a fraction of the cost of traditional systems."
        }
      },
      {
        "@type": "Question",
        "name": "How much does TallyHub Pro cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TallyHub Pro software is free and open source. Hardware costs range from free (using a phone/tablet browser) to $12-40 for dedicated ESP32 or M5Stack devices. This is significantly cheaper than traditional tally systems that cost $200-500+ per light."
        }
      },
      {
        "@type": "Question",
        "name": "What video mixers does TallyHub support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TallyHub supports 15+ professional mixers including OBS Studio, vMix, Blackmagic ATEM (all models), NewTek TriCaster, Roland Smart Tally devices, Panasonic AV-HS series, FOR-A HVS series, Ross Video Acuity/Carbonite, Grass Valley, and any device supporting TSL UMD 3.1/5.0 or OSC protocols."
        }
      },
      {
        "@type": "Question",
        "name": "What devices can I use as tally lights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use ESP32-1732S019 displays ($12-15), M5Stick C Plus devices ($15-25), M5Stick C Plus2 ($25-40), or any phone, tablet, or computer with a web browser (free). All devices connect via WiFi."
        }
      },
      {
        "@type": "Question",
        "name": "How do I set up TallyHub Pro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup takes about 5 minutes: 1) Install TallyHub server on your computer or Raspberry Pi, 2) Flash firmware to your tally devices (or use browser-based tally), 3) Configure WiFi on devices, 4) Connect to your video mixer. The web-based admin panel guides you through the entire process."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen brand-gradient text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

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
            <div className="flex justify-center mb-12">
              <Link 
                href="/installation"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
              >
                📦 Installation & Downloads
              </Link>
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
              description="Works with OBS Studio, vMix, Blackmagic ATEM, TriCaster, Roland, Panasonic, FOR-A, Ross Video, Grass Valley, and more"
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

      {/* Supported Mixers */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Supported Video Mixers</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Works with 15+ professional mixer brands</p>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MixerCard 
              manufacturer="Blackmagic Design"
              models={[
                "ATEM Mini/Mini Pro/Mini Pro ISO/Mini Extreme",
                "Television Studio (Pro HD/Pro 4K)",
                "1ME/2ME/4ME Production Studio",
                "Constellation 8K"
              ]}
            />
            <MixerCard 
              manufacturer="OBS Studio"
              models={["All versions (via obs-websocket)"]}
            />
            <MixerCard 
              manufacturer="vMix"
              models={["All versions (via HTTP API)"]}
            />
            <MixerCard 
              manufacturer="NewTek"
              models={[
                "TriCaster TC1",
                "TriCaster Mini",
                "Models with Tally over Ethernet"
              ]}
            />
            <MixerCard 
              manufacturer="Roland"
              models={[
                "V-60HD",
                "XS-62S",
                "VR-50HD-MKII",
                "Other Smart Tally models"
              ]}
            />
            <MixerCard 
              manufacturer="Panasonic"
              models={[
                "AV-HS410",
                "AV-HS6000",
                "TSL UMD 3.1/5.0 compatible"
              ]}
            />
            <MixerCard 
              manufacturer="FOR-A"
              models={[
                "HVS-490/1200/2000/6000",
                "TSL UMD 5.0 compatible"
              ]}
            />
            <MixerCard 
              manufacturer="Ross Video"
              models={[
                "Acuity",
                "Carbonite (Black/Solo/Ultra)",
                "Graphite, TouchDrive, Vision"
              ]}
            />
            <MixerCard 
              manufacturer="Grass Valley"
              models={["TSL UMD 3.1/5.0 compatible"]}
            />
            <MixerCard 
              manufacturer="Universal Protocols"
              models={[
                "TSL UMD 3.1 (UDP/TCP)",
                "TSL UMD 5.0 (UDP/TCP)",
                "Open Sound Control (OSC)"
              ]}
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

function MixerCard({ manufacturer, models }: { manufacturer: string; models: string[] }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors">
      <h3 className="text-lg font-bold mb-3 text-red-400">{manufacturer}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {models.map((model, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>{model}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
