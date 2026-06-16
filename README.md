
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# AeroSphere 🌌

AeroSphere is a premium 3D vehicle showcase platform built for the next generation of web visualization. This project allows users to interactively explore high-fidelity 3D models of motorcycles, cars, and airplanes directly in the browser with optimized performance.

## 🚀 Key Features Envisioned
* **Interactive 3D Viewport:** High-poly aesthetics optimized into lightweight assets.
* **Modern Bento Grid Layout:** Clean, scannable, and modern user interface.
* **Premium Orange Light Mode:** A sleek aesthetic contrast designed for automotive enthusiasts.

---

## 🔧 Resolved & Ongoing Fixes

- [x] **Convert Asset Pipeline (GLTF to GLB):** Migrated from multi-file `.gltf` to unified `.glb` formats to completely eliminate `NetworkError` fetches and asset path breaks.
- [ ] **Next.js Image Optimization Warning:** Fixing Tailwind logo container constraints by applying explicit layout dimensions or `h-auto` properties to preserve the aspect ratio.

---

Test Daily~ 2

## 🛠️ Project Roadmap

- [x] **Homepage**
  - [x] Futuristic Hero section with immersive 3D Canvas
  - [x] Premium "Engineered For Visual Speed" tech stack features card
  - [x] Dynamic community testimonial section
- [ ] **Product Catalog Page**
  - [x] Dynamic routing infrastructure implemented (`/product/[id]`)
  - [ ] Multi-category sorting mechanism (Motorcycles, Cars, Airplanes)
  - [ ] Complete asset loading for all initial collections
- [ ] **User Authentication (Backend Practice)**
  - [ ] Evaluate necessity of Register/Login flow for daily rewards system
  - [ ] Firebase or Supabase integration placeholder
  - [ ] Secure JWT authentication handling
- [ ] **About & Contact Page**
  - [x] Minimalist structural layout established
  - [ ] Full integration of the signature Black, White, and Orange brand identity

---

## 🧠 Developer's Note




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
