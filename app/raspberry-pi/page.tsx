import Link from 'next/link';

export default function RaspberryPi() {
  return (
    <div className="min-h-screen brand-gradient text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            ← TallyHub Pro
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Raspberry Pi Setup</h1>
        <p className="text-xl text-gray-400 mb-12">
          Run TallyHub on Raspberry Pi for a dedicated tally light server
        </p>

        <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Install</h2>
          <p className="text-gray-300 mb-4">Install TallyHub with one command:</p>
          <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
            <code className="text-blue-300 text-sm">curl -fsSL https://raw.githubusercontent.com/tallyhubpro/Tallyhub/main/install.sh | sudo bash</code>
          </pre>
          <p className="text-gray-400 text-sm">
            For detailed Docker setup instructions, see the <Link href="/docker" className="text-blue-400 hover:underline">Docker Deployment Guide</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
