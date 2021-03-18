// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = process.env.VUE_APP_API_CLIENT_ID
export const redirectUri = process.env.VUE_APP_REDIRECT_URL

export const scopes = [
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
]

export const defaultConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  }
}
