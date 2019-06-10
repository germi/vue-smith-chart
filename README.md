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

### Display points

Use the `<sm-point>` component to draw points into specific intersecting resistance/reactance circles.
You need to specify the `res` and `react` props (resistance and reactance).
This will draw an SVG `<circle>` element at the desired position, which means all of the SVG attributes in HTML are still valid, such as `fill` to set the color. You can use `r` to set the radius of the point.

```html
<smith-chart>
  <sm-point :res="0" :react="0" fill="red"></sm-point>
  <sm-point :res="1" :react="0" fill="blue"></sm-point>
  <sm-point :res="2" :react="0" fill="green"></sm-point>
  <sm-point :res="3" :react="1" fill="purple"></sm-point>
  <sm-point :res="0.6" :react="0.6" fill="rgba(123,345,2,0.5)" r="10"></sm-point>
</smith-chart>
```

![Smith Chart with custom points](readme/points.png?raw=true "Smith Chart with custom points")

### Display Constant Resistance Circles

Use the `<sm-res-circle>` component to draw constant resistance circles into the chart.
You need to specify the `res` prop (resistance).
Optionally set the `crop` prop. This will "crop" the circle using a mask and show you only the portion of that circle that falls "outsite" the Constant Reactance Circle of the specified value.
Use the SVG attributes `fill`, `stroke` and `stroke-width` to style the circle.

```html
<smith-chart>

  <sm-res-circle
    :res="2"
    fill="rgba(0,0,255,0.5)"
  ></sm-res-circle>

  <sm-res-circle
    :res="0.5"
    :crop="1"
    fill="rgba(255,0,255,0.5)"
    stroke-width="2"
    stroke="black"
  ></sm-res-circle>

  <sm-res-circle
    :res="0.2"
    :crop="0.4"
    fill="none"
    stroke-width="5"
    stroke="#FF4136"
  ></sm-res-circle>
</smith-chart>
```

![Smith Chart with custom resistance circles](readme/res-circle.png?raw=true "Smith Chart with custom resistance circles")

## Built With

* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework

## Authors

* **Germinal Camps** - [website](http://www.germinalcamps.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Resources

* [Mathematical Construction and Properties of the Smith Chart](https://www.allaboutcircuits.com/technical-articles/mathematical-construction-and-properties-of-the-smith-chart)
