export const OAuth2ConfigGoogle = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  redirectUri: "http://localhost:5173/oauth2/login/google",
  authUri: "https://accounts.google.com/o/oauth2/auth",
};
