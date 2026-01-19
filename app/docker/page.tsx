import Link from 'next/link';

export default function Docker() {
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
        <h1 className="text-5xl font-bold mb-6">Docker Deployment</h1>
        <p className="text-xl text-gray-400 mb-12">
          Run TallyHub in Docker on Raspberry Pi, Linux, or any container platform
        </p>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-600/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Quick Start</h2>
          <p className="text-gray-300 mb-4">
            One-command installation for Raspberry Pi and Linux:
          </p>
          <CodeBlock language="bash">
            curl -fsSL https://raw.githubusercontent.com/tallyhubpro/Tallyhub/main/install.sh | sudo bash
          </CodeBlock>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <QuickFeature text="✅ Auto-installs Docker" />
            <QuickFeature text="✅ Pulls latest image" />
            <QuickFeature text="✅ Creates volumes" />
            <QuickFeature text="✅ Auto-restart enabled" />
          </div>
        </div>

        {/* Manual Docker Setup */}
        <Section title="Manual Docker Setup">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Option 1: Prebuilt Image</h3>
              <p className="text-gray-300 mb-4">
                Use the official prebuilt image from GitHub Container Registry:
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">1. Pull the latest image:</p>
                  <CodeBlock language="bash">
                    docker pull ghcr.io/tallyhubpro/tallyhub:latest
                  </CodeBlock>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">2. Create required directories:</p>
                  <CodeBlock language="bash">
                    {`sudo mkdir -p /opt/tallyhub/logs /opt/tallyhub/public/firmware
sudo touch /opt/tallyhub/device-storage.json /opt/tallyhub/device-assignments.json`}
                  </CodeBlock>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">3. Run the container:</p>
                  <CodeBlock language="bash">
                    {`docker run -d \\
  --name tallyhub \\
  --restart unless-stopped \\
  --network host \\
  -e NODE_ENV=production \\
  -e TZ=UTC \\
  -v /opt/tallyhub/device-storage.json:/app/device-storage.json \\
  -v /opt/tallyhub/device-assignments.json:/app/device-assignments.json \\
  -v /opt/tallyhub/logs:/app/logs \\
  -v /opt/tallyhub/public/firmware:/app/public/firmware:ro \\
  ghcr.io/tallyhubpro/tallyhub:latest`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
              <h4 className="font-semibold mb-2">💡 Host Networking</h4>
              <p className="text-gray-300 text-sm">
                Using <code className="text-blue-400">--network host</code> is recommended on Raspberry Pi 
                so mDNS/Bonjour and UDP device discovery work correctly.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                If you can't use host networking, publish ports instead:
              </p>
              <CodeBlock language="bash">-p 3000:3000 -p 7411:7411/udp</CodeBlock>
            </div>
          </div>
        </Section>

        {/* Docker Compose */}
        <Section title="Option 2: Docker Compose">
          <div className="space-y-6">
            <p className="text-gray-300">
              Build and run TallyHub locally with Docker Compose:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">1. Clone the repository:</p>
                <CodeBlock language="bash">
                  {`git clone https://github.com/tallyhubpro/Tallyhub.git
cd Tallyhub/docker`}
                </CodeBlock>
              </div>

              <div>
                <p className="text-gray-400 mb-2">2. Start with Docker Compose:</p>
                <CodeBlock language="bash">
                  {`docker compose up -d --build
docker compose logs -f`}
                </CodeBlock>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold mb-3">📁 Mounted Volumes</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <code className="text-blue-400">device-storage.json</code> - Device configurations</li>
                <li>• <code className="text-blue-400">device-assignments.json</code> - Camera assignments</li>
                <li>• <code className="text-blue-400">logs/</code> - Application logs</li>
                <li>• <code className="text-blue-400">public/firmware</code> - Custom firmware files (read-only)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Environment Variables */}
        <Section title="Environment Variables">
          <div className="space-y-4">
            <EnvVar 
              name="NODE_ENV"
              defaultValue="development"
              description="Set to 'production' for production deployments"
            />
            <EnvVar 
              name="LOG_LEVEL"
              defaultValue="info"
              description="Logging level: error, warn, info, debug"
            />
            <EnvVar 
              name="PORT"
              defaultValue="3000"
              description="HTTP server port"
            />
            <EnvVar 
              name="TZ"
              defaultValue="UTC"
              description="Timezone for logs (e.g., America/New_York)"
            />
            <EnvVar 
              name="GITHUB_TOKEN"
              defaultValue="none"
              description="Optional GitHub token for firmware downloads (higher rate limits)"
            />
            <EnvVar 
              name="DISABLE_MDNS"
              defaultValue="false"
              description="Set to '1' to disable mDNS advertising"
            />
          </div>

          <div className="mt-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
            <h4 className="font-semibold mb-2 text-yellow-200">🔑 GitHub Token</h4>
            <p className="text-gray-300 text-sm mb-3">
              Optional but recommended for GitHub firmware downloads:
            </p>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Increases API rate limit from 60/hour to 5000/hour</li>
              <li>• Enables access to private repositories</li>
              <li>• Improves reliability for firmware updates</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3">
              Add to your docker run command:
            </p>
            <CodeBlock language="bash">-e GITHUB_TOKEN=ghp_your_token_here</CodeBlock>
          </div>
        </Section>

        {/* Private Registry */}
        <Section title="Private Container Registry">
          <p className="text-gray-300 mb-4">
            If accessing a private GitHub Container Registry, authenticate first:
          </p>
          <CodeBlock language="bash">
            echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u YOUR_USERNAME --password-stdin
          </CodeBlock>
        </Section>

        {/* Management Commands */}
        <Section title="Container Management">
          <div className="space-y-4">
            <CommandCard 
              title="View Logs"
              command="docker logs -f tallyhub"
            />
            <CommandCard 
              title="Stop Container"
              command="docker stop tallyhub"
            />
            <CommandCard 
              title="Start Container"
              command="docker start tallyhub"
            />
            <CommandCard 
              title="Restart Container"
              command="docker restart tallyhub"
            />
            <CommandCard 
              title="Update to Latest"
              command={`docker pull ghcr.io/tallyhubpro/tallyhub:latest
docker stop tallyhub
docker rm tallyhub
# Then run the docker run command again`}
            />
            <CommandCard 
              title="View Container Stats"
              command="docker stats tallyhub"
            />
          </div>
        </Section>

        {/* Raspberry Pi Specific */}
        <Section title="Raspberry Pi Optimization">
          <div className="space-y-6">
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">🍓 Raspberry Pi Tips</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>Use host networking:</strong> Required for mDNS and UDP discovery
                </li>
                <li>
                  <strong>ARM architecture:</strong> The official image supports armv7 and arm64
                </li>
                <li>
                  <strong>SD card lifespan:</strong> Logs are written to mounted volume, reducing SD card wear
                </li>
                <li>
                  <strong>Auto-start:</strong> Use <code className="text-blue-400">--restart unless-stopped</code>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Log Rotation</h3>
              <p className="text-gray-300 mb-3">
                Prevent log files from filling up disk space:
              </p>
              <CodeBlock language="bash">
                {`# Create a cron job to prune old logs
sudo crontab -e

# Add this line to run daily at 3 AM:
0 3 * * * find /opt/tallyhub/logs -name "*.log" -mtime +14 -delete`}
              </CodeBlock>
            </div>
          </div>
        </Section>

        {/* Networking */}
        <Section title="Network Configuration">
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Required Ports</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>3000/tcp</strong> - Web interface and API</li>
                <li>• <strong>7411/udp</strong> - Device discovery (UDP broadcast)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Firewall Rules</h3>
              <p className="text-gray-300 mb-3">
                If using a firewall, allow these ports:
              </p>
              <CodeBlock language="bash">
                {`# UFW (Ubuntu/Debian)
sudo ufw allow 3000/tcp
sudo ufw allow 7411/udp

# firewalld (CentOS/RHEL)
sudo firewall-cmd --add-port=3000/tcp --permanent
sudo firewall-cmd --add-port=7411/udp --permanent
sudo firewall-cmd --reload`}
              </CodeBlock>
            </div>
          </div>
        </Section>

        {/* Troubleshooting */}
        <Section title="Troubleshooting">
          <div className="space-y-4">
            <TroubleItem 
              issue="Devices not discovering hub"
              solutions={[
                "Ensure host networking is enabled (--network host)",
                "Check firewall allows UDP port 7411",
                "Verify devices are on the same subnet",
                "Try disabling VLANs or network isolation"
              ]}
            />
            <TroubleItem 
              issue="Can't access web interface"
              solutions={[
                "Check container is running: docker ps",
                "View logs: docker logs tallyhub",
                "Ensure port 3000 is not blocked by firewall",
                "Verify correct IP address (use ifconfig or ip addr)"
              ]}
            />
            <TroubleItem 
              issue="Container keeps restarting"
              solutions={[
                "Check logs: docker logs tallyhub",
                "Verify volume mounts exist and have correct permissions",
                "Ensure Node.js version compatibility",
                "Check for port conflicts"
              ]}
            />
            <TroubleItem 
              issue="Out of disk space"
              solutions={[
                "Clean old logs: find /opt/tallyhub/logs -mtime +14 -delete",
                "Remove unused Docker images: docker image prune -a",
                "Check Docker disk usage: docker system df"
              ]}
            />
          </div>
        </Section>

        {/* Next Steps */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/20 border border-blue-600/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <NextStep 
              title="Flash Firmware"
              href="/flash"
              icon="⚡"
            />
            <NextStep 
              title="Getting Started"
              href="/getting-started"
              icon="🚀"
            />
            <NextStep 
              title="Documentation"
              href="/documentation"
              icon="📚"
            />
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

function CodeBlock({ language, children }: { language?: string; children: string }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      {language && (
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-xs text-gray-400">
          {language}
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-blue-300 text-sm">{children}</code>
      </pre>
    </div>
  );
}

function QuickFeature({ text }: { text: string }) {
  return (
    <div className="text-gray-300 text-sm">{text}</div>
  );
}

function EnvVar({ name, defaultValue, description }: { name: string; defaultValue: string; description: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <code className="text-blue-400 font-semibold">{name}</code>
        <span className="text-xs text-gray-400">default: {defaultValue}</span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function CommandCard({ title, command }: { title: string; command: string }) {
  return (
    <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
      <h4 className="font-semibold mb-2 text-gray-200">{title}</h4>
      <code className="text-sm text-blue-300 break-all">{command}</code>
    </div>
  );
}

function TroubleItem({ issue, solutions }: { issue: string; solutions: string[] }) {
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

function NextStep({ title, href, icon }: { title: string; href: string; icon: string }) {
  return (
    <Link 
      href={href}
      className="block p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors text-center"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-semibold">{title}</div>
    </Link>
  );
}
