# iHeartCoffee
Coffee spots recommendation mobile application

# Getting Started
## Prequisites
- Mac OS X
  - Homebrew
  - NodeJS
  - Yarn (optional)
- Windows
  - NodeJS
  - Yarn (optional)

## Requirements
- Mac OS X
  - Download Xcode from `App Store`.
  - Download `Android Studio` (optional).
  - Install `watchman` with `$ brew install watchman`.
  - Install `react-native-cli` with `npm i -g react-native-cli`.
- Windows
  - Download `Android Studio` (optional).
  - Install `watchman` by following instructions [here](https://facebook.github.io/watchman/docs/install.html).
  - Install `react-native-cli` with `$ npm i -g react-native-cli`.

## Installation
- Ensure you have completed the steps above.
- Clone this repository.
- Change your directory with `$ cd DMS-Mobile/`.
- Install dependencies with `$ npm i` or `yarn`.
- Ask a contributor for `settings.json`

## Usage
- iOS
  ### React-Native-CLI
  - Start application with `$ react-native run-ios`.
  ### Xcode
  - Open `ios/`
  - Find and open `dms.xcodproj`.
  - Click `play` icon in Xcode.
- Android
  ### React-Native-CLI
  - Start application with `$ react-native run-android`.
  ### Android Studio
  - Open `android/` in Android Studio.
  - Allow `gradle` to finish building.
  - Click `Run` and select `Run app` from dropdown.

## Testing
Unit Tests for components are setup using Jest and can be ran locally using the command below:
  - `$ yarn test`

## Project Structure
```
├── _tests_
├── android
├── ios
├── private
│   ├── data
│       ├── venues-search.json
└── src
    ├── actitonTypes
    ├──assets
    ├──components
    |   ├──shared
    ├──constants
    ├──containers
    ├──navigation
    ├──reducers
    └──util
```