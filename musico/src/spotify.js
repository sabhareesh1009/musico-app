// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
export const clientId = "d71b6f6ddde643a29ab42f5f5666bfcd";
export const clientSecretId = "d71b6f6ddde643a29ab42f5f5666bfcd";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intial, item) => {
      let parts = item.split("=");
      intial[parts[0]] = decodeURIComponent(parts[1]);
      return intial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=
${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
