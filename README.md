# B Socio AR QR Menu Landing Page

A production-ready React and Vite landing page for B Socio's AR QR Menu product. The page promotes QR menus, AR food previews, analytics, packages, demo booking, and lead capture for restaurant enquiries.

## Features

- Premium responsive landing page for desktop, tablet, and mobile
- B Socio branded contact section and footer
- Configurable contact details through Vite environment variables
- Working lead capture form with a FormSubmit-compatible endpoint
- Mail fallback if the lead endpoint is unavailable
- Vercel-ready build setup

## Tech Stack

- React 19
- Vite
- CSS
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Environment Variables

Create a `.env` file for local development or add the same variables in Vercel Project Settings.

```env
VITE_BSOCIO_EMAIL=connect@bsocio.in
VITE_BSOCIO_PHONE=Available on request
VITE_BSOCIO_LOCATION=India
VITE_LEAD_CAPTURE_ENDPOINT=https://formsubmit.co/ajax/connect@bsocio.in
VITE_BSOCIO_FACEBOOK=#
VITE_BSOCIO_INSTAGRAM=#
VITE_BSOCIO_LINKEDIN=#
```

Update these values with the official B Socio email, phone, address, and social links before final deployment.

## Lead Capture

The contact form posts JSON leads to `VITE_LEAD_CAPTURE_ENDPOINT`. By default, it uses FormSubmit's AJAX endpoint:

```text
https://formsubmit.co/ajax/connect@bsocio.in
```

For first-time FormSubmit usage, submit one test enquiry and confirm the verification email sent to the receiving inbox. You can also replace this endpoint with a Formspree, Web3Forms, CRM webhook, Google Apps Script, or custom API URL.

If the endpoint fails, the form opens the user's email app with the enquiry details prefilled.

## Deployment On Vercel

1. Push the project to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Use these build settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add the environment variables listed above.
6. Deploy the project.
7. Test the live contact form and confirm the lead email/webhook receives the submission.

## Project Structure

```text
src/
  components/        React sections for the landing page
  config/            Business/contact configuration
  styles/Css/        Section-specific CSS
  assets/            Landing page images
```
