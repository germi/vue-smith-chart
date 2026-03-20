# SmReactArc

Draws a constant-reactance arc. All points on the arc share the same normalised
reactance `x`, with resistance `r` varying from `0` to `+∞`.

## Demo

<DemoReactArc />

## Usage

```html
<SmithChart>
  <!-- Single arc for x = 1 (inductive) -->
  <SmReactArc :react="1" fill="rgba(0,0,255,0.2)" />

  <!-- Both polarities at once (x = 1 and x = −1) -->
  <SmReactArc :react="1" :double="true" fill="rgba(0,0,255,0.15)" />

  <!-- Cropped arc: only the portion outside the r=2 resistance circle -->
  <SmReactArc
    :react="0.5"
    :crop="2"
    :double="true"
    fill="none"
    stroke="#e53e3e"
    stroke-width="3"
  />
</SmithChart>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `react` | `Number \| String` | — | Normalised reactance value. Positive values are in the upper half (inductive), negative in the lower half (capacitive). |
| `double` | `Boolean` | `false` | When `true`, also draws the mirror arc at `−react`. Useful for symmetric displays where you want to show both the inductive and capacitive arcs together. |
| `crop` | `Number \| String` | `''` | When set, masks away the portion of the arc that falls *inside* the constant-resistance circle of value `crop`. |

SVG presentation attributes (`fill`, `stroke`, `stroke-width`, `opacity`, etc.)
pass through.

## How it works

A constant-reactance arc for value `x` is a circle with:

- **Centre:** `(1, 1/x)` in normalised coordinates
- **Radius:** `|1/x|` in normalised coordinates

The arc is the portion of that circle that falls inside the outer boundary
circle (`r = 0`). The `crop` prop applies an SVG mask to hide the part inside
a specified resistance circle.
