import React from "react";

export default function LinuxAlternativesLinkHub() {
  const [page, setPage] = React.useState("home");
  const [copiedId, setCopiedId] = React.useState(null);
  const [checklistState, setChecklistState] = React.useState({});
  const [showDonate, setShowDonate] = React.useState(false);

  const brand = {
    name: "IT Chuck",
    tagline: "Practical Linux and open-source software guidance for evaluation, learning, and everyday work.",
  };

  const toggleCheck = (id) => {
    setChecklistState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const recommendations = [
    { title: "New to Linux", desc: "If you're coming from Windows and want something easy and familiar.", pick: "Linux Mint" },
    { title: "Modern & polished", desc: "If you want a clean, up-to-date system that just works.", pick: "Fedora Workstation" },
    { title: "Maximum customization", desc: "If you want full control over how your desktop looks and behaves.", pick: "Fedora KDE" },
    { title: "Safe & widely supported", desc: "If you want lots of tutorials and community help.", pick: "Ubuntu" },
  ];

  const distroGroups = [
    {
      group: "Fedora-based",
      accent: "border-blue-400/30 text-blue-300",
      distros: [
        { name: "Fedora Workstation", blurb: "A polished desktop Linux distribution with up-to-date software and a clean GNOME experience.", bestFor: "Modern desktop", site: "https://fedoraproject.org/workstation/", bg: "from-blue-600 via-sky-700 to-indigo-800", details: ["GNOME desktop", "Cutting-edge software", "Strong security defaults", "Upstream Linux"] },
        { name: "Fedora KDE", blurb: "Fedora with the KDE Plasma desktop, offering a highly customizable and feature-rich experience.", bestFor: "Customization", site: "https://fedoraproject.org/spins/kde/", bg: "from-indigo-600 via-violet-700 to-purple-800", details: ["KDE Plasma desktop", "Fully themeable", "Windows-like layout", "Chuck's daily driver"], chuckPick: true },
        { name: "Fedora XFCE", blurb: "Fedora with the XFCE desktop, providing a lightweight and traditional desktop experience on cutting-edge Fedora.", bestFor: "Lightweight Fedora", site: "https://fedoraproject.org/spins/xfce/", bg: "from-red-600 via-rose-700 to-pink-800", details: ["XFCE desktop", "Fedora base", "Low resource use", "Fast and stable"] },
        { name: "Fedora MATE", blurb: "Fedora with the classic MATE desktop, ideal for users who prefer a traditional layout on modern Fedora.", bestFor: "Classic desktop", site: "https://fedoraproject.org/spins/mate/", bg: "from-green-600 via-lime-700 to-emerald-800", details: ["MATE desktop", "Fedora base", "Traditional layout", "Solid performance"] },
        { name: "Fedora Cinnamon", blurb: "Fedora with the Cinnamon desktop, combining Fedora's up-to-date software with a familiar Windows-like experience.", bestFor: "Windows-like", site: "https://fedoraproject.org/spins/cinnamon/", bg: "from-purple-600 via-violet-700 to-indigo-800", details: ["Cinnamon desktop", "Fedora base", "Familiar layout", "Easy transition"] },
      ],
    },
    {
      group: "Ubuntu-based",
      accent: "border-orange-400/30 text-orange-300",
      distros: [
        { name: "Ubuntu", blurb: "One of the most widely known Linux distributions with broad documentation and support.", bestFor: "General use", site: "https://ubuntu.com/download/desktop", bg: "from-orange-600 via-amber-700 to-rose-800", details: ["GNOME desktop", "Massive documentation", "Large community", "LTS releases"] },
        { name: "Kubuntu", blurb: "Ubuntu with the KDE Plasma desktop, combining ease of use with deep customization options.", bestFor: "KDE on Ubuntu", site: "https://kubuntu.org/getkubuntu/", bg: "from-violet-600 via-fuchsia-700 to-purple-800", details: ["KDE Plasma desktop", "Ubuntu stability", "Easy customization", "Great hardware support"] },
        { name: "Ubuntu MATE", blurb: "Ubuntu with the MATE desktop — a classic, lightweight interface that runs well on older and modest hardware.", bestFor: "Older hardware", site: "https://ubuntu-mate.org/", bg: "from-green-700 via-emerald-700 to-teal-800", details: ["MATE desktop", "Very lightweight", "Great for older PCs", "Ubuntu base"] },
        { name: "Lubuntu", blurb: "A minimal Ubuntu spin using the LXQt desktop, designed to be fast and resource-friendly on low-spec machines.", bestFor: "Low-spec hardware", site: "https://lubuntu.me/", bg: "from-sky-600 via-cyan-700 to-blue-800", details: ["LXQt desktop", "Very low RAM usage", "Fast and snappy", "Ubuntu base"] },
        { name: "Xubuntu", blurb: "Ubuntu with the XFCE desktop, offering a balance of lightweight performance and a traditional desktop feel.", bestFor: "Lightweight & familiar", site: "https://xubuntu.org/", bg: "from-yellow-600 via-amber-700 to-orange-800", details: ["XFCE desktop", "Low resource use", "Stable and reliable", "Ubuntu base"] },
      ],
    },
    {
      group: "Other",
      accent: "border-emerald-400/30 text-emerald-300",
      distros: [
        { name: "Linux Mint", blurb: "A familiar and friendly Linux desktop that is especially approachable for Windows users.", bestFor: "Beginners", site: "https://www.linuxmint.com/", bg: "from-emerald-600 via-green-700 to-teal-800", details: ["Cinnamon desktop", "Long-term support base", "Familiar start menu", "Huge community"] },
        { name: "Zorin OS", blurb: "A polished Linux distribution designed to feel familiar to Windows users with a clean, modern interface.", bestFor: "Windows-like experience", site: "https://zorin.com/os/", bg: "from-cyan-600 via-sky-700 to-blue-800", details: ["Windows-style layout", "App compatibility layer", "Polished UI", "Great for switchers"] },
      ],
    },
  ];

  const gamingTools = [
    {
      name: "Steam Proton",
      blurb: "A compatibility layer that allows many Windows games to run on Linux through Steam.",
      bestFor: "Windows game compatibility",
      site: "https://store.steampowered.com/steamplay",
      accent: "#94a3b8",
      bg: "from-slate-600 via-gray-700 to-zinc-800",
      badge: "bg-slate-500/20 border-slate-400/40 text-slate-200",
      details: ["Built into Steam", "Thousands of supported games", "Constantly improving", "Free to use"],
    },
  ];

  const gamingDistros = [
    {
      name: "Bazzite",
      blurb: "A gaming-focused system based on Fedora Atomic, designed for Steam and console-like experiences.",
      bestFor: "Steam & gaming",
      site: "https://bazzite.gg",
      accent: "#6ee7b7",
      bg: "from-emerald-600 via-teal-700 to-cyan-800",
      badge: "bg-emerald-500/20 border-emerald-400/40 text-emerald-200",
      details: ["Fedora Atomic base", "Steam pre-installed", "Controller support", "Console-like UI"],
    },
    {
      name: "CachyOS",
      blurb: "An Arch-based distribution with performance optimizations, often used for gaming and high-performance workloads.",
      bestFor: "Performance tuning",
      site: "https://cachyos.org",
      accent: "#d8b4fe",
      bg: "from-violet-600 via-fuchsia-700 to-indigo-800",
      badge: "bg-violet-500/20 border-violet-400/40 text-violet-200",
      details: ["Arch Linux base", "Optimized kernel", "Advanced scheduler", "High-performance build"],
    },
    {
      name: "Nobara",
      blurb: "A Fedora-based distro with built-in gaming patches and tools, created to simplify gaming setup.",
      bestFor: "Easy gaming setup",
      site: "https://nobaraproject.org",
      accent: "#fca5a5",
      bg: "from-rose-600 via-red-700 to-orange-800",
      badge: "bg-rose-500/20 border-rose-400/40 text-rose-200",
      details: ["Fedora base", "Pre-patched kernel", "Gaming tools included", "Created by GloriousEggroll"],
    },
  ];


  const software = [
    { category: "Web Browser", windows: "Microsoft Edge", alt: [{ name: "Firefox", site: "https://www.mozilla.org/firefox/" }, { name: "Brave", site: "https://brave.com/" }, { name: "Chrome", site: "https://www.google.com/chrome/" }, { name: "Opera", site: "https://www.opera.com/" }, { name: "Vivaldi", site: "https://vivaldi.com/" }] },
    { category: "Office Suite", windows: "Microsoft Office", alt: [{ name: "ONLYOFFICE Desktop Editors", site: "https://www.onlyoffice.com/desktop.aspx" }, { name: "LibreOffice", site: "https://www.libreoffice.org/" }] },
    { category: "Code Editor", windows: "Visual Studio Code", alt: [{ name: "VSCodium", site: "https://vscodium.com/" }] },
    { category: "Email Client", windows: "Outlook", alt: [{ name: "Thunderbird", site: "https://www.thunderbird.net/" }, { name: "Proton Mail", site: "https://proton.me/mail" }] },
    { category: "PDF Tool", windows: "Adobe Acrobat", alt: [{ name: "ONLYOFFICE PDF Editor", site: "https://www.onlyoffice.com/desktop.aspx" }] },
    { category: "Media Player", windows: "Windows Media Player", alt: [{ name: "VLC", site: "https://www.videolan.org/vlc/" }] },
    { category: "Streaming & Recording", windows: "Xbox Game Bar / Streamlabs", alt: [{ name: "OBS Studio", site: "https://obsproject.com/" }] },
    { category: "Video Editing", windows: "DaVinci Resolve / Premiere", alt: [{ name: "KDenlive", site: "https://kdenlive.org/" }] },
    { category: "Image Editing", windows: "Adobe Photoshop", alt: [{ name: "GIMP", site: "https://www.gimp.org/" }, { name: "Krita", site: "https://krita.org/" }] },
    { category: "RAW Photo Processing", windows: "Adobe Lightroom", alt: [{ name: "RawTherapee", site: "https://rawtherapee.com/" }, { name: "darktable", site: "https://www.darktable.org/" }] },
  ];

  const checklistSections = [
    {
      title: "Back up your files",
      color: "emerald",
      items: [
        { id: "c1", text: "Copy important documents, photos, and videos to an external drive or cloud storage." },
        { id: "c2", text: "Export browser bookmarks from your current browser." },
        { id: "c3", text: "Note down any software license keys or login credentials you may need." },
        { id: "c4", text: "Back up email if using a local client like Outlook." },
      ],
    },
    {
      title: "Check your hardware",
      color: "sky",
      items: [
        { id: "c5", text: "Look up your WiFi card model and verify Linux driver support at linux-hardware.org." },
        { id: "c6", text: "Check your printer model at openprinting.org to confirm Linux compatibility." },
        { id: "c7", text: "Verify your GPU is supported (most Intel and AMD GPUs work out of the box; NVIDIA may need extra steps)." },
        { id: "c8", text: "Check if any specialized peripherals (drawing tablets, audio interfaces) have Linux drivers." },
      ],
    },
    {
      title: "Know your software needs",
      color: "violet",
      items: [
        { id: "c9", text: "List software you use daily and research Linux alternatives for each." },
        { id: "c10", text: "Check if any employer-required software (VPN, endpoint security) supports Linux." },
        { id: "c11", text: "Confirm whether web-based versions of critical apps (Office 365, Google Workspace) will cover your needs." },
        { id: "c12", text: "Identify any Windows-only software you truly cannot replace." },
      ],
    },
    {
      title: "Prepare your USB drive",
      color: "amber",
      items: [
        { id: "c13", text: "Download a Linux ISO from an official source (links on this page)." },
        { id: "c14", text: "Get a USB drive with at least 8 GB of space (16 GB recommended)." },
        { id: "c15", text: "Flash the ISO using Fedora Media Writer, Rufus, or Balena Etcher." },
        { id: "c16", text: "Boot from the USB first to test Linux without installing anything." },
      ],
    },
  ];

  const firstSteps = [
    { icon: "🔄", title: "Run system updates first", desc: "Open your package manager or Software app and install all available updates before doing anything else. This ensures your system is current and drivers are fresh.", color: "emerald" },
    { icon: "🌐", title: "Set up your browser", desc: "Firefox is usually pre-installed. Sign in to sync your bookmarks. If you prefer another browser, install it via your distro's software center or Flatpak.", color: "sky" },
    { icon: "📦", title: "Install Flatpak apps", desc: "Flatpak is a universal app format for Linux. Visit flathub.org to browse thousands of apps including Spotify, Discord, OBS, VLC, and more.", color: "violet" },
    { icon: "🖨️", title: "Set up your printer", desc: "Go to Settings → Printers and add your printer. Most modern printers are detected automatically. If not, check openprinting.org for your model's driver.", color: "amber" },
    { icon: "🎨", title: "Customize your desktop", desc: "Linux desktops are highly customizable. Explore themes, icon packs, and panel layouts in your system settings. KDE Plasma and GNOME Extensions are great starting points.", color: "rose" },
    { icon: "💾", title: "Set up backups", desc: "Don't skip this. Install Déjà Dup (simple GUI) or Restic (powerful CLI) and schedule regular backups to an external drive or cloud storage.", color: "indigo" },
    { icon: "🔐", title: "Review your privacy settings", desc: "Check Settings → Privacy and disable any telemetry or location services you don't want. Linux gives you real control here — use it.", color: "teal" },
    { icon: "📚", title: "Bookmark learning resources", desc: "The Linux community is incredibly helpful. Bookmark your distro's official forums, the Arch Wiki (useful even if you don't use Arch), and r/linux4noobs.", color: "purple" },
  ];

  const hwChecks = [
    { category: "WiFi & Networking", icon: "📡", resource: "linux-hardware.org", url: "https://linux-hardware.org/", tip: "Search your WiFi card model. Intel and Realtek chips generally work out of the box. Some Broadcom cards need manual driver installation.", status: "Most work great", statusColor: "emerald" },
    { category: "Printers & Scanners", icon: "🖨️", resource: "openprinting.org", url: "https://www.openprinting.org/printers", tip: "Check your printer model before switching. Most HP, Brother, and Canon printers have good Linux support. Some older or budget models may be limited.", status: "Check first", statusColor: "amber" },
    { category: "NVIDIA Graphics", icon: "🎮", resource: "Fedora NVIDIA Guide", url: "https://rpmfusion.org/Howto/NVIDIA", tip: "NVIDIA requires proprietary drivers on most distros. Fedora makes this easy via RPM Fusion. AMD and Intel GPUs work out of the box with no extra steps.", status: "Extra step needed", statusColor: "rose" },
    { category: "AMD & Intel Graphics", icon: "💻", resource: "Works out of the box", url: "#distros", tip: "AMD and Intel integrated and discrete GPUs are fully supported by open-source drivers built into the Linux kernel. No extra setup required.", status: "Works great", statusColor: "emerald" },
    { category: "Drawing Tablets", icon: "✏️", resource: "OpenTabletDriver", url: "https://opentabletdriver.net/", tip: "Wacom tablets have good built-in Linux support. For other brands, OpenTabletDriver covers a wide range of devices.", status: "Most supported", statusColor: "sky" },
    { category: "Webcams", icon: "📷", resource: "Works out of the box", url: "#distros", tip: "Most USB webcams are plug-and-play on Linux. Proprietary software features (like Logitech G HUB) may not be available, but basic functionality works fine.", status: "Works great", statusColor: "emerald" },
    { category: "Audio Interfaces", icon: "🎙️", resource: "alsa-project.org", url: "https://www.alsa-project.org/", tip: "Class-compliant USB audio interfaces work on Linux without drivers. Professional interfaces with proprietary software may have limited functionality.", status: "Check your model", statusColor: "amber" },
    { category: "Fingerprint Readers", icon: "🔏", resource: "fprint project", url: "https://fprint.freedesktop.org/", tip: "Fingerprint support on Linux has improved significantly. Check the fprint project's supported devices list. Many modern laptop fingerprint readers work well.", status: "Growing support", statusColor: "violet" },
  ];

  const communityResources = [
    { name: "Linux Mint Forums", desc: "Friendly and beginner-welcoming community. Great for Mint-specific questions and general Linux help.", url: "https://forums.linuxmint.com/", tag: "Forum", tagColor: "emerald" },
    { name: "Fedora Discussion", desc: "Official Fedora community forum for help, feedback, and learning about Fedora Workstation and KDE.", url: "https://discussion.fedoraproject.org/", tag: "Forum", tagColor: "blue" },
    { name: "r/linux4noobs", desc: "A welcoming Reddit community specifically for people new to Linux. No question is too basic here.", url: "https://www.reddit.com/r/linux4noobs/", tag: "Reddit", tagColor: "orange" },
    { name: "r/linux", desc: "The main Linux subreddit for news, discussion, and community. Great for staying up to date.", url: "https://www.reddit.com/r/linux/", tag: "Reddit", tagColor: "orange" },
    { name: "Arch Wiki", desc: "The most comprehensive Linux documentation on the internet. Useful for all distros, not just Arch.", url: "https://wiki.archlinux.org/", tag: "Wiki", tagColor: "sky" },
    { name: "ProtonDB", desc: "Community reports on Windows game compatibility via Steam Proton. Search any game to see if it runs on Linux.", url: "https://www.protondb.com/", tag: "Gaming", tagColor: "violet" },
    { name: "Flathub", desc: "The primary source for Flatpak apps on Linux. Browse and install thousands of applications safely.", url: "https://flathub.org/", tag: "Apps", tagColor: "indigo" },
    { name: "ItsFOSS", desc: "Beginner-friendly Linux news, tutorials, and software recommendations written in plain language.", url: "https://itsfoss.com/", tag: "Learning", tagColor: "teal" },
  ];

  const colorMap = {
    emerald: { border: "border-emerald-400/30", bg: "bg-emerald-400/10", text: "text-emerald-300", check: "accent-emerald-400" },
    sky: { border: "border-sky-400/30", bg: "bg-sky-400/10", text: "text-sky-300", check: "accent-sky-400" },
    violet: { border: "border-violet-400/30", bg: "bg-violet-400/10", text: "text-violet-300", check: "accent-violet-400" },
    amber: { border: "border-amber-400/30", bg: "bg-amber-400/10", text: "text-amber-300", check: "accent-amber-400" },
    rose: { border: "border-rose-400/30", bg: "bg-rose-400/10", text: "text-rose-300", check: "accent-rose-400" },
    indigo: { border: "border-indigo-400/30", bg: "bg-indigo-400/10", text: "text-indigo-300", check: "accent-indigo-400" },
    teal: { border: "border-teal-400/30", bg: "bg-teal-400/10", text: "text-teal-300", check: "accent-teal-400" },
    purple: { border: "border-purple-400/30", bg: "bg-purple-400/10", text: "text-purple-300", check: "accent-purple-400" },
    orange: { border: "border-orange-400/30", bg: "bg-orange-400/10", text: "text-orange-300", check: "accent-orange-400" },
    blue: { border: "border-blue-400/30", bg: "bg-blue-400/10", text: "text-blue-300", check: "accent-blue-400" },
  };

  const totalChecks = checklistSections.reduce((acc, s) => acc + s.items.length, 0);
  const completedChecks = Object.values(checklistState).filter(Boolean).length;
  const progressPct = Math.round((completedChecks / totalChecks) * 100);

  const logoSVGs = {
    fedora: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.171 0C4.291 0 0 4.363 0 10.17c0 3.493 1.672 6.529 4.565 8.373l.028.018c.63.396 1.178.554 1.67.554.899 0 1.51-.538 1.949-1.038.425-.484.672-1.044.672-1.627 0-.762-.348-1.393-.964-1.731a5.362 5.362 0 0 1-2.713-4.64c0-2.97 2.353-5.353 5.353-5.353 2.97 0 5.353 2.383 5.353 5.353v.617c0 .77-.678 1.447-1.447 1.447-.77 0-1.447-.678-1.447-1.447V8.97a3.276 3.276 0 0 0-3.276-3.276 3.276 3.276 0 0 0-3.276 3.276 3.276 3.276 0 0 0 3.276 3.276c.785 0 1.493-.283 2.05-.736.41.736 1.193 1.236 2.1 1.236 1.599 0 2.892-1.293 2.892-2.892v-.617c0-4.233-3.437-7.653-7.668-7.653zm0 9.717a1.83 1.83 0 0 1-1.83-1.83 1.83 1.83 0 0 1 1.83-1.83 1.83 1.83 0 0 1 1.83 1.83 1.83 1.83 0 0 1-1.83 1.83zm3.658 4.096c-.176 0-.352-.022-.523-.063a7.792 7.792 0 0 1-3.135.655c-4.291 0-7.653-3.39-7.653-7.653 0-.16.006-.318.016-.476C1.01 7.645 0 8.818 0 10.17c0 5.807 4.291 10.17 10.171 10.17 1.952 0 3.773-.555 5.317-1.52-.872-.703-1.659-2.18-1.659-5.007z"/>
      </svg>
    ),
    ubuntu: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.889a2.222 2.222 0 1 1 0 4.444 2.222 2.222 0 0 1 0-4.444zm-4.701 2.3a7.207 7.207 0 0 0-.55 7.02L5.17 15.473a9.49 9.49 0 0 1 .764-9.18l1.365-.993v-.111zm4.701 3.144a1.778 1.778 0 1 1 0 3.556 1.778 1.778 0 0 1 0-3.556zM7.3 14.333a7.207 7.207 0 0 0 6.065 3.21 7.207 7.207 0 0 0 .997-.07l.764 1.587a9.49 9.49 0 0 1-1.761.166 9.49 9.49 0 0 1-7.98-4.35l1.915-.543zm9.365.567a7.207 7.207 0 0 0 .551-7.02l1.58-1.165a9.49 9.49 0 0 1-.764 9.18l-1.367.005zm-2.366-9.9a7.207 7.207 0 0 0-6.065-3.21 7.207 7.207 0 0 0-.997.07L6.473 .263A9.49 9.49 0 0 1 8.234.097a9.49 9.49 0 0 1 7.98 4.35l-1.915.553zm2.923 11.111a2.222 2.222 0 1 1 0-4.444 2.222 2.222 0 0 1 0 4.444z"/>
      </svg>
    ),
    linuxmint: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.688v14.624A4.688 4.688 0 0 1 19.312 24H4.688A4.688 4.688 0 0 1 0 19.312V4.688A4.688 4.688 0 0 1 4.688 0h14.624A4.688 4.688 0 0 1 24 4.688zM12 2.578A9.422 9.422 0 0 0 2.578 12 9.422 9.422 0 0 0 12 21.422 9.422 9.422 0 0 0 21.422 12 9.422 9.422 0 0 0 12 2.578zm0 2.11a7.313 7.313 0 0 1 7.313 7.312A7.313 7.313 0 0 1 12 19.312 7.313 7.313 0 0 1 4.688 12 7.313 7.313 0 0 1 12 4.688zm0 1.406a5.906 5.906 0 0 0-5.906 5.906A5.906 5.906 0 0 0 12 17.906a5.906 5.906 0 0 0 5.906-5.906A5.906 5.906 0 0 0 12 6.094zm0 1.64a4.266 4.266 0 0 1 4.266 4.266A4.266 4.266 0 0 1 12 16.266 4.266 4.266 0 0 1 7.734 12 4.266 4.266 0 0 1 12 7.734z"/>
      </svg>
    ),
    kubuntu: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0 1.608 6v12L12 24l10.392-6V6zm0 1.151 9.391 5.424v10.85L12 22.849l-9.391-5.424V6.575zM7.022 8.215v3.742l3.241-1.871zm9.956 0-3.241 1.871 3.241 1.871zM12 10.129l-3.241 1.87L12 13.871l3.241-1.872zm-4.978 2.914v3.742l3.241-1.871zm9.956 0-3.241 1.871 3.241 1.871z"/>
      </svg>
    ),
    xubuntu: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.8 16.8h-9.6L4.8 12l2.4-4.8h9.6L19.2 12z"/>
      </svg>
    ),
    lubuntu: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 0H2.4A2.4 2.4 0 0 0 0 2.4v19.2A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 21.6 0zM12 19.2A7.2 7.2 0 1 1 12 4.8a7.2 7.2 0 0 1 0 14.4zm0-12a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6z"/>
      </svg>
    ),
    ubuntumate: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 1 1 0 16.8A8.4 8.4 0 0 1 12 3.6zm0 2.4a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm-1.2 2.4h2.4v3.6H16.8v2.4h-3.6V18h-2.4v-3.6H7.2V12h3.6z"/>
      </svg>
    ),
    zorin: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.4 15.6H6.6l5.4-7.2H6.6V6h10.8l-5.4 7.2h5.4v2.4z"/>
      </svg>
    ),
    steam: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.01 2.454-.402.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
      </svg>
    ),
    pihole: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 1 1 0 19.2A9.6 9.6 0 0 1 12 2.4zm-1.2 3.6v3.6H7.2v2.4h3.6v6h2.4V12h3.6V9.6h-3.6V6z"/>
      </svg>
    ),
    cachyos: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 opacity-90" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L0 6v12l12 6 12-6V6zm0 2.4 9.6 4.8v9.6L12 21.6l-9.6-4.8V7.2z"/>
      </svg>
    ),
  };

  const logoMap = {
    "Fedora Workstation": "fedora",
    "Fedora KDE": "fedora",
    "Fedora XFCE": "fedora",
    "Fedora MATE": "fedora",
    "Fedora Cinnamon": "fedora",
    "Ubuntu": "ubuntu",
    "Kubuntu": "kubuntu",
    "Ubuntu MATE": "ubuntumate",
    "Lubuntu": "lubuntu",
    "Xubuntu": "xubuntu",
    "Linux Mint": "linuxmint",
    "Zorin OS": "zorin",
    "Bazzite": "fedora",
    "CachyOS": "cachyos",
    "Nobara": "fedora",
    "Steam Proton": "steam",
  };

  function DistroCard({ distro }) {
    const logoKey = logoMap[distro.name];
    const logo = logoKey ? logoSVGs[logoKey] : null;
    return (
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/30 flex flex-col">
        <div className={`relative h-16 bg-gradient-to-br ${distro.bg} flex items-center justify-center gap-2 px-3`}>
          {logo}
          <span className="text-sm font-bold text-white/90 tracking-tight leading-tight text-center">{distro.name}</span>
        </div>
        <div className="p-3 flex flex-col flex-1">
          <h3 className="text-sm font-semibold text-white">{distro.name}</h3>
          <span className="mt-1 self-start rounded-full border border-sky-400/20 bg-sky-400/10 px-2 py-0.5 text-xs font-medium text-sky-300">{distro.bestFor}</span>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{distro.blurb}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {distro.details.slice(0, 2).map((d) => (
              <span key={d} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{d}</span>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between gap-2">
            <a href={distro.site} target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-white/15 px-3 py-1 text-xs font-semibold transition hover:bg-white/5">
              Official site →
            </a>
            {distro.chuckPick && (
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-300/40 bg-indigo-300/10 px-2 py-0.5 text-xs font-semibold text-indigo-300">
                ⭐ Chuck's Choice
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  const DonateModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setShowDonate(false)}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/40" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-white">Support IT Chuck</h2>
            <p className="text-xs text-slate-400 mt-0.5">If this helped you, any amount means a lot. Thank you! 🙏</p>
          </div>
          <button onClick={() => setShowDonate(false)} className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 hover:text-white transition">✕ Close</button>
        </div>

        <div className="space-y-3">
          {/* Cash App */}
          <a href="https://cash.app/$Chuck2045" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 transition hover:bg-emerald-400/20 hover:border-emerald-400/40 group">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white font-black text-lg">$</div>
            <div className="flex-1">
              <p className="font-semibold text-emerald-300 group-hover:text-emerald-200">Cash App</p>
              <p className="text-xs text-slate-400">$Chuck2045</p>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">Send →</span>
          </a>

          {/* PayPal */}
          <a href="https://www.paypal.com/donate?business=swright%40carolinacaring.org&currency_code=USD" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 transition hover:bg-blue-400/20 hover:border-blue-400/40 group">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm">PP</div>
            <div className="flex-1">
              <p className="font-semibold text-blue-300 group-hover:text-blue-200">PayPal</p>
              <p className="text-xs text-slate-400">swright@carolinacaring.org</p>
            </div>
            <span className="text-xs text-blue-400 font-semibold">Donate →</span>
          </a>

          {/* Ko-fi */}
          <a href="https://ko-fi.com/itchuck" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 transition hover:bg-red-400/20 hover:border-red-400/40 group">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white font-black text-lg">☕</div>
            <div className="flex-1">
              <p className="font-semibold text-red-300 group-hover:text-red-200">Ko-fi</p>
              <p className="text-xs text-slate-400">ko-fi.com/itchuck</p>
            </div>
            <span className="text-xs text-red-400 font-semibold">Support →</span>
          </a>

          {/* Chime */}
          <a href="https://chime.com/pay/Steven-Wright-287" target="_blank" rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4 transition hover:bg-teal-400/20 hover:border-teal-400/40 group">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white font-black text-sm">CH</div>
            <div className="flex-1">
              <p className="font-semibold text-teal-300 group-hover:text-teal-200">Chime</p>
              <p className="text-xs text-slate-400">$Steven-Wright-287</p>
            </div>
            <span className="text-xs text-teal-400 font-semibold">Send →</span>
          </a>

          {/* Zelle */}
          <div className="flex items-center gap-4 rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white font-black text-sm">Z</div>
            <div className="flex-1">
              <p className="font-semibold text-violet-300">Zelle</p>
              <p className="text-xs text-slate-400 mt-0.5">Open your bank app and search by email or phone</p>
              <button
                onClick={() => { navigator.clipboard.writeText("swright@carolinacaring.org"); setCopiedId("zelle-copy"); setTimeout(() => setCopiedId(null), 2000); }}
                className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300 transition hover:bg-violet-400/20">
                {copiedId === "zelle-copy" ? "✅ Copied!" : "📋 Copy email — swright@carolinacaring.org"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">No account needed for Cash App or Chime. PayPal and Ko-fi accept cards too.</p>
      </div>
    </div>
  );

  const Nav = () => (
    <>
      {showDonate && <DonateModal />}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-lg font-bold text-emerald-300">IT</div>
            <div>
              <div className="text-lg font-semibold tracking-tight">{brand.name}</div>
              <div className="text-xs text-slate-400">Practical alternatives, clearly explained</div>
            </div>
          </div>
          <nav className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
            {[
              { label: "Distros", p: "home", anchor: "distros" },
              { label: "Software", p: "home", anchor: "software" },
              { label: "Checklist", p: "checklist", anchor: null },
              { label: "First Steps", p: "firststeps", anchor: null },
              { label: "Hardware", p: "hardware", anchor: null },
              { label: "Community", p: "community", anchor: null },
              { label: "Technical", p: "technical", anchor: null },
              { label: "About", p: "home", anchor: "about" },
            ].map(({ label, p, anchor }) => (
              <button
                key={label}
                onClick={() => {
                  setPage(p);
                  if (anchor) {
                    setTimeout(() => {
                      const el = document.getElementById(anchor);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                  }
                }}
                className={`rounded-xl px-3 py-1.5 transition hover:text-white hover:bg-white/5 ${page === p ? "text-white bg-white/8" : ""}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setShowDonate(true)}
              className="ml-2 rounded-xl border border-amber-400/40 bg-amber-400/15 px-3 py-1.5 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/25 hover:text-amber-200 hover:border-amber-400/60"
            >
              ☕ Support
            </button>
          </nav>
        </div>
      </header>
    </>
  );

  // ── CHECKLIST PAGE ──────────────────────────────────────────────────────────
  if (page === "checklist") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Nav />
        <section className="border-b border-white/10 bg-slate-950 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">{brand.name} • Before You Switch</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Before you switch checklist</h1>
            <p className="mt-4 text-lg text-slate-300">Work through these items before making the jump. Check each one off as you go.</p>
            <div className="mt-6 max-w-md">
              <div className="flex items-center justify-between mb-2 text-sm text-slate-400">
                <span>{completedChecks} of {totalChecks} completed</span>
                <span className="text-emerald-300 font-semibold">{progressPct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-emerald-400 transition-all duration-500" style={{ width: `${progressPct}%` }} />
              </div>
              {progressPct === 100 && (
                <p className="mt-3 text-emerald-300 font-semibold">✅ You're ready to make the switch!</p>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 space-y-8">
          {checklistSections.map((section) => {
            const c = colorMap[section.color];
            return (
              <div key={section.title} className={`rounded-3xl border ${c.border} ${c.bg} p-6`}>
                <h2 className={`text-xl font-semibold ${c.text} mb-4`}>{section.title}</h2>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={!!checklistState[item.id]}
                        onChange={() => toggleCheck(item.id)}
                        className={`mt-0.5 h-5 w-5 rounded ${c.check} shrink-0 cursor-pointer`}
                      />
                      <span className={`text-sm text-slate-200 transition ${checklistState[item.id] ? "line-through text-slate-500" : ""}`}>{item.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="flex gap-4 pt-4 flex-wrap">
            <button onClick={() => setPage("home")} className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Back to main page</button>
            <button onClick={() => setPage("firststeps")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5">First steps after installing →</button>
          </div>
        </div>
        <footer className="border-t border-white/10 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
            <p>Use official links. Respect project trademarks.</p>
          </div>
        </footer>
      </div>
    );
  }

  // ── FIRST STEPS PAGE ────────────────────────────────────────────────────────
  if (page === "firststeps") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Nav />
        <section className="border-b border-white/10 bg-slate-950 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="mb-4 inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-sm text-indigo-300">{brand.name} • First Steps</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">First steps after installing Linux</h1>
            <p className="mt-4 text-lg text-slate-300">You've installed Linux — here's what to do next to get settled in properly.</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {firstSteps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <div key={step.title} className={`rounded-3xl border ${c.border} bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.bg} border ${c.border} text-2xl`}>{step.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${c.text} uppercase tracking-widest`}>Step {i + 1}</span>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-xl font-semibold text-emerald-200">One last tip from Chuck</h2>
            <p className="mt-3 text-slate-200">Don't try to do everything at once. Give yourself a week just to use Linux for your everyday tasks before customizing anything major. You'll learn more by doing than by reading — and the community is always there when you get stuck.</p>
          </div>
          <div className="mt-6 rounded-3xl border border-violet-400/20 bg-violet-400/10 p-6 flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-400/15 text-2xl">🤖</div>
            <div>
              <h2 className="text-xl font-semibold text-violet-200">Have a question? Ask Claude AI</h2>
              <p className="mt-2 text-sm text-slate-300">If you run into something you're not sure about — a terminal command, a setting, an error message — Claude AI is a great resource for plain-language answers. Just describe what you're trying to do and it will walk you through it.</p>
              <a href="https://claude.ai" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-400/20">
                Open Claude AI →
              </a>
            </div>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button onClick={() => setPage("home")} className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Back to main page</button>
            <button onClick={() => setPage("community")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5">Community resources →</button>
          </div>
        </div>
        <footer className="border-t border-white/10 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
            <p>Use official links. Respect project trademarks.</p>
          </div>
        </footer>
      </div>
    );
  }

  // ── HARDWARE PAGE ───────────────────────────────────────────────────────────
  if (page === "hardware") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Nav />
        <section className="border-b border-white/10 bg-slate-950 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_30%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="mb-4 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm text-amber-300">{brand.name} • Hardware Compatibility</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hardware compatibility guide</h1>
            <p className="mt-4 text-lg text-slate-300">Know what works, what needs a little setup, and what to check before you switch.</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">The general rule</h2>
            <p className="mt-3 text-slate-300">Most modern hardware works well on Linux with little or no setup. The most common exceptions are NVIDIA graphics, some WiFi cards, and highly specialized peripherals. When in doubt, boot Linux from a USB drive first — if everything works in the live session, it will work when installed.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hwChecks.map((hw) => {
              const statusColors = { emerald: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30", amber: "text-amber-300 bg-amber-400/10 border-amber-400/30", rose: "text-rose-300 bg-rose-400/10 border-rose-400/30", sky: "text-sky-300 bg-sky-400/10 border-sky-400/30", violet: "text-violet-300 bg-violet-400/10 border-violet-400/30" };
              return (
                <div key={hw.category} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{hw.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{hw.category}</h3>
                    </div>
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusColors[hw.statusColor]}`}>{hw.status}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{hw.tip}</p>
                  <div className="mt-4">
                    <a href={hw.url} target={hw.url.startsWith("#") ? undefined : "_blank"} rel="noreferrer" className="inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm font-semibold transition hover:bg-white/5">
                      {hw.url.startsWith("#") ? "See distros" : hw.resource} →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 rounded-3xl border border-sky-400/20 bg-sky-400/10 p-6">
            <h2 className="text-xl font-semibold text-sky-200">Test before you commit</h2>
            <p className="mt-3 text-slate-200">The safest way to check hardware compatibility is to boot your machine from a Linux USB drive. If WiFi connects, sound works, and the display looks right — you're good to install. This takes less than 10 minutes and tells you more than any compatibility list can.</p>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button onClick={() => setPage("home")} className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Back to main page</button>
            <button onClick={() => setPage("checklist")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5">Before you switch checklist →</button>
          </div>
        </div>
        <footer className="border-t border-white/10 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
            <p>Use official links. Respect project trademarks.</p>
          </div>
        </footer>
      </div>
    );
  }

  // ── COMMUNITY PAGE ──────────────────────────────────────────────────────────
  if (page === "community") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Nav />
        <section className="border-b border-white/10 bg-slate-950 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_30%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-sm text-purple-300">{brand.name} • Community & Learning</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Community & learning resources</h1>
            <p className="mt-4 text-lg text-slate-300">The Linux community is one of the most helpful in tech. Here are the best places to learn, ask questions, and stay connected.</p>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {communityResources.map((r) => {
              const c = colorMap[r.tagColor] || colorMap.emerald;
              return (
                <div key={r.name} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{r.name}</h3>
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${c.border} ${c.bg} ${c.text}`}>{r.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{r.desc}</p>
                  <div className="mt-4">
                    <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm font-semibold transition hover:bg-white/5">
                      Visit →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
            <h2 className="text-xl font-semibold text-purple-200">A word from Chuck</h2>
            <p className="mt-3 text-slate-200">The best thing about Linux isn't the software — it's the people. Don't be afraid to ask questions. Everyone in this community was a beginner once, and most people genuinely love helping others find their footing. Jump in.</p>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button onClick={() => setPage("home")} className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Back to main page</button>
            <button onClick={() => setPage("technical")} className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5">Technical tools →</button>
          </div>
        </div>
        <footer className="border-t border-white/10 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
            <p>Use official links. Respect project trademarks.</p>
          </div>
        </footer>
      </div>
    );
  }

  // ── TECHNICAL PAGE ──────────────────────────────────────────────────────────
  if (page === "technical") {
    const copyToClipboard = (text, id) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      });
    };

    const CodeBlock = ({ id, code, lang = "bash" }) => (
      <div className="relative mt-3 rounded-2xl border border-white/10 bg-slate-950 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-xs text-slate-400 font-mono">{lang}</span>
          <button
            onClick={() => copyToClipboard(code, id)}
            className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            {copiedId === id ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-xs text-emerald-300 font-mono leading-relaxed whitespace-pre">{code}</pre>
      </div>
    );

    const SectionHeader = ({ icon, title, desc, color = "indigo" }) => {
      const colors = {
        indigo: "border-indigo-400/20 bg-indigo-400/10 text-indigo-200",
        emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
        amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
        violet: "border-violet-400/20 bg-violet-400/10 text-violet-200",
        sky: "border-sky-400/20 bg-sky-400/10 text-sky-200",
        rose: "border-rose-400/20 bg-rose-400/10 text-rose-200",
      };
      return (
        <div className={`rounded-3xl border p-6 mb-6 ${colors[color]}`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-1 text-sm opacity-80">{desc}</p>
            </div>
          </div>
        </div>
      );
    };

    const piholeScripts = {
      fedora_install: `# Install Pi-hole on Fedora (run as your user, sudo will be called as needed)
# Step 1: Update your system
sudo dnf upgrade -y

# Step 2: Run the Pi-hole installer
curl -sSL https://install.pi-hole.net | bash

# Step 3: After install, set your admin password
pihole -a -p`,

      ubuntu_install: `# Install Pi-hole on Ubuntu (run as your user, sudo will be called as needed)
# Step 1: Update your system
sudo apt update && sudo apt upgrade -y

# Step 2: Run the Pi-hole installer
curl -sSL https://install.pi-hole.net | bash

# Step 3: After install, set your admin password
pihole -a -p`,

      fedora_dns: `# Set DNS to Google (8.8.8.8 / 8.8.4.4) on Fedora using NetworkManager
# Replace 'eth0' with your actual interface name (run 'nmcli device' to find it)

# Check your connection name first
nmcli connection show

# Set DNS servers on your active connection (replace 'Wired connection 1' if needed)
sudo nmcli connection modify "Wired connection 1" ipv4.dns "8.8.8.8 8.8.4.4"
sudo nmcli connection modify "Wired connection 1" ipv4.ignore-auto-dns yes

# Restart the connection to apply
sudo nmcli connection down "Wired connection 1" && sudo nmcli connection up "Wired connection 1"

# Verify DNS is set
nmcli connection show "Wired connection 1" | grep dns`,

      ubuntu_dns: `# Set DNS to Google (8.8.8.8 / 8.8.4.4) on Ubuntu using systemd-resolved
# Step 1: Edit the resolved config
sudo nano /etc/systemd/resolved.conf

# Add or update these lines under [Resolve]:
# DNS=8.8.8.8 8.8.4.4
# FallbackDNS=8.8.8.8
# Paste them in, save with Ctrl+O, exit with Ctrl+X

# Step 2: Restart the resolver
sudo systemctl restart systemd-resolved

# Step 3: Confirm DNS is active
resolvectl status | grep "DNS Servers"`,

      pihole_dns_point: `# Point Pi-hole to use Google DNS as its upstream resolver
# Run this on the machine where Pi-hole is installed

# Set upstream DNS via pihole command
pihole -a setdns 8.8.8.8,8.8.4.4

# Verify in Pi-hole admin: Settings → DNS → Upstream DNS Servers
# Or check the config file directly:
cat /etc/pihole/setupVars.conf | grep PIHOLE_DNS`,
    };

    const fsarchiverScripts = {
      fedora_install: `# Install FSArchiver on Fedora
sudo dnf install fsarchiver -y

# Verify installation
fsarchiver --version`,

      ubuntu_install: `# Install FSArchiver on Ubuntu
sudo apt update
sudo apt install fsarchiver -y

# Verify installation
fsarchiver --version`,

      backup: `# Create a full system backup with FSArchiver
# Replace /dev/sda1 with your actual partition (check with: lsblk)
# Replace /mnt/backup with your external drive or backup location

# Basic backup — saves the filesystem to an archive
sudo fsarchiver savefs /mnt/backup/system-backup.fsa /dev/sda1

# Backup with compression and a label (recommended)
sudo fsarchiver savefs -z9 -j4 /mnt/backup/system-$(date +%Y-%m-%d).fsa /dev/sda1

# -z9  = maximum compression
# -j4  = use 4 CPU threads (adjust to your core count)`,

      restore: `# Restore a system from an FSArchiver backup
# Boot from a Linux USB live session first, then run:

# Step 1: List what's inside the archive
sudo fsarchiver archinfo /mnt/backup/system-backup.fsa

# Step 2: Restore to a partition
# Replace /dev/sda1 with your target partition
# Replace fs000 with the filesystem ID shown in archinfo
sudo fsarchiver restfs /mnt/backup/system-backup.fsa id=0,dest=/dev/sda1

# Step 3: Reinstall bootloader if needed (Fedora/Ubuntu GRUB)
sudo grub2-install /dev/sda && sudo grub2-mkconfig -o /boot/grub2/grub.cfg`,
    };

    const resticScripts = {
      fedora_install: `# Install Restic on Fedora
sudo dnf install restic -y

# Verify installation
restic version`,

      ubuntu_install: `# Install Restic on Ubuntu
sudo apt update
sudo apt install restic -y

# Verify installation
restic version`,

      init: `# Initialize a Restic backup repository
# This sets up the encrypted backup store on an external drive
# Replace /mnt/backup/restic-repo with your backup destination

restic init --repo /mnt/backup/restic-repo

# You will be prompted to set a password — remember it!
# This password encrypts all your backups.`,

      backup: `# Run a backup with Restic
# Replace /mnt/backup/restic-repo with your repo path
# Replace ~/Documents with the folder(s) you want to back up

restic -r /mnt/backup/restic-repo backup ~/Documents ~/Pictures ~/Videos

# Exclude a folder (e.g. node_modules or Downloads)
restic -r /mnt/backup/restic-repo backup ~/ --exclude ~/Downloads --exclude ~/.cache

# List all snapshots after backing up
restic -r /mnt/backup/restic-repo snapshots`,

      restore: `# Restore files from a Restic backup
# Step 1: List available snapshots
restic -r /mnt/backup/restic-repo snapshots

# Step 2: Restore a specific snapshot (replace SNAPSHOT_ID with the ID from above)
restic -r /mnt/backup/restic-repo restore SNAPSHOT_ID --target /home/youruser/restored

# Step 3: Restore just a specific file or folder from a snapshot
restic -r /mnt/backup/restic-repo restore latest --target /tmp/restore --include /home/youruser/Documents`,

      automate: `# Set up automatic daily backups with a systemd timer (Fedora & Ubuntu)
# Step 1: Create the backup script
cat > ~/restic-backup.sh << 'EOF'
#!/bin/bash
export RESTIC_REPOSITORY="/mnt/backup/restic-repo"
export RESTIC_PASSWORD="your-password-here"
restic backup ~/Documents ~/Pictures ~/Videos --exclude ~/.cache
restic forget --keep-daily 7 --keep-weekly 4 --prune
EOF

chmod +x ~/restic-backup.sh

# Step 2: Create a cron job to run it daily at 2am
(crontab -l 2>/dev/null; echo "0 2 * * * /home/$USER/restic-backup.sh >> /var/log/restic.log 2>&1") | crontab -`,
    };

    const performanceScripts = {
      gnome_tweaks_fedora: `# Install GNOME Tweaks and Extension Manager on Fedora
sudo dnf install gnome-tweaks gnome-extensions-app -y

# Also install the GNOME Shell integration for browser control
sudo dnf install chrome-gnome-shell -y

# Launch GNOME Tweaks
gnome-tweaks`,

      gnome_tweaks_ubuntu: `# Install GNOME Tweaks and Extension Manager on Ubuntu
sudo apt update
sudo apt install gnome-tweaks gnome-shell-extension-manager -y

# Launch GNOME Tweaks
gnome-tweaks`,

      zram_fedora: `# Enable zram swap compression on Fedora (improves performance on low-RAM systems)
# Fedora 33+ includes zram-generator by default

# Check if zram is already active
zramctl

# If not active, install and configure zram-generator
sudo dnf install zram-generator -y

# Create config (sets zram to half your RAM)
sudo bash -c 'cat > /etc/systemd/zram-generator.conf << EOF
[zram0]
zram-size = ram / 2
compression-algorithm = zstd
EOF'

sudo systemctl daemon-reload
sudo systemctl start /dev/zram0

# Verify
zramctl`,

      zram_ubuntu: `# Enable zram on Ubuntu (improves responsiveness, especially on lower-RAM machines)
sudo apt install zram-config -y

# Ubuntu 22.04+ — use zram-tools instead
sudo apt install zram-tools -y

# Configure size (edit to set fraction of RAM)
sudo nano /etc/default/zramswap
# Set: PERCENT=50

sudo systemctl restart zramswap

# Verify
zramctl`,

      fstrim_fedora: `# Enable automatic SSD TRIM on Fedora (keeps SSD performance healthy)
# Check if fstrim.timer is active
systemctl status fstrim.timer

# Enable and start the weekly TRIM timer
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer

# Run TRIM manually right now
sudo fstrim -av`,

      fstrim_ubuntu: `# Enable automatic SSD TRIM on Ubuntu
# Check current status
systemctl status fstrim.timer

# Enable and start
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer

# Run manually
sudo fstrim -av`,

      power_profile: `# Set performance power profile on Fedora & Ubuntu (uses power-profiles-daemon)
# Check available profiles
powerprofilesctl list

# Set to performance mode
powerprofilesctl set performance

# Set back to balanced (default)
powerprofilesctl set balanced

# Check current active profile
powerprofilesctl get`,

      vm_tweaks: `# Kernel VM tweaks to improve desktop responsiveness
# These reduce swappiness and improve cache pressure — safe for desktops

# Check current values
cat /proc/sys/vm/swappiness
cat /proc/sys/vm/vfs_cache_pressure

# Apply temporarily (resets on reboot)
sudo sysctl vm.swappiness=10
sudo sysctl vm.vfs_cache_pressure=50

# Make permanent (survives reboots)
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-performance.conf
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.d/99-performance.conf
sudo sysctl --system`,
    };

    const gnomeExtensions = [
      { name: "Dash to Dock", desc: "Turns the GNOME dash into a persistent, customizable dock — great for Windows-like workflows.", url: "https://extensions.gnome.org/extension/307/dash-to-dock/" },
      { name: "AppIndicator Support", desc: "Adds system tray icon support — essential for apps like Discord, Dropbox, and Steam.", url: "https://extensions.gnome.org/extension/615/appindicator-support/" },
      { name: "Blur my Shell", desc: "Adds a frosted glass blur effect to the top bar and overview — makes GNOME look stunning.", url: "https://extensions.gnome.org/extension/3193/blur-my-shell/" },
      { name: "GSConnect", desc: "Connects your Android phone to your desktop — share files, notifications, clipboard, and more.", url: "https://extensions.gnome.org/extension/1319/gsconnect/" },
      { name: "Caffeine", desc: "Prevents your screen from sleeping when you need it — great for presentations or media playback.", url: "https://extensions.gnome.org/extension/517/caffeine/" },
      { name: "Just Perfection", desc: "Fine-tune GNOME's UI — hide elements, adjust spacing, tweak animations and panel behavior.", url: "https://extensions.gnome.org/extension/3843/just-perfection/" },
    ];

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Nav />
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(16,185,129,0.12),transparent_24%)] bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-sm text-indigo-300">{brand.name} • Technical notes and tools</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Technical setups, backups, and practical Linux improvements</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">Ready-to-use scripts, step-by-step setups, and performance tips — with copy buttons so you can get things running fast.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Pi-hole & DNS", anchor: "pihole" },
                  { label: "FSArchiver", anchor: "fsarchiver" },
                  { label: "Restic Backups", anchor: "restic" },
                  { label: "Performance", anchor: "performance" },
                ].map(({ label, anchor }) => (
                  <button key={anchor} onClick={() => { setTimeout(() => { const el = document.getElementById(anchor); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 50); }}
                    className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white">
                    {label} ↓
                  </button>
                ))}
                <button onClick={() => setPage("home")} className="rounded-2xl bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]">← Main page</button>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 space-y-16">

          {/* ── PI-HOLE ── */}
          <section id="pihole">
            <SectionHeader icon="🛡️" title="Pi-hole & DNS Filtering — Three Ways to Set It Up" desc="Block ads and trackers at the DNS level. Choose the approach that fits your setup — home network, single machine, or a portable sinkhole that travels with you." color="emerald" />

            <div className="space-y-8">

              {/* Approach overview cards */}
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { icon: "🏠", title: "Router-level", desc: "Set Pi-hole as the DNS server in your router's DHCP settings. Every device on your home network gets filtered automatically — no per-device setup.", badge: "Best for home networks", badgeColor: "emerald" },
                  { icon: "💻", title: "Per-connection", desc: "Configure DNS on a specific network connection profile. Simple and effective for a single machine on a known network.", badge: "Simplest setup", badgeColor: "sky" },
                  { icon: "🌐", title: "System-wide sinkhole", desc: "Run dnsmasq locally bound to 127.0.0.1 with NetworkManager enforcing it. Filtering follows you everywhere — with smart SSID logic that steps aside on work networks.", badge: "Chuck's method", badgeColor: "violet" },
                ].map((a) => {
                  const bc = { emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300", sky: "border-sky-400/30 bg-sky-400/10 text-sky-300", violet: "border-violet-400/30 bg-violet-400/10 text-violet-300" };
                  return (
                    <div key={a.title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex flex-col gap-2">
                      <div className="text-2xl">{a.icon}</div>
                      <h3 className="font-semibold text-white">{a.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed flex-1">{a.desc}</p>
                      <span className={`self-start mt-1 inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${bc[a.badgeColor]}`}>{a.badge}</span>
                    </div>
                  );
                })}
              </div>

              {/* Install Pi-hole */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-emerald-300">Step 1 — Install Pi-hole</h3>
                <p className="mt-2 text-sm text-slate-300">Pi-hole can run on a Raspberry Pi, a spare machine, or even your own desktop. The installer is the same regardless of approach.</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="pihole-fedora-install" code={piholeScripts.fedora_install} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="pihole-ubuntu-install" code={piholeScripts.ubuntu_install} />
                  </div>
                </div>
              </div>

              {/* Approach 1 — Router level */}
              <div className="rounded-3xl border border-emerald-400/20 bg-slate-900/80 p-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">🏠</span>
                  <h3 className="text-lg font-semibold text-emerald-300">Approach 1 — Router-level (Home Network)</h3>
                </div>
                <p className="mt-2 text-sm text-slate-300">The simplest and most powerful home setup. Configure your router to hand out Pi-hole's local IP as the DNS server to every device via DHCP. No scripts needed on individual machines.</p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950 p-5 space-y-3 text-sm text-slate-300">
                  <p className="font-semibold text-white">How to do it:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
                    <li>Find your Pi-hole machine's local IP address: <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">hostname -I</code></li>
                    <li>Log into your router admin panel (usually <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">192.168.1.1</code> or <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">192.168.0.1</code>)</li>
                    <li>Find the DHCP settings — usually under LAN, Network, or Advanced</li>
                    <li>Set the Primary DNS to your Pi-hole machine's local IP (e.g. <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">192.168.1.50</code>)</li>
                    <li>Save and restart your router — every device now routes DNS through Pi-hole</li>
                  </ol>
                </div>
                <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-xs text-slate-300">
                  💡 Give your Pi-hole machine a static local IP first so the router always knows where to find it. Set this in your router's DHCP reservation list using the machine's MAC address.
                </div>
              </div>

              {/* Approach 2 — Per connection */}
              <div className="rounded-3xl border border-sky-400/20 bg-slate-900/80 p-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">💻</span>
                  <h3 className="text-lg font-semibold text-sky-300">Approach 2 — Per-connection DNS</h3>
                </div>
                <p className="mt-2 text-sm text-slate-300">Configure DNS directly on a specific network connection. Good for pointing a single machine at Google DNS or Pi-hole without touching the router.</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora (NetworkManager)</span>
                    <CodeBlock id="pihole-fedora-dns" code={piholeScripts.fedora_dns} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu (systemd-resolved)</span>
                    <CodeBlock id="pihole-ubuntu-dns" code={piholeScripts.ubuntu_dns} />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-xs text-slate-300">
                  💡 This sets DNS for that saved connection profile only. If you connect to a different network, you'll need to configure it there too — or use Approach 3 instead.
                </div>
              </div>

              {/* Approach 3 — Chuck's method */}
              <div className="rounded-3xl border border-violet-400/30 bg-slate-900/80 p-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-300">Approach 3 — System-wide Local Sinkhole</h3>
                    <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-2 py-0.5 text-xs font-semibold text-violet-300">⭐ Chuck's method</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  This is a portable DNS sinkhole that lives on the machine itself. Instead of relying on a router or remote Pi-hole, dnsmasq runs locally bound to <code className="text-violet-300 bg-white/5 px-1.5 py-0.5 rounded text-xs">127.0.0.1:53</code> and NetworkManager is configured to enforce it for all connections. The filtering follows the laptop wherever it goes — coffee shop, hotel, home — without any manual switching.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  An SSID-aware NetworkManager dispatcher script detects when you're on a known work or corporate network and gracefully steps aside, letting the work network's DNS take over without breaking anything. When you leave, it snaps back automatically.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 1 — Install dnsmasq</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                        <CodeBlock id="sinkhole-dnsmasq-fedora" code={`# Install dnsmasq
sudo dnf install dnsmasq -y

# Disable systemd-resolved (conflicts with dnsmasq on port 53)
sudo systemctl disable --now systemd-resolved

# Remove the symlink it created
sudo rm /etc/resolv.conf

# Create a static resolv.conf pointing to localhost
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf
sudo chattr +i /etc/resolv.conf  # lock it so nothing overwrites it`} />
                      </div>
                      <div>
                        <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                        <CodeBlock id="sinkhole-dnsmasq-ubuntu" code={`# Install dnsmasq
sudo apt update && sudo apt install dnsmasq -y

# Disable systemd-resolved (conflicts with dnsmasq on port 53)
sudo systemctl disable --now systemd-resolved

# Remove the symlink it created
sudo rm /etc/resolv.conf

# Create a static resolv.conf pointing to localhost
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf
sudo chattr +i /etc/resolv.conf  # lock it so nothing overwrites it`} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 2 — Configure dnsmasq</p>
                    <CodeBlock id="sinkhole-dnsmasq-config" code={`# Create your dnsmasq config
sudo nano /etc/dnsmasq.conf

# Add these lines (or replace the file contents with this):
# -------------------------------------------------------
# Bind to localhost only — do not expose to the network
bind-interfaces
listen-address=127.0.0.1

# Upstream DNS — Google
server=8.8.8.8
server=8.8.4.4

# Block DNS over HTTPS (DoH bypass prevention)
server=/dns.google/
server=/cloudflare-dns.com/

# Cache settings
cache-size=1000
no-negcache

# Block list — point to your hosts file
addn-hosts=/etc/hosts.blocklist
# -------------------------------------------------------

# Enable and start dnsmasq
sudo systemctl enable dnsmasq --now

# Test it's working
dig google.com @127.0.0.1`} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 3 — Add blocklists (StevenBlack recommended)</p>
                    <CodeBlock id="sinkhole-blocklist" code={`# Download the StevenBlack unified hosts blocklist
# This covers ads, trackers, malware, and optionally social/gambling/adult
sudo curl -o /etc/hosts.blocklist \
  https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts

# Optional: use the extended list (ads + malware + social)
# sudo curl -o /etc/hosts.blocklist \
#   https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/social/hosts

# Restart dnsmasq to load the new list
sudo systemctl restart dnsmasq

# Check how many domains are blocked
grep -c "^0.0.0.0" /etc/hosts.blocklist`} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 4 — Tell NetworkManager to use localhost for DNS</p>
                    <CodeBlock id="sinkhole-nm-config" code={`# Create a NetworkManager config to enforce local DNS
sudo nano /etc/NetworkManager/conf.d/dns-local.conf

# Add this content:
# -------------------------------------------------------
[main]
dns=none
rc-manager=unmanaged
# -------------------------------------------------------

# This stops NetworkManager from overwriting /etc/resolv.conf
# Restart NetworkManager to apply
sudo systemctl restart NetworkManager

# Verify resolv.conf still points to localhost
cat /etc/resolv.conf`} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 5 — SSID-aware dispatcher (work network compatibility)</p>
                    <p className="text-xs text-slate-400 mb-2">This script detects your work network SSID and temporarily switches DNS to the network's own servers, then restores localhost DNS when you disconnect. Replace <code className="text-violet-300 bg-white/5 px-1 py-0.5 rounded">YOUR_WORK_SSID</code> with your actual work network name.</p>
                    <CodeBlock id="sinkhole-dispatcher" code={`# Create the dispatcher script
sudo nano /etc/NetworkManager/dispatcher.d/99-dns-sinkhole

# Paste this content:
# -------------------------------------------------------
#!/bin/bash
INTERFACE="$1"
EVENT="$2"
WORK_SSID="YOUR_WORK_SSID"
RESOLV="/etc/resolv.conf"

get_ssid() {
  nmcli -t -f active,ssid dev wifi | grep "^yes" | cut -d: -f2
}

if [ "$EVENT" = "up" ]; then
  SSID=$(get_ssid)
  if [ "$SSID" = "$WORK_SSID" ]; then
    # On work network — unlock resolv.conf and use network DNS
    sudo chattr -i "$RESOLV"
    echo "nameserver 8.8.8.8" > "$RESOLV"
    sudo systemctl stop dnsmasq
  else
    # On any other network — enforce local sinkhole
    sudo chattr -i "$RESOLV" 2>/dev/null
    echo "nameserver 127.0.0.1" > "$RESOLV"
    sudo chattr +i "$RESOLV"
    sudo systemctl start dnsmasq
  fi
fi

if [ "$EVENT" = "down" ]; then
  # Restore sinkhole on disconnect
  sudo chattr -i "$RESOLV" 2>/dev/null
  echo "nameserver 127.0.0.1" > "$RESOLV"
  sudo chattr +i "$RESOLV"
  sudo systemctl start dnsmasq
fi
# -------------------------------------------------------

# Make it executable
sudo chmod +x /etc/NetworkManager/dispatcher.d/99-dns-sinkhole`} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-200 mb-2">Step 6 — Keep blocklists fresh with a cron job</p>
                    <CodeBlock id="sinkhole-cron" code={`# Auto-update the StevenBlack blocklist weekly
(crontab -l 2>/dev/null; echo "0 3 * * 0 curl -so /etc/hosts.blocklist https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts && systemctl restart dnsmasq") | sudo crontab -

# Verify the cron was added
sudo crontab -l`} />
                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-400/5 px-4 py-3 text-xs text-slate-300">
                  💡 This is the approach running on Chuck's laptop. The sinkhole is always active, the blocklist updates itself weekly, and the dispatcher handles work networks without any manual intervention. Once it's set up, you don't think about it again.
                </div>
              </div>

              {/* Point Pi-hole upstream */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-emerald-300">Set Pi-hole's upstream DNS to Google</h3>
                <p className="mt-2 text-sm text-slate-300">If you're running a dedicated Pi-hole instance (Approaches 1 or 2), run this on the Pi-hole machine to set Google as its upstream resolver.</p>
                <CodeBlock id="pihole-upstream" code={piholeScripts.pihole_dns_point} />
              </div>

              {/* VPN Section */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-indigo-300">Pair your DNS filtering with a VPN</h3>
                <p className="mt-2 text-sm text-slate-300">DNS filtering handles what your machine resolves — a VPN handles what your ISP and the network around you can see. Together they cover both layers. All three options below have native Linux support.</p>
                <div className="mt-6 grid gap-4" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
                  {[
                    {
                      name: "Private Internet Access",
                      short: "PIA",
                      desc: "A solid, long-standing VPN with native Linux support, a verified no-logs policy, open source client, and a kill switch. Works great alongside a local dnsmasq sinkhole without conflicts.",
                      features: ["Native Linux client", "No-logs policy", "Kill switch", "Open source client", "Works with local DNS"],
                      url: "https://www.privateinternetaccess.com",
                      chuckPick: true,
                      border: "border-indigo-400/30",
                      bg: "bg-indigo-400/10",
                      text: "text-indigo-300",
                      btnBorder: "border-indigo-400/30",
                      btnBg: "bg-indigo-400/10",
                      btnHover: "hover:bg-indigo-400/20",
                      icon: "🔒",
                    },
                    {
                      name: "ProtonVPN",
                      short: "Proton",
                      desc: "Built by the team behind ProtonMail. Open source, audited, strict no-logs, and has a genuinely free tier with no data limits. Strong privacy focus and excellent Linux app.",
                      features: ["Free tier available", "Open source & audited", "No-logs policy", "Kill switch", "Swiss privacy laws"],
                      url: "https://protonvpn.com",
                      chuckPick: false,
                      border: "border-violet-400/30",
                      bg: "bg-violet-400/10",
                      text: "text-violet-300",
                      btnBorder: "border-violet-400/30",
                      btnBg: "bg-violet-400/10",
                      btnHover: "hover:bg-violet-400/20",
                      icon: "🛡️",
                    },
                    {
                      name: "NordVPN",
                      short: "Nord",
                      desc: "One of the most widely used VPNs with a large server network, fast speeds, and a solid Linux CLI client. Good for users who want broad server coverage and reliable performance.",
                      features: ["Large server network", "Fast speeds", "No-logs policy", "Kill switch", "Linux CLI client"],
                      url: "https://nordvpn.com",
                      chuckPick: false,
                      border: "border-blue-400/30",
                      bg: "bg-blue-400/10",
                      text: "text-blue-300",
                      btnBorder: "border-blue-400/30",
                      btnBg: "bg-blue-400/10",
                      btnHover: "hover:bg-blue-400/20",
                      icon: "🌐",
                    },
                  ].map((vpn) => (
                    <div key={vpn.name} className={`rounded-2xl border ${vpn.border} ${vpn.bg} p-5 flex flex-col`}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-2xl">{vpn.icon}</span>
                        <h4 className={`font-semibold ${vpn.text}`}>{vpn.name}</h4>
                        {vpn.chuckPick && (
                          <span className="inline-flex rounded-full border border-indigo-300/40 bg-indigo-300/10 px-2 py-0.5 text-xs font-semibold text-indigo-300">⭐ Chuck's pick</span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed flex-1">{vpn.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {vpn.features.map(f => (
                          <span key={f} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400">{f}</span>
                        ))}
                      </div>
                      <a href={vpn.url} target="_blank" rel="noreferrer"
                        className={`mt-4 inline-flex items-center gap-2 rounded-2xl border ${vpn.btnBorder} ${vpn.btnBg} px-4 py-2 text-sm font-semibold ${vpn.text} transition ${vpn.btnHover}`}>
                        Visit {vpn.short} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── FSARCHIVER ── */}
          <section id="fsarchiver">
            <SectionHeader icon="💾" title="FSArchiver — Full System Imaging" desc="Create and restore complete filesystem images. Great for cloning drives, migrating systems, or keeping a restorable snapshot." color="amber" />

            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-amber-300">Install FSArchiver</h3>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="fsa-fedora-install" code={fsarchiverScripts.fedora_install} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="fsa-ubuntu-install" code={fsarchiverScripts.ubuntu_install} />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-amber-300">Create a system backup</h3>
                <p className="mt-2 text-sm text-slate-300">Save an entire partition to a compressed archive file. Run from a live USB for best results.</p>
                <CodeBlock id="fsa-backup" code={fsarchiverScripts.backup} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-amber-300">Restore from backup</h3>
                <p className="mt-2 text-sm text-slate-300">Boot from a live USB, then restore your archive to a partition. This overwrites the target — make sure you have the right drive.</p>
                <CodeBlock id="fsa-restore" code={fsarchiverScripts.restore} />
              </div>

              <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5">
                <p className="text-sm text-slate-200"><span className="font-semibold text-amber-300">Chuck's tip:</span> Always run FSArchiver from a live USB session — backing up a mounted, running partition can cause inconsistencies. Plug in your external drive, boot the live session, mount the drive, and run the backup from there.</p>
              </div>
            </div>
          </section>

          {/* ── RESTIC ── */}
          <section id="restic">
            <SectionHeader icon="🔐" title="Restic — Encrypted File Backups" desc="Fast, secure, deduplicated backups with encryption built in. Great for regular automated file backups to local drives or cloud storage." color="violet" />

            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-violet-300">Install Restic</h3>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="restic-fedora-install" code={resticScripts.fedora_install} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="restic-ubuntu-install" code={resticScripts.ubuntu_install} />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-violet-300">Initialize a backup repository</h3>
                <p className="mt-2 text-sm text-slate-300">Do this once to create your encrypted backup store. You'll be prompted to set a password — write it down somewhere safe.</p>
                <CodeBlock id="restic-init" code={resticScripts.init} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-violet-300">Run a backup</h3>
                <p className="mt-2 text-sm text-slate-300">Back up specific folders. Restic deduplicates automatically, so repeated backups only store what changed.</p>
                <CodeBlock id="restic-backup" code={resticScripts.backup} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-violet-300">Restore from a backup</h3>
                <p className="mt-2 text-sm text-slate-300">List your snapshots and restore specific files or entire backups.</p>
                <CodeBlock id="restic-restore" code={resticScripts.restore} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-violet-300">Automate daily backups</h3>
                <p className="mt-2 text-sm text-slate-300">Set up a cron job to back up automatically every night and automatically prune old snapshots.</p>
                <CodeBlock id="restic-automate" code={resticScripts.automate} />
              </div>

              <div className="rounded-3xl border border-violet-400/20 bg-violet-400/10 p-5">
                <p className="text-sm text-slate-200"><span className="font-semibold text-violet-300">Chuck's tip:</span> Restic is not a full disk image tool — it backs up files and folders. Use FSArchiver if you need a full partition image for disaster recovery. Use Restic for day-to-day file-level backups. Together they cover everything.</p>
              </div>
            </div>
          </section>

          {/* ── PERFORMANCE ── */}
          <section id="performance">
            <SectionHeader icon="⚡" title="Performance Tweaks & GNOME Setup" desc="Squeeze more speed and usability out of your Linux install — from kernel-level tuning to desktop customization." color="sky" />

            <div className="space-y-8">

              {/* GNOME Tweaks */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Install GNOME Tweaks & Extension Manager</h3>
                <p className="mt-2 text-sm text-slate-300">GNOME Tweaks unlocks settings hidden from the default control panel — fonts, window behavior, startup apps, and more.</p>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="gnome-tweaks-fedora" code={performanceScripts.gnome_tweaks_fedora} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="gnome-tweaks-ubuntu" code={performanceScripts.gnome_tweaks_ubuntu} />
                  </div>
                </div>
              </div>

              {/* GNOME Extensions */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Recommended GNOME Extensions</h3>
                <p className="mt-2 text-sm text-slate-300">Install these from <a href="https://extensions.gnome.org" target="_blank" rel="noreferrer" className="text-sky-300 underline">extensions.gnome.org</a> or through the Extension Manager app. These are the ones worth installing first.</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {gnomeExtensions.map((ext) => (
                    <a key={ext.name} href={ext.url} target="_blank" rel="noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-sky-400/5 block">
                      <h4 className="text-sm font-semibold text-white">{ext.name}</h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{ext.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* zram */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Enable zram Swap Compression</h3>
                <p className="mt-2 text-sm text-slate-300">zram creates a compressed swap space in RAM — significantly improves responsiveness on systems with 8GB or less, and helps even on 16GB systems under heavy load.</p>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="zram-fedora" code={performanceScripts.zram_fedora} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="zram-ubuntu" code={performanceScripts.zram_ubuntu} />
                  </div>
                </div>
              </div>

              {/* fstrim */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Enable SSD TRIM</h3>
                <p className="mt-2 text-sm text-slate-300">TRIM keeps your SSD healthy and fast over time by telling it which blocks are free. Most distros set this up automatically, but it's worth confirming.</p>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="fstrim-fedora" code={performanceScripts.fstrim_fedora} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="fstrim-ubuntu" code={performanceScripts.fstrim_ubuntu} />
                  </div>
                </div>
              </div>

              {/* Power Profile */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Set Power Profile</h3>
                <p className="mt-2 text-sm text-slate-300">Switch between balanced, performance, and power-saver modes. Works on both Fedora and Ubuntu with power-profiles-daemon installed.</p>
                <CodeBlock id="power-profile" code={performanceScripts.power_profile} />
              </div>

              {/* VM Tweaks */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Kernel VM Tweaks (Swappiness & Cache Pressure)</h3>
                <p className="mt-2 text-sm text-slate-300">Lowering swappiness tells the kernel to prefer keeping data in RAM over swapping to disk. Lowering cache pressure reduces how aggressively it reclaims cached filesystem data. Both improve desktop feel.</p>
                <CodeBlock id="vm-tweaks" code={performanceScripts.vm_tweaks} />
              </div>

              {/* Preload */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-sky-300">Preload — Smarter App Launch Times</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Preload is a background daemon that monitors which applications you use most often and preloads them into RAM ahead of time — so they launch faster the next time you open them. It's completely hands-off once installed: it learns your habits automatically and adjusts over time. Most effective on systems with 4GB+ RAM, and especially noticeable on traditional spinning hard drives.
                </p>
                <div className="mt-2 rounded-2xl border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-xs text-slate-300">
                  💡 Preload is passive — it only uses idle RAM and backs off when the system needs memory for something else. There's no configuration needed after install.
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">Fedora</span>
                    <CodeBlock id="preload-fedora" code={`# Install preload on Fedora (via COPR — not in default repos)
# Step 1: Enable the community COPR repo
sudo dnf copr enable elxreno/preload -y

# Step 2: Install preload
sudo dnf install preload -y

# Step 3: Enable and start the service
sudo systemctl enable preload --now

# Verify it's running
systemctl status preload`} />
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">Ubuntu</span>
                    <CodeBlock id="preload-ubuntu" code={`# Install preload on Ubuntu (available in default repos)
sudo apt update
sudo apt install preload -y

# Preload starts automatically as a service after install
# Verify it's running
systemctl status preload

# Optional: view preload's config (defaults are fine for most users)
cat /etc/preload.conf`} />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-5">
                <p className="text-sm text-slate-200"><span className="font-semibold text-sky-300">Chuck's tip:</span> Don't apply all of these at once. Enable one thing at a time, use your system for a day, and see if it feels better. That way you know what's actually making a difference — and what to undo if something feels off.</p>
              </div>
            </div>
          </section>

        </div>

        <footer className="border-t border-white/10 px-6 py-10 mt-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
            <p>Use official links. Respect project trademarks.</p>
          </div>
        </footer>
      </div>
    );
  }

  // ── HOME PAGE ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />

      {/* Hero */}
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_30%)] bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">{brand.name} • Linux & open-source guidance</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Windows 11 not supported on your machine?<br /><span className="text-emerald-400">You have options.</span></h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{brand.tagline} This site points to official project pages, explains what to expect, and helps people compare options before making changes to their current setup.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#recommended" className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]">Personal recommendations</a>
              <a href="#distros" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5">Explore distros</a>
              <button onClick={() => setPage("checklist")} className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20">Before you switch checklist ✓</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why this site exists */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <h2 className="text-3xl font-bold text-emerald-200">Why this site exists</h2>
          <p className="mt-3 max-w-3xl text-slate-200">This site is designed to make Linux and open-source software easier to evaluate in a clear, practical, and low-pressure way. It focuses on trusted starting points, official links, and real-world guidance you can use right away.</p>
          <p className="mt-3 text-slate-300">Just because Windows 11 may not run on your machine does not mean you need a new computer. Many systems that no longer meet Windows requirements can still run Linux smoothly and reliably, helping extend the life of your hardware.</p>
          <p className="mt-3 text-slate-300">Reusing existing devices can reduce unnecessary e-waste, lower costs, and provide a capable system for everyday tasks like browsing, documents, and media.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Why consider Linux?", body: "Linux can offer more control, long-term flexibility, and a strong ecosystem of free and open tools for many personal and professional workflows." },
            { title: "What you will find here", body: "Official project links, beginner-friendly starting points, software alternatives, and practical notes for testing before you decide to switch." },
            { title: "Built for sharing at work", body: "The tone is vendor-neutral, the links go to official sources, and no software is hosted directly on this site." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="mt-3 text-slate-300">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick nav cards */}
      <section className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <button onClick={() => setPage("checklist")} className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-left transition hover:-translate-y-1 hover:bg-emerald-400/15">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-emerald-200">Before you switch checklist</h3>
            <p className="mt-1 text-sm text-slate-300">Interactive checklist to prepare for your switch. {completedChecks > 0 ? `${completedChecks}/${totalChecks} done.` : "Start here."}</p>
          </button>
          <button onClick={() => setPage("hardware")} className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5 text-left transition hover:-translate-y-1 hover:bg-amber-400/15">
            <div className="text-2xl mb-2">🔧</div>
            <h3 className="font-semibold text-amber-200">Hardware compatibility</h3>
            <p className="mt-1 text-sm text-slate-300">What works, what needs setup, and how to check before you switch.</p>
          </button>
          <button onClick={() => setPage("community")} className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-5 text-left transition hover:-translate-y-1 hover:bg-purple-400/15">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-semibold text-purple-200">Community & learning</h3>
            <p className="mt-1 text-sm text-slate-300">Forums, wikis, and resources to help you every step of the way.</p>
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-6">
          <h2 className="text-xl font-semibold text-purple-200">Common questions answered</h2>
          <ul className="mt-3 space-y-3 text-slate-200">
            {[
              { q: "Will I lose my files?", a: "No. You can try Linux from a USB first, and you can even install it alongside Windows if you want to keep both." },
              { q: "What if I don't like it?", a: "Then you remove it. Nothing is permanent unless you choose it to be." },
              { q: "Can I still use the software I need?", a: "Many common tasks have strong alternatives, but some specialized or employer-required software may still work best on Windows. Testing first is the safest approach." },
              { q: "Is it hard to use?", a: "Most modern Linux desktops feel familiar quickly, especially for web, email, documents, and everyday computing." },
            ].map((item) => (
              <li key={item.q}>
                <span className="font-semibold">{item.q}</span><br />
                {item.a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <h3 className="text-lg font-semibold text-emerald-200">Try Linux safely with a USB drive</h3>
          <p className="mt-2 text-sm text-slate-200">You do not have to commit right away. You can run Linux directly from a USB drive to explore the desktop, test hardware compatibility, and get comfortable before installing anything.</p>
          <p className="mt-3 text-sm text-slate-300">Use a USB drive with at least <span className="font-semibold">8 GB</span> of space. For newer or larger distributions, <span className="font-semibold">16 GB</span> is recommended. The USB will be erased during creation.</p>
        </div>

        <div className="mt-8 grid gap-4" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {[
            { name: "Fedora Media Writer", url: "https://getfedora.org/en/workstation/download/", color: "blue", desc: "Simple and official" },
            { name: "Rufus", url: "https://rufus.ie", color: "orange", desc: "Popular Windows tool" },
            { name: "Balena Etcher", url: "https://etcher.balena.io/", color: "purple", desc: "Cross-platform option" },
            { name: "Ventoy", url: "https://www.ventoy.net/", color: "emerald", desc: "Multi-boot USB — put multiple ISOs on one drive" },
          ].map((tool) => {
            const c = colorMap[tool.color] || colorMap.blue;
            return (
              <a key={tool.name} href={tool.url} target="_blank" rel="noreferrer" className={`rounded-3xl border ${c.border} ${c.bg} p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                <h3 className={`text-lg font-semibold ${c.text}`}>{tool.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{tool.desc}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-indigo-400/20 bg-indigo-400/10 p-6">
          <h3 className="text-lg font-semibold text-indigo-200">Common ways to boot from USB</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div><p className="font-semibold">Boot Menu Keys</p>
              <ul className="list-disc list-inside text-sm text-slate-200 mt-1">
                <li>F12 (Dell, Lenovo)</li><li>F11 (HP, MSI)</li><li>ESC (ASUS)</li>
              </ul>
            </div>
            <div><p className="font-semibold">BIOS / UEFI Keys</p>
              <ul className="list-disc list-inside text-sm text-slate-200 mt-1">
                <li>DEL (desktops)</li><li>F2 (many laptops)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal recommendations */}
      <section id="recommended" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <h2 className="text-3xl font-bold">Personal recommendations</h2>
        <p className="mt-2 text-slate-300">Based on real-world use and ease of getting started.</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px"}} className="mt-8">
          {recommendations.map((rec) => (
            <div key={rec.title} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 flex flex-col">
              <h3 className="text-sm font-semibold text-white">{rec.title}</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed flex-1">{rec.desc}</p>
              <p className="mt-3 pt-2 border-t border-white/5 text-xs font-semibold text-emerald-300">→ {rec.pick}</p>
            </div>
          ))}
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"12px"}} className="mt-8">
          {[
            { href: "https://linuxmint.com/download.php", bg: "from-emerald-600 via-green-700 to-teal-800", label: "Download Linux Mint", desc: "Best for beginners", textColor: "text-emerald-200", logo: "linuxmint" },
            { href: "https://fedoraproject.org/workstation/download/", bg: "from-blue-600 via-sky-700 to-indigo-800", label: "Download Fedora", desc: "Modern and powerful", textColor: "text-blue-200", logo: "fedora" },
          ].map((pick) => (
            <a key={pick.label} href={pick.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl flex flex-col">
              <div className={`relative h-16 bg-gradient-to-br ${pick.bg} flex items-center justify-center gap-2 px-3`}>
                {logoSVGs[pick.logo]}
                <span className="text-sm font-bold text-white/90 tracking-tight text-center">{pick.label}</span>
                <div className="absolute right-3 inline-flex items-center rounded-full border border-emerald-300/50 bg-black/30 px-2 py-0.5 text-xs font-semibold text-emerald-200 backdrop-blur-sm">
                  ⭐ IT Chuck Picks
                </div>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className={`text-sm font-semibold ${pick.textColor}`}>{pick.label}</h3>
                <p className="mt-1 text-xs text-slate-400">{pick.desc}</p>
                <div className="mt-3 pt-2 border-t border-white/5">
                  <span className="inline-flex rounded-lg border border-white/15 px-3 py-1 text-xs font-semibold">Download →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Distros */}
      <section id="distros" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Linux distros to consider</h2>
          <p className="mt-2 text-slate-300">A few strong starting points for different kinds of users, grouped by base.</p>
        </div>
        <div className="space-y-8">
          {distroGroups.map((group) => (
            <div key={group.group}>
              <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${group.accent} bg-white/5`}>
                {group.group}
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px"}}>
                {group.distros.map((distro) => <DistroCard key={distro.name} distro={distro} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gaming */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Gaming-focused Linux options</h2>
          <p className="mt-2 text-slate-300">If gaming matters to you, these options are built with compatibility and performance in mind.</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px"}}>
          {gamingDistros.map((distro) => <DistroCard key={distro.name} distro={distro} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Gaming compatibility tools</h2>
          <p className="mt-2 text-slate-300">Check your specific game compatibility at <a href="https://www.protondb.com/explore" target="_blank" rel="noreferrer" className="ml-1 text-emerald-300 underline">ProtonDB</a>.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gamingTools.map((distro) => <DistroCard key={distro.name} distro={distro} />)}
        </div>
      </section>

      {/* Software alternatives */}
      <section id="software" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <h2 className="text-3xl font-bold">Software alternatives</h2>
        <p className="mt-2 text-slate-300">Helpful alternatives for common Windows and Microsoft software categories.</p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200">
            <div>Category</div><div>Windows</div><div>Alternative</div>
          </div>
          {software.map((item) => (
            <div key={item.category} className="grid grid-cols-3 px-6 py-4 border-b border-white/10 text-sm">
              <div className="text-slate-100">{item.category}</div>
              <div className="text-slate-400">{item.windows}</div>
              <div className="flex flex-wrap gap-2">
                {item.alt.map((alt) => (
                  <a key={alt.name} href={alt.site} target="_blank" rel="noreferrer" className="text-emerald-300 underline">{alt.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <h2 className="text-xl font-semibold text-emerald-200">Why trust this page?</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-200">
            <li>No downloads are hosted here — everything links to official sources.</li>
            <li>No tracking, no gated content, and no pressure to switch immediately.</li>
            <li>Focused on practical evaluation, clarity, and everyday usability.</li>
          </ul>
        </div>
      </section>

      {/* About Chuck */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 overflow-hidden shadow-xl shadow-black/20">
          <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-emerald-400/40 bg-emerald-400/10 text-4xl font-black text-emerald-300">IT</div>
                <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">IT Systems Administrator</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">About Chuck</h2>
                <p className="mt-1 text-sm text-slate-400">North Carolina · Linux enthusiast · Father · Wrench turner</p>
                <div className="mt-4 space-y-3 text-sm text-slate-300 leading-relaxed">
                  <p>
                    I'm Chuck — an IT Systems Administrator based in North Carolina with an Associate's degree in Computer Science from ITT Tech and years of hands-on experience keeping systems running, secured, and sane. Linux isn't just something I work with professionally — it's something I genuinely love. I run it daily, I tinker with it constantly, and I built this site because I got tired of seeing people stuck on Windows simply because nobody had laid out the alternatives in a clear, honest way.
                  </p>
                  <p>
                    When I'm not deep in a terminal or chasing down a kernel issue, you'll find me under a vehicle working on something mechanical, or finding new ways to help people solve technical problems without making them feel like they're in over their head. That's the whole point of IT Chuck — practical guidance written by someone who actually uses this stuff every day, not a wiki page written by a committee.
                  </p>
                  <p>
                    I'm a father of eight, turning 48 this June, and still as passionate about this stuff as the day I started. If something on this site helped you — or if you just want to say hello — the Support button is always there. And if you're ever stuck, the community links on this site are full of people just like me who are happy to help.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Linux", "Fedora KDE", "Systems Administration", "Network Security", "Open Source", "Mechanics", "Father of 8", "NC"].map(tag => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => setShowDonate(true)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20">
                    ☕ Support IT Chuck
                  </button>
                  <a href="https://ko-fi.com/itchuck" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-400/20">
                    ☕ Ko-fi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div><p className="text-base font-semibold text-slate-200">{brand.name}</p><p>Built to help people evaluate Linux and open-source software with confidence.</p></div>
          <p>Use official links. Respect project trademarks.</p>
        </div>
      </footer>
    </div>
  );
}

