# SmPoint

Plots a point on the chart at a given normalised impedance (resistance + reactance).
Renders as an SVG `<circle>` element, so all native SVG circle attributes work.

## Demo

Drag the sliders to move each point.

<DemoPoint />

## Usage

```html
<SmithChart>
  <SmPoint :res="0"   :react="0"   fill="red"   />
  <SmPoint :res="1"   :react="0"   fill="blue"  />
  <SmPoint :res="0.6" :react="0.8" fill="green" r="10" />
</SmithChart>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `res` | `Number \| String` | — | Normalised resistance. `0` = short circuit, `1` = matched load. |
| `react` | `Number \| String` | — | Normalised reactance. Positive = inductive (upper half), negative = capacitive (lower half). |
| `r` | `Number \| String` | `5` | Radius of the plotted circle in pixels. |

Any additional attribute you pass (`fill`, `stroke`, `stroke-width`, `opacity`, etc.)
is forwarded directly to the underlying `<circle>` element.

## How coordinates are calculated

The Cartesian coordinates `(a, b)` of a normalised impedance `r + jx` on the Smith Chart are:

$$
a = \frac{r^2 - 1 + x^2}{(r+1)^2 + x^2}, \qquad b = \frac{2x}{(r+1)^2 + x^2}
$$

These map `(a, b)` from the `[−1, 1]` normalised plane to SVG pixel coordinates
using the `radius` provided by the parent `<SmithChart>`.
