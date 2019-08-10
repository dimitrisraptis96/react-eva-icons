# ⚛:heart: react-eva-icons 

[![Build Status](https://travis-ci.org/dimitrisraptis96/react-eva-icons.svg?branch=master)](https://travis-ci.org/dimitrisraptis96/react-eva-icons)

React.js components for the awesome open source [Eva Icons](https://akveo.github.io/eva-icons/#/) library.

### Demo 
Visit [here](https://dimitrisraptis96.github.io/react-eva-icons)

&nbsp;

### Getting Started
   
   Using npm
   ```
    npm install --save react-eva-icons
   ```

   Or using yarn
   ```
    yarn add react-eva-icons
   ```

&nbsp;

### Usage

```javascript
import Icon from 'react-eva-icons';

...

render (
  <Icon 
    name="activity"
    size="medium"     // small, medium, large, xlarge
    animation={{
      type: "pulse",  // zoom, pulse, shake, flip
      hover: true,
      infinite: false 
    }}
  />
);
```
&nbsp;

### Props

| Option      | Type     | Values                                                   | Description                  | 
|-------------|----------|----------------------------------------------------------|------------------------------|
| `animation` | object   | [See here](https://github.com/akveo/eva-icons#animation) | Icon animation               |
| `fill`      | string   | e.g. `'#fff'`                                            | Icon color                   |
| `name`      | string   | e.g. `'activity'`                                        | Define the name of the icon  |
| `size`      | string   |`small`, `medium`, `large`, ``xlarge                      | Icon size                    |

&nbsp;

### Known Issues

When using **Gatsby** and **server-side** rendering, you should dynamic import the library: 

```javascript
let Icon
if (typeof window !== "undefined") {
  import("react-eva-icons").then(module => Icon = module.default);
}
```

Issue and solution by [@taniotanio7](https://github.com/taniotanio7) [here](https://github.com/dimitrisraptis96/react-eva-icons/issues/4)

&nbsp;

### License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

&nbsp;

<p align="center">
<sub><sup>Made with 🤘 by <a href="https://twitter.com/d__raptis">@d__raptis</a></sup></sub>
</p>
