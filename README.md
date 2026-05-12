# Savory Bites Restaurant Landing Page

A modern, responsive restaurant landing page built with React.js and Tailwind CSS. The project is designed as a professional client-ready website for a fictional restaurant named **Savory Bites**.

## Live Demo

Add the Vercel deployment URL here after publishing.

## Screenshot

Add a desktop and mobile screenshot here after deployment.

## Features

- Responsive restaurant landing page
- Sticky navigation with mobile hamburger menu
- Strong hero section with CTA buttons
- About section with restaurant story and feature highlights
- Popular menu cards with food prices and categories
- Responsive food gallery grid
- Customer testimonials with avatars and star ratings
- Reservation form with React state, validation, success message, and reset behavior
- Footer with business information, opening hours, contact details, and social links
- Smooth scrolling navigation
- Accessible labels and alt text

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Lucide React
- Vercel

## Folder Structure

```text
src/
  components/
    About.jsx
    Footer.jsx
    Gallery.jsx
    Hero.jsx
    Menu.jsx
    MenuCard.jsx
    Navbar.jsx
    ReservationForm.jsx
    SectionHeader.jsx
    TestimonialCard.jsx
    Testimonials.jsx
  data/
    galleryImages.js
    menuItems.js
    siteContent.js
    testimonials.js
  App.jsx
  index.css
  main.jsx
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

Deploy on Vercel with these settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## What I Learned

- Structuring a full landing page with reusable React components
- Keeping repeated content in data files
- Building responsive layouts with Tailwind CSS
- Managing controlled form inputs with React state
- Adding basic validation and user feedback to a frontend-only form
- Preparing a client-style project for portfolio presentation

## Future Improvements

- EmailJS integration for real reservation emails
- Google Maps location embed
- Framer Motion animations
- Online ordering section
- Admin dashboard for menu management
- Backend and database integration

