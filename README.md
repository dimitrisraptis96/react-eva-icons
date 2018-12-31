# ⚛:heart: react-eva-icons 

React js components for awesome open source [Eva Icons](https://akveo.github.io/eva-icons/#/) library.

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
    size="medium"
    animation={{
      type: "pulse", 
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
| `fill`      | string   | e.g. `'#fff'`                                            | Icon animation               |
| `name`      | string   | e.g. `'activity'`                                        | Define the name of the icon  |
| `size`      | string   |`small`, `medium`, `large`, ``xlarge                      | Icon size                    |

&nbsp;

### License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

&nbsp;

<p align="center">
<sub><sup>Made with 🤘 by <a href="https://twitter.com/d__raptis">@d__raptis</a></sup></sub>
</p>
