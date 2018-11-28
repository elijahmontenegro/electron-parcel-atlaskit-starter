# A work in progress.. Come back later!

A minimal viable Electron app using Parcel and Atlassian's Atlaskit starter.

### Included
  - Electron
  - React
  - Parcel
  - Atlaskit
  
## Install
```bash
git clone https://github.com/b8394edf/electron-parcel-atlaskit-starter.git MyProject
cd MyProject
yarn
yarn start-dev
```

## Usagea
Just open and edit. Details about the Atlaskit stater project here: https://bitbucket.org/atlassian/atlaskit-starter/src/master/

## Using more Atlaskit components
This repo ships with some of the Atlaskit components such as @atlaskit/navigation and @atlaskit/avatar.

You can add other components (listed at https://atlaskit.atlassian.com/) to your project. To see an exmaple in order to add button in your project run:

```yarn add @atlaskit/button```
Then in the relevant React component file (e.g. src/App.jsx) do the following:

```
import Button from '@atlaskit/button';

// ...

render() {
  <Page>
    <Button>My button text</Button>
  </Page>
```
