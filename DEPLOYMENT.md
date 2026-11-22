# Cloudflare Pages & GitHub Deployment Guide
## Nestora Coliving Premium Space — Frontend Website

This project is built with **React 18 + Vite + TypeScript + Tailwind CSS**, designed specifically for lightning-fast edge hosting on **Cloudflare Pages** (Free Tier with 0 recurring hosting expenses).

---

### 1. Build Verification & Local Development

To run the site locally:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in the `dist/` directory.

---

### 2. Deploying via GitHub & Cloudflare Pages (Recommended Continuous Deployment)

This is the cleanest approach: every git push will automatically build and publish your website worldwide.

#### Step 2.1: Push Project to GitHub
1. Create a new repository on your GitHub account (e.g. `nestora-coliving-website`).
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Nestora Coliving premium frontend"
   git branch -M main
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/nestora-coliving-website.git
   git push -u origin main
   ```

#### Step 2.2: Connect to Cloudflare Pages
1. Log in to your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
3. Click **Create Application** > select the **Pages** tab.
4. Click **Connect to Git**.
5. Select your GitHub repository: `nestora-coliving-website`.
6. Configure the **Build Settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank or default)
   - **Node.js Version**: (Under Environment Variables, you can optionally add `NODE_VERSION` with value `20` or `22`)
7. Click **Save and Deploy**.
8. Within ~60 seconds, your website will be live at `https://nestora-coliving-website.pages.dev` with free SSL, enterprise DDoS protection, and global CDN caching!

---

### 3. Deploying Directly via Cloudflare Wrangler CLI (No Git Required)

If you prefer deploying directly from your terminal without connecting GitHub:
```bash
# 1. Build the project
npm run build

# 2. Deploy dist folder directly to Cloudflare Pages
npx wrangler pages deploy dist --project-name nestora-coliving
```

---

### 4. Custom Domain Connection (e.g. `nestoracoliving.com`)

To connect your own custom domain:
1. In the Cloudflare Dashboard, open your Pages project (`nestora-coliving`).
2. Go to the **Custom domains** tab.
3. Click **Set up a custom domain**.
4. Enter your domain name (e.g., `nestoracoliving.com` or `www.nestoracoliving.com`).
5. Follow the simple DNS verification prompts:
   - If your domain DNS is managed on Cloudflare, DNS records are automatically configured with a single click.
   - If your domain is on GoDaddy, Namecheap, Google Domains, etc., simply add the CNAME record pointing to `<your-pages-project>.pages.dev`.
6. Cloudflare automatically generates and renews a free **Universal SSL certificate**.

---

### 5. Managing Website Content (No Coding Experience Needed)

All frequently updated data is centralized in dedicated, clean TypeScript/JS files inside `src/data/`:

| Data File | What to update |
| :--- | :--- |
| `src/data/property.ts` | Property address, phone numbers, WhatsApp, coordinates, Google review ratings, nearby landmarks. |
| `src/data/rooms.ts` | Room prices (Daily, Weekly, Monthly), room descriptions, bed sizes, inclusions. |
| `src/data/foodMenu.ts` | Weekly 4-meal menu schedule (Monday to Sunday) for Breakfast, Lunch, Snacks, Dinner. |
| `src/data/amenities.ts` | Available amenities, descriptions, categorized tags. |
| `src/data/gallery.ts` | Photo URLs from your Google Business Profile, photo captions, categories. |
| `src/utils/whatsapp.ts` | Target WhatsApp phone number and default message formats. |
