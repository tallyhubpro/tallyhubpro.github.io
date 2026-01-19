import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className="min-h-screen brand-gradient text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            ← TallyHub Pro
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Getting Started</h1>
        <p className="text-xl text-gray-400 mb-12">
          Set up your TallyHub system in minutes
        </p>

        {/* Step 1 */}
        <Section number="1" title="Download & Install">
          <p className="mb-4">Choose the right version for your operating system:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <DownloadCard 
              title="macOS (Apple Silicon)"
              subtitle="M1, M2, M3 Macs"
              link="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0-arm64.dmg"
            />
            <DownloadCard 
              title="macOS (Intel)"
              subtitle="Intel-based Macs"
              link="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0.dmg"
            />
            <DownloadCard 
              title="Windows"
              subtitle="Windows 10/11"
              link="https://github.com/tallyhubpro/Tallyhub/releases/latest"
            />
            <DownloadCard 
              title="Linux Server"
              subtitle="Standalone server"
              link="https://github.com/tallyhubpro/Tallyhub/releases/latest"
            />
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
            <p className="text-yellow-200 font-semibold mb-2">⚠️ macOS Users:</p>
            <p className="text-gray-300">If you see "TallyHub is damaged", run this command in Terminal:</p>
            <code className="block bg-gray-800 px-4 py-2 rounded mt-2 text-sm">
              xattr -cr /Applications/TallyHub.app
            </code>
          </div>
        </Section>

        {/* Step 2 */}
        <Section number="2" title="Connect Your Mixer">
          <p className="mb-4">TallyHub supports multiple video mixers:</p>
          <div className="space-y-4">
            <MixerGuide 
              name="OBS Studio"
              steps={[
                "Enable WebSocket server in OBS: Tools → WebSocket Server Settings",
                "Set port to 4455 (default)",
                "In TallyHub, add OBS mixer with your computer's IP"
              ]}
            />
            <MixerGuide 
              name="Blackmagic ATEM"
              steps={[
                "Connect ATEM to your network",
                "Note the ATEM's IP address",
                "In TallyHub, add ATEM mixer with the IP address"
              ]}
            />
            <MixerGuide 
              name="vMix"
              steps={[
                "Enable Web Controller in vMix settings",
                "Set port to 8088 (default)",
                "In TallyHub, add vMix mixer with your computer's IP"
              ]}
            />
          </div>
        </Section>

        {/* Step 3 */}
        <Section number="3" title="Choose Your Tally Display">
          <p className="mb-4">TallyHub works with multiple display options:</p>
          
          <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">📱 Option 1: Phone/Tablet (No Hardware Needed)</h3>
            <p className="text-gray-300 mb-4">
              Use any smartphone, tablet, or computer as a tally light instantly:
            </p>
            <ol className="space-y-2 text-gray-300 mb-4">
              <li>1. Open a web browser on your device</li>
              <li>2. Navigate to <code className="text-blue-400">http://&lt;tallyhub-ip&gt;:3000/tally</code></li>
              <li>3. The page will show LIVE/PREVIEW status with color indicators</li>
              <li>4. Tap fullscreen for maximum visibility</li>
            </ol>
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
              <p className="text-green-200 text-sm">
                ✓ Perfect for testing, backup tallies, or low-budget productions
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">💡 Option 2: Dedicated ESP32 Hardware</h3>
          <p className="mb-4 text-gray-300">Purchase one of these supported ESP32 devices for a permanent solution:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <HardwareOption 
              name="M5Stick Tally"
              price="~$15"
              features={["Compact", "Built-in battery", "Easy to mount"]}
              buyLink="https://www.aliexpress.com"
            />
            <HardwareOption 
              name="M5Stick Plus2"
              price="~$25"
              features={["Larger display", "Better battery", "USB-C"]}
              buyLink="https://www.aliexpress.com"
            />
            <HardwareOption 
              name="ESP32-1732S019"
              price="~$12"
              features={["2.4 inch touchscreen", "Very affordable", "Bright display"]}
              buyLink="https://www.aliexpress.com"
            />
          </div>
        </Section>

        {/* Step 4 */}
        <Section number="4" title="Flash Firmware">
          <p className="mb-4">TallyHub includes a built-in firmware flasher:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Connect your ESP32 device via USB</li>
            <li>Open TallyHub and click "Flash Firmware"</li>
            <li>Select your device type (M5Stick, ESP32-1732S019, etc.)</li>
            <li>Choose "Download from GitHub" for latest firmware</li>
            <li>Click "Flash" and wait for completion</li>
          </ol>
        </Section>

        {/* Step 5 */}
        <Section number="5" title="Configure WiFi">
          <p className="mb-4">After flashing, configure your tally light's WiFi:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Device boots into AP mode (creates its own WiFi network)</li>
            <li>Connect to the device's WiFi network (e.g., "TallyHub-XXXX")</li>
            <li>Browser opens automatically to configuration page</li>
            <li>Enter your WiFi credentials and TallyHub server IP</li>
            <li>Device will restart and connect to your network</li>
          </ol>
        </Section>

        {/* Step 6 */}
        <Section number="6" title="Assign Camera Numbers">
          <p className="mb-4">In TallyHub admin panel:</p>
          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Go to Admin Panel (http://localhost:3000/admin)</li>
            <li>Connected devices appear automatically</li>
            <li>Assign each device to a camera/input number</li>
            <li>Devices will now show tally states from your mixer</li>
          </ol>
        </Section>

        {/* Next Steps */}
        <div className="mt-16 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">You're All Set! 🎉</h2>
          <p className="text-gray-300 mb-6">
            Your tally lights should now be responding to your video mixer. Need help?
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/tallyhubpro/Tallyhub/issues"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Report an Issue
            </a>
            <a 
              href="https://github.com/tallyhubpro/Tallyhub"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="ml-16 text-gray-300">
        {children}
      </div>
    </div>
  );
}

function DownloadCard({ title, subtitle, link }: { title: string; subtitle: string; link: string }) {
  return (
    <a 
      href={link}
      className="block bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors"
    >
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </a>
  );
}

function MixerGuide({ name, steps }: { name: string; steps: string[] }) {
  return (
    <div className="bg-gray-800/30 rounded-lg p-4">
      <h3 className="font-semibold text-lg mb-3 text-red-400">{name}</h3>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function HardwareOption({ name, price, features, buyLink }: { name: string; price: string; features: string[]; buyLink: string }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <h3 className="font-semibold mb-2">{name}</h3>
      <p className="text-2xl font-bold text-red-500 mb-3">{price}</p>
      <ul className="text-sm text-gray-400 space-y-1 mb-4">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
      <a 
        href={buyLink}
        className="block text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors text-sm"
      >
        Find on AliExpress
      </a>
    </div>
  );
}
