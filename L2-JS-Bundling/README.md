## Problem Statement

 In your new role as a Web Developer, you're assigned to a project that involves optimizing the integration of JavaScript into a web application. The team emphasizes the importance of efficient JS bundling for enhanced application performance. As you embark on the development task, challenges related to bundling, code splitting, lazy loading, and the implementation of import maps surface. Your role is to address these challenges, showcasing your ability to optimize JS integration and explore advanced bundling techniques. The team is particularly interested in your practical application of concepts such as code splitting, lazy loading, and import maps to improve the application's overall performance.

---

## Configuring Webpack:

 Webpack is a powerful tool to configure and bundling JavaScript, CSS, and other assets.

 The webpack config I used for testing the project:
 ```js
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    lazyMod: './src/lazyMod.js',
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  modules: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```
*    Entry: Specifies the entry point for the application.

*    Output: Defines the output bundle's filename and location.

*    Modules: Rules for processing different file types

---

## Advanced Bundling Techniques:

### Code Splitting:
Code splitting helps in dividing the code into smaller chunks, which can be loaded on demand. This improves the initial loading time and overall performance.

```js
document.getElementById('lazy-button').addEventListener('click', () => {
    import('styles').then(styles => {
        styles.default()
    });
    import('lazyMod').then(lazy => {
        lazy.default()
    });
});
console.log('Hello from index.js')
```
*    The code above demonstrates code splitting using dynamic imports. The 'styles' and 'lazyMod' modules are loaded on demand when the button is clicked.

### Lazy Loading:
Lazy loading is used for loading modules only when they are needed. This is useful for large applications with many routes and components.

```js
const lazy1 = () => import('lazyMod1');
document.getElementById('lazy-button1').addEventListener('click', () => {
    lazy1().then(lazy => {
        lazy.default()
    });
});
```
*    The code above demonstrates lazy loading using dynamic imports. The 'lazyMod1' module is loaded on demand when the button is clicked.

### Benefits of Code Splitting and Lazy Loading:
*    Improved performance: Reduces the initial loading time by loading only the required modules.
*    Better user experience: Enhances the user experience by loading content on demand.
*    Optimized bundle size: Reduces the bundle size by splitting the code into smaller chunks.

---

## Import Maps:

Import maps is a better approach to managing module imports in JavaScript applications. This simplifies the module loading process and allows better control over module resolution.

### Advantages of Import Maps:
*    Simplified module loading: Provides a cleaner way to manage module imports.
*    Better control over module resolution: Allows mapping of module names to URLs.
*    Improved performance: Enhances the loading speed of modules by resolving them efficiently.

### Example of Import Maps:

```js
//without import maps
import { logo } from './assets/logo.js';
import { styles } from './styles.css';
import { lazyMod } from './lazyMod.js';
import react from 'https://cdn.skypack.dev/react';

//with import maps
{
  "imports": {
    "logo": "./assets/logo.js",
    "styles": "./styles.css",
    "lazyMod": "./lazyMod.js",
    "react": "https://cdn.skypack.dev/react"
  }
}

import { logo } from 'logo';
import { styles } from 'styles';
import { lazyMod } from 'lazyMod';
import react from 'react';
```




