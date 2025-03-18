# Phoenix Security Website

Welcome to the Phoenix Security Website repository! This project is a Next.js application that serves as the official website for Phoenix Security. The website is designed to showcase the company's services, provide information about our team, and offer resources for cybersecurity enthusiasts.

# Phoenix Security Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Phoenix Security is a cybersecurity services website built with modern web technologies. The site showcases security services, company information, and cybersecurity resources in a professional, responsive interface.

## Tech Stack

* **Framework**: Next.js 14 (React framework with server-side rendering)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **State Management**: React Context API
* **Animations**: Framer Motion
* **Deployment**: Vercel

## Project Structure

phoenix-sec-website/ ├── app/ # Next.js app directory (new App Router) │ ├── about/ # About page │ ├── services/ # Services page │ ├── contact/ # Contact page │ ├── blog/ # Blog section │ ├── layout.tsx # Root layout component │ └── page.tsx # Homepage component ├── components/ # Reusable UI components ├── public/ # Static assets (images, fonts) ├── styles/ # Global styles and Tailwind config ├── lib/ # Utility functions and shared logic └── types/ # TypeScript type definitions

Then, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the root directory if the project will be ran locally.

## Features

**Responsive Design**: Mobile-first approach ensuring compatibility across all devices

**Dark Mode**: Built-in dark mode toggle with system preference detection

**SEO Optimized**: Meta tags and structured data for better search engine visibility (WIP)

**Performance Focused**: Optimized images, code splitting, and minimal dependencies (WIP)

**Accessibility**: WCAG compliant with keyboard navigation and screen reader support (WIP)

## Available Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run start` - Start production server
* `npm run lint` - Run ESLint
* `npm run test` - Run tests

## Customization

This project uses `next/font` to automatically optimize and load Geist, a custom font family.

Tailwind CSS can be configured in the `tailwind.config.js` file to match your brand colors and design preferences.

## Learn More

To learn more about Next.js, take a look at the following resources:

* Next.js Documentation - learn about Next.js features and API.
* Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

## Security Vulnerability Fixes

The project had some security vulnerabilities in its dependencies that were addressed with the following steps:

1. Identified vulnerabilities in uglify-js (<=2.5.0) which was a dependency of both detective and script packages
2. Removed the problematic packages that weren't essential to the project:

   ```bash
   npm uninstall script detective --save
    ```

   ```
3. Ran a final audit to verify the fixes:

   ```bash
   npm audit
    ```

If you encounter similar security warnings after updating dependencies, you may need to repeat these steps or add specific package overrides in package.json.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
