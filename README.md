# WebPack-5-React-Typescript- Webworkers

Boiler plate project with global Css and Css modules enabled.

# Setup

yarn or npm install

# Build

yarn run start or npm run start

# Explanation

This is an example of the container -> component pattern.
Look at the Home Container
This is where all business logic that belongs to rendering the component(s) should reside
Containers should strive to be isolated and loosely coupled through a store, whether it be redux, jotai or using hooks as data stores

The Home Component is presentational only. No business logic should reside in this component.  
This makes it easy to test and re-usable.
Keeping the component simple and it's main job is rendering output also makes it easier to debug and or add new features.

Containers should only do one thing, and that's get and pass data to render components to make up the UI.
Components should only do one thing and that's render UI, based on the data sent in as props.
