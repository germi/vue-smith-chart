# SmithChart

The root chart component. Renders a complete Smith Chart grid as an SVG element.
Place any of the other components inside it via the default slot.

## Demo

<DemoHome />

## Usage

```html
<SmithChart :radius="400">
  <!-- slot content goes here -->
</SmithChart>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `Number` | `400` | Radius of the inner chart circle in pixels. The total SVG canvas is `2 × radius + 200` px to accommodate the outer label rings. |
| `labelRings` | `Boolean` | `true` | Show or hide the two outer rings that display wavelengths-toward-generator / wavelengths-toward-load and angle of reflection coefficient. |
| `resistanceLabels` | `Boolean` | `true` | Show or hide the normalised resistance labels along the horizontal axis. |
| `reactanceLabels` | `Boolean` | `true` | Show or hide the normalised reactance labels around the chart perimeter. |
| `translateX` | `Number` | `100` | Internal SVG translate offset. Leave at the default unless you know why you're changing it. |
| `rotate` | `Number` | `0` | Rotate the entire chart in degrees. |

## Slot

The default slot renders inside the chart SVG, clipped to the inner circle. Use it to place [`SmPoint`](/components/sm-point), [`SmResCircle`](/components/sm-res-circle), [`SmReactArc`](/components/sm-react-arc), and [`SmVswrCircle`](/components/sm-vswr-circle).

```html
<SmithChart :radius="300" :label-rings="false">
  <SmPoint :res="1" :react="0" fill="blue" />
</SmithChart>
```

## Notes

- The chart is rendered as a single `<svg>` element. You can target its internal elements with CSS if needed, but prefer using component props and SVG attributes passed to the child components.
- `radius` changes are fully reactive — all descendant components recalculate their positions immediately.
