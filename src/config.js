// Centralized API URL helper — ensures a protocol is present and removes trailing slashes
export const API_URL = (() => {
  const raw = import.meta.env.API_URL || "https://mernecommbackend-xxfd.onrender.com/api";
  if (!raw) return "";
  // If already absolute (http or https), normalize trailing slash
  if (/^https?:\/\//i.test(raw)) {
    return raw.replace(/\/+$|\s+$/g, "");
  }
  // Otherwise assume http and prepend it, then trim trailing slashes
  return (`http://${raw}`).replace(/\/+$|\s+$/g, "");
})();

export default API_URL;
