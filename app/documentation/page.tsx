import Link from 'next/link';

export default function Documentation() {
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
        <h1 className="text-5xl font-bold mb-6">Documentation</h1>
        <p className="text-xl text-gray-400 mb-12">
          Complete guide to using TallyHub Pro
        </p>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <NavCard 
            title="Browser Tally"
            description="Use phone/tablet as tally light"
            href="/browser-tally"
            icon="📱"
          />
          <NavCard 
            title="Installation Guide"
            description="Install on macOS, Windows, or Linux"
            href="/installation"
            icon="📦"
          />
          <NavCard 
            title="Getting Started"
            description="Quick start guide and setup"
            href="/getting-started"
            icon="🚀"
          />
          <NavCard 
            title="Flash Firmware"
            description="Flash firmware to ESP32 devices"
            href="/flash"
            icon="⚡"
          />
          <NavCard 
            title="Docker Deployment"
            description="Run with Docker on Pi or server"
            href="/docker"
            icon="🐳"
          />
          <NavCard 
            title="Developer Guide"
            description="Contributing and API docs"
            href="/developers"
            icon="👨‍💻"
          />
          <NavCard 
            title="GitHub Repository"
            description="Source code and issues"
            href="https://github.com/tallyhubpro/Tallyhub"
            icon="💻"
            external
          />
        </div>

        {/* Main Documentation Sections */}
        <Section title="System Requirements">
          <ul className="space-y-2 text-gray-300">
            <li>• macOS 10.15+ (Intel or Apple Silicon) or Windows 10/11</li>
            <li>• Network connection (WiFi or Ethernet)</li>
            <li>• Compatible video production software (OBS Studio, vMix, ATEM, etc.)</li>
            <li>• ESP32-based hardware or Raspberry Pi for tally lights</li>
          </ul>
        </Section>

        <Section title="Supported Platforms">
          <div className="grid md:grid-cols-2 gap-4">
            <PlatformCard name="OBS Studio" status="Full Support" />
            <PlatformCard name="vMix" status="Full Support" />
            <PlatformCard name="ATEM Switchers" status="Full Support" />
            <PlatformCard name="TriCaster" status="Coming Soon" />
          </div>
        </Section>

        <Section title="Hardware Options">
          <div className="space-y-4">
            <HardwareCard 
              title="Browser-Based Tally"
              description="Use any phone, tablet, or computer as a tally light - no additional hardware needed"
              features={[
                "Works on any device with a browser",
                "Instant setup - just open a URL",
                "Perfect for testing or low-budget setups",
                "Fullscreen mode for maximum visibility"
              ]}
            />
            <HardwareCard 
              title="ESP32 Tally Light"
              description="Cost-effective wireless tally light using ESP32 microcontroller"
              features={[
                "WiFi connectivity",
                "RGB LED support",
                "Low power consumption",
                "Easy firmware updates"
              ]}
            />
            <HardwareCard 
              title="Raspberry Pi Tally Light"
              description="Powerful tally light with display capabilities"
              features={[
                "HDMI/LCD display support",
                "Network connectivity",
                "Custom UI options",
                "Extensible platform"
              ]}
            />
          </div>
        </Section>

        <Section title="Configuration">
          <p className="text-gray-300 mb-4">
            TallyHub can be configured to work with various video production systems:
          </p>
          <ol className="space-y-3 text-gray-300">
            <li>1. Launch TallyHub application</li>
            <li>2. Select your video production software from the list</li>
            <li>3. Configure connection settings (IP address, port, etc.)</li>
            <li>4. Add your tally light devices</li>
            <li>5. Map cameras to tally lights</li>
          </ol>
        </Section>

        <Section title="Troubleshooting">
          <div className="space-y-4">
            <TroubleshootCard 
              issue="Tally lights not connecting"
              solution="Ensure all devices are on the same network and check firewall settings"
            />
            <TroubleshootCard 
              issue="macOS security warning"
              solution='Run: xattr -cr /Applications/TallyHub.app in Terminal'
            />
            <TroubleshootCard 
              issue="Delayed tally response"
              solution="Check network latency and reduce WiFi interference"
            />
          </div>
        </Section>

        <Section title="Device Discovery">
          <p className="text-gray-300 mb-4">
            Tally devices automatically discover the hub using a two-stage strategy:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">1. UDP Broadcast Discovery</h3>
              <p className="text-gray-400 text-sm mb-2">
                Devices send a discovery packet to the subnet broadcast on UDP port 7411.
                The hub replies with its IP address and ports.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Port: 7411/UDP</li>
                <li>• Fast and reliable on same subnet</li>
                <li>• Works across most network configurations</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">2. mDNS Fallback</h3>
              <p className="text-gray-400 text-sm mb-2">
                If UDP discovery fails, devices query for _tallyhub._udp.local service.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Service: _tallyhub._udp.local</li>
                <li>• TXT records: api=3000, udp=7411, ver=1.2.0</li>
                <li>• Zero-configuration networking</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong>Manual Configuration:</strong> If automatic discovery fails (VLANs, enterprise networks),
              you can manually configure the hub IP address in the device's AP mode.
            </p>
          </div>
        </Section>

        <Section title="Recent Firmware Improvements">
          <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">September 2025 Updates</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Unified battery smoothing & percent logic across M5StickC Plus and Plus2</li>
              <li>✓ Always-on Wi-Fi outline and disconnect indicator for clearer status</li>
              <li>✓ Removed legacy battery calibration/debug mode for leaner firmware</li>
              <li>✓ Overlap-safe layout for battery percent and Wi-Fi icon</li>
              <li>✓ Improved stability and performance</li>
            </ul>
          </div>
        </Section>

        <Section title="API & Integration">
          <p className="text-gray-300 mb-4">
            TallyHub provides REST and WebSocket APIs for custom integrations.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-2">WebSocket endpoint for real-time tally updates:</p>
              <code className="text-blue-400 text-sm">
                ws://localhost:3000/api/tally
              </code>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-3">Common REST endpoints:</p>
              <ul className="space-y-2 text-sm">
                <li><code className="text-green-400">GET</code> <code className="text-blue-400">/api/devices</code> - List devices</li>
                <li><code className="text-blue-400">POST</code> <code className="text-blue-400">/api/devices</code> - Register device</li>
                <li><code className="text-green-400">GET</code> <code className="text-blue-400">/api/assignments</code> - Camera assignments</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm">
              For detailed API documentation, see the{' '}
              <Link href="/developers" className="text-blue-400 hover:underline">Developer Guide</Link>.
            </p>
          </div>
        </Section>

        <Section title="Version Information">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Current Version</h3>
              <span className="text-3xl font-bold text-blue-400">1.2.0</span>
            </div>
            <p className="text-gray-300 mb-4">
              Latest release includes firmware improvements, Docker optimizations, and enhanced device discovery.
            </p>
            <a 
              href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Release Notes
            </a>
          </div>
        </Section>

        <Section title="Support">
          <p className="text-gray-300 mb-4">
            Need help? Here are your support options:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• <a href="https://github.com/tallyhubpro/Tallyhub/issues" className="text-blue-400 hover:underline">GitHub Issues</a> - Report bugs or request features</li>
            <li>• <a href="https://github.com/tallyhubpro/Tallyhub/discussions" className="text-blue-400 hover:underline">GitHub Discussions</a> - Community support and questions</li>
            <li>• <a href="mailto:hello@tallyhub.pro" className="text-blue-400 hover:underline">Email Support</a> - Contact us at hello@tallyhub.pro</li>
            <li>• <Link href="/developers" className="text-blue-400 hover:underline">Developer Guide</Link> - API docs and contributing guidelines</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

// Components
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">{title}</h2>
      {children}
    </section>
  );
}

function NavCard({ title, description, href, icon, external }: { title: string; description: string; href: string; icon: string; external?: boolean }) {
  const className = "block p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors";
  const content = (
    <>
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </>
  );

  if (external) {
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  
  return <Link href={href} className={className}>{content}</Link>;
}

function PlatformCard({ name, status }: { name: string; status: string }) {
  const statusColor = status === "Full Support" ? "text-green-400" : "text-yellow-400";
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <h3 className="font-semibold mb-1">{name}</h3>
      <p className={`text-sm ${statusColor}`}>{status}</p>
    </div>
  );
}

function HardwareCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-1 text-gray-300 text-sm">
        {features.map((feature, i) => (
          <li key={i}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  );
}

function TroubleshootCard({ issue, solution }: { issue: string; solution: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <h3 className="font-semibold mb-2 text-red-400">Issue: {issue}</h3>
      <p className="text-gray-300 text-sm">Solution: {solution}</p>
    </div>
  );
}
