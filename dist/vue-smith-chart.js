import { inject as v, computed as b, openBlock as u, createElementBlock as a, createElementVNode as l, createCommentVNode as $, toDisplayString as N, renderSlot as S, createTextVNode as d, provide as C, Fragment as o, renderList as i, createVNode as t, withCtx as m, createBlock as B } from "vue";
const q = ["mask"], L = ["cx", "cy", "r"], P = ["id"], V = ["width", "height"], F = ["cx", "cy", "r"], A = ["id"], X = ["width", "height"], E = ["cx", "cy", "r"], c = {
  __name: "SmResCircle",
  props: {
    res: { type: [Number, String], required: !0 },
    crop: { default: "" }
  },
  setup(s) {
    const k = s, _ = v("smithChartRadius"), r = b(() => _()), e = b(() => Number(k.res) * r.value / (Number(k.res) + 1) + r.value), y = b(() => r.value), h = b(() => r.value / (Number(k.res) + 1));
    return (f, x) => (u(), a("g", {
      class: "res-circle",
      mask: s.crop !== "" ? `url(#react-circle-${s.crop})` : void 0
    }, [
      l("circle", {
        cx: e.value,
        cy: y.value,
        r: h.value
      }, null, 8, L),
      l("mask", {
        id: `res-circle-${s.res}`
      }, [
        l("rect", {
          width: 2 * r.value,
          height: 2 * r.value,
          fill: "white"
        }, null, 8, V),
        l("circle", {
          cx: e.value,
          cy: y.value,
          r: h.value,
          fill: "black"
        }, null, 8, F)
      ], 8, P),
      Number(s.res) === 0.5 ? (u(), a("mask", {
        key: 0,
        id: `res-circle-inverse-${s.res}`
      }, [
        l("rect", {
          width: 2 * r.value,
          height: 2 * r.value,
          fill: "black"
        }, null, 8, X),
        l("circle", {
          cx: e.value,
          cy: y.value,
          r: h.value,
          fill: "white"
        }, null, 8, E)
      ], 8, A)) : $("", !0)
    ], 8, q));
  }
}, M = ["mask"], W = ["cx", "cy", "r"], j = ["cx", "cy", "r"], D = ["id"], T = ["width", "height"], z = ["cx", "cy", "r"], G = ["cx", "cy", "r"], H = ["id"], I = ["width", "height"], J = ["cx", "cy", "r"], K = ["cx", "cy", "r"], n = {
  __name: "SmReactArc",
  props: {
    react: { type: [Number, String], required: !0 },
    crop: { default: "" },
    double: { type: Boolean, default: !1 }
  },
  setup(s) {
    const k = s, _ = v("smithChartRadius"), r = b(() => _()), e = b(() => Math.abs(Number(k.react))), y = b(() => r.value + r.value), h = b(() => r.value / Number(k.react) + r.value), f = b(() => r.value / e.value);
    return (x, lt) => (u(), a("g", {
      class: "react-circle arc",
      mask: s.crop !== "" ? `url(#res-circle-${s.crop})` : void 0
    }, [
      l("circle", {
        cx: y.value,
        cy: -h.value + 2 * r.value,
        r: f.value
      }, null, 8, W),
      s.double ? (u(), a("circle", {
        key: 0,
        cx: y.value,
        cy: h.value,
        r: f.value
      }, null, 8, j)) : $("", !0),
      l("mask", {
        id: `react-circle-${e.value}`
      }, [
        l("rect", {
          width: 2 * r.value,
          height: 2 * r.value,
          fill: "white"
        }, null, 8, T),
        l("circle", {
          cx: y.value,
          cy: h.value,
          r: f.value,
          fill: "black"
        }, null, 8, z),
        l("circle", {
          cx: y.value,
          cy: -h.value + 2 * r.value,
          r: f.value,
          fill: "black"
        }, null, 8, G)
      ], 8, D),
      e.value === 0.5 ? (u(), a("mask", {
        key: 1,
        id: `react-circle-inverse-${e.value}`
      }, [
        l("rect", {
          width: 2 * r.value,
          height: 2 * r.value,
          fill: "black"
        }, null, 8, I),
        l("circle", {
          cx: y.value,
          cy: h.value,
          r: f.value,
          fill: "white"
        }, null, 8, J),
        l("circle", {
          cx: y.value,
          cy: -h.value + 2 * r.value,
          r: f.value,
          fill: "white"
        }, null, 8, K)
      ], 8, H)) : $("", !0)
    ], 8, M));
  }
}, O = ["y"], w = {
  __name: "SmResLabel",
  props: {
    res: { type: Number, required: !0 }
  },
  setup(s) {
    const k = s, _ = v("smithChartRadius"), r = b(() => _()), e = b(() => r.value / (k.res + 1));
    return (y, h) => (u(), a("g", null, [
      l("text", {
        y: -e.value * 2 + r.value - 7,
        x: "3"
      }, N(s.res.toFixed(1)), 9, O)
    ]));
  }
}, Q = ["transform", "y"], U = ["transform", "y"], g = {
  __name: "SmReactLabel",
  props: {
    angle: { type: Number, required: !0 }
  },
  setup(s) {
    const k = v("smithChartRadius"), _ = b(() => k());
    return (r, e) => (u(), a("g", null, [
      l("text", {
        transform: `rotate(${-s.angle})`,
        y: -_.value - 10
      }, [
        S(r.$slots, "default")
      ], 8, Q),
      s.angle !== 90 ? (u(), a("text", {
        key: 0,
        transform: `rotate(${s.angle - 180})`,
        y: -_.value - 10
      }, [
        e[0] || (e[0] = d(" -", -1)),
        S(r.$slots, "default")
      ], 8, U)) : $("", !0)
    ]));
  }
}, Y = ["width", "height"], Z = { id: "svgPath" }, p = ["cx", "cy", "r"], ee = ["transform"], te = {
  stroke: "black",
  "stroke-width": ".5",
  fill: "none"
}, re = { mask: "url(#react-circle-50)" }, le = { mask: "url(#react-circle-20)" }, se = { mask: "url(#react-circle-10)" }, ue = { mask: "url(#react-circle-5)" }, ae = { mask: "url(#react-circle-2)" }, ce = { mask: "url(#react-circle-1)" }, ne = { mask: "url(#react-circle-0.5)" }, oe = { mask: "url(#react-circle-0.2)" }, ie = { mask: "url(#react-circle-1)" }, de = { mask: "url(#react-circle-inverse-0.5)" }, me = { mask: "url(#res-circle-50)" }, ge = { mask: "url(#res-circle-20)" }, he = { mask: "url(#res-circle-10)" }, ke = { mask: "url(#res-circle-5)" }, ye = { mask: "url(#res-circle-2)" }, be = { mask: "url(#res-circle-1)" }, fe = { mask: "url(#res-circle-0.5)" }, _e = { mask: "url(#res-circle-0.2)" }, $e = { mask: "url(#res-circle-1)" }, ve = { mask: "url(#res-circle-inverse-0.5)" }, xe = {
  class: "arc",
  stroke: "black",
  "stroke-width": "1",
  fill: "none"
}, we = ["y1", "x2", "y2"], Ne = { mask: "url(#react-circle-0.2)" }, Se = { mask: "url(#react-circle-1)" }, Re = { mask: "url(#react-circle-5)" }, Ce = { mask: "url(#react-circle-2)" }, Be = { mask: "url(#react-circle-10)" }, qe = { mask: "url(#react-circle-50)" }, Le = { mask: "url(#res-circle-0.2)" }, Pe = { mask: "url(#res-circle-1)" }, Ve = { mask: "url(#res-circle-2)" }, Fe = { mask: "url(#res-circle-5)" }, Ae = { mask: "url(#res-circle-10)" }, Xe = { mask: "url(#res-circle-20)" }, Ee = ["transform"], Me = {
  key: 0,
  stroke: "black",
  "stroke-width": "0.5",
  fill: "none"
}, We = ["r"], je = ["r"], De = ["r"], Te = {
  class: "text-labels",
  "text-anchor": "middle",
  "dominant-baseline": "central"
}, ze = { key: 0 }, Ge = ["transform", "y"], He = ["transform"], Ie = ["y"], Je = ["y"], Ke = { key: 1 }, Oe = {
  key: 2,
  transform: "rotate(-90)",
  "text-anchor": "start",
  "dominant-baseline": "central",
  class: "small-text-labels"
}, Qe = {
  key: 1,
  "stroke-width": "0.5",
  stroke: "black"
}, Ue = ["transform", "y1", "y2"], Ye = ["transform", "y1", "y2"], Ze = {
  __name: "SmithChart",
  props: {
    radius: {
      type: Number,
      default: 400
    },
    resistanceLabels: {
      type: Boolean,
      default: !0
    },
    reactanceLabels: {
      type: Boolean,
      default: !0
    },
    labelRings: {
      type: Boolean,
      default: !0
    },
    translateX: {
      type: Number,
      default: 100
    },
    rotate: {
      type: Number,
      default: 0
    }
  },
  setup(s) {
    const k = s;
    return C("smithChartRadius", () => k.radius), (_, r) => (u(), a("svg", {
      width: 2 * s.radius + 200,
      height: 2 * s.radius + 200,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      l("defs", null, [
        l("clipPath", Z, [
          l("circle", {
            cx: s.radius,
            cy: s.radius,
            r: s.radius
          }, null, 8, p)
        ])
      ]),
      l("g", {
        transform: `translate(${s.translateX} ${s.translateX}) rotate(${s.rotate})`
      }, [
        l("g", te, [
          l("g", re, [
            (u(), a(o, null, i(2, (e) => t(c, {
              key: `res-50-${e}`,
              res: 10 * e + 20,
              crop: 50
            }, null, 8, ["res"])), 64))
          ]),
          l("g", le, [
            (u(), a(o, null, i(5, (e) => t(c, {
              key: `res-20a-${e}`,
              res: 2 * e + 10,
              crop: 20
            }, null, 8, ["res"])), 64)),
            (u(), a(o, null, i(3, (e) => t(c, {
              key: `res-20b-${e}`,
              res: 2 * e,
              crop: 20
            }, null, 8, ["res"])), 64))
          ]),
          l("g", se, [
            t(c, {
              res: 1,
              crop: 10
            }),
            t(c, {
              res: 3,
              crop: 10
            }),
            t(c, {
              res: 7,
              crop: 10
            })
          ]),
          l("g", ue, [
            (u(), a(o, null, i(25, (e) => t(c, {
              key: `res-5-${e}`,
              res: 0.2 * e,
              crop: 5
            }, null, 8, ["res"])), 64))
          ]),
          l("g", ae, [
            (u(), a(o, null, i(10, (e) => t(c, {
              key: `res-2-${e}`,
              res: 0.2 * e - 0.1,
              crop: 2
            }, null, 8, ["res"])), 64))
          ]),
          l("g", ce, [
            (u(), a(o, null, i(5, (e) => t(c, {
              key: `res-1-${e}`,
              res: 0.1 * e + 0.45,
              crop: 1
            }, null, 8, ["res"])), 64))
          ]),
          l("g", ne, [
            (u(), a(o, null, i(25, (e) => t(c, {
              key: `res-05-${e}`,
              res: 0.02 * e,
              crop: 0.5
            }, null, 8, ["res"])), 64))
          ]),
          l("g", oe, [
            (u(), a(o, null, i(10, (e) => t(c, {
              key: `res-02-${e}`,
              res: 0.02 * e - 0.01,
              crop: 0.2
            }, null, 8, ["res"])), 64))
          ]),
          t(c, { res: 8 }),
          t(c, { res: 9 }),
          l("g", ie, [
            l("g", de, [
              (u(), a(o, null, i(5, (e) => t(c, {
                key: `res-1inv-${e}`,
                res: 0.1 * e - 0.05,
                crop: 1
              }, null, 8, ["res"])), 64))
            ])
          ]),
          l("g", me, [
            (u(), a(o, null, i(3, (e) => t(n, {
              key: `rea-50-${e}`,
              double: !0,
              react: e * 10 + 10,
              crop: 50
            }, null, 8, ["react"])), 64))
          ]),
          l("g", ge, [
            (u(), a(o, null, i(10, (e) => t(n, {
              key: `rea-20-${e}`,
              double: !0,
              react: e * 2,
              crop: 20
            }, null, 8, ["react"])), 64))
          ]),
          l("g", he, [
            (u(), a(o, null, i(5, (e) => t(n, {
              key: `rea-10-${e}`,
              double: !0,
              react: e * 2 - 1,
              crop: 10
            }, null, 8, ["react"])), 64))
          ]),
          l("g", ke, [
            (u(), a(o, null, i(25, (e) => t(n, {
              key: `rea-5-${e}`,
              double: !0,
              react: e * 0.2,
              crop: 5
            }, null, 8, ["react"])), 64))
          ]),
          l("g", ye, [
            (u(), a(o, null, i(10, (e) => t(n, {
              key: `rea-2-${e}`,
              double: !0,
              react: e * 0.2 - 0.1,
              crop: 2
            }, null, 8, ["react"])), 64))
          ]),
          l("g", be, [
            (u(), a(o, null, i(5, (e) => t(n, {
              key: `rea-1-${e}`,
              double: !0,
              react: e * 0.1 + 0.45,
              crop: 1
            }, null, 8, ["react"])), 64))
          ]),
          l("g", fe, [
            (u(), a(o, null, i(25, (e) => t(n, {
              key: `rea-05-${e}`,
              double: !0,
              react: e * 0.02,
              crop: 0.5
            }, null, 8, ["react"])), 64))
          ]),
          l("g", _e, [
            (u(), a(o, null, i(10, (e) => t(n, {
              key: `rea-02-${e}`,
              double: !0,
              react: 0.02 * e - 0.01,
              crop: 0.2
            }, null, 8, ["react"])), 64))
          ]),
          t(n, {
            double: !0,
            react: 10
          }),
          l("g", $e, [
            l("g", ve, [
              (u(), a(o, null, i(5, (e) => t(n, {
                key: `rea-1inv-${e}`,
                double: !0,
                react: 0.1 * e - 0.05,
                crop: 1
              }, null, 8, ["react"])), 64))
            ])
          ])
        ]),
        l("g", xe, [
          l("line", {
            x1: "0",
            y1: s.radius,
            x2: 2 * s.radius,
            y2: s.radius
          }, null, 8, we),
          t(c, { res: 0 }),
          l("g", Ne, [
            t(c, { res: 0.05 }),
            t(c, { res: 0.15 })
          ]),
          l("g", Se, [
            t(c, { res: 0.1 }),
            t(c, { res: 0.2 }),
            t(c, { res: 0.3 }),
            t(c, { res: 0.5 }),
            t(c, { res: 0.7 }),
            t(c, { res: 0.9 })
          ]),
          l("g", Re, [
            t(c, { res: 0.4 }),
            t(c, { res: 1 }),
            t(c, { res: 2 }),
            t(c, { res: 3 })
          ]),
          l("g", Ce, [
            t(c, { res: 0.6 }),
            t(c, { res: 0.8 }),
            t(c, { res: 1.2 }),
            t(c, { res: 1.4 }),
            t(c, { res: 1.6 }),
            t(c, { res: 1.8 })
          ]),
          l("g", Be, [
            t(c, { res: 4 }),
            t(c, { res: 5 })
          ]),
          l("g", qe, [
            t(c, { res: 20 })
          ]),
          t(c, { res: 10 }),
          t(c, { res: 50 }),
          l("g", Le, [
            t(n, {
              double: !0,
              react: 0.05
            }),
            t(n, {
              double: !0,
              react: 0.15
            })
          ]),
          l("g", Pe, [
            t(n, {
              double: !0,
              react: 0.1
            }),
            t(n, {
              double: !0,
              react: 0.3
            }),
            t(n, {
              double: !0,
              react: 0.5
            }),
            t(n, {
              double: !0,
              react: 0.7
            }),
            t(n, {
              double: !0,
              react: 0.9
            })
          ]),
          l("g", Ve, [
            t(n, {
              double: !0,
              react: 0.2
            }),
            t(n, {
              double: !0,
              react: 0.4
            }),
            t(n, {
              double: !0,
              react: 0.6
            }),
            t(n, {
              double: !0,
              react: 0.8
            }),
            t(n, {
              double: !0,
              react: 1.2
            }),
            t(n, {
              double: !0,
              react: 1.4
            }),
            t(n, {
              double: !0,
              react: 1.6
            }),
            t(n, {
              double: !0,
              react: 1.8
            })
          ]),
          l("g", Fe, [
            t(n, {
              double: !0,
              react: 1
            }),
            t(n, {
              double: !0,
              react: 2
            }),
            t(n, {
              double: !0,
              react: 3
            }),
            t(n, {
              double: !0,
              react: 4
            })
          ]),
          l("g", Ae, [
            t(n, {
              double: !0,
              react: 5
            })
          ]),
          l("g", Xe, [
            t(n, {
              double: !0,
              react: 10
            }),
            t(n, {
              double: !0,
              react: 20
            })
          ]),
          t(n, {
            double: !0,
            react: 50
          })
        ]),
        l("g", {
          transform: `translate(${s.radius} ${s.radius})`
        }, [
          s.labelRings ? (u(), a("g", Me, [
            l("circle", {
              r: s.radius,
              "stroke-width": "1"
            }, null, 8, We),
            (u(), a(o, null, i(2, (e) => l("circle", {
              key: `ext-ring-1-${e}`,
              r: s.radius + 40 * e - 20
            }, null, 8, je)), 64)),
            (u(), a(o, null, i(2, (e) => l("circle", {
              key: `ext-ring-2-${e}`,
              r: s.radius + 40 * e,
              "stroke-width": "1"
            }, null, 8, De)), 64))
          ])) : $("", !0),
          l("g", Te, [
            s.labelRings ? (u(), a("g", ze, [
              (u(), a(o, null, i(36, (e) => l("text", {
                key: `label-deg-${e}`,
                transform: `rotate(${(e - 1) * 10 - 90})`,
                y: -s.radius - 32
              }, N(180 - (e - 1) * 10), 9, Ge)), 64)),
              (u(), a(o, null, i(50, (e) => l("g", {
                key: `label-wl-${e}`,
                transform: `rotate(${(e - 1) * (36 / 5) - 90})`
              }, [
                l("text", {
                  y: -s.radius - 72
                }, N(((e - 1) * 0.01).toFixed(2)), 9, Ie),
                l("text", {
                  y: -s.radius - 48
                }, N(e !== 1 ? (0.5 - (e - 1) * 0.01).toFixed(2) : 0 .toFixed(2)), 9, Je)
              ], 8, He)), 64))
            ])) : $("", !0),
            s.reactanceLabels ? (u(), a("g", Ke, [
              t(g, { angle: 0 }, {
                default: m(() => [...r[0] || (r[0] = [
                  d("1", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 6 }, {
                default: m(() => [...r[1] || (r[1] = [
                  d("0.9", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 12.5 }, {
                default: m(() => [...r[2] || (r[2] = [
                  d("0.8", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 20 }, {
                default: m(() => [...r[3] || (r[3] = [
                  d("0.7", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 28 }, {
                default: m(() => [...r[4] || (r[4] = [
                  d("0.6", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 37 }, {
                default: m(() => [...r[5] || (r[5] = [
                  d("0.5", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 46 }, {
                default: m(() => [...r[6] || (r[6] = [
                  d("0.4", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 56.5 }, {
                default: m(() => [...r[7] || (r[7] = [
                  d("0.3", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 67 }, {
                default: m(() => [...r[8] || (r[8] = [
                  d("0.2", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 78.5 }, {
                default: m(() => [...r[9] || (r[9] = [
                  d("0.1", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 90 }, {
                default: m(() => [...r[10] || (r[10] = [
                  d("0", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -37 }, {
                default: m(() => [...r[11] || (r[11] = [
                  d("2", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -53 }, {
                default: m(() => [...r[12] || (r[12] = [
                  d("3", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -62 }, {
                default: m(() => [...r[13] || (r[13] = [
                  d("4", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -67.5 }, {
                default: m(() => [...r[14] || (r[14] = [
                  d("5", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -78.5 }, {
                default: m(() => [...r[15] || (r[15] = [
                  d("10", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -84.5 }, {
                default: m(() => [...r[16] || (r[16] = [
                  d("20", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -88 }, {
                default: m(() => [...r[17] || (r[17] = [
                  d("50", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -10.5 }, {
                default: m(() => [...r[18] || (r[18] = [
                  d("1.2", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -19 }, {
                default: m(() => [...r[19] || (r[19] = [
                  d("1.4", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -26 }, {
                default: m(() => [...r[20] || (r[20] = [
                  d("1.6", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: -32 }, {
                default: m(() => [...r[21] || (r[21] = [
                  d("1.8", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 84 }, {
                default: m(() => [...r[22] || (r[22] = [
                  d("0.05", -1)
                ])]),
                _: 1
              }),
              t(g, { angle: 72.5 }, {
                default: m(() => [...r[23] || (r[23] = [
                  d("0.015", -1)
                ])]),
                _: 1
              })
            ])) : $("", !0),
            s.resistanceLabels ? (u(), a("g", Oe, [
              (u(), a(o, null, i(10, (e) => t(w, {
                key: `res-lbl-01-${e}`,
                res: 0.1 * e
              }, null, 8, ["res"])), 64)),
              (u(), a(o, null, i(5, (e) => t(w, {
                key: `res-lbl-02-${e}`,
                res: 0.2 * e + 1
              }, null, 8, ["res"])), 64)),
              (u(), a(o, null, i(3, (e) => t(w, {
                key: `res-lbl-1-${e}`,
                res: e + 2
              }, null, 8, ["res"])), 64)),
              (u(), a(o, null, i(2, (e) => t(w, {
                key: `res-lbl-10-${e}`,
                res: 10 * e
              }, null, 8, ["res"])), 64)),
              t(w, { res: 50 })
            ])) : $("", !0)
          ]),
          s.labelRings ? (u(), a("g", Qe, [
            (u(), a(o, null, i(180, (e) => l("line", {
              key: `tick-1-${e}`,
              transform: `rotate(${e * 2})`,
              x1: "0",
              y1: -s.radius - 20,
              x2: "0",
              y2: -s.radius - 24
            }, null, 8, Ue)), 64)),
            (u(), a(o, null, i(250, (e) => l("line", {
              key: `tick-2-${e}`,
              transform: `rotate(${36 / 25 * e + 18 / 25})`,
              x1: "0",
              y1: -s.radius - 56,
              x2: "0",
              y2: -s.radius - 64
            }, null, 8, Ye)), 64))
          ])) : $("", !0)
        ], 8, Ee),
        S(_.$slots, "default")
      ], 8, ee)
    ], 8, Y));
  }
}, pe = ["cx", "cy", "r"], R = {
  __name: "SmPoint",
  props: {
    res: { type: [Number, String], required: !0 },
    react: { type: [Number, String], required: !0 },
    r: { type: [Number, String], default: 5 }
  },
  setup(s) {
    const k = s, _ = v("smithChartRadius"), r = b(() => _()), e = b(() => {
      const h = Number(k.res), f = Number(k.react);
      return (h ** 2 - 1 + f ** 2) / ((h + 1) ** 2 + f ** 2) * r.value + r.value;
    }), y = b(() => {
      const h = Number(k.res), f = Number(k.react);
      return -(2 * f / ((h + 1) ** 2 + f ** 2)) * r.value + r.value;
    });
    return (h, f) => (u(), a("circle", {
      cx: e.value,
      cy: y.value,
      r: s.r
    }, null, 8, pe));
  }
}, et = ["stroke-width", "stroke"], tt = ["cx", "cy", "r"], rt = {
  __name: "SmVswrCircle",
  props: {
    res: { type: [Number, String], default: 1 },
    react: { type: [Number, String], default: 1 },
    showPoint: { type: Boolean, default: !0 },
    stroke: { type: String, default: "black" },
    strokeWidth: { type: [Number, String], default: 3 }
  },
  setup(s) {
    const k = s, _ = v("smithChartRadius"), r = b(() => _()), e = b(() => {
      const y = Number(k.res), h = Number(k.react), f = (y ** 2 - 1 + h ** 2) / ((y + 1) ** 2 + h ** 2), x = 2 * h / ((y + 1) ** 2 + h ** 2);
      return Math.sqrt(f ** 2 + x ** 2) * r.value;
    });
    return (y, h) => (u(), a("g", {
      fill: "none",
      "stroke-width": s.strokeWidth,
      stroke: s.stroke
    }, [
      l("circle", {
        cx: r.value,
        cy: r.value,
        r: e.value
      }, null, 8, tt),
      s.showPoint ? (u(), B(R, {
        key: 0,
        res: s.res,
        react: s.react,
        fill: s.stroke
      }, null, 8, ["res", "react", "fill"])) : $("", !0)
    ], 8, et));
  }
}, ut = {
  install(s) {
    s.component("SmithChart", Ze), s.component("SmPoint", R), s.component("SmResCircle", c), s.component("SmReactArc", n), s.component("SmVswrCircle", rt);
  }
};
export {
  R as SmPoint,
  n as SmReactArc,
  c as SmResCircle,
  rt as SmVswrCircle,
  Ze as SmithChart,
  ut as default
};
