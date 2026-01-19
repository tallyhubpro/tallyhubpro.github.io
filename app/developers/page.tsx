import Link from 'next/link';

export default function Developers() {
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
        <h1 className="text-5xl font-bold mb-6">Developer Guide</h1>
        <p className="text-xl text-gray-400 mb-12">
          Contribute to TallyHub or build custom integrations
        </p>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <QuickLink 
            title="GitHub Repo"
            href="https://github.com/tallyhubpro/Tallyhub"
            icon="💻"
          />
          <QuickLink 
            title="Issues"
            href="https://github.com/tallyhubpro/Tallyhub/issues"
            icon="🐛"
          />
          <QuickLink 
            title="Discussions"
            href="https://github.com/tallyhubpro/Tallyhub/discussions"
            icon="💬"
          />
        </div>

        {/* Getting Started */}
        <Section title="Getting Started with Development">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Node.js</strong> 20.9.0 or higher</li>
                <li>• <strong>npm</strong> or yarn package manager</li>
                <li>• <strong>Git</strong> for version control</li>
                <li>• <strong>TypeScript</strong> knowledge recommended</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Setup Development Environment</h3>
              <div className="space-y-4">
                <StepItem 
                  number="1"
                  title="Fork and Clone"
                  content={
                    <CodeBlock>{`git clone https://github.com/YOUR_USERNAME/Tallyhub.git
cd Tallyhub`}</CodeBlock>
                  }
                />
                <StepItem 
                  number="2"
                  title="Install Dependencies"
                  content={<CodeBlock>npm install</CodeBlock>}
                />
                <StepItem 
                  number="3"
                  title="Start Development Server"
                  content={<CodeBlock>npm run dev</CodeBlock>}
                />
                <StepItem 
                  number="4"
                  title="Open in Browser"
                  content={
                    <p className="text-gray-300">
                      Navigate to <code className="text-blue-400">http://localhost:3000</code>
                    </p>
                  }
                />
              </div>
            </div>
          </div>
        </Section>

        {/* npm Scripts */}
        <Section title="Available Scripts">
          <div className="space-y-3">
            <ScriptCard 
              command="npm run dev"
              description="Start development server with ts-node + nodemon (hot reload)"
            />
            <ScriptCard 
              command="npm run build"
              description="Compile TypeScript to dist/ for production"
            />
            <ScriptCard 
              command="npm start"
              description="Run compiled production build from dist/"
            />
            <ScriptCard 
              command="npm run typecheck"
              description="TypeScript strict type checking (no emit)"
            />
            <ScriptCard 
              command="npm run lint"
              description="Lint codebase (ESLint + TypeScript rules)"
            />
            <ScriptCard 
              command="npm run lint:fix"
              description="Auto-fix lint issues where possible"
            />
            <ScriptCard 
              command="npm run format"
              description="Format code with Prettier across the repo"
            />
            <ScriptCard 
              command="npm run logs:prune"
              description="Remove log files older than 14 days"
            />
            <ScriptCard 
              command="npx tallyhub"
              description="CLI launcher - builds and starts server"
            />
          </div>
        </Section>

        {/* Project Structure */}
        <Section title="Project Structure">
          <CodeBlock>
            {`Tallyhub/
├── src/                   # TypeScript source files
│   ├── index.ts          # Main entry point
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── types/            # TypeScript types
├── public/               # Static assets
│   ├── firmware/         # Device firmware files
│   └── flash.html        # Firmware flasher UI
├── dist/                 # Compiled JavaScript (build output)
├── logs/                 # Application logs
├── docker/               # Docker configuration
├── firmware/             # Device firmware source
├── bin/                  # CLI tools
└── docs/                 # Documentation`}
          </CodeBlock>
        </Section>

        {/* Contributing Guidelines */}
        <Section title="Contributing Guidelines">
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">📖 Read CONTRIBUTING.md</h3>
              <p className="text-gray-300 mb-3">
                Before contributing, please read our comprehensive contributing guide:
              </p>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/blob/main/docs/development/CONTRIBUTING.md"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CONTRIBUTING.md on GitHub →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Branch Naming</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <code className="text-blue-400">feature/</code> - New features</li>
                <li>• <code className="text-blue-400">fix/</code> - Bug fixes</li>
                <li>• <code className="text-blue-400">docs/</code> - Documentation updates</li>
                <li>• <code className="text-blue-400">refactor/</code> - Code refactoring</li>
                <li>• <code className="text-blue-400">test/</code> - Test additions or changes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Commit Message Style</h3>
              <p className="text-gray-300 mb-3">Use conventional commits format:</p>
              <CodeBlock>
                {`feat: add support for TriCaster mixers
fix: resolve device discovery timeout
docs: update installation guide
refactor: improve WebSocket connection handling
chore: bump version to 1.2.0`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Code Quality Gates</h3>
              <p className="text-gray-300 mb-3">
                Before submitting a PR, ensure all quality checks pass:
              </p>
              <CodeBlock>
                {`npm run typecheck     # No TypeScript errors
npm run lint          # No linting errors
npm run format        # Code is formatted
npm run build         # Builds successfully`}
              </CodeBlock>
            </div>
          </div>
        </Section>

        {/* API Documentation */}
        <Section title="API & Integration">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">REST API</h3>
              <p className="text-gray-300 mb-4">
                TallyHub provides a REST API for custom integrations:
              </p>
              <div className="space-y-3">
                <ApiEndpoint 
                  method="GET"
                  path="/api/devices"
                  description="List all registered devices"
                />
                <ApiEndpoint 
                  method="POST"
                  path="/api/devices"
                  description="Register a new device"
                />
                <ApiEndpoint 
                  method="GET"
                  path="/api/assignments"
                  description="Get camera assignments"
                />
                <ApiEndpoint 
                  method="PUT"
                  path="/api/assignments/:id"
                  description="Update camera assignment"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">WebSocket API</h3>
              <p className="text-gray-300 mb-4">
                Real-time tally updates via WebSocket:
              </p>
              <CodeBlock>
                {`// Connect to WebSocket
const ws = new WebSocket('ws://localhost:3000/api/tally');

// Listen for tally updates
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Tally update:', data);
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Device Discovery Protocol</h3>
              <p className="text-gray-300 mb-4">
                Devices can discover the hub using UDP broadcast or mDNS:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>UDP Port:</strong> 7411</li>
                <li>• <strong>mDNS Service:</strong> _tallyhub._udp.local</li>
                <li>• <strong>TXT Records:</strong> api=3000, udp=7411, ver=1.2.0</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Environment Variables */}
        <Section title="Environment Variables">
          <div className="space-y-3">
            <EnvVarCard 
              name="NODE_ENV"
              values="development | production"
              description="Set environment mode"
            />
            <EnvVarCard 
              name="LOG_LEVEL"
              values="error | warn | info | debug"
              description="Set logging verbosity"
            />
            <EnvVarCard 
              name="PORT"
              values="number"
              description="HTTP server port (default: 3000)"
            />
            <EnvVarCard 
              name="GITHUB_TOKEN"
              values="string"
              description="GitHub personal access token for firmware downloads"
            />
            <EnvVarCard 
              name="DISABLE_MDNS"
              values="1 | 0"
              description="Disable mDNS service advertising"
            />
          </div>
        </Section>

        {/* Firmware Development */}
        <Section title="Firmware Development">
          <div className="space-y-6">
            <p className="text-gray-300">
              TallyHub firmware is written in C++ for ESP32 devices using Arduino framework.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4">Firmware Directory</h3>
              <CodeBlock>
                {`firmware/
├── esp32-1732s019/      # 1.9" display tally
├── m5stick-c-plus/      # M5Stick C Plus 1.1
└── m5stick-c-plus2/     # M5Stick C Plus2`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Building Firmware</h3>
              <p className="text-gray-300 mb-3">
                Use PlatformIO or Arduino IDE to build firmware:
              </p>
              <CodeBlock>
                {`# Using PlatformIO
cd firmware/esp32-1732s019
pio run

# Build and upload
pio run --target upload`}
              </CodeBlock>
            </div>

            <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">🎨 Recent Firmware Improvements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Unified battery smoothing & percent logic</li>
                <li>• Always-on Wi-Fi outline and disconnect indicator</li>
                <li>• Removed legacy calibration for leaner build</li>
                <li>• Overlap-safe layout for battery and Wi-Fi icons</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Testing */}
        <Section title="Testing">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">🧪 Test Suite (Coming Soon)</h3>
            <p className="text-gray-300 mb-3">
              A comprehensive test suite is planned. Current testing workflow:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Manual testing with real devices</li>
              <li>• TypeScript type checking (<code className="text-blue-400">npm run typecheck</code>)</li>
              <li>• Linting (<code className="text-blue-400">npm run lint</code>)</li>
              <li>• Code formatting (<code className="text-blue-400">npm run format</code>)</li>
            </ul>
          </div>
        </Section>

        {/* Production Build */}
        <Section title="Production Build">
          <div className="space-y-4">
            <p className="text-gray-300">
              To build and run TallyHub in production:
            </p>
            <CodeBlock>
              {`# Build the project
npm run build

# Run production server
NODE_ENV=production LOG_LEVEL=info node dist/index.js

# Or use the CLI
NODE_ENV=production npx tallyhub`}
            </CodeBlock>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold mb-3">📝 Production Recommendations</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Set <code className="text-blue-400">NODE_ENV=production</code></li>
                <li>• Keep <code className="text-blue-400">LOG_LEVEL=info</code> unless debugging</li>
                <li>• Rotate or prune logs regularly (<code className="text-blue-400">npm run logs:prune</code>)</li>
                <li>• Use a process manager like PM2 or systemd</li>
                <li>• Set up reverse proxy (nginx) for HTTPS</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Release Process */}
        <Section title="Release & Versioning">
          <div className="space-y-4">
            <p className="text-gray-300">
              TallyHub follows semantic versioning (semver):
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Major</strong> (X.0.0) - Breaking changes</li>
              <li>• <strong>Minor</strong> (0.X.0) - New features, backward compatible</li>
              <li>• <strong>Patch</strong> (0.0.X) - Bug fixes</li>
            </ul>
            <p className="text-gray-400 mt-4">
              Current version: <span className="text-blue-400 font-semibold">1.2.0</span>
            </p>
          </div>
        </Section>

        {/* Community */}
        <Section title="Community & Support">
          <div className="grid md:grid-cols-2 gap-6">
            <CommunityCard 
              icon="🐛"
              title="Report Bugs"
              description="Found a bug? Report it on GitHub Issues"
              link="https://github.com/tallyhubpro/Tallyhub/issues"
            />
            <CommunityCard 
              icon="💡"
              title="Feature Requests"
              description="Suggest new features via GitHub Discussions"
              link="https://github.com/tallyhubpro/Tallyhub/discussions"
            />
            <CommunityCard 
              icon="💬"
              title="Community Chat"
              description="Join discussions with other developers"
              link="https://github.com/tallyhubpro/Tallyhub/discussions"
            />
            <CommunityCard 
              icon="📧"
              title="Contact"
              description="Email us at hello@tallyhub.pro"
              link="mailto:hello@tallyhub.pro"
            />
          </div>
        </Section>

        {/* License */}
        <Section title="License">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              TallyHub is open source software licensed under the <strong>MIT License</strong>.
            </p>
            <p className="text-gray-400 text-sm">
              You are free to use, modify, and distribute TallyHub for any purpose, 
              including commercial use. See the{' '}
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/blob/main/LICENSE"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LICENSE file
              </a>{' '}
              for details.
            </p>
          </div>
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

function QuickLink({ title, href, icon }: { title: string; href: string; icon: string }) {
  return (
    <a 
      href={href}
      className="block p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="font-semibold">{title}</div>
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

function StepItem({ number, title, content }: { number: string; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-2">{title}</h4>
        {content}
      </div>
    </div>
  );
}

function ScriptCard({ command, description }: { command: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <code className="text-blue-400 font-semibold">{command}</code>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );
}

function ApiEndpoint({ method, path, description }: { method: string; path: string; description: string }) {
  const methodColors: Record<string, string> = {
    GET: 'bg-green-600',
    POST: 'bg-blue-600',
    PUT: 'bg-yellow-600',
    DELETE: 'bg-red-600'
  };

  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="flex items-center gap-3 mb-2">
        <span className={`${methodColors[method]} px-2 py-1 rounded text-xs font-bold`}>
          {method}
        </span>
        <code className="text-blue-400">{path}</code>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function EnvVarCard({ name, values, description }: { name: string; values: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <code className="text-blue-400 font-semibold">{name}</code>
        <span className="text-xs text-gray-400">{values}</span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function CommunityCard({ icon, title, description, link }: { icon: string; title: string; description: string; link: string }) {
  return (
    <a 
      href={link}
      className="block p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}
