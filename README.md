# electron-serve-quick-start

This is a minimal Electron single-page web app using [electron-serve](https://github.com/sindresorhus/electron-serve) library and [electro-packager](https://github.com/electron-userland/electron-packager) to build it.

## Requirements

- `dist` - Copy in this folder the resources of your single-page web app.
- `main.js` - Starts the app and creates a browser window to render HTML under (app:/)[https://github.com/sindresorhus/electron-serve#usage]

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/benitogf/elq
# Go into the repository
cd elq
# Install dependencies
npm install

# copy your application distribution files in ./dist e.g:
cp -R ../a-single-wep-app/dist dist

# Run the app
npm start
```

```bash
# Package the application for the host platform
npm run build
```


## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[MIT)](LICENSE.md)
