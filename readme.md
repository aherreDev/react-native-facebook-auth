# What is this repo?

This is a basic example of how to use Firebase Authentication service with Facebook SignIn service while you run/build your app using expo Go.

## Requirements

- Expo already installed (https://docs.expo.dev/)
- Node (>=10)
- Expo account (It's free)
- Google Account (Because we will use Firebase)
- Facebook account (Because we want to use the Dev mode)
- 1 IOs or Android device
- Patience

## Steps

> ⚠️ Still WIP (Work In Progress)

1. Create an expo project (I highly recomend you to first create it from your Expo Account)
2. Create a Firebase project (And save all the access keys)
3. Create a Facebook Dev account + new Facebook App
4. SetUp Facebook App (You need to provide some URL, I recommend you to use the Redirect URI that firebase gives you)
5. Install the dependencies (Checkout the packages available on this repo)
6. Create your routing skeleton
7. Connect Firebase with your project (Take a look into use_firebase for more details)
8. Connect Expo account with your project and generate redirect URI (You can copy it from Expo account > Project Details)
9. Add the Expo AuthSession to Facebook App Redirect whitelist
10. Make the request and enjoy!

## UseFul resources

- [React Navigation Wiki](https://reactnavigation.org/docs/getting-started)
- [Native Base Wiki](https://docs.nativebase.io/getting-started)
- [Expo AuthSession Wiki](https://docs.expo.dev/versions/latest/sdk/auth-session/#how-web-browser-based-authentication-flows-work) **PLEASE read it** (You can thank me later)
- [Facebook SDK/API Wiki](https://developers.facebook.com/docs/facebook-login/web) (Just to an understending of what's happening behind scene)
- [Firebase SDK/API Wiki](https://firebase.google.com/docs/auth/web/facebook-login#web-version-9_4) (Just to an understending of what's happening behind scene)
