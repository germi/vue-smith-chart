# Smith Chart with Vue.js

Draw the Smith Chart in SVG with Vue.js

## Getting Started

TODO

## Usage

After loading Vue.js library and the smithChart component, you can use the `smith-chart` component inside your Vue app:

```html
<smith-chart></smith-chart>
```

## Examples

### Basic chart

```html
<smith-chart></smith-chart>
```

### Add points to the chart

You can use the `<sm-point>` component to draw points into specific intersecting resistance/reactance circles.
You need to specify the `res` and `react` props (resistance and reactance).
This will draw an SVG `<circle>` element at the desired position, which means all of the SVG attributes in HTML are still valid, such as `fill` to set the color. You can use `r` to set the radius of the point.

```html
<smith-chart>
  <sm-point :res="0" :react="0" fill="red" />
  <sm-point :res="1" :react="0" fill="blue" />
  <sm-point :res="2" :react="0" fill="green" />
  <sm-point :res="3" :react="1" fill="purple" />
  <sm-point :res="0.6" :react="0.6" fill="rgba(123,345,2,0.5)" r="10" />
</smith-chart>
```

![Smith Chart with custom points](readme/points.jpg?raw=true "Smith Chart with custom points")

## Built With

* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework

## Authors

* **Germinal Camps** - [website](http://www.germinalcamps.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Resources

* [Mathematical Construction and Properties of the Smith Chart](https://www.allaboutcircuits.com/technical-articles/mathematical-construction-and-properties-of-the-smith-chart)
