# yapp
Checkin application for Y conference 2019. Yapp!
Yapp is built on Expo (React Native), Redux, React Navigation and Firebase for data storage.

# Requirements
This project is using Expo. You need to have an account and download Expo app. This project was built on Node v10.

# Functionality

App.js
  - Is importing screens (pages), statusbar, Redux store, provider and font.
  - React Navigation creates two stacs. Logged out and logged in stack. Loadingscreen is used for auth check.

User auth is checked with Loadingscreen. If authenticated you will end at Homescreen. This screen will show all your yapps on all stations and separate yapps on each station. Homescreen will also display total yapps of the conference.
At time of writing 27 June. The functionality is poor and not fetched with redux properly.

Logged out state will let the user signup with a unique badge id. The id is the same id that the nfc tag has. There are two working tabs at this time (27 June). Use a44e81e or d80d673 when creating account.

When signed up you will be navigated to homescreen. The logout and login should be working and it is the email and password that you set up during signup that you will need to use.

# Reset badge id
Each badge id is unique and are bound to authid that is bound to your firebase email and password account.
To reset badge id you need to delete data on the realtime database. 
1. In users/[badgeid] copy uid for later use.
2. Remove the badge id node there.
3. Go to Authentication tab and remove the user that has the same uid that you copied.
4. In realtime database if node unregisteredCards doesn't exist. Create node unregisteredCards/badgeid(the one you removed from users). Firebase nodes needs to have a value. Just add anything as the value. All we need is the key anyways.

# Start and builds
Start by typing
`expo start`
This should open expo with QR-code. Tunnel has worked fine for us when developing. You can use the QR code if you wish to build app to your phone. You can also turn on the simulator.

# Good to know
React native is still very young and will break easily when updating packages. Try to keep npm-packages to the minimum.


