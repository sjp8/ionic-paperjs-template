# ionic-paperjs-template
A blank ionic 2 project for [Paper.js](http://paperjs.org) programs.

### Your Game Logic
To alter game logic, open `/src/logic/game.ts` and modify the `start` method. You can write your game in ES6 or regular javascript, and include other files as necessary.

### PaperScript Conversion
To convert from paperscript, prepend `paper.` to any paper objects, for example: `new Path(...)` --> `new paper.Path(...)`

### TypeScript compatibility
The project comes with TypeScript types enabled for paper.js.

### Testing Apps
Ionic 2 comes with live reloading, so projects are automatically reloaded when you make a change to your game.

Using the ionic CLI (to install, `npm install -g ionic cordova`), use `ionic serve` to preview the app in browser at `localhost:8100`.

Using [Ionic View](http://view.ionic.io/), you can preview your app on an iOS, Android or Windows Phone device. Use `ionic upload` to send your app to Ionic View. You'll need the username and password you use to sign into ionic.

