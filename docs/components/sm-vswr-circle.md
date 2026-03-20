# SmVswrCircle

Draws a constant-VSWR (Voltage Standing Wave Ratio) circle — a circle centred
on the chart origin that passes through a given impedance point. All points on
the circle share the same VSWR as the specified impedance.

## Demo

<DemoVswr />

## Usage

```html
<SmithChart>
  <SmVswrCircle :res="1" :react="1" stroke="#42b883" />

  <!-- Multiple circles -->
  <SmVswrCircle :res="0.3" :react="-0.5" stroke="blue" stroke-width="3" />

  <!-- Hide the impedance point marker -->
  <SmVswrCircle :res="2" :react="0.5" :show-point="false" stroke="red" />
</SmithChart>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `res` | `Number \| String` | `1` | Normalised resistance of the impedance point. |
| `react` | `Number \| String` | `1` | Normalised reactance of the impedance point. |
| `showPoint` | `Boolean` | `true` | When `true`, also renders a small marker dot at the impedance point itself. |
| `stroke` | `String` | `'black'` | Colour of the VSWR circle and the impedance point marker. |
| `strokeWidth` | `Number \| String` | `3` | Width of the VSWR circle stroke in pixels. |

## How VSWR is calculated

The radius of the VSWR circle equals the distance from the chart centre to the
impedance point in the normalised plane — that is, the magnitude of the
reflection coefficient `|Γ|`:

$$
|\Gamma| = \sqrt{a^2 + b^2}
$$

where `a` and `b` are the normalised Cartesian coordinates of the impedance
point (see [SmPoint](/components/sm-point)).

VSWR relates to `|Γ|` by:

$$
\text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|}
$$

The demo above shows the live-computed VSWR value as you drag the sliders.
