import Link from 'next/link';

export default function Flash() {
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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-5xl font-bold mb-6">Flash Firmware</h1>
        <p className="text-xl text-gray-400 mb-12">
          Flash your ESP32 tally devices directly from your browser
        </p>

        {/* Warning Box */}
        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-12">
          <h3 className="text-yellow-200 font-semibold text-lg mb-3">⚠️ Before You Start</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Use a high-quality USB cable (data cable, not just charging)</li>
            <li>• Close any other apps that might be using the serial port</li>
            <li>• Use Google Chrome or Microsoft Edge (WebSerial required)</li>
            <li>• Make sure your device is powered off before connecting</li>
          </ul>
        </div>

        {/* Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Method 1: TallyHub App */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-2xl font-bold mb-4">Option 1: TallyHub Desktop App</h2>
            <p className="text-gray-300 mb-4">
              The easiest way to flash firmware - built into the TallyHub desktop application.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
              <li>Open TallyHub desktop app</li>
              <li>Click "Flash Firmware" in the menu</li>
              <li>Connect your device via USB</li>
              <li>Select device type and firmware source</li>
              <li>Click "Flash" and wait for completion</li>
            </ol>
            <div className="space-y-2">
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
                className="block text-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-semibold"
              >
                Download TallyHub App
              </a>
            </div>
          </div>

          {/* Method 2: Web Flasher */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-4">Option 2: Web Flasher</h2>
            <p className="text-gray-300 mb-4">
              Flash directly from your browser without installing anything.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
              <li>Use Chrome or Edge browser</li>
              <li>Download firmware files from GitHub</li>
              <li>Open web flasher tool</li>
              <li>Connect device and select port</li>
              <li>Upload firmware and flash</li>
            </ol>
            <div className="space-y-2">
              <a 
                href="https://web.esphome.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-semibold"
              >
                Open ESPHome Web Flasher
              </a>
              <a 
                href="https://github.com/tallyhubpro/Tallyhub/releases/latest"
                className="block text-center px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
              >
                Download Firmware Files
              </a>
            </div>
          </div>
        </div>

        {/* Firmware Options */}
        <h2 className="text-3xl font-bold mb-6">Available Firmware</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <FirmwareCard 
            device="M5Stick Tally"
            description="For M5Stack M5Stick-C devices"
            features={["0.96 inch display", "Built-in battery", "Compact size"]}
            filename="M5Stick_Tally.bin"
          />
          <FirmwareCard 
            device="M5Stick Plus2"
            description="For M5Stack M5Stick-C Plus2"
            features={["1.14 inch display", "Larger battery", "USB-C"]}
            filename="M5Stick_Tally_Plus2.bin"
          />
          <FirmwareCard 
            device="ESP32-1732S019"
            description="For ESP32-1732S019 touchscreen"
            features={["2.4 inch display", "Touch support", "Very affordable"]}
            filename="ESP32-1732S019.bin"
          />
        </div>

        {/* Troubleshooting */}
        <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
        <div className="space-y-4">
          <TroubleshootItem 
            problem="Device not detected"
            solutions={[
              "Install USB drivers (CP210x or CH340)",
              "Try a different USB cable",
              "Check if another app is using the port",
              "Restart your computer"
            ]}
          />
          <TroubleshootItem 
            problem="Flash failed / timeout"
            solutions={[
              "Hold the BOOT button while connecting USB",
              "Try lowering the baud rate to 115200",
              "Ensure good USB connection",
              "Use a powered USB hub"
            ]}
          />
          <TroubleshootItem 
            problem="Device won't boot after flashing"
            solutions={[
              "Verify you downloaded the correct firmware",
              "Try flashing again",
              "Erase flash first, then reflash",
              "Check if device is getting power"
            ]}
          />
          <TroubleshootItem 
            problem="Browser doesn't support WebSerial"
            solutions={[
              "Use Google Chrome or Microsoft Edge",
              "Update browser to latest version",
              "Enable experimental features in chrome://flags",
              "Use TallyHub desktop app instead"
            ]}
          />
        </div>

        {/* Drivers */}
        <div className="mt-12 bg-gray-800/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">USB Drivers</h3>
          <p className="text-gray-300 mb-4">
            If your device isn't detected, you may need to install USB drivers:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700 hover:bg-gray-600 rounded-lg p-4 transition-colors"
            >
              <h4 className="font-semibold mb-2">CP210x Driver</h4>
              <p className="text-sm text-gray-400">For most M5Stack devices</p>
            </a>
            <a 
              href="https://sparks.gogo.co.nz/ch340.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700 hover:bg-gray-600 rounded-lg p-4 transition-colors"
            >
              <h4 className="font-semibold mb-2">CH340 Driver</h4>
              <p className="text-sm text-gray-400">For generic ESP32 boards</p>
            </a>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">After Flashing</h2>
          <p className="text-gray-300 mb-6">
            Once firmware is flashed successfully, configure WiFi on your device:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
            <li>Device boots into AP mode (creates WiFi hotspot)</li>
            <li>Connect to device WiFi (e.g., "TallyHub-XXXX")</li>
            <li>Browser opens configuration page automatically</li>
            <li>Enter your WiFi credentials and TallyHub server IP</li>
            <li>Device restarts and connects to your network</li>
          </ol>
          <Link 
            href="/getting-started"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-semibold"
          >
            Continue to Setup Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

function FirmwareCard({ device, description, features, filename }: { 
  device: string; 
  description: string; 
  features: string[];
  filename: string;
}) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-2">{device}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="text-sm text-gray-400 space-y-1 mb-4">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
      <div className="text-xs text-gray-400 mb-3 font-mono bg-gray-900 px-2 py-1 rounded">
        {filename}
      </div>
      <a 
        href={`https://github.com/tallyhubpro/Tallyhub/releases/latest/download/${filename}`}
        className="block text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors text-sm font-semibold"
      >
        Download Firmware
      </a>
    </div>
  );
}

function TroubleshootItem({ problem, solutions }: { problem: string; solutions: string[] }) {
  return (
    <div className="bg-gray-800/30 rounded-lg p-4">
      <h3 className="font-semibold text-red-400 mb-3">{problem}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {solutions.map((solution, i) => (
          <li key={i}>• {solution}</li>
        ))}
      </ul>
    </div>
  );
}
