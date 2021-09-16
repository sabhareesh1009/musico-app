// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = 
    "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "d71b6f6ddde643a29ab42f5f5666bfcd";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

