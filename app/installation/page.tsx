import Link from 'next/link';

export default function Installation() {
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
        <h1 className="text-5xl font-bold mb-6">Installation Guide</h1>
        <p className="text-xl text-gray-400 mb-12">
          Choose your platform and get TallyHub running in minutes
        </p>

        {/* Platform Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <PlatformLink href="#macos" icon="🍎" name="macOS" />
          <PlatformLink href="#windows" icon="🪟" name="Windows" />
          <PlatformLink href="#linux" icon="🐧" name="Linux/Server" />
          <PlatformLink href="#docker" icon="🐳" name="Docker/Pi" />
        </div>

        {/* macOS Installation */}
        <Section id="macos" title="macOS Installation">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Download TallyHub</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <DownloadButton 
                  title="Apple Silicon (M1/M2/M3)"
                  version="v1.2.0"
                  link="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0-arm64.dmg"
                />
                <DownloadButton 
                  title="Intel Macs"
                  version="v1.2.0"
                  link="https://github.com/tallyhubpro/Tallyhub/releases/latest/download/TallyHub-1.2.0.dmg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. Install the Application</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Open the downloaded .dmg file</li>
                <li>2. Drag TallyHub to your Applications folder</li>
                <li>3. Launch TallyHub from Applications</li>
              </ol>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-200">⚠️ Security Warning Fix</h3>
              <p className="text-gray-300 mb-4">
                If you see "TallyHub is damaged and can't be opened", this is a macOS Gatekeeper issue. Run this command in Terminal:
              </p>
              <CodeBlock>
                xattr -cr /Applications/TallyHub.app
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-4">
                For more details, see <a href="https://github.com/tallyhubpro/Tallyhub/blob/main/MACOS_INSTALLATION.md" className="text-blue-400 hover:underline">MACOS_INSTALLATION.md</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">3. First Launch</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• TallyHub will open at <code className="text-blue-400">http://localhost:3000</code></li>
                <li>• Admin panel: <code className="text-blue-400">http://localhost:3000/admin</code></li>
                <li>• Tally view: <code className="text-blue-400">http://localhost:3000/tally</code></li>
                <li>• Firmware flasher: <code className="text-blue-400">http://localhost:3000/flash.html</code></li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Windows Installation */}
        <Section id="windows" title="Windows Installation">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Download TallyHub</h3>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Download for Windows (v1.2.0)
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. Install and Run</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Run the downloaded installer</li>
                <li>2. Follow the installation wizard</li>
                <li>3. Launch TallyHub from the Start Menu or Desktop shortcut</li>
                <li>4. Access the web interface at <code className="text-blue-400">http://localhost:3000</code></li>
              </ol>
            </div>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">💡 Windows Firewall</h3>
              <p className="text-gray-300">
                You may need to allow TallyHub through Windows Firewall for device discovery to work properly.
              </p>
            </div>
          </div>
        </Section>

        {/* Linux/Server Installation */}
        <Section id="linux" title="Linux/Server Installation">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js 20.9.0 or higher</li>
                <li>• npm or yarn</li>
                <li>• Git</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Installation Steps</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-2">1. Clone the repository:</p>
                  <CodeBlock>
                    git clone https://github.com/tallyhubpro/Tallyhub.git{'\n'}
                    cd Tallyhub
                  </CodeBlock>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">2. Install dependencies:</p>
                  <CodeBlock>npm install</CodeBlock>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">3. Build the project:</p>
                  <CodeBlock>npm run build</CodeBlock>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">4. Start the server:</p>
                  <CodeBlock>
                    NODE_ENV=production npm start
                  </CodeBlock>
                </div>

                <div>
                  <p className="text-gray-300 mb-2">Or use the CLI launcher:</p>
                  <CodeBlock>
                    NODE_ENV=production npx tallyhub
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Development Mode</h3>
              <p className="text-gray-300 mb-2">For development with hot reload:</p>
              <CodeBlock>npm run dev</CodeBlock>
            </div>
          </div>
        </Section>

        {/* Docker/Raspberry Pi Installation */}
        <Section id="docker" title="Docker & Raspberry Pi Installation">
          <div className="space-y-6">
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">🚀 Quick Install (Recommended)</h3>
              <p className="text-gray-300 mb-4">
                Install TallyHub on Raspberry Pi or Linux with a single command:
              </p>
              <CodeBlock>
                curl -fsSL https://raw.githubusercontent.com/tallyhubpro/Tallyhub/main/install.sh | sudo bash
              </CodeBlock>
              <p className="text-gray-400 text-sm mt-4">
                This will automatically:
              </p>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>✅ Install Docker (if needed)</li>
                <li>✅ Pull latest TallyHub image</li>
                <li>✅ Create directories and volumes</li>
                <li>✅ Start TallyHub with auto-restart</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Access Points</h3>
              <p className="text-gray-300 mb-2">
                After installation, access TallyHub at:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Main interface: <code className="text-blue-400">http://&lt;pi-ip&gt;:3000/</code></li>
                <li>• Admin panel: <code className="text-blue-400">http://&lt;pi-ip&gt;:3000/admin</code></li>
                <li>• Tally display: <code className="text-blue-400">http://&lt;pi-ip&gt;:3000/tally</code></li>
                <li>• Firmware flasher: <code className="text-blue-400">http://&lt;pi-ip&gt;:3000/flash.html</code></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Manual Docker Installation</h3>
              <p className="text-gray-300 mb-4">
                For more control over the installation:
              </p>
              <Link 
                href="/docker"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                View Docker Deployment Guide
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Updating TallyHub</h3>
              <p className="text-gray-300 mb-2">
                To update to the latest version, simply re-run the install command:
              </p>
              <CodeBlock>
                curl -fsSL https://raw.githubusercontent.com/tallyhubpro/Tallyhub/main/install.sh | sudo bash
              </CodeBlock>
            </div>
          </div>
        </Section>

        {/* Next Steps */}
        <Section title="Next Steps">
          <div className="grid md:grid-cols-2 gap-6">
            <NextStepCard 
              title="Flash Firmware"
              description="Set up your ESP32 or M5Stick devices"
              href="/flash"
              icon="⚡"
            />
            <NextStepCard 
              title="Getting Started"
              description="Configure your first tally light"
              href="/getting-started"
              icon="🚀"
            />
            <NextStepCard 
              title="Raspberry Pi Setup"
              description="Detailed Raspberry Pi configuration"
              href="/raspberry-pi"
              icon="🍓"
            />
            <NextStepCard 
              title="Documentation"
              description="Full feature documentation"
              href="/documentation"
              icon="📚"
            />
          </div>
        </Section>

        {/* Troubleshooting */}
        <Section title="Common Issues">
          <div className="space-y-4">
            <TroubleCard 
              platform="macOS"
              issue="App won't open (damaged)"
              solution="Run: xattr -cr /Applications/TallyHub.app"
            />
            <TroubleCard 
              platform="Windows"
              issue="Devices not discovered"
              solution="Allow TallyHub through Windows Firewall"
            />
            <TroubleCard 
              platform="Linux"
              issue="Port 3000 already in use"
              solution="Kill the process or set PORT environment variable"
            />
            <TroubleCard 
              platform="Docker"
              issue="Can't access web interface"
              solution="Ensure port 3000 is mapped and firewall allows access"
            />
          </div>
        </Section>
      </div>
    </div>
  );
}

// Components
function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">{title}</h2>
      {children}
    </section>
  );
}

function PlatformLink({ href, icon, name }: { href: string; icon: string; name: string }) {
  return (
    <a 
      href={href}
      className="flex flex-col items-center justify-center p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="font-semibold">{name}</div>
    </a>
  );
}

function DownloadButton({ title, version, link }: { title: string; version: string; link: string }) {
  return (
    <a 
      href={link}
      className="block p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center"
    >
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-blue-200">{version}</div>
    </a>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
      <code className="text-blue-300 text-sm">{children}</code>
    </pre>
  );
}

function NextStepCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link 
      href={href}
      className="block p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}

function TroubleCard({ platform, issue, solution }: { platform: string; issue: string; solution: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="flex items-start gap-3">
        <span className="text-red-400 text-xl">⚠️</span>
        <div className="flex-1">
          <div className="font-semibold text-gray-300">
            <span className="text-blue-400">[{platform}]</span> {issue}
          </div>
          <div className="text-sm text-gray-400 mt-1">
            Solution: {solution}
          </div>
        </div>
      </div>
    </div>
  );
}
