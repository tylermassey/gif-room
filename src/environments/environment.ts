// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCDdfMOAYzhzTBm1UQm_n-2jrro6raPWHc",
    authDomain: "gif-room.firebaseapp.com",
    databaseURL: "https://gif-room.firebaseio.com",
    storageBucket: "gif-room.appspot.com",
    messagingSenderId: "274036202170"
  }
};
