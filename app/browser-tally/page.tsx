import Link from 'next/link';

export default function BrowserTally() {
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
        <h1 className="text-5xl font-bold mb-6">Browser-Based Tally</h1>
        <p className="text-xl text-gray-400 mb-12">
          Turn any phone, tablet, or computer into a tally light - no hardware required
        </p>

        {/* Benefits */}
        <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">📱 Why Use Browser Tally?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard 
              icon="💰"
              title="Zero Cost"
              description="No additional hardware needed - use devices you already own"
            />
            <BenefitCard 
              icon="⚡"
              title="Instant Setup"
              description="Just open a URL - no installation or configuration required"
            />
            <BenefitCard 
              icon="🔄"
              title="Perfect for Testing"
              description="Test your TallyHub setup before investing in hardware"
            />
            <BenefitCard 
              icon="🎯"
              title="Flexible Deployment"
              description="Great for backup tallies, guests, or multi-camera setups"
            />
          </div>
        </div>

        {/* Quick Start */}
        <Section title="Quick Start Guide">
          <div className="space-y-6">
            <StepCard 
              number="1"
              title="Start TallyHub Server"
              description="Make sure TallyHub is running on your network"
            >
              <p className="text-gray-300 mb-3">
                Launch the TallyHub desktop app or server, and note the IP address displayed.
              </p>
              <CodeBlock>
                TallyHub running at: http://192.168.1.100:3000
              </CodeBlock>
            </StepCard>

            <StepCard 
              number="2"
              title="Open Browser on Any Device"
              description="Phone, tablet, computer - any device with a browser"
            >
              <p className="text-gray-300 mb-3">
                On your tally device, open any modern web browser (Chrome, Safari, Firefox, Edge).
              </p>
            </StepCard>

            <StepCard 
              number="3"
              title="Navigate to Tally Page"
              description="Enter the TallyHub tally URL"
            >
              <p className="text-gray-300 mb-3">
                Type this URL in the browser's address bar:
              </p>
              <CodeBlock>
                http://[TALLYHUB-IP]:3000/tally
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-3">
                Replace [TALLYHUB-IP] with your TallyHub server's IP address
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Example: <code className="text-blue-400">http://192.168.1.100:3000/tally</code>
              </p>
            </StepCard>

            <StepCard 
              number="4"
              title="Configure Display"
              description="Set camera number and display options"
            >
              <p className="text-gray-300 mb-3">
                The tally page will show configuration options:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Camera Number:</strong> Select which camera this tally represents</li>
                <li>• <strong>Display Name:</strong> Show camera name or number</li>
                <li>• <strong>Fullscreen Mode:</strong> Tap to enter fullscreen for maximum visibility</li>
              </ul>
            </StepCard>

            <StepCard 
              number="5"
              title="Start Using Your Tally"
              description="The display will respond to your mixer in real-time"
            >
              <div className="space-y-4">
                <StatusCard 
                  status="LIVE"
                  color="bg-red-600"
                  description="Camera is on program/output"
                />
                <StatusCard 
                  status="PREVIEW"
                  color="bg-green-600"
                  description="Camera is on preview"
                />
                <StatusCard 
                  status="IDLE"
                  color="bg-gray-700"
                  description="Camera is not active"
                />
              </div>
            </StepCard>
          </div>
        </Section>

        {/* Supported Devices */}
        <Section title="Supported Devices">
          <div className="grid md:grid-cols-2 gap-6">
            <DeviceCard 
              icon="📱"
              title="Smartphones"
              devices={["iPhone (iOS 12+)", "Android phones", "Any modern smartphone"]}
            />
            <DeviceCard 
              icon="📟"
              title="Tablets"
              devices={["iPad", "Android tablets", "Surface tablets"]}
            />
            <DeviceCard 
              icon="💻"
              title="Computers"
              devices={["Windows PC", "Mac", "Linux desktop"]}
            />
            <DeviceCard 
              icon="📺"
              title="Smart TVs"
              devices={["Smart TVs with browser", "Streaming devices", "Any device with web browser"]}
            />
          </div>
        </Section>

        {/* Best Practices */}
        <Section title="Best Practices">
          <div className="space-y-4">
            <TipCard 
              icon="🔌"
              title="Keep Devices Charged"
              description="Connect phones/tablets to power if using for extended periods"
            />
            <TipCard 
              icon="🔒"
              title="Prevent Screen Lock"
              description="Disable auto-lock/sleep in device settings to keep tally visible"
            />
            <TipCard 
              icon="📶"
              title="Use Reliable WiFi"
              description="Connect to the same network as TallyHub for best performance"
            />
            <TipCard 
              icon="🌟"
              title="Adjust Brightness"
              description="Set screen brightness to maximum for better visibility on set"
            />
            <TipCard 
              icon="📍"
              title="Mount Securely"
              description="Use phone/tablet mounts or stands for stable positioning"
            />
          </div>
        </Section>

        {/* Troubleshooting */}
        <Section title="Troubleshooting">
          <div className="space-y-4">
            <TroubleCard 
              issue="Page not loading"
              solutions={[
                "Verify TallyHub server is running",
                "Check device is on same network as TallyHub",
                "Confirm correct IP address and port (3000)",
                "Try disabling VPN on the device"
              ]}
            />
            <TroubleCard 
              issue="Tally status not updating"
              solutions={[
                "Refresh the browser page",
                "Check network connection quality",
                "Ensure mixer is connected in TallyHub admin",
                "Verify camera assignment in TallyHub"
              ]}
            />
            <TroubleCard 
              issue="Screen keeps turning off"
              solutions={[
                "Disable auto-lock in device settings",
                "Connect device to power source",
                "Use 'Keep Screen On' apps (Android)",
                "Enable Guided Access (iOS) to prevent sleep"
              ]}
            />
          </div>
        </Section>

        {/* Next Steps */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/20 border border-blue-600/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Want Dedicated Hardware?</h2>
          <p className="text-gray-300 mb-6">
            Browser tallies are great for testing and flexible setups, but dedicated hardware offers benefits like:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>✓ Battery-powered operation</li>
            <li>✓ Compact, purpose-built form factor</li>
            <li>✓ Always-on reliability</li>
            <li>✓ Professional appearance</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/flash"
              className="block p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors text-center"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Flash ESP32 Hardware</div>
            </Link>
            <Link 
              href="/getting-started"
              className="block p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold">Getting Started Guide</div>
            </Link>
          </div>
        </div>
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

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, children }: { number: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <div className="ml-14">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
      <code className="text-blue-300 text-sm">{children}</code>
    </pre>
  );
}

function StatusCard({ status, color, description }: { status: string; color: string; description: string }) {
  return (
    <div className={`${color} p-4 rounded-lg`}>
      <div className="font-bold text-2xl mb-1">{status}</div>
      <div className="text-sm opacity-90">{description}</div>
    </div>
  );
}

function DeviceCard({ icon, title, devices }: { icon: string; title: string; devices: string[] }) {
  return (
    <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
        {devices.map((device, i) => (
          <li key={i}>✓ {device}</li>
        ))}
      </ul>
    </div>
  );
}

function TipCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 bg-blue-900/10 border border-blue-600/30 rounded-lg">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function TroubleCard({ issue, solutions }: { issue: string; solutions: string[] }) {
  return (
    <div className="p-4 bg-red-900/10 border border-red-600/30 rounded-lg">
      <h4 className="font-semibold mb-3 text-red-400">⚠️ {issue}</h4>
      <ul className="space-y-2">
        {solutions.map((solution, i) => (
          <li key={i} className="text-gray-300 text-sm">
            • {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}
