# Y Oslo 2019

Official Y Oslo 2019 conference app.
Y Oslo is built on Expo (React Native), Redux, React Navigation and Sanity for data fetching.

# Requirements

This project is using Expo. You need to have an account and download Expo app. You should also have expo-cli installed globally. This project was built on Node v10, Expo-cli v3.0.10.

# Functionality

App.js

- Imports routes, statusbar, Redux store, provider and font.
  src/actions
- Actions are stacked in categories. With that said, each file can have multiple actions.
- Naming tip. CRUD (stands for Create, Read, Update, Delete) + what. Example: readSpeakers or updateSpeakers
  src/components
- Camel cased folders can contain several components. Each component in a parent folder. Example: Card/Hero or just Card.
- All components can use their own styled component style file that can use global styles from theme, font etc. or could use global theme font directly in component.
  src/reducers
- index.js is where you add all redux reducers for combining.
- Reducer files are stacked in same type of categories as actions.
- Naming tip. what + CRUD. Example: speakersRead or speakersUpdated.
  src/screens
- Screen is a page/view that is routed with routes/StacknavigatorRoutes.js and components/MainMenu routes.
- All Screens should have index.js where the screen logic should be.

# Start and builds

Start by typing
`expo start`
This should open expo with QR-code. Tunnel has worked fine for us when developing. You can use the QR code if you wish to build app to your phone. You can also turn on the simulator.

## Building for production

### Android

In order for Google Play to accept your app bundle, you'll need to sign it with the same keystore that was used for the initial build. The keystore resides in the `Yapp` vault in Netlife Designs 1Password account. In case you want to verify the file, the md5 sum is: `197b0fa87fe2524e01ac98863fc4d308`.

The first time you build the app for android you'll be asked if you "would like to upload a keystore or have expo handle it for you" – choose to upload one. In the wizard it'll ask you to provide it with path to keystore (the jks file you got from 1Password) in addition to keystore alias, keystore password and key password. The three last ones can be found on the item in 1Password.

_Building_

1. Do your changes
2. Increase the `versionCode` in app.json
3. Issue the build command: `expo build:android -t app-bundle`
   Use this command when deploying for the first time: `expo build:android --clear-credentials`
4. Wait for the build to finish. When it says `✔ Build finished`, click the link in the bottom of the console (an `.aab` file should download)
5. Log into the Play Console with the `drift@netlife.com` Google account
6. Create a new release and upload the `.aab` file
7. 💰

### iOS

Follow the release steps at Follow https://docs.expo.io/versions/v34.0.0/distribution/uploading-apps/.
You need to login at https://appleid.apple.com and create "App specific password".
Make sure to have xcode (10.3) open.
Change version number at app.json and iterate ios build number for each ios upload.
Your build will eventually be uploaded at https://appstoreconnect.apple.com.

# Deploy general release notes

This app is released on Appstore and Google play.
Follow https://docs.expo.io/versions/v34.0.0/distribution/uploading-apps/.
Important steps is to edit app.json version, build with expo, deploy with expo, test with alpha/beta test on google play and test with testflight on app store.
App store is a bi\*\*ch. With that said. Make sure to calculate days, not hours when releasing. Also note that the app review can take a week or so.

# Updates

Follow https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough/ when updating core.

# Good to know

React native is still very young and will break easily when updating packages. Try to keep npm-packages to the minimum.

# YAPP - 2020

This project was once a nfc reader count application. This will most likely to be added on the 2020 Y conf.
The application data is stored on Firebase. All login and count features has been taken away but you can add files from https://github.com/netliferesearch/yapp/commit/9909e6464e8790182804316f894e2be6f9f803ad
Here is how the yapp auth and badge fetching works.

# YAPP - Auth

User auth is checked with Loadingscreen. If authenticated you will end at Homescreen. This screen will show all your yapps on all stations and separate yapps on each station. Homescreen will also display total yapps of the conference.
At time of writing 27 June. The functionality is poor and not fetched with redux properly.

Logged out state will let the user signup with a unique badge id. The id is the same id that the nfc tag has. There are two working tabs at this time (27 June). Use a44e81e or d80d673 when creating account.

When signed up you will be navigated to homescreen. The logout and login should be working and it is the email and password that you set up during signup that you will need to use.

# YAPP - Reset badge id

Each badge id is unique and are bound to authid that is bound to your firebase email and password account.
To reset badge id you need to delete data on the realtime database.

1. In users/[badgeid] copy uid for later use.
2. Remove the badge id node there.
3. Go to Authentication tab and remove the user that has the same uid that you copied.
4. In realtime database if node unregisteredCards doesn't exist. Create node unregisteredCards/badgeid(the one you removed from users). Firebase nodes needs to have a value. Just add anything as the value. All we need is the key anyways.
