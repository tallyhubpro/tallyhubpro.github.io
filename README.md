# 📺 Tally Hub - Professional Tally Light System

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/tallyhubpro/Tallyhub?style=for-the-badge)](https://github.com/tallyhubpro/Tallyhub/releases)
[![License](https://img.shields.io/github/license/tallyhubpro/Tallyhub?style=for-the-badge)](https://github.com/tallyhubpro/Tallyhub/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/tallyhubpro/Tallyhub?style=for-the-badge)](https://github.com/tallyhubpro/Tallyhub/stargazers)

**Professional Tally Light System for Video Production**

*Transform your video production with professional tally lights at a fraction of traditional costs*

[🚀 Get Started](#quick-start) • [📖 Documentation](#documentation) • [💬 Community](#community) • [⬇️ Downloads](https://github.com/tallyhubpro/Tallyhub/releases)

</div>

---

## ✨ Why Tally Hub?

**Traditional tally light systems cost $200-500+ per light.** Tally Hub brings enterprise-grade tally lighting to your production setup for **just $15-30 per device** – with better features and reliability.

### 🎯 Key Benefits

| Feature | Tally Hub | Traditional Systems |
|---------|-----------|-------------------|
| **Cost per Device** | 💰 $15-30 | 💸 $200-500+ |
| **Latency** | ⚡ <100ms | ⚡ 100-200ms |
| **Setup Time** | 🚀 5 minutes | ⏱️ 1+ hour |
| **Web Admin Panel** | ✅ Yes | ❌ No |
| **Real-time Monitoring** | ✅ Yes | ❌ No |
| **Open Source** | ✅ Yes | ❌ No |
| **Cross-Platform** | ✅ macOS, Windows, Linux | ❌ Limited |

---

## 🚀 Quick Start

### Install in 3 Steps

#### macOS
```bash
# Download from GitHub releases
# Open DMG and drag TallyHub to Applications
# Launch TallyHub from Applications
```
[⬇️ Download for Mac](https://github.com/tallyhubpro/Tallyhub/releases/latest)

#### Windows
```bash
# Download TallyHub-Setup-x.x.x.exe
# Run installer
# Launch from Start Menu
```
[⬇️ Download for Windows](https://github.com/tallyhubpro/Tallyhub/releases/latest)

#### Raspberry Pi / Linux (One Command)
```bash
curl -fsSL https://raw.githubusercontent.com/tallyhubpro/Tallyhub/main/install.sh | sudo bash
```

Then open: **`http://<your-ip>:3000/admin`**

---

## 🎬 Features Overview

### 📊 Real-Time Admin Panel
- 👁️ **Live Monitoring** - Watch all connected devices in real-time
- 🎛️ **Mixer Integration** - Control OBS, vMix, Blackmagic ATEM, and more
- ⚙️ **Easy Configuration** - No coding required, browser-based setup
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

### 🔌 Universal Compatibility
**Supports 15+ Professional Mixers:**

#### By Manufacturer

**Blackmagic Design**
- ATEM Mini/Mini Pro/Mini Pro ISO/Mini Extreme
- Television Studio (Pro HD/Pro 4K)
- 1ME/2ME/4ME Production Studio
- Constellation 8K (via ATEM connector)

**NewTek**
- TriCaster TC1, TriCaster Mini
- Other models supporting Tally over Ethernet (via TriCaster connector)

**StudioCoast**
- vMix (via HTTP API)

**Open Broadcaster Software**
- OBS Studio (via obs-websocket)

**Roland**
- V‑60HD, XS‑62S, VR‑50HD‑MKII
- Other Smart Tally‑capable mixers (via Roland Smart Tally connector)

**Panasonic**
- AV‑HS410, AV‑HS6000
- Any model supporting TSL UMD 3.1 or 5.0 over Ethernet (via TSL UMD connectors)

**FOR‑A**
- HVS‑490, HVS‑1200, HVS‑2000, HVS‑6000
- Any model supporting TSL UMD 5.0 (via TSL UMD 5.0 connector)

**Ross Video**
- Acuity, Carbonite (Black/Solo/Ultra), Graphite, TouchDrive, Vision (via TSL UMD connectors)

**Grass Valley**
- Mixers supporting TSL UMD 3.1/5.0 (via TSL UMD connectors)

**Universal Protocols**
- Open Sound Control (OSC) - Any OSC‑capable system
- TSL UMD 3.1 Protocol - Any device emitting TSL UMD 3.1 packets (UDP/TCP)
- TSL UMD 5.0 Protocol - Any device emitting TSL UMD 5.0 packets (UDP/TCP)

### 📱 Device Support
Use any of these as tally lights:
- **ESP32-1732S019** - Budget-friendly, 1.9" display
- **M5Stick C Plus 1.1** - Premium build, 1.14" display
- **M5Stick C Plus2** - Latest hardware, improved battery
- **Web Browser** - Use any phone/tablet/computer via `/tally.html`

### 🌟 Advanced Features
- ✅ **Sub-100ms Latency** - Professional-grade responsiveness
- ✅ **Auto-Reconnection** - Devices reconnect automatically if WiFi drops
- ✅ **mDNS/Bonjour** - Automatic device discovery on your network
- ✅ **UDP Broadcast Discovery** - Works even without internet
- ✅ **Docker Support** - Deploy on any Linux/Raspberry Pi
- ✅ **Web-based Firmware Flashing** - No special tools needed
- ✅ **Persistent State Storage** - Survives restarts
- ✅ **Multi-Mixer Support** - Run multiple connectors simultaneously

---

## 💻 Device Options & Pricing

### Hardware Comparison

| Device | Size | Display | Price | Best For |
|--------|------|---------|-------|----------|
| **ESP32-1732S019** | 1.9" | Color LCD | $15-25 | Budget productions |
| **M5Stick C Plus** | 1.14" | Color LCD | $25-35 | Professional use |
| **M5Stick C Plus2** | 1.14" | Color LCD | $30-40 | Premium setups |
| **Web Browser** | Any | Phone/Tablet | Free | Testing & backup |

### Platform Options

**Desktop Apps** (macOS & Windows)
- User-friendly interface
- System tray integration
- Auto-start on boot
- Perfect for single-operator setups

**Server Mode** (Linux/Raspberry Pi)
- Headless operation
- 24/7 reliability
- Docker containerized
- Ideal for permanent installations

**Web Browser** (Any device)
- No hardware required
- Mobile-friendly interface
- Perfect for testing
- Works as backup tally

---

## 📦 Installation & Setup

### Pre-Configured Installers
- **macOS**: Universal binary (Intel + Apple Silicon)
- **Windows**: Single-click installer
- **Linux/Pi**: One-line curl installation with Docker

### Manual Setup (Development)
```bash
git clone https://github.com/tallyhubpro/Tallyhub.git
cd Tallyhub
npm install
npm run dev
# Open http://localhost:3000
```

See [Full Documentation](https://github.com/tallyhubpro/Tallyhub#-quick-start) for detailed setup guides.

---

## 🎥 Demo & Screenshots

### Admin Panel
The intuitive web-based admin panel gives you complete control:
- Real-time device status
- Mixer configuration
- Tally state monitoring
- Firmware updates

### Supported Mixers Dashboard
Configure your mixer once, then manage everything from the admin panel.

### Device Status Monitoring
See which devices are connected, battery level, WiFi signal strength, and current tally state.

For live demo and screenshots, visit: **[GitHub Repository](https://github.com/tallyhubpro/Tallyhub)**

---

## 🔒 Security & Reliability

- ✅ **MIT Open Source** - Audit the code yourself
- ✅ **No Cloud Required** - Everything runs on your network
- ✅ **Enterprise-Grade** - Sub-100ms latency, enterprise reliability
- ✅ **Auto-Recovery** - Devices reconnect automatically
- ✅ **Network Resilient** - Works without internet connection

---

## 📚 Documentation

| Resource | Description |
|----------|-------------|
| [GitHub Repository](https://github.com/tallyhubpro/Tallyhub) | Source code, issues, releases |
| [Quick Start Guide](https://github.com/tallyhubpro/Tallyhub#-quick-start) | Installation for all platforms |
| [Docker Setup](https://github.com/tallyhubpro/Tallyhub/tree/main/docker) | Container deployment |
| [Development Guide](https://github.com/tallyhubpro/Tallyhub/blob/main/docs/development/CONTRIBUTING.md) | Contributing & development |
| [Firmware Setup](https://github.com/tallyhubpro/Tallyhub/tree/main/firmware) | Hardware firmware guides |

---

## 💬 Community & Support

- 🐛 **[GitHub Issues](https://github.com/tallyhubpro/Tallyhub/issues)** - Report bugs & request features
- 💡 **[GitHub Discussions](https://github.com/tallyhubpro/Tallyhub/discussions)** - Ask questions, share setups
- 📧 **[Email Support](mailto:hello@tallyhub.pro)** - Direct support

---

## 🎯 Getting Help

**New to Tally Hub?**
1. Read the [Quick Start Guide](https://github.com/tallyhubpro/Tallyhub#-quick-start)
2. Check the [FAQ](https://github.com/tallyhubpro/Tallyhub#-quick-start)
3. Ask in [Discussions](https://github.com/tallyhubpro/Tallyhub/discussions)

**Found a bug?**
- [Report on GitHub Issues](https://github.com/tallyhubpro/Tallyhub/issues)

**Want to contribute?**
- [See Contributing Guide](https://github.com/tallyhubpro/Tallyhub/blob/main/docs/development/CONTRIBUTING.md)

---

## 🚀 What's Next?

- ✨ More device support (Android app in development)
- 🎨 Advanced tally effects and customization
- 🌐 Cloud-based multi-site management
- 📊 Analytics dashboard

Stay updated: [Star us on GitHub](https://github.com/tallyhubpro/Tallyhub) ⭐

---

<div align="center">

## Made with ❤️ for the Video Production Community

**Free. Open Source. Professional Grade.**

[⬇️ Download Now](https://github.com/tallyhubpro/Tallyhub/releases) • [📖 Docs](https://github.com/tallyhubpro/Tallyhub) • [💬 Discuss](https://github.com/tallyhubpro/Tallyhub/discussions)

[MIT License](https://github.com/tallyhubpro/Tallyhub/blob/main/LICENSE) © 2025 Tally Hub

</div>
