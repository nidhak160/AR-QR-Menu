export const business = {
  name: "B Socio",
  productName: "AR QR Menu",
  email: import.meta.env.VITE_BSOCIO_EMAIL || "connect@bsocio.in",
  phone: import.meta.env.VITE_BSOCIO_PHONE || "9781580475",
  location: import.meta.env.VITE_BSOCIO_LOCATION || "Punjab, India",
  leadEndpoint:
    import.meta.env.VITE_LEAD_CAPTURE_ENDPOINT ||
    "https://formsubmit.co/ajax/connect@bsocio.in",
  facebook: import.meta.env.VITE_BSOCIO_FACEBOOK || "#",
  instagram: import.meta.env.VITE_BSOCIO_INSTAGRAM || "#",
  linkedin: import.meta.env.VITE_BSOCIO_LINKEDIN || "#",
};
