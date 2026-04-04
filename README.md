# IT Chuck — Linux & Open Source Guidance
### linuxchuck.com

Practical Linux alternatives, distro guides, software comparisons, technical scripts, and real-world tips — clearly explained.

---

## Project Structure

```
linuxchuck/
├── public/
│   ├── index.html          # App shell + meta tags
│   └── favicon.svg         # IT Chuck favicon
├── src/
│   ├── index.js            # React entry point
│   ├── index.css           # Base styles
│   ├── App.js              # Root component
│   └── LinuxAlternativesLinkHub.jsx  # Main app
├── .gitignore
├── vercel.json             # Vercel deployment config
├── package.json
└── README.md
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:3000)
npm start

# Build for production
npm run build
```

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to vercel.com and import the GitHub repo
3. Vercel auto-detects Create React App — no config needed
4. Add your custom domain (linuxchuck.com) in Vercel's domain settings
5. Point your domain registrar's nameservers to Vercel's

---

## Domain Setup (Namecheap / any registrar)

After adding `linuxchuck.com` in Vercel:

1. Copy the nameservers Vercel gives you (e.g. `ns1.vercel-dns.com`)
2. Log into your domain registrar
3. Replace the default nameservers with Vercel's
4. Wait 10–30 minutes for DNS propagation

---

## Built by IT Chuck
Practical Linux guidance for real people making the switch.
