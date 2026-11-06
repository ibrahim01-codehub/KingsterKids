(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/shims/react.js
  var require_react = __commonJS({
    "src/shims/react.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // src/shims/react-dom-client.js
  var require_react_dom_client = __commonJS({
    "src/shims/react-dom-client.js"(exports, module) {
      module.exports = window.ReactDOMClient;
    }
  });

  // src/main.jsx
  var import_react16 = __toESM(require_react());
  var import_client = __toESM(require_react_dom_client());

  // src/components/Layout.jsx
  var import_react7 = __toESM(require_react());

  // src/components/Icons.jsx
  var import_react3 = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react2 = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");

  // node_modules/lucide-react/dist/esm/Icon.js
  var import_react = __toESM(require_react());

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react2.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
        ...props
      })
    );
    Component.displayName = `${iconName}`;
    return Component;
  };

  // node_modules/lucide-react/dist/esm/icons/arrow-left.js
  var ArrowLeft = createLucideIcon("ArrowLeft", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/arrow-right.js
  var ArrowRight = createLucideIcon("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/atom.js
  var Atom = createLucideIcon("Atom", [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    [
      "path",
      {
        d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
        key: "1l2ple"
      }
    ],
    [
      "path",
      {
        d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
        key: "1wam0m"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/book-open.js
  var BookOpen = createLucideIcon("BookOpen", [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/building-2.js
  var Building2 = createLucideIcon("Building2", [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
    ["path", { d: "M10 6h4", key: "1itunk" }],
    ["path", { d: "M10 10h4", key: "tcdvrf" }],
    ["path", { d: "M10 14h4", key: "kelpxr" }],
    ["path", { d: "M10 18h4", key: "1ulq68" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/bus.js
  var Bus = createLucideIcon("Bus", [
    ["path", { d: "M8 6v6", key: "18i7km" }],
    ["path", { d: "M15 6v6", key: "1sg6z9" }],
    ["path", { d: "M2 12h19.6", key: "de5uta" }],
    [
      "path",
      {
        d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
        key: "1wwztk"
      }
    ],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
    ["path", { d: "M9 18h5", key: "lrx6i" }],
    ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/calendar.js
  var Calendar = createLucideIcon("Calendar", [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/camera.js
  var Camera = createLucideIcon("Camera", [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/check.js
  var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

  // node_modules/lucide-react/dist/esm/icons/chevron-down.js
  var ChevronDown = createLucideIcon("ChevronDown", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/chevron-left.js
  var ChevronLeft = createLucideIcon("ChevronLeft", [
    ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/chevron-right.js
  var ChevronRight = createLucideIcon("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/clock.js
  var Clock = createLucideIcon("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/compass.js
  var Compass = createLucideIcon("Compass", [
    [
      "path",
      {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
        key: "9ktpf1"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/download.js
  var Download = createLucideIcon("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/globe.js
  var Globe = createLucideIcon("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/graduation-cap.js
  var GraduationCap = createLucideIcon("GraduationCap", [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
      }
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/heart-pulse.js
  var HeartPulse = createLucideIcon("HeartPulse", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
      }
    ],
    ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/house.js
  var House = createLucideIcon("House", [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/link-2.js
  var Link2 = createLucideIcon("Link2", [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/mail.js
  var Mail = createLucideIcon("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/map-pin.js
  var MapPin = createLucideIcon("MapPin", [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/menu.js
  var Menu = createLucideIcon("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/minus.js
  var Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);

  // node_modules/lucide-react/dist/esm/icons/monitor.js
  var Monitor = createLucideIcon("Monitor", [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/palette.js
  var Palette = createLucideIcon("Palette", [
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    [
      "path",
      {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/phone.js
  var Phone = createLucideIcon("Phone", [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/play.js
  var Play = createLucideIcon("Play", [
    ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/plus.js
  var Plus = createLucideIcon("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/printer.js
  var Printer = createLucideIcon("Printer", [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd"
      }
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/search.js
  var Search = createLucideIcon("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/shield-check.js
  var ShieldCheck = createLucideIcon("ShieldCheck", [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/sparkles.js
  var Sparkles = createLucideIcon("Sparkles", [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx"
      }
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/square-parking.js
  var SquareParking = createLucideIcon("SquareParking", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/trophy.js
  var Trophy = createLucideIcon("Trophy", [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
    ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/user-round.js
  var UserRound = createLucideIcon("UserRound", [
    ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/users.js
  var Users = createLucideIcon("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/utensils.js
  var Utensils = createLucideIcon("Utensils", [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/x.js
  var X = createLucideIcon("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]);

  // src/components/Icons.jsx
  var wrap = (Cmp) => (props) => /* @__PURE__ */ import_react3.default.createElement(Cmp, { strokeWidth: 1.5, "aria-hidden": "true", ...props });
  var I = {
    book: wrap(BookOpen),
    user: wrap(UserRound),
    shield: wrap(ShieldCheck),
    globe: wrap(Globe),
    graduation: wrap(GraduationCap),
    atom: wrap(Atom),
    palette: wrap(Palette),
    trophy: wrap(Trophy),
    phone: wrap(Phone),
    mail: wrap(Mail),
    pin: wrap(MapPin),
    clock: wrap(Clock),
    calendar: wrap(Calendar),
    arrow: wrap(ArrowRight),
    back: wrap(ArrowLeft),
    check: wrap(Check),
    plus: wrap(Plus),
    minus: wrap(Minus),
    search: wrap(Search),
    menu: wrap(Menu),
    close: wrap(X),
    play: wrap(Play),
    down: wrap(ChevronDown),
    left: wrap(ChevronLeft),
    right: wrap(ChevronRight),
    compass: wrap(Compass),
    download: wrap(Download),
    link: wrap(Link2),
    bus: wrap(Bus),
    food: wrap(Utensils),
    parking: wrap(SquareParking),
    monitor: wrap(Monitor),
    heart: wrap(HeartPulse),
    users: wrap(Users),
    camera: wrap(Camera),
    print: wrap(Printer),
    home: wrap(House),
    building: wrap(Building2),
    spark: wrap(Sparkles)
  };
  var Brand = {
    facebook: (p) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.6H7.4v3.3h2.8V22h3.3z" })),
    instagram: (p) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", "aria-hidden": "true", ...p }, /* @__PURE__ */ import_react3.default.createElement("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "5" }), /* @__PURE__ */ import_react3.default.createElement("circle", { cx: "12", cy: "12", r: "4" }), /* @__PURE__ */ import_react3.default.createElement("circle", { cx: "17.2", cy: "6.8", r: "1", fill: "currentColor", stroke: "none" })),
    x: (p) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.2 21H2.1l7.3-8.3L2 3h6.3l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" })),
    linkedin: (p) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M4.3 8.8h3.4V20H4.3V8.8zM6 3.4a2 2 0 110 4 2 2 0 010-4zM9.9 8.8h3.2v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3V20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H9.9V8.8z" })),
    youtube: (p) => /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" }))
  };
  function Quote(props) {
    return /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: "0 0 32 24", fill: "currentColor", "aria-hidden": "true", ...props }, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M0 24V14.6C0 6.2 4.6 1.2 12 0l1 3.4C8.8 4.6 6.8 7 6.6 10.8H13V24H0zm18.5 0V14.6C18.5 6.2 23.1 1.2 30.5 0l1 3.4c-4.2 1.2-6.2 3.6-6.4 7.4h6.4V24H18.5z" }));
  }

  // src/components/Art.jsx
  var import_react5 = __toESM(require_react());

  // src/lib/utils.js
  var import_react4 = __toESM(require_react());
  var D = window.SITE_DATA;
  var S = D.site;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function parseDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d, 12, 0, 0);
  }
  function fmtDate(iso) {
    const d = parseDate(iso);
    return `${MONTHS_LONG[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  function fmtDateLong(iso) {
    const d = parseDate(iso);
    return `${DAYS_LONG[d.getDay()]}, ${MONTHS_LONG[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  function dayOf(iso) {
    return String(parseDate(iso).getDate()).padStart(2, "0");
  }
  function monthOf(iso) {
    return MONTHS[parseDate(iso).getMonth()].toUpperCase();
  }
  function money(n) {
    return "$" + Math.round(n).toLocaleString("en-US");
  }
  function initials(name) {
    return name.replace(/^(Dr|Mr|Mrs|Ms|Mme)\.?\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  }
  function mapsLink() {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.mapQuery);
  }
  function mapsEmbed() {
    return "https://maps.google.com/maps?q=" + encodeURIComponent(S.mapQuery) + "&t=&z=15&ie=UTF8&iwloc=&output=embed";
  }
  function photoPath(slot) {
    return D.photos && D.photos[slot] || "";
  }
  function currentPage() {
    return document.body.getAttribute("data-page") || "home";
  }
  function emit(name, detail) {
    window.dispatchEvent(new CustomEvent("rv:" + name, { detail }));
  }
  function useBus(name, fn) {
    const ref = (0, import_react4.useRef)(fn);
    ref.current = fn;
    (0, import_react4.useEffect)(() => {
      const h = (e) => ref.current(e.detail);
      window.addEventListener("rv:" + name, h);
      return () => window.removeEventListener("rv:" + name, h);
    }, [name]);
  }
  function useHash() {
    const [hash, setHash] = (0, import_react4.useState)(window.location.hash);
    (0, import_react4.useEffect)(() => {
      const h = () => setHash(window.location.hash);
      window.addEventListener("hashchange", h);
      return () => window.removeEventListener("hashchange", h);
    }, []);
    return hash;
  }
  function useHashScroll() {
    (0, import_react4.useEffect)(() => {
      const go = () => {
        const raw = decodeURIComponent(window.location.hash.slice(1));
        if (!raw || raw.startsWith("/")) return;
        const id = raw.split("/")[0];
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
      };
      const t = setTimeout(go, 60);
      window.addEventListener("hashchange", go);
      return () => {
        clearTimeout(t);
        window.removeEventListener("hashchange", go);
      };
    }, []);
  }
  function useReveal() {
    (0, import_react4.useEffect)(() => {
      if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const els = Array.from(document.querySelectorAll("[data-reveal]"));
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.remove("pre");
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.92) {
          el.classList.add("pre");
          io.observe(el);
        }
      });
      return () => io.disconnect();
    });
  }
  var emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
  var phoneOk = (v) => String(v).replace(/[^\d]/g, "").length >= 7;
  async function sendForm(subject, data, to) {
    const target = to || S.admissionsEmail || S.email;
    const body = Object.keys(data).filter((k) => data[k]).map((k) => k + ": " + data[k]).join("\n");
    if (S.formEndpoint) {
      try {
        const res = await fetch(S.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.assign({ _subject: subject }, data))
        });
        if (!res.ok) throw new Error("bad response");
        return { mode: "sent" };
      } catch (e) {
        return { mode: "error" };
      }
    }
    const href = "mailto:" + target + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    return { mode: "mailto", href };
  }
  function downloadIcs({ title: title2, date, time, location, description }) {
    const m = /(\d{1,2}):(\d{2})\s*(am|pm)/i.exec(time) || [];
    let h = parseInt(m[1] || "11", 10) % 12;
    if ((m[3] || "am").toLowerCase() === "pm") h += 12;
    const min = parseInt(m[2] || "0", 10);
    const [y, mo, d] = date.split("-").map(Number);
    const pad2 = (n) => String(n).padStart(2, "0");
    const stamp = (hh, mm) => `${y}${pad2(mo)}${pad2(d)}T${pad2(hh)}${pad2(mm)}00`;
    const endMin = h * 60 + min + 90;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//" + S.fullName + "//Tour//EN",
      "BEGIN:VEVENT",
      "UID:" + Date.now() + "@riverside-tour",
      "DTSTAMP:" + (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
      "DTSTART:" + stamp(h, min),
      "DTEND:" + stamp(Math.floor(endMin / 60), endMin % 60),
      "SUMMARY:" + title2,
      "LOCATION:" + location.replace(/,/g, "\\,"),
      "DESCRIPTION:" + description.replace(/\n/g, "\\n"),
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "school-tour.ics";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }
  function useQuery(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  // src/components/Art.jsx
  var C = {
    deep: "#0a2140",
    mid: "#12345c",
    light: "#1d4a7d",
    sky: "#2a5c93",
    gold: "#c9a45c",
    goldSoft: "#e2c98f",
    cream: "#efe6d2",
    line: "rgba(239,230,210,.7)"
  };
  var rnd = (n) => {
    const x = Math.sin(n * 91.7 + 13.3) * 1e4;
    return x - Math.floor(x);
  };
  function Building() {
    const cols = [0, 1, 2, 3, 4, 5];
    const winsL = [0, 1, 2], rows = [0, 1];
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("defs", null, /* @__PURE__ */ import_react5.default.createElement("linearGradient", { id: "bSky", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react5.default.createElement("stop", { offset: "0", stopColor: C.deep }), /* @__PURE__ */ import_react5.default.createElement("stop", { offset: "1", stopColor: C.sky }))), /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: "url(#bSky)" }), [...Array(26)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: i, cx: rnd(i) * 800, cy: rnd(i + 40) * 230, r: 0.8 + rnd(i + 9) * 1.2, fill: C.cream, opacity: 0.35 + rnd(i + 3) * 0.4 })), /* @__PURE__ */ import_react5.default.createElement("rect", { y: "478", width: "800", height: "122", fill: "#0a2038" }), [0, 1, 2, 3].map((i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, y: 490 + i * 28, width: "800", height: "1.2", fill: C.line, opacity: ".18" })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "70", y: "340", width: "170", height: "140", fill: C.mid, stroke: C.line }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "560", y: "340", width: "170", height: "140", fill: C.mid, stroke: C.line }), [0, 1].map((side) => winsL.map((w) => rows.map((r) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: `${side}${w}${r}`, x: (side ? 580 : 90) + w * 52, y: 362 + r * 56, width: "22", height: "34", fill: C.gold, opacity: 0.55 + rnd(w + r * 3 + side) * 0.35 })))), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "235", y: "290", width: "330", height: "190", fill: C.light, stroke: C.line }), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "290,290 400,218 510,290", fill: C.mid, stroke: C.cream, strokeWidth: "1.5" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "262", r: "14", fill: "none", stroke: C.gold, strokeWidth: "2" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "282", y: "290", width: "236", height: "12", fill: C.cream }), cols.map((i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: 298 + i * 40, y: "302", width: "14", height: "150", fill: C.cream })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "290", y: "450", width: "220", height: "30", fill: C.cream, opacity: ".9" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M382 480 V430 a18 18 0 0 1 36 0 V480 Z", fill: C.deep, stroke: C.gold, strokeWidth: "2" }), [0, 1, 2].map((i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: 282 - i * 8, y: 480 + i * 0, width: 236 + i * 16, height: "0", fill: "none" })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "378", y: "168", width: "44", height: "52", fill: C.cream }), [0, 1, 2].map((i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: 384 + i * 14, y: "176", width: "6", height: "30", fill: C.mid })), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "372,168 400,128 428,168", fill: C.mid, stroke: C.cream, strokeWidth: "1.5" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "400", y1: "128", x2: "400", y2: "96", stroke: C.gold, strokeWidth: "2" }), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "400,100 424,106 400,112", fill: C.gold }), [[38, 440, 52], [24, 400, 36], [772, 440, 52], [790, 396, 34], [200, 470, 28], [610, 470, 28]].map(([x, y, r], i) => /* @__PURE__ */ import_react5.default.createElement("g", { key: i }, /* @__PURE__ */ import_react5.default.createElement("rect", { x: x - 3, y, width: "6", height: "46", fill: "#07182e" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: x, cy: y, r, fill: "#0f3a52" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: x - r * 0.3, cy: y - r * 0.2, r: r * 0.6, fill: "#145068", opacity: ".7" }))), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "372,480 428,480 520,600 280,600", fill: "#16314f" }));
  }
  function Library() {
    const shelf = (x0, rows) => rows.map((y, r) => {
      let x = x0;
      const books = [];
      for (let i = 0; i < 11; i++) {
        const w = 12 + Math.floor(rnd(r * 20 + i + x0) * 14);
        const h = 52 + Math.floor(rnd(r * 7 + i * 3 + x0) * 30);
        const pick = rnd(i + r * 5 + x0);
        books.push(/* @__PURE__ */ import_react5.default.createElement("rect", { key: `${x0}${r}${i}`, x, y: y - h, width: w, height: h, fill: pick > 0.75 ? C.gold : pick > 0.45 ? C.light : C.sky, opacity: pick > 0.75 ? 0.85 : 0.9, stroke: C.deep, strokeWidth: "1" }));
        x += w + 1;
      }
      return /* @__PURE__ */ import_react5.default.createElement("g", { key: r }, books, /* @__PURE__ */ import_react5.default.createElement("rect", { x: x0 - 6, y, width: "206", height: "8", fill: C.cream, opacity: ".85" }));
    });
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "0", y: "0", width: "800", height: "600", fill: C.mid, opacity: ".35" }), shelf(20, [170, 300, 430, 560]), shelf(578, [170, 300, 430, 560]), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M270 600 V250 a130 130 0 0 1 260 0 V600 Z", fill: C.sky, opacity: ".55", stroke: C.gold, strokeWidth: "3" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "400", y1: "120", x2: "400", y2: "600", stroke: C.gold, strokeWidth: "2", opacity: ".7" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "270", y1: "320", x2: "530", y2: "320", stroke: C.gold, strokeWidth: "2", opacity: ".7" }), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "330,600 470,600 520,470 280,470", fill: C.cream, opacity: ".08" }));
  }
  function Lab() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), [...Array(21)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("line", { key: `v${i}`, x1: i * 40, y1: "0", x2: i * 40, y2: "600", stroke: C.line, opacity: ".08" })), [...Array(16)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("line", { key: `h${i}`, x1: "0", y1: i * 40, x2: "800", y2: i * 40, stroke: C.line, opacity: ".08" })), /* @__PURE__ */ import_react5.default.createElement("g", { transform: "translate(560 240)", fill: "none", stroke: C.gold, strokeWidth: "2" }, /* @__PURE__ */ import_react5.default.createElement("ellipse", { rx: "150", ry: "52" }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { rx: "150", ry: "52", transform: "rotate(60)" }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { rx: "150", ry: "52", transform: "rotate(120)" }), /* @__PURE__ */ import_react5.default.createElement("circle", { r: "16", fill: C.gold, stroke: "none" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "150", cy: "0", r: "8", fill: C.cream, stroke: "none" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "-75", cy: "-45", r: "8", fill: C.cream, stroke: "none" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "-75", cy: "45", r: "8", fill: C.cream, stroke: "none" })), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M200 140 h60 v110 l82 150 a26 26 0 0 1 -23 39 H141 a26 26 0 0 1 -23 -39 L200 250 Z", fill: C.mid, stroke: C.cream, strokeWidth: "3" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M154 388 L203 300 H257 L306 388 a8 8 0 0 1 -7 12 H161 a8 8 0 0 1 -7 -12Z", fill: C.gold, opacity: ".75" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "190", y1: "140", x2: "270", y2: "140", stroke: C.cream, strokeWidth: "5", strokeLinecap: "round" }), [[222, 345, 7], [246, 330, 5], [232, 316, 4], [212, 372, 5]].map(([x, y, r], i) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: i, cx: x, cy: y, r, fill: "none", stroke: C.cream, strokeWidth: "1.5" })), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M380 340 h110 l-8 120 a12 12 0 0 1 -12 11 h-70 a12 12 0 0 1 -12 -11 Z", fill: C.mid, stroke: C.cream, strokeWidth: "3" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M386 398 h98 l-4 62 a8 8 0 0 1 -8 8 h-74 a8 8 0 0 1 -8 -8Z", fill: C.sky, opacity: ".8" }), [360, 380, 400, 420].map((y, i) => /* @__PURE__ */ import_react5.default.createElement("line", { key: i, x1: "380", y1: y, x2: i % 2 ? 396 : 408, y2: y, stroke: C.cream, strokeWidth: "1.5" })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "90", y: "470", width: "620", height: "14", fill: C.cream, opacity: ".85" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "110", y: "484", width: "12", height: "100", fill: C.cream, opacity: ".5" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "678", y: "484", width: "12", height: "100", fill: C.cream, opacity: ".5" }));
  }
  function Music() {
    const ys = [190, 220, 250, 280, 310];
    const notes = [[150, 280, 1], [230, 250, 1], [310, 220, 1], [390, 310, 0], [470, 250, 1], [550, 190, 1], [630, 280, 0]];
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "250", r: "260", fill: C.mid, opacity: ".55" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "250", r: "190", fill: "none", stroke: C.gold, strokeWidth: "1.5", opacity: ".5" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "250", r: "130", fill: "none", stroke: C.cream, strokeWidth: "1", opacity: ".25" }), ys.map((y) => /* @__PURE__ */ import_react5.default.createElement("line", { key: y, x1: "70", y1: y, x2: "730", y2: y, stroke: C.cream, strokeWidth: "2", opacity: ".85" })), notes.map(([x, y, up], i) => /* @__PURE__ */ import_react5.default.createElement("g", { key: i }, /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: x, cy: y, rx: "17", ry: "12", transform: `rotate(-20 ${x} ${y})`, fill: i % 3 === 0 ? C.gold : C.cream }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: up ? x + 15 : x - 15, y1: y - 3, x2: up ? x + 15 : x - 15, y2: up ? y - 80 : y + 80, stroke: i % 3 === 0 ? C.gold : C.cream, strokeWidth: "3" }))), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M96 340 c-30 -60 40 -60 20 -120 c-8 -30 -42 -10 -30 22 c10 30 54 18 48 -22", fill: "none", stroke: C.gold, strokeWidth: "4", strokeLinecap: "round" }), /* @__PURE__ */ import_react5.default.createElement("g", { transform: "translate(0 440)" }, [...Array(20)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: 70 + i * 33, y: "0", width: "31", height: "120", fill: C.cream, opacity: ".92" })), [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18].map((i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: 70 + i * 33 + 22, y: "0", width: "20", height: "72", fill: C.deep }))));
  }
  function Field() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: "#0d3a3a" }), [...Array(10)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("rect", { key: i, x: i * 80, y: "0", width: "80", height: "600", fill: i % 2 ? "#0f4242" : "#0d3a3a" })), /* @__PURE__ */ import_react5.default.createElement("g", { fill: "none", stroke: C.cream, strokeWidth: "3", opacity: ".9" }, /* @__PURE__ */ import_react5.default.createElement("rect", { x: "60", y: "70", width: "680", height: "460" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "400", y1: "70", x2: "400", y2: "530" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "300", r: "70" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "60", y: "180", width: "110", height: "240" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "630", y: "180", width: "110", height: "240" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "60", y: "235", width: "40", height: "130" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "700", y: "235", width: "40", height: "130" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M170 255 a60 60 0 0 1 0 90" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M630 255 a60 60 0 0 0 0 90" })), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "300", r: "5", fill: C.cream }), /* @__PURE__ */ import_react5.default.createElement("g", { transform: "translate(300 360)" }, /* @__PURE__ */ import_react5.default.createElement("circle", { r: "34", fill: C.cream, stroke: C.deep, strokeWidth: "3" }), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "0,-14 13,-4 8,12 -8,12 -13,-4", fill: C.deep }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M0 -14 V-32 M13 -4 L30 -10 M8 12 L18 28 M-8 12 L-18 28 M-13 -4 L-30 -10", stroke: C.deep, strokeWidth: "3", fill: "none" })), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M210 470 C 250 430, 280 410, 296 396", stroke: C.gold, strokeWidth: "3", strokeDasharray: "2 10", strokeLinecap: "round", fill: "none" }));
  }
  function Studio() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "40", y: "60", width: "330", height: "430", fill: C.cream, opacity: ".95" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "58", y: "78", width: "294", height: "394", fill: C.mid }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "170", cy: "190", r: "70", fill: C.gold, opacity: ".9" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "140", y: "260", width: "190", height: "190", fill: C.light, opacity: ".85" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M58 380 C 130 320, 200 420, 352 340 V472 H58Z", fill: C.sky, opacity: ".8" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "290", cy: "150", r: "26", fill: C.cream, opacity: ".8" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "205", y1: "490", x2: "150", y2: "590", stroke: C.cream, strokeWidth: "6", opacity: ".7" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "205", y1: "490", x2: "260", y2: "590", stroke: C.cream, strokeWidth: "6", opacity: ".7" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M470 300 c-20 -90 100 -140 200 -110 c110 32 120 130 60 180 c-40 34 -90 6 -112 40 c-20 34 -80 50 -120 14 c-30 -26 -18 -90 -28 -124Z", fill: C.cream }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "560", cy: "300", r: "16", fill: C.deep }), [[540, 232, C.gold], [610, 222, C.sky], [668, 256, C.light], [686, 316, C.gold], [500, 290, C.mid]].map(([x, y, f], i) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: i, cx: x, cy: y, r: "22", fill: f })), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "480", y1: "520", x2: "740", y2: "390", stroke: C.gold, strokeWidth: "9", strokeLinecap: "round" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "715", y1: "402", x2: "760", y2: "380", stroke: C.cream, strokeWidth: "14", strokeLinecap: "round" }));
  }
  function Stage() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("defs", null, /* @__PURE__ */ import_react5.default.createElement("linearGradient", { id: "spot", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react5.default.createElement("stop", { offset: "0", stopColor: C.goldSoft, stopOpacity: ".55" }), /* @__PURE__ */ import_react5.default.createElement("stop", { offset: "1", stopColor: C.goldSoft, stopOpacity: ".05" }))), /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: "#0b1c36" }), /* @__PURE__ */ import_react5.default.createElement("polygon", { points: "365,0 435,0 640,470 160,470", fill: "url(#spot)" }), /* @__PURE__ */ import_react5.default.createElement("rect", { y: "470", width: "800", height: "130", fill: "#14284a" }), [...Array(14)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("line", { key: i, x1: i * 62 - 40, y1: "600", x2: 160 + i * 35, y2: "470", stroke: C.line, opacity: ".15" })), /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "480", rx: "230", ry: "26", fill: C.gold, opacity: ".28" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M0 0 H200 C 170 140, 230 300, 150 600 H0Z", fill: "#7a1f2c" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M800 0 H600 C 630 140, 570 300, 650 600 H800Z", fill: "#7a1f2c" }), [40, 80, 120, 160].map((x, i) => /* @__PURE__ */ import_react5.default.createElement("path", { key: i, d: `M${x} 0 C ${x - 20} 200, ${x + 10} 400, ${x - 10} 600`, stroke: "#4f1019", strokeWidth: "5", fill: "none" })), [760, 720, 680, 640].map((x, i) => /* @__PURE__ */ import_react5.default.createElement("path", { key: i, d: `M${x} 0 C ${x + 20} 200, ${x - 10} 400, ${x + 10} 600`, stroke: "#4f1019", strokeWidth: "5", fill: "none" })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "0", y: "0", width: "800", height: "46", fill: "#5a1220" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M0 46 q 50 30 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0", fill: "#5a1220" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "400", y1: "330", x2: "400", y2: "470", stroke: C.cream, strokeWidth: "4" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "372", y1: "472", x2: "428", y2: "472", stroke: C.cream, strokeWidth: "5", strokeLinecap: "round" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "388", y: "290", width: "24", height: "42", rx: "12", fill: C.cream }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M382 312 v6 a18 18 0 0 0 36 0 v-6", fill: "none", stroke: C.cream, strokeWidth: "3" }));
  }
  function Classroom() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "0", y: "420", width: "800", height: "180", fill: "#0a1d36" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "60", y: "70", width: "170", height: "220", fill: C.sky, opacity: ".55", stroke: C.cream, strokeWidth: "4" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "145", y1: "70", x2: "145", y2: "290", stroke: C.cream, strokeWidth: "4" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "60", y1: "180", x2: "230", y2: "180", stroke: C.cream, strokeWidth: "4" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "290", y: "70", width: "450", height: "240", fill: "#143a3a", stroke: C.gold, strokeWidth: "8" }), /* @__PURE__ */ import_react5.default.createElement("g", { stroke: C.cream, strokeWidth: "3", fill: "none", strokeLinecap: "round", opacity: ".9" }, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M330 130 h120 M330 160 h180 M330 190 h90" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M560 120 l70 90 M630 120 l-70 90" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M470 250 q40 -50 80 0 t80 0" }), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "660", cy: "250", r: "22" })), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "290", y: "310", width: "450", height: "10", fill: C.gold }), [0, 1, 2].map((r) => [0, 1, 2].map((c) => /* @__PURE__ */ import_react5.default.createElement("g", { key: `${r}${c}`, transform: `translate(${130 + c * 220 - r * 20} ${400 + r * 56})` }, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "150", height: "12", fill: C.cream, opacity: ".92" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "14", y: "12", width: "6", height: "40", fill: C.cream, opacity: ".6" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "130", y: "12", width: "6", height: "40", fill: C.cream, opacity: ".6" }), /* @__PURE__ */ import_react5.default.createElement("rect", { x: "30", y: "-18", width: "42", height: "18", fill: C.gold, opacity: ".85" })))));
  }
  function Globe2() {
    return /* @__PURE__ */ import_react5.default.createElement("g", null, /* @__PURE__ */ import_react5.default.createElement("rect", { width: "800", height: "600", fill: C.deep }), [...Array(40)].map((_, i) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: i, cx: rnd(i + 70) * 800, cy: rnd(i + 11) * 600, r: 0.8 + rnd(i) * 1.3, fill: C.cream, opacity: 0.3 + rnd(i + 5) * 0.4 })), /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "400", cy: "300", r: "205", fill: C.mid, stroke: C.cream, strokeWidth: "3" }), /* @__PURE__ */ import_react5.default.createElement("g", { fill: "none", stroke: C.line, strokeWidth: "1.6", opacity: ".8" }, /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "300", rx: "205", ry: "70" }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "300", rx: "205", ry: "140" }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "300", rx: "70", ry: "205" }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "300", rx: "140", ry: "205" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "400", y1: "95", x2: "400", y2: "505" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "195", y1: "300", x2: "605", y2: "300" })), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M300 220 q30 -40 70 -20 q30 20 10 50 q-20 28 -50 20 q-40 -14 -30 -50Z", fill: C.light }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M430 280 q40 -26 80 0 q22 30 -6 60 q-30 34 -62 10 q-20 -36 -12 -70Z", fill: C.light }), /* @__PURE__ */ import_react5.default.createElement("ellipse", { cx: "400", cy: "300", rx: "260", ry: "48", transform: "rotate(-24 400 300)", fill: "none", stroke: C.gold, strokeWidth: "3", strokeDasharray: "3 10", strokeLinecap: "round" }), [[216, 372], [584, 228], [330, 142]].map(([x, y], i) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: i, cx: x, cy: y, r: "9", fill: C.gold })));
  }
  var SCENES = { building: Building, library: Library, lab: Lab, music: Music, field: Field, studio: Studio, stage: Stage, classroom: Classroom, globe: Globe2 };
  function Art({ name = "building", view = "0 0 800 600" }) {
    const Scene = SCENES[name] || Building;
    return /* @__PURE__ */ import_react5.default.createElement("svg", { className: "art-svg", viewBox: view, preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", focusable: "false" }, /* @__PURE__ */ import_react5.default.createElement(Scene, null));
  }
  function Photo({ slot, art = "building", artView, alt = "", className = "", loading = "lazy" }) {
    const src = photoPath(slot);
    const [failed, setFailed] = (0, import_react5.useState)(false);
    if (!src || failed) {
      return /* @__PURE__ */ import_react5.default.createElement("div", { className: "photo photo-art " + className, role: alt ? "img" : void 0, "aria-label": alt || void 0 }, /* @__PURE__ */ import_react5.default.createElement(Art, { name: art, view: artView }));
    }
    return /* @__PURE__ */ import_react5.default.createElement("img", { className: "photo " + className, src, alt, loading, onError: () => setFailed(true) });
  }
  function Crest({ size = 44, variant = "dark" }) {
    const fill = variant === "dark" ? "#0a2140" : "#ffffff";
    const ink = variant === "dark" ? "#c9a45c" : "#0a2140";
    const stroke = variant === "dark" ? "#c9a45c" : "#c9a45c";
    return /* @__PURE__ */ import_react5.default.createElement("svg", { className: "crest", width: size, height: size * 1.12, viewBox: "0 0 50 56", role: "img", "aria-label": "School crest" }, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M25 2 L46 8 V28 C46 41 36 50 25 54 C14 50 4 41 4 28 V8 Z", fill, stroke, strokeWidth: "1.6" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M25 2 L46 8 V28 C46 41 36 50 25 54 C14 50 4 41 4 28 V8 Z", fill: "none", stroke: ink, strokeWidth: ".5", transform: "translate(0 0) scale(.9) translate(2.8 3)", opacity: ".6" }), [17, 25, 33].map((x) => /* @__PURE__ */ import_react5.default.createElement("circle", { key: x, cx: x, cy: "12", r: "1.4", fill: ink })), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M25 20 C21 17.5 15 17.5 12 19 V33 C15 31.5 21 31.5 25 34 C29 31.5 35 31.5 38 33 V19 C35 17.5 29 17.5 25 20 Z", fill: "none", stroke: ink, strokeWidth: "1.5", strokeLinejoin: "round" }), /* @__PURE__ */ import_react5.default.createElement("line", { x1: "25", y1: "20", x2: "25", y2: "34", stroke: ink, strokeWidth: "1.2" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M13 40 q3 -3 6 0 t6 0 t6 0 t6 0", fill: "none", stroke: ink, strokeWidth: "1.3", strokeLinecap: "round" }), /* @__PURE__ */ import_react5.default.createElement("path", { d: "M16 44.5 q3 -3 6 0 t6 0 t6 0", fill: "none", stroke: ink, strokeWidth: "1.1", strokeLinecap: "round", opacity: ".7" }));
  }

  // src/components/Common.jsx
  var import_react6 = __toESM(require_react());
  function Modal({ open, onClose, title: title2, children, wide = false, labelledBy }) {
    const ref = (0, import_react6.useRef)(null);
    const last = (0, import_react6.useRef)(null);
    (0, import_react6.useEffect)(() => {
      if (!open) return;
      last.current = document.activeElement;
      document.body.classList.add("no-scroll");
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "Tab" && ref.current) {
          const f = ref.current.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
          if (!f.length) return;
          const first = f[0], lastEl = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            lastEl.focus();
          } else if (!e.shiftKey && document.activeElement === lastEl) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener("keydown", onKey);
      const t = setTimeout(() => {
        var _a;
        const c = ref.current && ref.current.querySelector("[data-autofocus]");
        (_a = c || ref.current) == null ? void 0 : _a.focus();
      }, 30);
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.classList.remove("no-scroll");
        clearTimeout(t);
        if (last.current && last.current.focus) last.current.focus();
      };
    }, [open]);
    if (!open) return null;
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "modal-backdrop", onMouseDown: (e) => {
      if (e.target === e.currentTarget) onClose();
    } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "modal" + (wide ? " modal-wide" : ""), role: "dialog", "aria-modal": "true", "aria-label": title2, "aria-labelledby": labelledBy, ref, tabIndex: -1 }, /* @__PURE__ */ import_react6.default.createElement("button", { className: "modal-close", onClick: onClose, "aria-label": "Close" }, /* @__PURE__ */ import_react6.default.createElement(I.close, { size: 22 })), children));
  }
  function Accordion({ items, defaultOpen = 0 }) {
    const [open, setOpen] = (0, import_react6.useState)(defaultOpen);
    const uid = (0, import_react6.useId)();
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "accordion" }, items.map((it, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ import_react6.default.createElement("div", { className: "acc-item" + (isOpen ? " open" : ""), key: i }, /* @__PURE__ */ import_react6.default.createElement("h3", null, /* @__PURE__ */ import_react6.default.createElement("button", { className: "acc-head", "aria-expanded": isOpen, "aria-controls": `${uid}-p${i}`, id: `${uid}-h${i}`, onClick: () => setOpen(isOpen ? -1 : i) }, /* @__PURE__ */ import_react6.default.createElement("span", null, it.q), isOpen ? /* @__PURE__ */ import_react6.default.createElement(I.minus, { size: 18 }) : /* @__PURE__ */ import_react6.default.createElement(I.plus, { size: 18 }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "acc-panel", id: `${uid}-p${i}`, role: "region", "aria-labelledby": `${uid}-h${i}`, hidden: !isOpen }, (Array.isArray(it.a) ? it.a : [it.a]).map((p, k) => /* @__PURE__ */ import_react6.default.createElement("p", { key: k }, p))));
    }));
  }
  function PageBanner({ eyebrow, title: title2, lead, art = "building", align = "left", slot }) {
    const photo = slot ? photoPath(slot) : "";
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "banner" + (align === "center" ? " banner-center" : "") }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "banner-bg", "aria-hidden": "true" }, photo ? /* @__PURE__ */ import_react6.default.createElement("img", { src: photo, alt: "" }) : /* @__PURE__ */ import_react6.default.createElement("div", { className: "banner-art" }, /* @__PURE__ */ import_react6.default.createElement(Art, { name: art }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "banner-crest", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement(Crest, { size: 360, variant: "dark" })), /* @__PURE__ */ import_react6.default.createElement("div", { className: "container banner-inner" }, eyebrow && /* @__PURE__ */ import_react6.default.createElement("p", { className: "banner-eyebrow" }, eyebrow), /* @__PURE__ */ import_react6.default.createElement("h1", null, title2), lead && /* @__PURE__ */ import_react6.default.createElement("p", { className: "banner-lead" }, lead)));
  }
  function SectionHead({ eyebrow, title: title2, lead, center = false, light = false }) {
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-head" + (center ? " center" : "") + (light ? " light" : "") }, eyebrow && /* @__PURE__ */ import_react6.default.createElement("p", { className: "eyebrow" }, eyebrow), /* @__PURE__ */ import_react6.default.createElement("h2", null, title2), lead && /* @__PURE__ */ import_react6.default.createElement("p", { className: "lead" }, lead));
  }
  function Btn({ href, onClick, variant = "gold", children, icon = false, type, ...rest }) {
    const cls = "btn btn-" + variant;
    const inner = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, children, icon && /* @__PURE__ */ import_react6.default.createElement(I.arrow, { size: 16 }));
    if (href) return /* @__PURE__ */ import_react6.default.createElement("a", { className: cls, href, ...rest }, inner);
    return /* @__PURE__ */ import_react6.default.createElement("button", { className: cls, onClick, type: type || "button", ...rest }, inner);
  }
  function TextLink({ href, onClick, children }) {
    if (href) return /* @__PURE__ */ import_react6.default.createElement("a", { className: "text-link", href }, children, /* @__PURE__ */ import_react6.default.createElement(I.arrow, { size: 15 }));
    return /* @__PURE__ */ import_react6.default.createElement("button", { type: "button", className: "text-link", onClick }, children, /* @__PURE__ */ import_react6.default.createElement(I.arrow, { size: 15 }));
  }
  function Field2({ label, name, type = "text", value, onChange, error, required, children, textarea, rows = 5, hint, autoComplete, ...rest }) {
    const id = "f-" + name;
    const common = { id, name, value, onChange, "aria-invalid": error ? "true" : void 0, "aria-describedby": error ? id + "-err" : hint ? id + "-hint" : void 0, autoComplete, ...rest };
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "field" + (error ? " has-error" : "") }, /* @__PURE__ */ import_react6.default.createElement("label", { htmlFor: id }, label, required && /* @__PURE__ */ import_react6.default.createElement("span", { "aria-hidden": "true" }, " *")), textarea ? /* @__PURE__ */ import_react6.default.createElement("textarea", { rows, ...common }) : children ? /* @__PURE__ */ import_react6.default.createElement("select", { ...common }, children) : /* @__PURE__ */ import_react6.default.createElement("input", { type, ...common }), hint && !error && /* @__PURE__ */ import_react6.default.createElement("span", { className: "hint", id: id + "-hint" }, hint), error && /* @__PURE__ */ import_react6.default.createElement("span", { className: "err", id: id + "-err", role: "alert" }, error));
  }
  function Honeypot({ value, onChange }) {
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "hp", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement("label", null, "Leave this field empty", /* @__PURE__ */ import_react6.default.createElement("input", { type: "text", name: "website", tabIndex: -1, autoComplete: "off", value, onChange })));
  }
  function CourseCard({ c, onOpen }) {
    return /* @__PURE__ */ import_react6.default.createElement("article", { className: "course-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "course-media" }, /* @__PURE__ */ import_react6.default.createElement(Photo, { slot: "course-" + c.slug, art: c.art, alt: "" }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "course-dept" }, c.dept)), /* @__PURE__ */ import_react6.default.createElement("div", { className: "course-body" }, /* @__PURE__ */ import_react6.default.createElement("h3", null, c.title), /* @__PURE__ */ import_react6.default.createElement("p", { className: "course-blurb" }, c.blurb), /* @__PURE__ */ import_react6.default.createElement("dl", { className: "course-meta" }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("dt", null, "Teacher"), /* @__PURE__ */ import_react6.default.createElement("dd", null, c.teacher)), /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("dt", null, "Grade"), /* @__PURE__ */ import_react6.default.createElement("dd", null, c.grades))), onOpen ? /* @__PURE__ */ import_react6.default.createElement("button", { type: "button", className: "text-link", onClick: () => onOpen(c) }, "Read More", /* @__PURE__ */ import_react6.default.createElement(I.arrow, { size: 15 })) : /* @__PURE__ */ import_react6.default.createElement("a", { className: "text-link", href: "academics.html#course/" + c.slug }, "Read More", /* @__PURE__ */ import_react6.default.createElement(I.arrow, { size: 15 }))));
  }
  function Avatar({ id, name, size = "md" }) {
    const src = id ? photoPath("faculty-" + id) : "";
    const [failed, setFailed] = (0, import_react6.useState)(false);
    if (src && !failed) return /* @__PURE__ */ import_react6.default.createElement("img", { className: "avatar avatar-" + size + " avatar-img", src, alt: name, loading: "lazy", onError: () => setFailed(true) });
    return /* @__PURE__ */ import_react6.default.createElement("span", { className: "avatar avatar-" + size, "aria-hidden": "true" }, initials(name));
  }
  function EventItem({ e }) {
    return /* @__PURE__ */ import_react6.default.createElement("li", { className: "event" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "event-date", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement("b", null, dayOf(e.date)), /* @__PURE__ */ import_react6.default.createElement("span", null, monthOf(e.date))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "event-body" }, /* @__PURE__ */ import_react6.default.createElement("h4", null, /* @__PURE__ */ import_react6.default.createElement("a", { href: e.link }, e.title)), /* @__PURE__ */ import_react6.default.createElement("p", null, /* @__PURE__ */ import_react6.default.createElement("span", null, /* @__PURE__ */ import_react6.default.createElement(I.clock, { size: 14 }), " ", e.time), /* @__PURE__ */ import_react6.default.createElement("span", null, /* @__PURE__ */ import_react6.default.createElement(I.pin, { size: 14 }), " ", e.place)), /* @__PURE__ */ import_react6.default.createElement("span", { className: "sr-only" }, fmtDate(e.date))));
  }
  function CtaBand({ title: title2 = "Admissions Open", text = "Give your child the advantage of a Riverside education.", label = "Schedule a Tour", href = "tour.html" }) {
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "cta-band", "data-reveal": true }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "cta-inner" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "cta-mark", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement(Crest, { size: 64, variant: "light" })), /* @__PURE__ */ import_react6.default.createElement("div", { className: "cta-copy" }, /* @__PURE__ */ import_react6.default.createElement("h2", null, title2), /* @__PURE__ */ import_react6.default.createElement("p", null, text)), /* @__PURE__ */ import_react6.default.createElement("a", { className: "btn btn-white", href }, label))));
  }
  function PostMeta({ p }) {
    return /* @__PURE__ */ import_react6.default.createElement("p", { className: "post-meta" }, /* @__PURE__ */ import_react6.default.createElement("time", { dateTime: p.date }, fmtDate(p.date)), /* @__PURE__ */ import_react6.default.createElement("span", { "aria-hidden": "true" }, "/"), /* @__PURE__ */ import_react6.default.createElement("span", null, "By ", p.author));
  }

  // src/components/Layout.jsx
  function Brandmark({ light = false }) {
    return /* @__PURE__ */ import_react7.default.createElement("a", { className: "brand" + (light ? " brand-light" : ""), href: "index.html", "aria-label": S.fullName + " home" }, /* @__PURE__ */ import_react7.default.createElement(Crest, { size: 40, variant: light ? "light" : "dark" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "brand-text" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "brand-name" }, S.name), /* @__PURE__ */ import_react7.default.createElement("span", { className: "brand-sub" }, S.subname)));
  }
  function TopBar() {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "topbar" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "container topbar-row" }, /* @__PURE__ */ import_react7.default.createElement("ul", { className: "topbar-links" }, D.topLinks.map((l) => /* @__PURE__ */ import_react7.default.createElement("li", { key: l.label }, /* @__PURE__ */ import_react7.default.createElement("a", { href: l.href }, l.label)))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "topbar-right" }, /* @__PURE__ */ import_react7.default.createElement("a", { className: "topbar-open", href: "admissions.html#process" }, "Admissions Open"), /* @__PURE__ */ import_react7.default.createElement("a", { href: "tel:" + S.phoneLink }, /* @__PURE__ */ import_react7.default.createElement(I.phone, { size: 14 }), " ", /* @__PURE__ */ import_react7.default.createElement("span", null, S.phone)), /* @__PURE__ */ import_react7.default.createElement("a", { className: "topbar-mail", href: "mailto:" + S.email }, /* @__PURE__ */ import_react7.default.createElement(I.mail, { size: 14 }), " ", /* @__PURE__ */ import_react7.default.createElement("span", null, S.email)))));
  }
  function Header({ onSearch }) {
    const page = currentPage();
    const [menu, setMenu] = (0, import_react7.useState)(false);
    const [sub, setSub] = (0, import_react7.useState)(-1);
    const [stuck, setStuck] = (0, import_react7.useState)(false);
    const activeId = page === "tuition" || page === "tour" ? "admissions" : page;
    (0, import_react7.useEffect)(() => {
      const f = () => setStuck(window.scrollY > 6);
      f();
      window.addEventListener("scroll", f, { passive: true });
      return () => window.removeEventListener("scroll", f);
    }, []);
    (0, import_react7.useEffect)(() => {
      document.body.classList.toggle("no-scroll-m", menu);
    }, [menu]);
    return /* @__PURE__ */ import_react7.default.createElement("header", { className: "site-header" + (stuck ? " stuck" : "") }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "container header-row" }, /* @__PURE__ */ import_react7.default.createElement(Brandmark, null), /* @__PURE__ */ import_react7.default.createElement("nav", { id: "primary-nav", className: "nav" + (menu ? " open" : ""), "aria-label": "Primary" }, /* @__PURE__ */ import_react7.default.createElement("ul", null, D.nav.map((item, i) => {
      const isActive = item.page === activeId;
      const has = !!item.children;
      return /* @__PURE__ */ import_react7.default.createElement("li", { key: item.label, className: (isActive ? "active " : "") + (has ? "has-sub " : "") + (sub === i ? "sub-open" : "") }, /* @__PURE__ */ import_react7.default.createElement("a", { href: item.href, "aria-current": isActive ? "page" : void 0, onClick: () => setMenu(false) }, item.label), has && /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("button", { type: "button", className: "sub-toggle", "aria-label": "Show " + item.label + " links", "aria-expanded": sub === i, onClick: () => setSub(sub === i ? -1 : i) }, /* @__PURE__ */ import_react7.default.createElement(I.down, { size: 16 })), /* @__PURE__ */ import_react7.default.createElement("ul", { className: "dropdown" }, item.children.map((c) => /* @__PURE__ */ import_react7.default.createElement("li", { key: c.label }, /* @__PURE__ */ import_react7.default.createElement("a", { href: c.href, onClick: () => setMenu(false) }, c.label))))));
    })), /* @__PURE__ */ import_react7.default.createElement("a", { className: "btn btn-gold nav-cta-m", href: "tour.html" }, "Schedule a Tour")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "header-actions" }, /* @__PURE__ */ import_react7.default.createElement("button", { type: "button", className: "icon-btn", onClick: onSearch, "aria-label": "Search the site" }, /* @__PURE__ */ import_react7.default.createElement(I.search, { size: 20 })), /* @__PURE__ */ import_react7.default.createElement("a", { className: "btn btn-gold header-cta", href: "tour.html" }, "Schedule a Tour"), /* @__PURE__ */ import_react7.default.createElement("button", { type: "button", className: "icon-btn menu-btn", "aria-label": menu ? "Close menu" : "Open menu", "aria-expanded": menu, "aria-controls": "primary-nav", onClick: () => setMenu(!menu) }, menu ? /* @__PURE__ */ import_react7.default.createElement(I.close, { size: 24 }) : /* @__PURE__ */ import_react7.default.createElement(I.menu, { size: 24 })))));
  }
  function Footer() {
    const soc = S.social;
    const icons = [["facebook", "Facebook"], ["instagram", "Instagram"], ["x", "X"], ["linkedin", "LinkedIn"], ["youtube", "YouTube"]].filter(([k]) => soc[k]);
    return /* @__PURE__ */ import_react7.default.createElement("footer", { className: "site-footer" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "container footer-grid" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-about" }, /* @__PURE__ */ import_react7.default.createElement(Brandmark, { light: true }), /* @__PURE__ */ import_react7.default.createElement("p", null, "A private school dedicated to academic excellence, character development, and inspiring students to lead and serve."), /* @__PURE__ */ import_react7.default.createElement("ul", { className: "social" }, icons.map(([k, label]) => {
      const B = Brand[k];
      return /* @__PURE__ */ import_react7.default.createElement("li", { key: k }, /* @__PURE__ */ import_react7.default.createElement("a", { href: soc[k], target: "_blank", rel: "noopener noreferrer", "aria-label": label }, /* @__PURE__ */ import_react7.default.createElement(B, { width: "18", height: "18" })));
    }))), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h3", null, "Quick Links"), /* @__PURE__ */ import_react7.default.createElement("ul", null, /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "index.html#about" }, "About Us")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "academics.html" }, "Academics")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "admissions.html" }, "Admissions")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "campus-life.html" }, "Campus Life")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "news.html" }, "News & Events")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "contact.html" }, "Contact")))), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h3", null, "Admissions"), /* @__PURE__ */ import_react7.default.createElement("ul", null, /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "admissions.html#why" }, "Why ", S.shortName, "?")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "admissions.html#process" }, "Application Process")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "tuition.html" }, "Tuition & Financial Aid")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "tour.html" }, "Visit Our Campus")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "tour.html#appointment" }, "Schedule a Tour")))), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h3", null, "Contact Us"), /* @__PURE__ */ import_react7.default.createElement("address", null, /* @__PURE__ */ import_react7.default.createElement("p", null, S.addressLine1, /* @__PURE__ */ import_react7.default.createElement("br", null), S.addressLine2), /* @__PURE__ */ import_react7.default.createElement("p", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "tel:" + S.phoneLink }, S.phone)), /* @__PURE__ */ import_react7.default.createElement("p", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "mailto:" + S.email }, S.email)), /* @__PURE__ */ import_react7.default.createElement("p", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: mapsLink(), target: "_blank", rel: "noopener noreferrer" }, "View on Google Maps")))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-photo" }, /* @__PURE__ */ import_react7.default.createElement(Photo, { slot: "campus-building", art: "building", alt: S.fullName + " main building" }))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "container footer-bottom-row" }, /* @__PURE__ */ import_react7.default.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " ", S.fullName, ". All rights reserved."), /* @__PURE__ */ import_react7.default.createElement("p", null, /* @__PURE__ */ import_react7.default.createElement("button", { type: "button", onClick: () => emit("legal", "privacy") }, "Privacy Policy"), /* @__PURE__ */ import_react7.default.createElement("button", { type: "button", onClick: () => emit("legal", "terms") }, "Terms of Use")))));
  }
  function buildIndex() {
    const out = [];
    [
      ["About the school", "index.html#about", "Page", "history founded story community"],
      ["Academics", "academics.html", "Page", "curriculum divisions lower middle upper"],
      ["Admissions", "admissions.html", "Page", "apply application deadlines process"],
      ["Tuition & Financial Aid", "tuition.html", "Page", "fees cost price scholarship aid payment"],
      ["Schedule a Tour", "tour.html", "Page", "visit appointment campus tour open house"],
      ["Campus Life", "campus-life.html", "Page", "clubs sports dining transport gallery"],
      ["News & Events", "news.html", "Page", "blog announcements calendar"],
      ["Contact", "contact.html", "Page", "phone email address map message"]
    ].forEach(([t, u, k, x]) => out.push({ t, u, k, x }));
    D.divisions.forEach((d) => out.push({ t: d.name, u: "academics.html#" + d.id, k: "Division", x: d.grades + " " + d.blurb }));
    D.courses.forEach((c) => out.push({ t: c.title, u: "academics.html#course/" + c.slug, k: "Course", x: c.teacher + " " + c.dept + " " + c.blurb }));
    D.faculty.forEach((f) => out.push({ t: f.name, u: "academics.html#faculty", k: "Faculty", x: f.role + " " + f.bio }));
    D.clubs.forEach((c) => out.push({ t: c.name, u: "campus-life.html#clubs", k: "Club / Team", x: c.cat + " " + c.note }));
    D.posts.forEach((p) => out.push({ t: p.title, u: "news.html#/post/" + p.slug, k: "News", x: p.excerpt + " " + p.tags.join(" ") }));
    D.events.forEach((e) => out.push({ t: e.title, u: e.link, k: "Event", x: e.place }));
    D.aidFaq.concat(D.tourFaq).forEach((f) => out.push({ t: f.q, u: D.aidFaq.includes(f) ? "tuition.html#aid" : "tour.html#faq", k: "FAQ", x: Array.isArray(f.a) ? f.a.join(" ") : f.a }));
    return out;
  }
  function SearchOverlay({ open, onClose }) {
    const [q, setQ] = (0, import_react7.useState)("");
    const index = (0, import_react7.useMemo)(buildIndex, []);
    const inputRef = (0, import_react7.useRef)(null);
    (0, import_react7.useEffect)(() => {
      if (open) {
        setQ("");
      }
    }, [open]);
    const results = (0, import_react7.useMemo)(() => {
      const words = q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!words.length) return [];
      return index.map((r) => {
        const t = r.t.toLowerCase(), x = (r.x || "").toLowerCase();
        let score = 0;
        for (const w of words) {
          if (t.includes(w)) score += 5;
          else if (x.includes(w)) score += 1;
          else return null;
        }
        return { ...r, score };
      }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 9);
    }, [q, index]);
    const go = (e) => {
      e.preventDefault();
      if (results[0]) window.location.href = results[0].u;
    };
    return /* @__PURE__ */ import_react7.default.createElement(Modal, { open, onClose, title: "Search the site", wide: true }, /* @__PURE__ */ import_react7.default.createElement("form", { className: "search-form", onSubmit: go, role: "search" }, /* @__PURE__ */ import_react7.default.createElement(I.search, { size: 22 }), /* @__PURE__ */ import_react7.default.createElement("input", { ref: inputRef, "data-autofocus": true, type: "search", placeholder: "Search courses, teachers, news, admissions\u2026", value: q, onChange: (e) => setQ(e.target.value), "aria-label": "Search" })), /* @__PURE__ */ import_react7.default.createElement("div", { className: "search-results", "aria-live": "polite" }, q && !results.length && /* @__PURE__ */ import_react7.default.createElement("p", { className: "muted" }, "Nothing found for \u201C", q, "\u201D. Try \u201Ctuition\u201D, \u201Csoccer\u201D or \u201Ccalculus\u201D."), !q && /* @__PURE__ */ import_react7.default.createElement("p", { className: "muted" }, "Start typing. Popular: ", /* @__PURE__ */ import_react7.default.createElement("a", { href: "tuition.html" }, "tuition"), ", ", /* @__PURE__ */ import_react7.default.createElement("a", { href: "tour.html" }, "tours"), ", ", /* @__PURE__ */ import_react7.default.createElement("a", { href: "academics.html#courses" }, "courses"), "."), /* @__PURE__ */ import_react7.default.createElement("ul", null, results.map((r) => /* @__PURE__ */ import_react7.default.createElement("li", { key: r.k + r.t }, /* @__PURE__ */ import_react7.default.createElement("a", { href: r.u }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "tag-k" }, r.k), /* @__PURE__ */ import_react7.default.createElement("span", null, r.t), /* @__PURE__ */ import_react7.default.createElement(I.arrow, { size: 16 })))))));
  }
  function InquiryModal() {
    const [open, setOpen] = (0, import_react7.useState)(false);
    const [v, setV] = (0, import_react7.useState)({ name: "", email: "", grade: "", message: "", website: "" });
    const [err, setErr] = (0, import_react7.useState)({});
    const [state, setState] = (0, import_react7.useState)({ phase: "form" });
    useBus("inquiry", (d) => {
      setV((p) => ({ ...p, message: d && d.message || "" }));
      setErr({});
      setState({ phase: "form" });
      setOpen(true);
    });
    const on = (k) => (e) => setV({ ...v, [k]: e.target.value });
    const submit = async (e) => {
      e.preventDefault();
      const er = {};
      if (!v.name.trim()) er.name = "Please tell us your name.";
      if (!emailOk(v.email)) er.email = "Please enter a valid email address.";
      if (!v.grade) er.grade = "Choose a grade.";
      setErr(er);
      if (Object.keys(er).length || v.website) return;
      setState({ phase: "sending" });
      const r = await sendForm("Information request: " + v.name, { Name: v.name, Email: v.email, "Grade of interest": v.grade, Message: v.message });
      if (r.mode === "mailto") window.location.href = r.href;
      setState({ phase: r.mode, href: r.href });
    };
    const grades = ["Kindergarten", ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => "Grade " + g)];
    return /* @__PURE__ */ import_react7.default.createElement(Modal, { open, onClose: () => setOpen(false), title: "Request information" }, state.phase === "form" || state.phase === "sending" ? /* @__PURE__ */ import_react7.default.createElement("form", { onSubmit: submit, noValidate: true, className: "modal-form" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "eyebrow" }, "Admissions"), /* @__PURE__ */ import_react7.default.createElement("h2", null, "Request information"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "muted" }, "Tell us a little and the Admissions team will reply within two working days."), /* @__PURE__ */ import_react7.default.createElement(Honeypot, { value: v.website, onChange: on("website") }), /* @__PURE__ */ import_react7.default.createElement(Field2, { label: "Your name", name: "iq-name", value: v.name, onChange: on("name"), error: err.name, required: true, autoComplete: "name", "data-autofocus": true }), /* @__PURE__ */ import_react7.default.createElement(Field2, { label: "Email", name: "iq-email", type: "email", value: v.email, onChange: on("email"), error: err.email, required: true, autoComplete: "email" }), /* @__PURE__ */ import_react7.default.createElement(Field2, { label: "Grade your child is entering", name: "iq-grade", value: v.grade, onChange: on("grade"), error: err.grade, required: true }, /* @__PURE__ */ import_react7.default.createElement("option", { value: "" }, "Select a grade"), grades.map((g) => /* @__PURE__ */ import_react7.default.createElement("option", { key: g }, g))), /* @__PURE__ */ import_react7.default.createElement(Field2, { label: "Anything we should know?", name: "iq-msg", textarea: true, rows: 3, value: v.message, onChange: on("message") }), /* @__PURE__ */ import_react7.default.createElement(Btn, { type: "submit", variant: "gold", disabled: state.phase === "sending" }, state.phase === "sending" ? "Sending\u2026" : "Send request")) : /* @__PURE__ */ import_react7.default.createElement(Confirmation, { state, onClose: () => setOpen(false) }));
  }
  function Confirmation({ state, onClose, children }) {
    if (state.phase === "error") {
      return /* @__PURE__ */ import_react7.default.createElement("div", { className: "confirm" }, /* @__PURE__ */ import_react7.default.createElement("h2", null, "That didn\u2019t go through"), /* @__PURE__ */ import_react7.default.createElement("p", null, "We couldn\u2019t reach the server. Please try again, or email ", /* @__PURE__ */ import_react7.default.createElement("a", { href: "mailto:" + S.admissionsEmail }, S.admissionsEmail), " or call ", S.phone, "."), onClose && /* @__PURE__ */ import_react7.default.createElement(Btn, { variant: "navy", onClick: onClose }, "Close"));
    }
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "confirm" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "confirm-tick" }, /* @__PURE__ */ import_react7.default.createElement(I.check, { size: 26 })), /* @__PURE__ */ import_react7.default.createElement("h2", null, state.phase === "mailto" ? "Almost done" : "Thank you"), state.phase === "mailto" ? /* @__PURE__ */ import_react7.default.createElement("p", null, "Your email app should have opened with your message ready to send. Press ", /* @__PURE__ */ import_react7.default.createElement("b", null, "Send"), " there to finish. Nothing opened? ", /* @__PURE__ */ import_react7.default.createElement("a", { href: state.href }, "Open it again"), ".") : /* @__PURE__ */ import_react7.default.createElement("p", null, "Your message is with the Admissions team. We reply within two working days."), children, onClose && /* @__PURE__ */ import_react7.default.createElement(Btn, { variant: "navy", onClick: onClose }, "Close"));
  }
  var LEGAL = {
    privacy: { title: "Privacy Policy", body: [
      "We collect only the information you give us through our forms (such as your name, email address, phone number and your child\u2019s grade) so that we can reply to your enquiry and process an application.",
      "We do not sell your information. We share it only with staff who need it to respond to you, and with service providers that help us run the school\u2019s systems, under confidentiality terms.",
      "This website may use essential browser storage to remember simple preferences, such as the application checklist you tick on the Admissions page. It does not use advertising cookies.",
      "To ask what we hold about you, or to have it deleted, email " + S.email + "."
    ] },
    terms: { title: "Terms of Use", body: [
      "The content on this website is provided for general information about " + S.fullName + ". We work hard to keep it accurate, but dates, fees and programs can change. Please confirm important details with the school.",
      "Text, photographs and the school name and crest belong to " + S.fullName + " or are used with permission. Please do not reproduce them without our written consent.",
      "Links to other websites are provided for convenience. We are not responsible for their content.",
      "Questions about these terms can be sent to " + S.email + "."
    ] }
  };
  function LegalModal() {
    const [kind, setKind] = (0, import_react7.useState)(null);
    useBus("legal", (k) => setKind(k));
    const d = kind && LEGAL[kind];
    return /* @__PURE__ */ import_react7.default.createElement(Modal, { open: !!d, onClose: () => setKind(null), title: d ? d.title : "" }, d && /* @__PURE__ */ import_react7.default.createElement("div", { className: "legal" }, /* @__PURE__ */ import_react7.default.createElement("h2", null, d.title), d.body.map((p, i) => /* @__PURE__ */ import_react7.default.createElement("p", { key: i }, p)), /* @__PURE__ */ import_react7.default.createElement("p", { className: "muted" }, "Last updated ", (/* @__PURE__ */ new Date()).getFullYear(), ".")));
  }
  function VideoModal() {
    const [open, setOpen] = (0, import_react7.useState)(false);
    const [broken, setBroken] = (0, import_react7.useState)(false);
    useBus("video", () => {
      setBroken(false);
      setOpen(true);
    });
    return /* @__PURE__ */ import_react7.default.createElement(Modal, { open, onClose: () => setOpen(false), title: "Campus video", wide: true }, S.videoEmbedUrl ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "video-frame" }, /* @__PURE__ */ import_react7.default.createElement("iframe", { src: S.videoEmbedUrl, title: "Campus video", allow: "accelerometer; autoplay; encrypted-media; picture-in-picture", allowFullScreen: true })) : broken ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "confirm" }, /* @__PURE__ */ import_react7.default.createElement("h2", null, "Our campus video is coming soon"), /* @__PURE__ */ import_react7.default.createElement("p", null, "In the meantime, the best way to see ", S.shortName, " is in person."), /* @__PURE__ */ import_react7.default.createElement(Btn, { href: "tour.html", variant: "gold" }, "Book a campus tour")) : /* @__PURE__ */ import_react7.default.createElement("video", { className: "video-frame", controls: true, autoPlay: true, playsInline: true, onError: () => setBroken(true) }, /* @__PURE__ */ import_react7.default.createElement("source", { src: S.videoFile, type: "video/mp4", onError: () => setBroken(true) })));
  }
  function Shell({ children, title: title2 }) {
    const [search, setSearch] = (0, import_react7.useState)(false);
    useHashScroll();
    useReveal();
    (0, import_react7.useEffect)(() => {
      document.title = (title2 ? title2 + " | " : "") + S.fullName;
    }, [title2]);
    (0, import_react7.useEffect)(() => {
      const k = (e) => {
        if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
          e.preventDefault();
          setSearch(true);
        }
      };
      document.addEventListener("keydown", k);
      return () => document.removeEventListener("keydown", k);
    }, []);
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("a", { className: "skip", href: "#main" }, "Skip to content"), /* @__PURE__ */ import_react7.default.createElement(TopBar, null), /* @__PURE__ */ import_react7.default.createElement(Header, { onSearch: () => setSearch(true) }), /* @__PURE__ */ import_react7.default.createElement("main", { id: "main" }, children), /* @__PURE__ */ import_react7.default.createElement(Footer, null), /* @__PURE__ */ import_react7.default.createElement(SearchOverlay, { open: search, onClose: () => setSearch(false) }), /* @__PURE__ */ import_react7.default.createElement(InquiryModal, null), /* @__PURE__ */ import_react7.default.createElement(LegalModal, null), /* @__PURE__ */ import_react7.default.createElement(VideoModal, null));
  }

  // src/pages/Home.jsx
  var import_react8 = __toESM(require_react());
  function Stat({ value, suffix, label }) {
    const [n, setN] = (0, import_react8.useState)(0);
    const ref = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(() => {
      const el = ref.current;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !("IntersectionObserver" in window)) {
        setN(value);
        return;
      }
      let raf, started = false;
      const io = new IntersectionObserver(([en]) => {
        if (en.isIntersecting && !started) {
          started = true;
          const t0 = performance.now(), dur = 1400;
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / dur);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      }, { threshold: 0.4 });
      io.observe(el);
      return () => {
        io.disconnect();
        cancelAnimationFrame(raf);
      };
    }, [value]);
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: "stat", ref }, /* @__PURE__ */ import_react8.default.createElement("b", { "aria-label": value + suffix }, n, suffix), /* @__PURE__ */ import_react8.default.createElement("span", null, label));
  }
  function Testimonials() {
    const list = D.testimonials;
    const [per, setPer] = (0, import_react8.useState)(3);
    const [page, setPage] = (0, import_react8.useState)(0);
    const [paused, setPaused] = (0, import_react8.useState)(false);
    (0, import_react8.useEffect)(() => {
      const f = () => setPer(window.innerWidth < 700 ? 1 : window.innerWidth < 1e3 ? 2 : 3);
      f();
      window.addEventListener("resize", f);
      return () => window.removeEventListener("resize", f);
    }, []);
    const pages = Math.ceil(list.length / per);
    (0, import_react8.useEffect)(() => {
      if (page >= pages) setPage(0);
    }, [pages]);
    (0, import_react8.useEffect)(() => {
      if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const t = setInterval(() => setPage((p) => (p + 1) % pages), 7e3);
      return () => clearInterval(t);
    }, [paused, pages]);
    const shown = list.slice(page * per, page * per + per);
    return /* @__PURE__ */ import_react8.default.createElement(
      "section",
      {
        className: "section testimonials",
        "aria-roledescription": "carousel",
        "aria-label": "Family testimonials",
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false)
      },
      /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement(SectionHead, { center: true, eyebrow: "Testimonials", title: "What Our Families Say" }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "quote-grid", style: { "--per": per }, "aria-live": "off" }, shown.map((t) => /* @__PURE__ */ import_react8.default.createElement("figure", { className: "quote-card", key: t.who }, /* @__PURE__ */ import_react8.default.createElement(Quote, { className: "quote-mark", width: "26" }), /* @__PURE__ */ import_react8.default.createElement("blockquote", null, t.quote), /* @__PURE__ */ import_react8.default.createElement("figcaption", null, "\u2014 ", t.who)))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "dots", role: "tablist", "aria-label": "Choose testimonials" }, Array.from({ length: pages }).map((_, i) => /* @__PURE__ */ import_react8.default.createElement("button", { key: i, role: "tab", "aria-selected": i === page, "aria-label": "Testimonials " + (i + 1) + " of " + pages, className: i === page ? "on" : "", onClick: () => setPage(i) }))))
    );
  }
  var features = [
    { icon: I.book, t: "Academic Excellence", d: "Rigorous curriculum designed to challenge and inspire every student." },
    { icon: I.user, t: "Personalized Attention", d: "Small class sizes ensure individualized learning and strong student support." },
    { icon: I.shield, t: "Character & Leadership", d: "Building integrity, confidence, and compassion in future leaders." },
    { icon: I.globe, t: "Global Perspectives", d: "Preparing students to thrive in a diverse and connected world." }
  ];
  var programs = [
    { icon: I.graduation, t: "College Preparatory", d: "Rigorous coursework that prepares students for top universities.", href: "academics.html#upper" },
    { icon: I.atom, t: "STEM Programs", d: "Hands-on learning in science, technology, engineering, and mathematics.", href: "academics.html#courses/STEM" },
    { icon: I.palette, t: "Arts & Humanities", d: "Encouraging creativity, critical thinking, and cultural appreciation.", href: "academics.html#courses/Arts" },
    { icon: I.trophy, t: "Athletics", d: "Building teamwork, discipline, and school spirit through competitive sports.", href: "academics.html#courses/Athletics" }
  ];
  var divArt = { lower: "classroom", middle: "lab", upper: "library" };
  function Home() {
    const news = D.posts.slice(0, 4);
    const [lead, ...rest] = news;
    const events = D.events.slice(0, 3);
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("section", { className: "hero" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "hero-photo", "aria-hidden": "true" }, /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "hero-home", art: "building", loading: "eager" })), /* @__PURE__ */ import_react8.default.createElement("div", { className: "container hero-inner" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "hero-copy" }, /* @__PURE__ */ import_react8.default.createElement("h1", null, "Inspiring Minds.", /* @__PURE__ */ import_react8.default.createElement("br", null), "Shaping Futures."), /* @__PURE__ */ import_react8.default.createElement("p", null, "A private education that empowers students to excel academically, lead confidently, and make a meaningful impact."), /* @__PURE__ */ import_react8.default.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ import_react8.default.createElement(Btn, { href: "#about", variant: "gold" }, "Discover Our School"), /* @__PURE__ */ import_react8.default.createElement("button", { type: "button", className: "watch", onClick: () => emit("video") }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "watch-icon" }, /* @__PURE__ */ import_react8.default.createElement(I.play, { size: 14, fill: "currentColor" })), "Watch Video"))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "pillars-wrap" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement("ul", { className: "pillars" }, features.map((f) => /* @__PURE__ */ import_react8.default.createElement("li", { key: f.t }, /* @__PURE__ */ import_react8.default.createElement(f.icon, { size: 30 }), /* @__PURE__ */ import_react8.default.createElement("h3", null, f.t), /* @__PURE__ */ import_react8.default.createElement("p", null, f.d)))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section about", id: "about", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container about-grid" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "about-title" }, /* @__PURE__ */ import_react8.default.createElement("p", { className: "eyebrow" }, "About Our School"), /* @__PURE__ */ import_react8.default.createElement("h2", null, "A school that knows every student by name."), /* @__PURE__ */ import_react8.default.createElement("dl", { className: "facts" }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("dt", null, "Founded"), /* @__PURE__ */ import_react8.default.createElement("dd", null, S.founded)), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("dt", null, "Students"), /* @__PURE__ */ import_react8.default.createElement("dd", null, "About 640")), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("dt", null, "Grades"), /* @__PURE__ */ import_react8.default.createElement("dd", null, "K\u201312")))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "about-copy" }, /* @__PURE__ */ import_react8.default.createElement("p", null, "Since ", S.founded, ", ", S.shortName, " has taught students from Kindergarten through Grade 12 on the same stretch of river bank. We are a school of about 640 students: large enough to offer twenty-five AP courses, and small enough that the Head of School knows every child by name."), /* @__PURE__ */ import_react8.default.createElement("p", null, "We don\u2019t believe a school has to choose between rigor and kindness. Our teachers set high expectations, mark work carefully, and make time for students who need it. Our graduates go on to universities across the country and abroad, and most of them still write to their old teachers."), /* @__PURE__ */ import_react8.default.createElement(TextLink, { href: "admissions.html#why" }, "Why families choose ", S.shortName)))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section divisions", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement("ul", { className: "division-grid" }, D.divisions.map((d) => /* @__PURE__ */ import_react8.default.createElement("li", { className: "division", key: d.id }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "division-media" }, /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "division-" + d.id, art: divArt[d.id], alt: "" })), /* @__PURE__ */ import_react8.default.createElement("h3", null, d.name), /* @__PURE__ */ import_react8.default.createElement("p", { className: "division-grades" }, d.grades), /* @__PURE__ */ import_react8.default.createElement("p", null, d.blurb), /* @__PURE__ */ import_react8.default.createElement(TextLink, { href: "academics.html#" + d.id }, "Learn More")))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section academics", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container academics-grid" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "academics-intro" }, /* @__PURE__ */ import_react8.default.createElement("p", { className: "eyebrow" }, "Academics"), /* @__PURE__ */ import_react8.default.createElement("h2", null, "Exceptional Programs.", /* @__PURE__ */ import_react8.default.createElement("br", null), "Outstanding Outcomes."), /* @__PURE__ */ import_react8.default.createElement("p", null, "Our comprehensive curriculum combines core academics with innovative programs that prepare students for college and beyond."), /* @__PURE__ */ import_react8.default.createElement(Btn, { href: "academics.html", variant: "navy" }, "Explore Academics")), /* @__PURE__ */ import_react8.default.createElement("ul", { className: "program-grid" }, programs.map((p) => /* @__PURE__ */ import_react8.default.createElement("li", { key: p.t }, /* @__PURE__ */ import_react8.default.createElement("a", { href: p.href, className: "program" }, /* @__PURE__ */ import_react8.default.createElement(p.icon, { size: 26 }), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("h3", null, p.t), /* @__PURE__ */ import_react8.default.createElement("p", null, p.d)))))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "stats-wrap" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "stats" }, D.stats.map((s) => /* @__PURE__ */ import_react8.default.createElement(Stat, { key: s.label, ...s }))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "services" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container services-grid" }, /* @__PURE__ */ import_react8.default.createElement("article", null, /* @__PURE__ */ import_react8.default.createElement(I.building, { size: 40 }), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("h3", null, "Visit Campus"), /* @__PURE__ */ import_react8.default.createElement("p", null, "Parents can arrange an appointment for a school tour on any weekday."), /* @__PURE__ */ import_react8.default.createElement("a", { className: "link-gold", href: "tour.html" }, "Book a tour", /* @__PURE__ */ import_react8.default.createElement(I.arrow, { size: 15 })))), /* @__PURE__ */ import_react8.default.createElement("article", null, /* @__PURE__ */ import_react8.default.createElement(I.food, { size: 40 }), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("h3", null, "School Meals"), /* @__PURE__ */ import_react8.default.createElement("p", null, "Fresh lunches are cooked on site every school day, with options for every diet."), /* @__PURE__ */ import_react8.default.createElement("a", { className: "link-gold", href: "campus-life.html#dining" }, "Read more", /* @__PURE__ */ import_react8.default.createElement(I.arrow, { size: 15 })))), /* @__PURE__ */ import_react8.default.createElement("article", null, /* @__PURE__ */ import_react8.default.createElement(I.bus, { size: 40 }), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("h3", null, "Transportation"), /* @__PURE__ */ import_react8.default.createElement("p", null, "Seven bus routes bring students from across the city and the northern suburbs."), /* @__PURE__ */ import_react8.default.createElement("a", { className: "link-gold", href: "campus-life.html#transport" }, "Read more", /* @__PURE__ */ import_react8.default.createElement(I.arrow, { size: 15 })))))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "news-events" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "news-side" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "news-inner" }, /* @__PURE__ */ import_react8.default.createElement("header", { className: "ne-head" }, /* @__PURE__ */ import_react8.default.createElement("h2", null, "News & Updates"), /* @__PURE__ */ import_react8.default.createElement("a", { href: "news.html" }, "Read all news", /* @__PURE__ */ import_react8.default.createElement(I.arrow, { size: 15 }))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "news-layout" }, /* @__PURE__ */ import_react8.default.createElement("article", { className: "news-lead" }, /* @__PURE__ */ import_react8.default.createElement("a", { className: "news-lead-media", href: "news.html#/post/" + lead.slug, tabIndex: -1, "aria-hidden": "true" }, /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "post-" + lead.slug, art: lead.art, alt: "" })), /* @__PURE__ */ import_react8.default.createElement("p", { className: "news-tags" }, fmtDate(lead.date), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, "/"), " ", lead.tags.join(", ")), /* @__PURE__ */ import_react8.default.createElement("h3", null, /* @__PURE__ */ import_react8.default.createElement("a", { href: "news.html#/post/" + lead.slug }, lead.title))), /* @__PURE__ */ import_react8.default.createElement("ul", { className: "news-list" }, rest.map((p) => /* @__PURE__ */ import_react8.default.createElement("li", { key: p.slug }, /* @__PURE__ */ import_react8.default.createElement("a", { className: "news-thumb", href: "news.html#/post/" + p.slug, tabIndex: -1, "aria-hidden": "true" }, /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "post-" + p.slug, art: p.art, alt: "" })), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("p", { className: "news-tags" }, fmtDate(p.date), " ", /* @__PURE__ */ import_react8.default.createElement("span", null, "/"), " ", p.tags.join(", ")), /* @__PURE__ */ import_react8.default.createElement("h3", null, /* @__PURE__ */ import_react8.default.createElement("a", { href: "news.html#/post/" + p.slug }, p.title))))))))), /* @__PURE__ */ import_react8.default.createElement("aside", { className: "events-side", "aria-labelledby": "ev-h" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "events-inner" }, /* @__PURE__ */ import_react8.default.createElement("h2", { id: "ev-h" }, "Upcoming Events"), /* @__PURE__ */ import_react8.default.createElement("ul", { className: "events" }, events.map((e) => /* @__PURE__ */ import_react8.default.createElement(EventItem, { key: e.id, e }))), /* @__PURE__ */ import_react8.default.createElement(TextLink, { href: "news.html#/events" }, "View All Events")))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section classes", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement(SectionHead, { center: true, eyebrow: "Course Catalog", title: "Our Classes" }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "course-grid" }, ["ap-biology", "modern-languages", "concert-band"].map((s) => D.courses.find((c) => c.slug === s)).map((c) => /* @__PURE__ */ import_react8.default.createElement(CourseCard, { key: c.slug, c }))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "center-btn" }, /* @__PURE__ */ import_react8.default.createElement(Btn, { href: "academics.html#courses", variant: "navy", icon: true }, "View All Courses")))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section campus", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container campus-grid" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "photo-grid" }, /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "campus-students", art: "classroom", alt: "Students on the front lawn" }), /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "campus-stage", art: "stage", alt: "Students performing on stage" }), /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "campus-soccer", art: "field", alt: "Varsity soccer match" }), /* @__PURE__ */ import_react8.default.createElement(Photo, { slot: "campus-band", art: "music", alt: "Student playing saxophone in band" })), /* @__PURE__ */ import_react8.default.createElement("div", { className: "campus-copy" }, /* @__PURE__ */ import_react8.default.createElement("p", { className: "eyebrow" }, "Campus Life"), /* @__PURE__ */ import_react8.default.createElement("h2", null, "More Than a School.", /* @__PURE__ */ import_react8.default.createElement("br", null), "A Community."), /* @__PURE__ */ import_react8.default.createElement("p", null, "From athletics and arts to leadership and service, our students discover passions, build friendships, and create memories that last a lifetime."), /* @__PURE__ */ import_react8.default.createElement(Btn, { href: "campus-life.html", variant: "gold" }, "Discover Campus Life")))), /* @__PURE__ */ import_react8.default.createElement("section", { className: "section teachers", "data-reveal": true }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react8.default.createElement(SectionHead, { center: true, eyebrow: "Faculty", title: "Our Teachers" }), /* @__PURE__ */ import_react8.default.createElement("ul", { className: "teacher-grid" }, ["helena-marsh", "priya-raman", "thomas-whitaker"].map((id) => D.faculty.find((f) => f.id === id)).map((f) => /* @__PURE__ */ import_react8.default.createElement("li", { className: "teacher", key: f.id }, /* @__PURE__ */ import_react8.default.createElement(Avatar, { id: f.id, name: f.name, size: "lg" }), /* @__PURE__ */ import_react8.default.createElement("h3", null, f.name), /* @__PURE__ */ import_react8.default.createElement("p", null, f.role)))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "center-btn" }, /* @__PURE__ */ import_react8.default.createElement(Btn, { href: "academics.html#faculty", variant: "navy", icon: true }, "View All Teachers")))), /* @__PURE__ */ import_react8.default.createElement(Testimonials, null), /* @__PURE__ */ import_react8.default.createElement(CtaBand, null));
  }

  // src/pages/Academics.jsx
  var import_react9 = __toESM(require_react());
  var DEPTS = ["All", "STEM", "Humanities", "Languages", "Arts", "Athletics", "Lower School"];
  var divArt2 = { lower: "classroom", middle: "lab", upper: "library" };
  function Divisions() {
    const hash = useHash().replace("#", "");
    const [id, setId] = (0, import_react9.useState)("lower");
    (0, import_react9.useEffect)(() => {
      if (D.divisions.some((d2) => d2.id === hash)) setId(hash);
    }, [hash]);
    const d = D.divisions.find((x) => x.id === id);
    return /* @__PURE__ */ import_react9.default.createElement("section", { className: "section", id: "divisions", "data-reveal": true }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react9.default.createElement(SectionHead, { eyebrow: "Divisions", title: "Three schools, one continuous education", lead: "Students move through Lower, Middle and Upper School on one campus, with teachers who talk to each other about every child." }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "tabs", role: "tablist", "aria-label": "Divisions" }, D.divisions.map((x) => /* @__PURE__ */ import_react9.default.createElement("button", { key: x.id, role: "tab", id: "tab-" + x.id, "aria-selected": x.id === id, "aria-controls": "div-panel", className: x.id === id ? "on" : "", onClick: () => setId(x.id) }, x.name, /* @__PURE__ */ import_react9.default.createElement("small", null, x.grades)))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-panel", id: "div-panel", role: "tabpanel", "aria-labelledby": "tab-" + id }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-media" }, /* @__PURE__ */ import_react9.default.createElement(Photo, { slot: "division-" + d.id, art: divArt2[d.id], alt: d.name })), /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-copy" }, /* @__PURE__ */ import_react9.default.createElement("h3", null, d.name), /* @__PURE__ */ import_react9.default.createElement("p", { className: "division-grades" }, d.grades), /* @__PURE__ */ import_react9.default.createElement("p", null, d.blurb), /* @__PURE__ */ import_react9.default.createElement("ul", { className: "ticks" }, d.points.map((p) => /* @__PURE__ */ import_react9.default.createElement("li", { key: p }, /* @__PURE__ */ import_react9.default.createElement(I.check, { size: 18 }), p))), /* @__PURE__ */ import_react9.default.createElement("dl", { className: "mini-facts" }, d.facts.map(([a, b]) => /* @__PURE__ */ import_react9.default.createElement("div", { key: b }, /* @__PURE__ */ import_react9.default.createElement("dt", null, a), /* @__PURE__ */ import_react9.default.createElement("dd", null, b))))))));
  }
  function CourseModal({ c, onClose }) {
    return /* @__PURE__ */ import_react9.default.createElement(Modal, { open: !!c, onClose, title: c ? c.title : "", wide: true }, c && /* @__PURE__ */ import_react9.default.createElement("div", { className: "course-modal" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "cm-media" }, /* @__PURE__ */ import_react9.default.createElement(Photo, { slot: "course-" + c.slug, art: c.art, alt: "" })), /* @__PURE__ */ import_react9.default.createElement("div", { className: "cm-body" }, /* @__PURE__ */ import_react9.default.createElement("p", { className: "eyebrow" }, c.dept, " \xB7 Grades ", c.grades), /* @__PURE__ */ import_react9.default.createElement("h2", null, c.title), /* @__PURE__ */ import_react9.default.createElement("p", null, c.desc), /* @__PURE__ */ import_react9.default.createElement("dl", { className: "cm-facts" }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("dt", null, "Teacher"), /* @__PURE__ */ import_react9.default.createElement("dd", null, c.teacher)), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("dt", null, "Schedule"), /* @__PURE__ */ import_react9.default.createElement("dd", null, c.schedule)), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("dt", null, "Credit"), /* @__PURE__ */ import_react9.default.createElement("dd", null, c.credit)), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("dt", null, "Prerequisite"), /* @__PURE__ */ import_react9.default.createElement("dd", null, c.prereq))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "btn-row" }, /* @__PURE__ */ import_react9.default.createElement(Btn, { variant: "gold", onClick: () => {
      onClose();
      emit("inquiry", { message: "I'd like to know more about " + c.title + "." });
    } }, "Request information"), /* @__PURE__ */ import_react9.default.createElement(Btn, { variant: "ghost", onClick: onClose }, "Close")))));
  }
  function Catalog() {
    const hash = useHash();
    const [dept, setDept] = (0, import_react9.useState)("All");
    const [q, setQ] = (0, import_react9.useState)("");
    const [open, setOpen] = (0, import_react9.useState)(null);
    (0, import_react9.useEffect)(() => {
      const h = decodeURIComponent(hash.replace("#", ""));
      if (h.startsWith("courses/")) {
        const d = h.split("/")[1];
        if (DEPTS.includes(d)) setDept(d);
      }
      if (h.startsWith("course/")) {
        const c = D.courses.find((x) => x.slug === h.split("/")[1]);
        if (c) setOpen(c);
      }
    }, [hash]);
    const list = (0, import_react9.useMemo)(() => {
      const w = q.toLowerCase().trim();
      return D.courses.filter((c) => (dept === "All" || c.dept === dept) && (!w || (c.title + c.teacher + c.blurb + c.dept).toLowerCase().includes(w)));
    }, [dept, q]);
    return /* @__PURE__ */ import_react9.default.createElement("section", { className: "section alt", id: "courses", "data-reveal": true }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react9.default.createElement(SectionHead, { eyebrow: "Course Catalog", title: "Courses", lead: "A sample of what we teach. Course offerings are reviewed each spring, and the full Upper School handbook is available on request." }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "filters" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "chips", role: "group", "aria-label": "Filter by department" }, DEPTS.map((d) => /* @__PURE__ */ import_react9.default.createElement("button", { key: d, type: "button", className: "chip" + (dept === d ? " on" : ""), "aria-pressed": dept === d, onClick: () => setDept(d) }, d))), /* @__PURE__ */ import_react9.default.createElement("label", { className: "inline-search" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "sr-only" }, "Search courses"), /* @__PURE__ */ import_react9.default.createElement(I.search, { size: 18 }), /* @__PURE__ */ import_react9.default.createElement("input", { type: "search", placeholder: "Search courses or teachers", value: q, onChange: (e) => setQ(e.target.value) }))), /* @__PURE__ */ import_react9.default.createElement("p", { className: "result-count", "aria-live": "polite" }, list.length, " ", list.length === 1 ? "course" : "courses"), list.length ? /* @__PURE__ */ import_react9.default.createElement("div", { className: "course-grid" }, list.map((c) => /* @__PURE__ */ import_react9.default.createElement(CourseCard, { key: c.slug, c, onOpen: setOpen }))) : /* @__PURE__ */ import_react9.default.createElement("p", { className: "empty" }, "No courses match that search. ", /* @__PURE__ */ import_react9.default.createElement("button", { className: "text-link", onClick: () => {
      setQ("");
      setDept("All");
    } }, "Clear filters"))), /* @__PURE__ */ import_react9.default.createElement(CourseModal, { c: open, onClose: () => {
      setOpen(null);
      if (window.location.hash.startsWith("#course/")) window.location.hash = "courses";
    } }));
  }
  function Faculty() {
    const [all, setAll] = (0, import_react9.useState)(false);
    const [bio, setBio] = (0, import_react9.useState)(null);
    const list = all ? D.faculty : D.faculty.slice(0, 6);
    return /* @__PURE__ */ import_react9.default.createElement("section", { className: "section", id: "faculty", "data-reveal": true }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react9.default.createElement(SectionHead, { eyebrow: "Faculty", title: "Meet our teachers", lead: "Over eighty percent of our teachers hold an advanced degree, and the average length of service is eleven years." }), /* @__PURE__ */ import_react9.default.createElement("ul", { className: "faculty-grid" }, list.map((f) => /* @__PURE__ */ import_react9.default.createElement("li", { className: "faculty-card", key: f.id }, /* @__PURE__ */ import_react9.default.createElement(Avatar, { id: f.id, name: f.name, size: "lg" }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("h3", null, f.name), /* @__PURE__ */ import_react9.default.createElement("p", { className: "role" }, f.role), /* @__PURE__ */ import_react9.default.createElement("p", { className: "since" }, "At ", S.shortName, " since ", f.since), /* @__PURE__ */ import_react9.default.createElement("button", { type: "button", className: "text-link", onClick: () => setBio(f) }, "Read bio", /* @__PURE__ */ import_react9.default.createElement(I.arrow, { size: 15 })))))), !all && /* @__PURE__ */ import_react9.default.createElement("div", { className: "center-btn" }, /* @__PURE__ */ import_react9.default.createElement(Btn, { variant: "navy", onClick: () => setAll(true) }, "Show all teachers"))), /* @__PURE__ */ import_react9.default.createElement(Modal, { open: !!bio, onClose: () => setBio(null), title: bio ? bio.name : "" }, bio && /* @__PURE__ */ import_react9.default.createElement("div", { className: "bio" }, /* @__PURE__ */ import_react9.default.createElement(Avatar, { id: bio.id, name: bio.name, size: "xl" }), /* @__PURE__ */ import_react9.default.createElement("h2", null, bio.name), /* @__PURE__ */ import_react9.default.createElement("p", { className: "role" }, bio.role), /* @__PURE__ */ import_react9.default.createElement("p", null, bio.bio), /* @__PURE__ */ import_react9.default.createElement(Btn, { variant: "ghost", onClick: () => setBio(null) }, "Close"))));
  }
  function Academics() {
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(PageBanner, { eyebrow: "Academics", title: "Courses & Programs", lead: "A curriculum built to challenge every student and an advisor who notices when it doesn\u2019t.", art: "library", slot: "banner-academics" }), /* @__PURE__ */ import_react9.default.createElement(Divisions, null), /* @__PURE__ */ import_react9.default.createElement(Catalog, null), /* @__PURE__ */ import_react9.default.createElement(Faculty, null), /* @__PURE__ */ import_react9.default.createElement(CtaBand, { title: "See a class in session", text: "The best way to understand how we teach is to watch it happen.", label: "Schedule a Tour" }));
  }

  // src/pages/Admissions.jsx
  var import_react10 = __toESM(require_react());
  var KEY = "rv-checklist";
  function Checklist() {
    const items = D.checklist;
    const [done, setDone] = (0, import_react10.useState)(() => {
      try {
        return JSON.parse(localStorage.getItem(KEY)) || [];
      } catch (e) {
        return [];
      }
    });
    (0, import_react10.useEffect)(() => {
      try {
        localStorage.setItem(KEY, JSON.stringify(done));
      } catch (e) {
      }
    }, [done]);
    const toggle = (i) => setDone(done.includes(i) ? done.filter((x) => x !== i) : [...done, i]);
    const pct = Math.round(done.length / items.length * 100);
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "checklist" }, /* @__PURE__ */ import_react10.default.createElement("ul", null, items.map((t, i) => /* @__PURE__ */ import_react10.default.createElement("li", { key: i }, /* @__PURE__ */ import_react10.default.createElement("label", { className: done.includes(i) ? "done" : "" }, /* @__PURE__ */ import_react10.default.createElement("input", { type: "checkbox", checked: done.includes(i), onChange: () => toggle(i) }), /* @__PURE__ */ import_react10.default.createElement("span", { className: "box", "aria-hidden": "true" }, /* @__PURE__ */ import_react10.default.createElement(I.check, { size: 14 })), /* @__PURE__ */ import_react10.default.createElement("span", null, t))))), /* @__PURE__ */ import_react10.default.createElement("div", { className: "progress", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": pct, "aria-label": "Checklist progress" }, /* @__PURE__ */ import_react10.default.createElement("span", { style: { width: pct + "%" } })), /* @__PURE__ */ import_react10.default.createElement("p", { className: "progress-note" }, done.length, " of ", items.length, " ready", done.length > 0 && /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, " \xB7 ", /* @__PURE__ */ import_react10.default.createElement("button", { className: "text-link plain", onClick: () => setDone([]) }, "Reset"))));
  }
  function Admissions() {
    return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(PageBanner, { eyebrow: "Admission", title: "Apply to " + S.shortName, lead: "Applications are open for Kindergarten through Grade 12 for the coming school year.", art: "building", slot: "banner-admissions" }), /* @__PURE__ */ import_react10.default.createElement("section", { className: "section", id: "why", "data-reveal": true }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react10.default.createElement("h2", { className: "h-sm" }, "Detail About How to Apply"), /* @__PURE__ */ import_react10.default.createElement("div", { className: "two-col text-cols" }, /* @__PURE__ */ import_react10.default.createElement("p", null, "If you are considering ", S.fullName, ", we would like to get to know your family. We do not use a formula to select students. Every application, academic and personal, is read in full by at least two members of the Admissions Committee, and we look for students who will contribute to our community as well as benefit from it."), /* @__PURE__ */ import_react10.default.createElement("p", null, "Most families begin by visiting campus. Prospective students spend part of a normal school day with a current student host, sit in on a class and have lunch in the dining hall. That tells us as much about the fit as any form, and it tells you far more than a brochure can.")))), /* @__PURE__ */ import_react10.default.createElement("section", { className: "pillars-band", "data-reveal": true }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react10.default.createElement("ul", { className: "pillars-4" }, D.admissionsPillars.map((p) => /* @__PURE__ */ import_react10.default.createElement("li", { key: p.title }, /* @__PURE__ */ import_react10.default.createElement("h3", null, p.title), /* @__PURE__ */ import_react10.default.createElement("p", null, p.text)))))), /* @__PURE__ */ import_react10.default.createElement("section", { className: "photo-band", "aria-hidden": "true" }, /* @__PURE__ */ import_react10.default.createElement(Photo, { slot: "admissions-band", art: "building", artView: "0 70 800 250" })), /* @__PURE__ */ import_react10.default.createElement("section", { className: "section", id: "process", "data-reveal": true }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react10.default.createElement("h2", { className: "h-sm" }, "The Application Process"), /* @__PURE__ */ import_react10.default.createElement("ol", { className: "steps" }, D.admissionsSteps.map((s, i) => /* @__PURE__ */ import_react10.default.createElement("li", { key: s.title }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "step-n", "aria-hidden": "true" }, i + 1), /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("h3", null, s.title), /* @__PURE__ */ import_react10.default.createElement("p", null, s.text))))), /* @__PURE__ */ import_react10.default.createElement("hr", { className: "rule" }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "two-col apply-cols" }, /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("h2", { className: "h-sm" }, "Things to Know First"), /* @__PURE__ */ import_react10.default.createElement("p", null, "One application covers every division. You will choose the grade your child is entering and any program you would like us to consider, such as the music or athletics pathways."), /* @__PURE__ */ import_react10.default.createElement("p", { className: "need" }, "You will need:"), /* @__PURE__ */ import_react10.default.createElement(Checklist, null), /* @__PURE__ */ import_react10.default.createElement("div", { className: "btn-row" }, /* @__PURE__ */ import_react10.default.createElement(Btn, { href: "tour.html", variant: "gold" }, "Request a campus tour"), /* @__PURE__ */ import_react10.default.createElement(Btn, { variant: "navy", onClick: () => emit("inquiry") }, "Request information"))), /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("h2", { className: "h-sm" }, "When to Apply?"), /* @__PURE__ */ import_react10.default.createElement("div", { className: "table-wrap" }, /* @__PURE__ */ import_react10.default.createElement("table", { className: "data-table" }, /* @__PURE__ */ import_react10.default.createElement("thead", null, /* @__PURE__ */ import_react10.default.createElement("tr", null, /* @__PURE__ */ import_react10.default.createElement("th", { scope: "col" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "sr-only" }, "Round")), /* @__PURE__ */ import_react10.default.createElement("th", { scope: "col" }, "Application Deadline"), /* @__PURE__ */ import_react10.default.createElement("th", { scope: "col" }, "Decision"))), /* @__PURE__ */ import_react10.default.createElement("tbody", null, D.deadlines.map((r) => /* @__PURE__ */ import_react10.default.createElement("tr", { key: r.round }, /* @__PURE__ */ import_react10.default.createElement("th", { scope: "row" }, r.round), /* @__PURE__ */ import_react10.default.createElement("td", null, r.deadline), /* @__PURE__ */ import_react10.default.createElement("td", null, r.decision)))))), /* @__PURE__ */ import_react10.default.createElement("h2", { className: "h-sm mt" }, "Where to submit necessary documents?"), /* @__PURE__ */ import_react10.default.createElement("p", null, "Documents not submitted through the online portal can be mailed to:"), /* @__PURE__ */ import_react10.default.createElement("address", { className: "mail-addr" }, "Office of Admissions", /* @__PURE__ */ import_react10.default.createElement("br", null), S.fullName, /* @__PURE__ */ import_react10.default.createElement("br", null), S.addressLine1, /* @__PURE__ */ import_react10.default.createElement("br", null), S.addressLine2, " ", S.country), /* @__PURE__ */ import_react10.default.createElement("p", null, "Or emailed to ", /* @__PURE__ */ import_react10.default.createElement("a", { href: "mailto:" + S.admissionsEmail }, S.admissionsEmail), "."))))), /* @__PURE__ */ import_react10.default.createElement(CtaBand, null));
  }

  // src/pages/Tuition.jsx
  var import_react11 = __toESM(require_react());
  var PLANS = {
    annual: { label: "Pay annually", note: "3% saving, due July 1", calc: (a) => a * 0.97, unit: "/ year", count: 1 },
    two: { label: "Two installments", note: "July and January", calc: (a) => a / 2, unit: "/ installment", count: 2 },
    ten: { label: "Ten monthly payments", note: "July to April, small admin charge", calc: (a) => a * 1.02 / 10, unit: "/ month", count: 10 }
  };
  function PlanCards({ plan, selected, setSelected }) {
    const p = PLANS[plan];
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: "plan-grid" }, D.tuition.map((t) => {
      const Icon2 = I[t.icon] || I.book;
      const on = selected === t.id;
      return /* @__PURE__ */ import_react11.default.createElement("article", { key: t.id, className: "plan" + (on ? " selected" : "") }, /* @__PURE__ */ import_react11.default.createElement("header", null, /* @__PURE__ */ import_react11.default.createElement(Icon2, { size: 34 }), /* @__PURE__ */ import_react11.default.createElement("h3", null, t.name), /* @__PURE__ */ import_react11.default.createElement("p", null, t.grades)), /* @__PURE__ */ import_react11.default.createElement("div", { className: "plan-price" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "cur" }, "$"), /* @__PURE__ */ import_react11.default.createElement("span", { className: "amt" }, Math.round(p.calc(t.annual)).toLocaleString("en-US")), /* @__PURE__ */ import_react11.default.createElement("span", { className: "per" }, p.unit)), /* @__PURE__ */ import_react11.default.createElement("ul", null, t.includes.map((x) => /* @__PURE__ */ import_react11.default.createElement("li", { key: x }, /* @__PURE__ */ import_react11.default.createElement(I.check, { size: 16 }), x))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "plan-actions" }, /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", className: "btn " + (on ? "btn-gold" : "btn-navy-o"), "aria-pressed": on, onClick: () => setSelected(t.id) }, on ? "Selected for estimate" : "Use in estimate")));
    }));
  }
  function Estimator({ selected, setSelected, plan }) {
    const [kids, setKids] = (0, import_react11.useState)(1);
    const [aid, setAid] = (0, import_react11.useState)(0);
    const t = D.tuition.find((x) => x.id === selected);
    let gross = 0, discount = 0;
    for (let i = 0; i < kids; i++) {
      const rate = i === 0 ? 0 : i === 1 ? 0.05 : 0.1;
      gross += t.annual;
      discount += t.annual * rate;
    }
    const afterSib = gross - discount;
    const aidAmt = afterSib * (aid / 100);
    const total = afterSib - aidAmt;
    const p = PLANS[plan];
    const per = plan === "annual" ? total * 0.97 : p.calc(total);
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: "estimator" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "est-form" }, /* @__PURE__ */ import_react11.default.createElement("fieldset", null, /* @__PURE__ */ import_react11.default.createElement("legend", null, "Division"), /* @__PURE__ */ import_react11.default.createElement("div", { className: "seg" }, D.tuition.map((x) => /* @__PURE__ */ import_react11.default.createElement("label", { key: x.id, className: selected === x.id ? "on" : "" }, /* @__PURE__ */ import_react11.default.createElement("input", { type: "radio", name: "est-div", checked: selected === x.id, onChange: () => setSelected(x.id) }), x.name)))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "est-row" }, /* @__PURE__ */ import_react11.default.createElement("span", { id: "kids-l", className: "lbl" }, "Children enrolling"), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stepper", role: "group", "aria-labelledby": "kids-l" }, /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", onClick: () => setKids(Math.max(1, kids - 1)), "aria-label": "Fewer children" }, /* @__PURE__ */ import_react11.default.createElement(I.minus, { size: 16 })), /* @__PURE__ */ import_react11.default.createElement("output", { "aria-live": "polite" }, kids), /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", onClick: () => setKids(Math.min(5, kids + 1)), "aria-label": "More children" }, /* @__PURE__ */ import_react11.default.createElement(I.plus, { size: 16 })))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "est-row col" }, /* @__PURE__ */ import_react11.default.createElement("label", { htmlFor: "aid", className: "lbl" }, "Financial aid awarded: ", /* @__PURE__ */ import_react11.default.createElement("b", null, aid, "%")), /* @__PURE__ */ import_react11.default.createElement("input", { id: "aid", type: "range", min: "0", max: "60", step: "5", value: aid, onChange: (e) => setAid(+e.target.value) }), /* @__PURE__ */ import_react11.default.createElement("span", { className: "hint" }, "Drag to see how an award would change the figure. Aid is need-based and decided separately."))), /* @__PURE__ */ import_react11.default.createElement("div", { className: "est-result", "aria-live": "polite" }, /* @__PURE__ */ import_react11.default.createElement("p", { className: "eyebrow" }, "Estimated tuition"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "est-total" }, money(total), /* @__PURE__ */ import_react11.default.createElement("small", null, " / year")), /* @__PURE__ */ import_react11.default.createElement("dl", null, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("dt", null, kids, " \xD7 ", t.name), /* @__PURE__ */ import_react11.default.createElement("dd", null, money(gross))), discount > 0 && /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("dt", null, "Sibling discount"), /* @__PURE__ */ import_react11.default.createElement("dd", null, "\u2212 ", money(discount))), aid > 0 && /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("dt", null, "Financial aid (", aid, "%)"), /* @__PURE__ */ import_react11.default.createElement("dd", null, "\u2212 ", money(aidAmt)))), /* @__PURE__ */ import_react11.default.createElement("p", { className: "est-per" }, p.label, ": ", /* @__PURE__ */ import_react11.default.createElement("b", null, money(plan === "annual" ? per : p.calc(total))), " ", p.unit, p.count > 1 && /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, " \xD7 ", p.count)), /* @__PURE__ */ import_react11.default.createElement("p", { className: "hint light" }, "Estimate only. Fees below are not included. Sibling discount: 5% on the second child, 10% on the third and beyond."), /* @__PURE__ */ import_react11.default.createElement(Btn, { href: "admissions.html#process", variant: "gold" }, "Start an application")));
  }
  function Tuition() {
    const [plan, setPlan] = (0, import_react11.useState)("annual");
    const [selected, setSelected] = (0, import_react11.useState)("upper");
    return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(PageBanner, { eyebrow: "Admissions", title: "Tuition & Financial Aid", lead: "A clear picture of what a Riverside education costs, and how many families make it possible.", art: "library", align: "center", slot: "banner-tuition" }), /* @__PURE__ */ import_react11.default.createElement("section", { className: "section", "data-reveal": true }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react11.default.createElement(SectionHead, { eyebrow: "Tuition " + (/* @__PURE__ */ new Date()).getFullYear() + "\u2013" + String(((/* @__PURE__ */ new Date()).getFullYear() + 1) % 100).padStart(2, "0"), title: "Tuition by division", lead: "Tuition covers teaching, books for core classes, most field trips and all in-school activities. Choose how you would like to pay and the figures below update." }), /* @__PURE__ */ import_react11.default.createElement("div", { className: "plan-toggle", role: "radiogroup", "aria-label": "Payment plan" }, Object.entries(PLANS).map(([k, v]) => /* @__PURE__ */ import_react11.default.createElement("button", { key: k, role: "radio", "aria-checked": plan === k, className: plan === k ? "on" : "", onClick: () => setPlan(k) }, /* @__PURE__ */ import_react11.default.createElement("b", null, v.label), /* @__PURE__ */ import_react11.default.createElement("small", null, v.note)))), /* @__PURE__ */ import_react11.default.createElement(PlanCards, { plan, selected, setSelected }))), /* @__PURE__ */ import_react11.default.createElement("section", { className: "section est-section", id: "estimate", "data-reveal": true }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react11.default.createElement(SectionHead, { eyebrow: "Estimator", title: "What would it cost for your family?", light: true }), /* @__PURE__ */ import_react11.default.createElement(Estimator, { selected, setSelected, plan }))), /* @__PURE__ */ import_react11.default.createElement("section", { className: "section", "data-reveal": true }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react11.default.createElement(SectionHead, { eyebrow: "Beyond tuition", title: "Other fees", lead: "Everything else you may be asked to pay, with nothing hidden in the small print." }), /* @__PURE__ */ import_react11.default.createElement("div", { className: "table-wrap" }, /* @__PURE__ */ import_react11.default.createElement("table", { className: "data-table fees" }, /* @__PURE__ */ import_react11.default.createElement("thead", null, /* @__PURE__ */ import_react11.default.createElement("tr", null, /* @__PURE__ */ import_react11.default.createElement("th", { scope: "col" }, "Item"), /* @__PURE__ */ import_react11.default.createElement("th", { scope: "col" }, "Amount"), /* @__PURE__ */ import_react11.default.createElement("th", { scope: "col", className: "hide-s" }, "Notes"))), /* @__PURE__ */ import_react11.default.createElement("tbody", null, D.fees.map((f) => /* @__PURE__ */ import_react11.default.createElement("tr", { key: f.item }, /* @__PURE__ */ import_react11.default.createElement("th", { scope: "row" }, f.item), /* @__PURE__ */ import_react11.default.createElement("td", null, f.amount), /* @__PURE__ */ import_react11.default.createElement("td", { className: "hide-s" }, f.note)))))))), /* @__PURE__ */ import_react11.default.createElement("section", { className: "section alt", id: "aid", "data-reveal": true }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "container two-col aid-cols" }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement(SectionHead, { eyebrow: "Financial aid", title: "No family should be ruled out by cost." }), /* @__PURE__ */ import_react11.default.createElement("p", null, "Riverside awards more than $4 million each year in need-based aid. Roughly one family in three receives some assistance, and awards are renewed annually."), /* @__PURE__ */ import_react11.default.createElement("p", null, "Our Business Office is glad to talk through your situation before you apply, in confidence and without obligation."), /* @__PURE__ */ import_react11.default.createElement("div", { className: "btn-row" }, /* @__PURE__ */ import_react11.default.createElement(Btn, { href: "mailto:" + S.admissionsEmail + "?subject=Financial%20aid%20question", variant: "navy" }, "Email the Business Office"), /* @__PURE__ */ import_react11.default.createElement(Btn, { href: "tel:" + S.phoneLink, variant: "ghost" }, /* @__PURE__ */ import_react11.default.createElement(I.phone, { size: 16 }), " ", S.phone))), /* @__PURE__ */ import_react11.default.createElement(Accordion, { items: D.aidFaq.map((f) => ({ q: f.q, a: f.a })) }))), /* @__PURE__ */ import_react11.default.createElement(CtaBand, { title: "Ready to take the next step?", text: "Visit campus, meet our teachers and ask us anything about costs." }));
  }

  // src/pages/CampusLife.jsx
  var import_react12 = __toESM(require_react());
  var CATS = ["All", "Athletics", "Arts", "Academic", "Service"];
  var GALLERY = [
    { slot: "gallery-1", art: "building", cap: "Morning on the main lawn" },
    { slot: "gallery-2", art: "stage", cap: "Dress rehearsal for the autumn play" },
    { slot: "gallery-3", art: "field", cap: "Home match on Memorial Field" },
    { slot: "gallery-4", art: "lab", cap: "Dissection lab in the new science wing" },
    { slot: "gallery-5", art: "music", cap: "Jazz Ensemble before the Winter Concert" },
    { slot: "gallery-6", art: "studio", cap: "Printmaking in the art studio" },
    { slot: "gallery-7", art: "library", cap: "Quiet hour in the library" },
    { slot: "gallery-8", art: "globe", cap: "Exchange students from Lyon" }
  ];
  function Clubs() {
    const hash = useHash();
    const [cat, setCat] = (0, import_react12.useState)("All");
    const [q, setQ] = (0, import_react12.useState)("");
    (0, import_react12.useEffect)(() => {
      const h = decodeURIComponent(hash.replace("#", ""));
      if (h.startsWith("clubs/") && CATS.includes(h.split("/")[1])) setCat(h.split("/")[1]);
    }, [hash]);
    const list = (0, import_react12.useMemo)(() => {
      const w = q.toLowerCase().trim();
      return D.clubs.filter((c) => (cat === "All" || c.cat === cat) && (!w || (c.name + c.note + c.when).toLowerCase().includes(w)));
    }, [cat, q]);
    return /* @__PURE__ */ import_react12.default.createElement("section", { className: "section alt", id: "clubs", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react12.default.createElement(SectionHead, { eyebrow: "Clubs & Athletics", title: "Something for every student", lead: "More than sixty clubs, teams and ensembles run each year. These are some of the most popular. Students can also start their own with a faculty sponsor." }), /* @__PURE__ */ import_react12.default.createElement("div", { className: "filters" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "chips", role: "group", "aria-label": "Filter by category" }, CATS.map((c) => /* @__PURE__ */ import_react12.default.createElement("button", { key: c, type: "button", className: "chip" + (cat === c ? " on" : ""), "aria-pressed": cat === c, onClick: () => setCat(c) }, c))), /* @__PURE__ */ import_react12.default.createElement("label", { className: "inline-search" }, /* @__PURE__ */ import_react12.default.createElement("span", { className: "sr-only" }, "Search clubs"), /* @__PURE__ */ import_react12.default.createElement(I.search, { size: 18 }), /* @__PURE__ */ import_react12.default.createElement("input", { type: "search", placeholder: "Search clubs and teams", value: q, onChange: (e) => setQ(e.target.value) }))), /* @__PURE__ */ import_react12.default.createElement("p", { className: "result-count", "aria-live": "polite" }, list.length, " ", list.length === 1 ? "activity" : "activities"), /* @__PURE__ */ import_react12.default.createElement("ul", { className: "club-grid" }, list.map((c) => /* @__PURE__ */ import_react12.default.createElement("li", { className: "club", key: c.name }, /* @__PURE__ */ import_react12.default.createElement("span", { className: "club-cat cat-" + c.cat.toLowerCase() }, c.cat), /* @__PURE__ */ import_react12.default.createElement("h3", null, c.name), /* @__PURE__ */ import_react12.default.createElement("p", null, c.note), /* @__PURE__ */ import_react12.default.createElement("p", { className: "club-meta" }, /* @__PURE__ */ import_react12.default.createElement("span", null, c.when), /* @__PURE__ */ import_react12.default.createElement("span", null, c.level))))), !list.length && /* @__PURE__ */ import_react12.default.createElement("p", { className: "empty" }, "Nothing matches that search. ", /* @__PURE__ */ import_react12.default.createElement("button", { className: "text-link", onClick: () => {
      setQ("");
      setCat("All");
    } }, "Clear filters"))));
  }
  function Gallery() {
    const [i, setI] = (0, import_react12.useState)(-1);
    (0, import_react12.useEffect)(() => {
      if (i < 0) return;
      const k = (e) => {
        if (e.key === "ArrowRight") setI((x) => (x + 1) % GALLERY.length);
        if (e.key === "ArrowLeft") setI((x) => (x - 1 + GALLERY.length) % GALLERY.length);
      };
      document.addEventListener("keydown", k);
      return () => document.removeEventListener("keydown", k);
    }, [i]);
    const g = GALLERY[i];
    return /* @__PURE__ */ import_react12.default.createElement("section", { className: "section", id: "gallery", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react12.default.createElement(SectionHead, { eyebrow: "Photo Gallery", title: "A year at Riverside", lead: "Select a picture to enlarge it. Use the arrow keys to move between them." }), /* @__PURE__ */ import_react12.default.createElement("ul", { className: "gallery" }, GALLERY.map((x, n) => /* @__PURE__ */ import_react12.default.createElement("li", { key: x.slot, className: "g" + (n + 1) }, /* @__PURE__ */ import_react12.default.createElement("button", { type: "button", onClick: () => setI(n), "aria-label": "Enlarge: " + x.cap }, /* @__PURE__ */ import_react12.default.createElement(Photo, { slot: x.slot, art: x.art, alt: "" }), /* @__PURE__ */ import_react12.default.createElement("span", { className: "g-cap" }, x.cap)))))), /* @__PURE__ */ import_react12.default.createElement(Modal, { open: i >= 0, onClose: () => setI(-1), title: "Photo viewer", wide: true }, g && /* @__PURE__ */ import_react12.default.createElement("figure", { className: "lightbox" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "lb-media" }, /* @__PURE__ */ import_react12.default.createElement(Photo, { slot: g.slot, art: g.art, alt: g.cap, loading: "eager" })), /* @__PURE__ */ import_react12.default.createElement("figcaption", null, g.cap, /* @__PURE__ */ import_react12.default.createElement("span", null, i + 1, " / ", GALLERY.length)), /* @__PURE__ */ import_react12.default.createElement("button", { className: "lb-nav prev", onClick: () => setI((i - 1 + GALLERY.length) % GALLERY.length), "aria-label": "Previous photo" }, /* @__PURE__ */ import_react12.default.createElement(I.left, { size: 26 })), /* @__PURE__ */ import_react12.default.createElement("button", { className: "lb-nav next", onClick: () => setI((i + 1) % GALLERY.length), "aria-label": "Next photo" }, /* @__PURE__ */ import_react12.default.createElement(I.right, { size: 26 })))));
  }
  function CampusLife() {
    return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(PageBanner, { eyebrow: "Campus Life", title: "Campus Life", lead: "Life at Riverside doesn\u2019t stop at the last bell. Teams, ensembles, clubs and a very good lunch make the school day feel like part of a community.", art: "field", slot: "banner-campus-life" }), /* @__PURE__ */ import_react12.default.createElement("section", { className: "section split-life", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "container life-grid" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "life-left" }, /* @__PURE__ */ import_react12.default.createElement("h2", { className: "h-sm" }, "Events and Traditions"), /* @__PURE__ */ import_react12.default.createElement("p", { className: "lead-red" }, "Every term has something that students look forward to."), /* @__PURE__ */ import_react12.default.createElement("p", null, "Convocation opens the year on the front lawn, with Grade 12 leading the youngest students in. In November, the whole school stops for Founders\u2019 Day and the long table lunch. The winter concert fills the Performing Arts Center for two nights, and the spring Field Day is the one afternoon teachers are required to lose at something."), /* @__PURE__ */ import_react12.default.createElement("p", null, "Seniors finish with the Senior Walk, in which graduates visit each classroom they once sat in and are applauded by the students who will follow them."), /* @__PURE__ */ import_react12.default.createElement("hr", { className: "rule" }), /* @__PURE__ */ import_react12.default.createElement("div", { className: "navy-box" }, /* @__PURE__ */ import_react12.default.createElement(I.users, { size: 34 }), /* @__PURE__ */ import_react12.default.createElement("h3", null, "Student Activities"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Student government plans dances, spirit weeks and service days, with an elected council from every division. Anyone can propose a club; it needs a faculty sponsor and five interested students."), /* @__PURE__ */ import_react12.default.createElement(TextLink, { href: "#clubs" }, "Browse clubs & teams"))), /* @__PURE__ */ import_react12.default.createElement("div", { className: "life-right" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "life-photo" }, /* @__PURE__ */ import_react12.default.createElement(Photo, { slot: "campus-bus", art: "classroom", alt: "Students boarding a school bus" })), /* @__PURE__ */ import_react12.default.createElement("div", { className: "info-block", id: "transport" }, /* @__PURE__ */ import_react12.default.createElement("h3", null, /* @__PURE__ */ import_react12.default.createElement(I.bus, { size: 26 }), "Transportation"), /* @__PURE__ */ import_react12.default.createElement("p", { className: "strong" }, "Seven bus routes serve the city and the northern suburbs."), /* @__PURE__ */ import_react12.default.createElement("p", null, "Morning and afternoon buses stop within a short walk of most homes. Routes and stops are published each August, and families can change their stop with a week\u2019s notice. The bus fee is shown on the ", /* @__PURE__ */ import_react12.default.createElement("a", { href: "tuition.html" }, "tuition page"), ".")), /* @__PURE__ */ import_react12.default.createElement("div", { className: "info-block", id: "parking" }, /* @__PURE__ */ import_react12.default.createElement("h3", null, /* @__PURE__ */ import_react12.default.createElement(I.parking, { size: 26 }), "Parking"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Visitor parking is free beside Main Hall. Student and staff parking is on the west side of campus, with ", /* @__PURE__ */ import_react12.default.createElement("b", null, "gated access during school hours"), " and lighting at night.")), /* @__PURE__ */ import_react12.default.createElement("div", { className: "info-block", id: "dining" }, /* @__PURE__ */ import_react12.default.createElement("h3", null, /* @__PURE__ */ import_react12.default.createElement(I.food, { size: 26 }), "Dining"), /* @__PURE__ */ import_react12.default.createElement("p", null, "Lunch is cooked on site every day and served in the dining hall. There is always a vegetarian main, and the kitchen manages allergies carefully. Lower School students eat with their classes; older students choose their own tables."))))), /* @__PURE__ */ import_react12.default.createElement("section", { className: "experience", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "container exp-grid" }, /* @__PURE__ */ import_react12.default.createElement("h2", null, "The School Experience"), /* @__PURE__ */ import_react12.default.createElement("p", null, S.fullName, " was founded in ", S.founded, " by a group of parents and has been teaching on the same river bank ever since. We are proud of our results, but we are prouder of the way students speak to each other, and to the adults who teach them."))), /* @__PURE__ */ import_react12.default.createElement("section", { className: "section", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react12.default.createElement("ul", { className: "card-3" }, [
      { slot: "campus-technology", art: "classroom", t: "Technology", d: "Every student from Grade 6 has a school laptop. Computer science is taught from Middle School, and our network is filtered and monitored.", icon: I.monitor },
      { slot: "campus-safety", art: "building", t: "Safety & Security", d: "Staffed entrances, visitor sign-in, trained first-aid staff and drills practised each term. Parents are told before any change in procedure.", icon: I.shield },
      { slot: "campus-health", art: "lab", t: "Health & Wellness", d: "Full-time nurse, two counsellors and a wellness program that begins in Grade 6. Our quiet room is open to any student, any time.", icon: I.heart }
    ].map((c) => /* @__PURE__ */ import_react12.default.createElement("li", { className: "info-card", key: c.t }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "info-card-media" }, /* @__PURE__ */ import_react12.default.createElement(Photo, { slot: c.slot, art: c.art, alt: "" })), /* @__PURE__ */ import_react12.default.createElement("h3", null, c.t), /* @__PURE__ */ import_react12.default.createElement("p", null, c.d), /* @__PURE__ */ import_react12.default.createElement(TextLink, { href: "contact.html" }, "Ask us about it")))))), /* @__PURE__ */ import_react12.default.createElement(Clubs, null), /* @__PURE__ */ import_react12.default.createElement("section", { className: "quote-split", "data-reveal": true }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "qs-media" }, /* @__PURE__ */ import_react12.default.createElement(Photo, { slot: "campus-quote", art: "studio", alt: "Alumna portrait" })), /* @__PURE__ */ import_react12.default.createElement("div", { className: "qs-copy" }, /* @__PURE__ */ import_react12.default.createElement(Quote, { className: "qs-mark", width: "44" }), /* @__PURE__ */ import_react12.default.createElement("blockquote", null, "I arrived shy and left having directed a play. Nobody here tells you who to be, but everybody notices when you try something."), /* @__PURE__ */ import_react12.default.createElement("p", { className: "qs-by" }, /* @__PURE__ */ import_react12.default.createElement("b", null, "Maya Chen"), " / Class of 2025"))), /* @__PURE__ */ import_react12.default.createElement(Gallery, null), /* @__PURE__ */ import_react12.default.createElement(CtaBand, { title: "Come and see it for yourself", text: "Campus tours run every weekday at 11 am and 3 pm." }));
  }

  // src/pages/Tour.jsx
  var import_react13 = __toESM(require_react());
  var pad = (n) => String(n).padStart(2, "0");
  function isoOffset(days) {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + days);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  var GRADES = ["Kindergarten", ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => "Grade " + g)];
  function BookingForm() {
    const empty = { name: "", date: "", time: "", phone: "", email: "", grade: "", visitors: "2", request: "", website: "" };
    const [v, setV] = (0, import_react13.useState)(empty);
    const [err, setErr] = (0, import_react13.useState)({});
    const [state, setState] = (0, import_react13.useState)({ phase: "form" });
    const on = (k) => (e) => setV({ ...v, [k]: e.target.value });
    const min = isoOffset(1);
    const validate = () => {
      const e = {};
      if (!v.name.trim()) e.name = "Please enter your full name.";
      if (!v.date) e.date = "Choose a date.";
      else if (v.date < min) e.date = "Please choose a date from tomorrow onwards.";
      else if ([0, 6].includes(parseDate(v.date).getDay())) e.date = "Tours run Monday to Friday. Please pick a weekday.";
      if (!v.time) e.time = "Choose a time.";
      if (!phoneOk(v.phone)) e.phone = "Enter a phone number we can reach you on.";
      if (!emailOk(v.email)) e.email = "Enter a valid email address.";
      if (!v.grade) e.grade = "Tell us which grade your child is entering.";
      return e;
    };
    const submit = async (ev) => {
      ev.preventDefault();
      const e = validate();
      setErr(e);
      if (Object.keys(e).length) {
        const first = document.querySelector(".appt-form .has-error input, .appt-form .has-error select");
        if (first) first.focus();
        return;
      }
      if (v.website) return;
      setState({ phase: "sending" });
      const r = await sendForm("Campus tour request: " + v.name + ", " + fmtDateLong(v.date) + " " + v.time, {
        Name: v.name,
        Date: fmtDateLong(v.date),
        Time: v.time,
        Phone: v.phone,
        Email: v.email,
        "Grade entering": v.grade,
        "Number of visitors": v.visitors,
        "Special request": v.request
      });
      if (r.mode === "mailto") window.location.href = r.href;
      setState({ phase: r.mode, href: r.href });
    };
    if (state.phase === "mailto" || state.phase === "sent" || state.phase === "error") {
      return /* @__PURE__ */ import_react13.default.createElement(Confirmation, { state }, state.phase !== "error" && /* @__PURE__ */ import_react13.default.createElement("div", { className: "booking-summary" }, /* @__PURE__ */ import_react13.default.createElement("p", null, /* @__PURE__ */ import_react13.default.createElement(I.calendar, { size: 16 }), " ", fmtDateLong(v.date), " at ", v.time), /* @__PURE__ */ import_react13.default.createElement("p", null, /* @__PURE__ */ import_react13.default.createElement(I.pin, { size: 16 }), " Admissions Center, ", S.addressLine1), /* @__PURE__ */ import_react13.default.createElement("p", null, /* @__PURE__ */ import_react13.default.createElement(I.user, { size: 16 }), " ", v.name, " \xB7 ", v.visitors, " ", v.visitors === "1" ? "visitor" : "visitors"), /* @__PURE__ */ import_react13.default.createElement("button", { className: "text-link", onClick: () => downloadIcs({ title: "Campus tour at " + S.fullName, date: v.date, time: v.time, location: S.addressLine1 + ", " + S.addressLine2, description: "Please arrive ten minutes early and check in at the Admissions Center. Phone: " + S.phone }) }, /* @__PURE__ */ import_react13.default.createElement(I.download, { size: 15 }), " Add to my calendar (.ics)")), /* @__PURE__ */ import_react13.default.createElement(Btn, { variant: "ghost", onClick: () => {
        setV(empty);
        setState({ phase: "form" });
      } }, "Book another visit"));
    }
    return /* @__PURE__ */ import_react13.default.createElement("form", { className: "appt-form", onSubmit: submit, noValidate: true }, /* @__PURE__ */ import_react13.default.createElement(Honeypot, { value: v.website, onChange: on("website") }), /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Full name", name: "t-name", value: v.name, onChange: on("name"), error: err.name, required: true, autoComplete: "name" }), /* @__PURE__ */ import_react13.default.createElement("div", { className: "field-row" }, /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Date", name: "t-date", type: "date", min, value: v.date, onChange: on("date"), error: err.date, required: true }), /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Time", name: "t-time", value: v.time, onChange: on("time"), error: err.time, required: true }, /* @__PURE__ */ import_react13.default.createElement("option", { value: "" }, "Select time"), D.tourTimes.map((t) => /* @__PURE__ */ import_react13.default.createElement("option", { key: t }, t)))), /* @__PURE__ */ import_react13.default.createElement("div", { className: "field-row" }, /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Phone", name: "t-phone", type: "tel", value: v.phone, onChange: on("phone"), error: err.phone, required: true, autoComplete: "tel" }), /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Email", name: "t-email", type: "email", value: v.email, onChange: on("email"), error: err.email, required: true, autoComplete: "email" })), /* @__PURE__ */ import_react13.default.createElement("div", { className: "field-row" }, /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Grade entering", name: "t-grade", value: v.grade, onChange: on("grade"), error: err.grade, required: true }, /* @__PURE__ */ import_react13.default.createElement("option", { value: "" }, "Select grade"), GRADES.map((g) => /* @__PURE__ */ import_react13.default.createElement("option", { key: g }, g))), /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Number of visitors", name: "t-visitors", value: v.visitors, onChange: on("visitors") }, [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ import_react13.default.createElement("option", { key: n }, n)))), /* @__PURE__ */ import_react13.default.createElement(Field2, { label: "Special request", name: "t-request", textarea: true, rows: 4, value: v.request, onChange: on("request"), hint: "Accessibility needs, a class you would like to see, a teacher you would like to meet." }), /* @__PURE__ */ import_react13.default.createElement(Btn, { type: "submit", variant: "gold", disabled: state.phase === "sending" }, state.phase === "sending" ? "Sending\u2026" : "Submit Now"));
  }
  function Tour() {
    return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(PageBanner, { eyebrow: "Make an Appointment For", title: "School Tour", art: "building", slot: "banner-tour" }), /* @__PURE__ */ import_react13.default.createElement("section", { className: "tour-split" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "ts-copy" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "ts-inner" }, /* @__PURE__ */ import_react13.default.createElement("h2", null, "School Tour"), /* @__PURE__ */ import_react13.default.createElement("p", null, "Campus tours are designed for prospective families. You will see where our students learn, eat and play, meet a member of the Admissions team and hear from a current student about what a normal day is like."), /* @__PURE__ */ import_react13.default.createElement("p", null, "Students in Grade 5 and above sit in on a class. Younger children visit the Lower School library for a story and a snack."))), /* @__PURE__ */ import_react13.default.createElement("div", { className: "ts-media" }, /* @__PURE__ */ import_react13.default.createElement(Photo, { slot: "tour-split", art: "classroom", alt: "Teacher and students in a classroom" }))), /* @__PURE__ */ import_react13.default.createElement("section", { className: "section", id: "faq", "data-reveal": true }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "container two-col faq-cols" }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("h2", { className: "h-sm" }, "Frequently Asked Questions"), /* @__PURE__ */ import_react13.default.createElement(Accordion, { items: D.tourFaq })), /* @__PURE__ */ import_react13.default.createElement("div", { className: "visitor-info" }, /* @__PURE__ */ import_react13.default.createElement("h3", null, "Prospective Families"), /* @__PURE__ */ import_react13.default.createElement("p", null, "Tours are suitable for any family considering Kindergarten through Grade 12. If you are interested in a particular division, tell us and we will spend extra time there."), /* @__PURE__ */ import_react13.default.createElement("h3", null, "Complete Your Visit"), /* @__PURE__ */ import_react13.default.createElement("p", null, "To learn more about the application process, we recommend you also speak to the director of the division your child would join. We are happy to arrange a short conversation on the same day."), /* @__PURE__ */ import_react13.default.createElement("h3", null, "International Families"), /* @__PURE__ */ import_react13.default.createElement("p", null, "If you cannot travel to campus, we offer a live video tour with an Admissions officer and a current student. Mention it in the special request box and we will arrange a time that suits your time zone.")))), /* @__PURE__ */ import_react13.default.createElement("section", { className: "section appt", id: "appointment", "data-reveal": true }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "container two-col" }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("h2", { className: "h-sm" }, "School Tour Time"), /* @__PURE__ */ import_react13.default.createElement("p", null, "We are open Monday to Friday at ", D.tourTimes.join(" and "), ", except on school holidays."), /* @__PURE__ */ import_react13.default.createElement("address", { className: "center-addr" }, /* @__PURE__ */ import_react13.default.createElement("b", null, "The Admissions Center"), /* @__PURE__ */ import_react13.default.createElement("br", null), S.addressLine1, /* @__PURE__ */ import_react13.default.createElement("br", null), S.addressLine2, /* @__PURE__ */ import_react13.default.createElement("p", { className: "contact-lines" }, /* @__PURE__ */ import_react13.default.createElement("b", null, "Phone:"), " ", /* @__PURE__ */ import_react13.default.createElement("a", { href: "tel:" + S.phoneLink }, S.phone)), /* @__PURE__ */ import_react13.default.createElement("p", { className: "contact-lines" }, /* @__PURE__ */ import_react13.default.createElement("b", null, "Email:"), " ", /* @__PURE__ */ import_react13.default.createElement("a", { href: "mailto:" + S.admissionsEmail }, S.admissionsEmail)))), /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("h2", { className: "h-sm" }, "Make an appointment"), /* @__PURE__ */ import_react13.default.createElement(BookingForm, null)))));
  }

  // src/pages/News.jsx
  var import_react14 = __toESM(require_react());
  var PER_PAGE = 4;
  var sorted = [...D.posts].sort((a, b) => (b.sticky ? 1 : 0) - (a.sticky ? 1 : 0) || (a.date < b.date ? 1 : -1));
  var recent = [...D.posts].sort((a, b) => a.date < b.date ? 1 : -1);
  var allTags = Array.from(new Set(D.posts.flatMap((p) => p.tags))).sort();
  function parseRoute(hash) {
    const parts = decodeURIComponent(hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
    const [a, b] = parts;
    if (a === "post") return { view: "post", slug: b };
    if (a === "tag") return { view: "list", tag: b, page: 1 };
    if (a === "page") return { view: "list", page: Math.max(1, parseInt(b, 10) || 1) };
    if (a === "events") return { view: "events" };
    return { view: "list", page: 1 };
  }
  var hrefFor = (r) => "#/" + r;
  function Sidebar({ query, setQuery, activeTag }) {
    return /* @__PURE__ */ import_react14.default.createElement("aside", { className: "sidebar" }, /* @__PURE__ */ import_react14.default.createElement("section", { className: "widget" }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "widget-title" }, "Search"), /* @__PURE__ */ import_react14.default.createElement("label", { className: "inline-search wide" }, /* @__PURE__ */ import_react14.default.createElement("span", { className: "sr-only" }, "Search news"), /* @__PURE__ */ import_react14.default.createElement(I.search, { size: 18 }), /* @__PURE__ */ import_react14.default.createElement("input", { type: "search", placeholder: "Search news", value: query, onChange: (e) => {
      setQuery(e.target.value);
      if (window.location.hash && window.location.hash !== "#/") window.location.hash = "#/";
    } }))), /* @__PURE__ */ import_react14.default.createElement("section", { className: "widget" }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "widget-title" }, "From the Head of School"), /* @__PURE__ */ import_react14.default.createElement("p", null, "Our news page is where families hear first. Check back each week for results, announcements and photographs, and write to us if there is something you would like to see here.")), /* @__PURE__ */ import_react14.default.createElement("section", { className: "widget" }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "widget-title" }, "Recent News"), /* @__PURE__ */ import_react14.default.createElement("ul", { className: "recent" }, recent.slice(0, 4).map((p) => /* @__PURE__ */ import_react14.default.createElement("li", { key: p.slug }, /* @__PURE__ */ import_react14.default.createElement("a", { className: "recent-thumb", href: hrefFor("post/" + p.slug), tabIndex: -1, "aria-hidden": "true" }, /* @__PURE__ */ import_react14.default.createElement(Photo, { slot: "post-" + p.slug, art: p.art, alt: "" })), /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement("a", { href: hrefFor("post/" + p.slug) }, p.title), /* @__PURE__ */ import_react14.default.createElement("span", null, fmtDate(p.date))))))), /* @__PURE__ */ import_react14.default.createElement("section", { className: "widget" }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "widget-title" }, "Tag Cloud"), /* @__PURE__ */ import_react14.default.createElement("ul", { className: "tags" }, allTags.map((t) => /* @__PURE__ */ import_react14.default.createElement("li", { key: t }, /* @__PURE__ */ import_react14.default.createElement("a", { className: activeTag === t ? "on" : "", href: hrefFor("tag/" + t) }, t))))), /* @__PURE__ */ import_react14.default.createElement("section", { className: "widget" }, /* @__PURE__ */ import_react14.default.createElement("h2", { className: "widget-title" }, "Upcoming Events"), /* @__PURE__ */ import_react14.default.createElement("ul", { className: "events compact" }, D.events.slice(0, 3).map((e) => /* @__PURE__ */ import_react14.default.createElement(EventItem, { key: e.id, e }))), /* @__PURE__ */ import_react14.default.createElement(TextLink, { href: hrefFor("events") }, "All events")));
  }
  function Pagination({ page, pages, base }) {
    if (pages < 2) return null;
    const link = (n) => (base ? base : "#/page/") + (base ? "" : n);
    return /* @__PURE__ */ import_react14.default.createElement("nav", { className: "pagination", "aria-label": "Pagination" }, Array.from({ length: pages }).map((_, i) => /* @__PURE__ */ import_react14.default.createElement("a", { key: i, href: hrefFor("page/" + (i + 1)), "aria-current": page === i + 1 ? "page" : void 0, className: page === i + 1 ? "on" : "" }, i + 1)), page < pages && /* @__PURE__ */ import_react14.default.createElement("a", { href: hrefFor("page/" + (page + 1)), "aria-label": "Next page" }, /* @__PURE__ */ import_react14.default.createElement(I.right, { size: 16 })));
  }
  function PostCard({ p, first }) {
    const href = hrefFor("post/" + p.slug);
    return /* @__PURE__ */ import_react14.default.createElement("article", { className: "post-card" }, /* @__PURE__ */ import_react14.default.createElement("a", { className: "post-media", href, tabIndex: -1, "aria-hidden": "true" }, /* @__PURE__ */ import_react14.default.createElement(Photo, { slot: "post-" + p.slug, art: p.art, alt: "" }), p.sticky && /* @__PURE__ */ import_react14.default.createElement("span", { className: "sticky-flag" }, /* @__PURE__ */ import_react14.default.createElement(I.spark, { size: 14 }), " Sticky post")), /* @__PURE__ */ import_react14.default.createElement("div", { className: "post-body" }, /* @__PURE__ */ import_react14.default.createElement("h2", null, /* @__PURE__ */ import_react14.default.createElement("a", { href }, p.title)), /* @__PURE__ */ import_react14.default.createElement(PostMeta, { p }), /* @__PURE__ */ import_react14.default.createElement("p", { className: "post-tags" }, p.tags.map((t) => /* @__PURE__ */ import_react14.default.createElement("a", { key: t, href: hrefFor("tag/" + t) }, t))), /* @__PURE__ */ import_react14.default.createElement("p", null, p.excerpt), /* @__PURE__ */ import_react14.default.createElement(Btn, { href, variant: "gold" }, "Read More")));
  }
  function List({ route, query, onClear }) {
    const filtered = (0, import_react14.useMemo)(() => {
      const w = query.toLowerCase().trim();
      return sorted.filter((p) => (!route.tag || p.tags.includes(route.tag)) && (!w || (p.title + p.excerpt + p.tags.join(" ")).toLowerCase().includes(w)));
    }, [route.tag, query]);
    const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const page = Math.min(route.page || 1, pages);
    const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    return /* @__PURE__ */ import_react14.default.createElement("div", null, (route.tag || query) && /* @__PURE__ */ import_react14.default.createElement("p", { className: "filter-note" }, route.tag && /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, "Showing posts tagged ", /* @__PURE__ */ import_react14.default.createElement("b", null, route.tag), ". "), query && /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, "Matching \u201C", /* @__PURE__ */ import_react14.default.createElement("b", null, query), "\u201D. "), /* @__PURE__ */ import_react14.default.createElement("a", { href: "#/", onClick: onClear }, "Show all news")), shown.length ? shown.map((p) => /* @__PURE__ */ import_react14.default.createElement(PostCard, { key: p.slug, p })) : /* @__PURE__ */ import_react14.default.createElement("p", { className: "empty" }, "No stories found. ", /* @__PURE__ */ import_react14.default.createElement("a", { className: "text-link", href: "#/" }, "Show all news")), !route.tag && !query && /* @__PURE__ */ import_react14.default.createElement(Pagination, { page, pages }));
  }
  function Post({ slug }) {
    const idx = recent.findIndex((p2) => p2.slug === slug);
    const p = recent[idx];
    const [copied, setCopied] = (0, import_react14.useState)(false);
    (0, import_react14.useEffect)(() => {
      window.scrollTo({ top: 0 });
      if (p) document.title = p.title + " | " + S.fullName;
    }, [slug]);
    if (!p) return /* @__PURE__ */ import_react14.default.createElement("p", { className: "empty" }, "That story couldn\u2019t be found. ", /* @__PURE__ */ import_react14.default.createElement("a", { className: "text-link", href: "#/" }, "Back to news"));
    const prev = recent[idx + 1], next = recent[idx - 1];
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2e3);
      } catch (e) {
        window.prompt("Copy this link:", window.location.href);
      }
    };
    return /* @__PURE__ */ import_react14.default.createElement("article", { className: "post-full" }, /* @__PURE__ */ import_react14.default.createElement("a", { className: "back-link", href: "#/" }, /* @__PURE__ */ import_react14.default.createElement(I.back, { size: 16 }), " All news"), /* @__PURE__ */ import_react14.default.createElement("div", { className: "post-hero" }, /* @__PURE__ */ import_react14.default.createElement(Photo, { slot: "post-" + p.slug, art: p.art, alt: "", loading: "eager" })), /* @__PURE__ */ import_react14.default.createElement("h1", null, p.title), /* @__PURE__ */ import_react14.default.createElement(PostMeta, { p }), /* @__PURE__ */ import_react14.default.createElement("p", { className: "post-tags" }, p.tags.map((t) => /* @__PURE__ */ import_react14.default.createElement("a", { key: t, href: hrefFor("tag/" + t) }, t))), /* @__PURE__ */ import_react14.default.createElement("div", { className: "prose" }, /* @__PURE__ */ import_react14.default.createElement("p", { className: "deck" }, p.excerpt), p.body.map((t, i) => /* @__PURE__ */ import_react14.default.createElement("p", { key: i }, t))), /* @__PURE__ */ import_react14.default.createElement("div", { className: "share" }, /* @__PURE__ */ import_react14.default.createElement("span", null, "Share this story"), /* @__PURE__ */ import_react14.default.createElement("button", { type: "button", onClick: copy }, /* @__PURE__ */ import_react14.default.createElement(I.link, { size: 16 }), " ", copied ? "Link copied" : "Copy link"), /* @__PURE__ */ import_react14.default.createElement("a", { href: "mailto:?subject=" + encodeURIComponent(p.title) + "&body=" + encodeURIComponent(window.location.href) }, /* @__PURE__ */ import_react14.default.createElement(I.mail, { size: 16 }), " Email"), /* @__PURE__ */ import_react14.default.createElement("button", { type: "button", onClick: () => window.print() }, /* @__PURE__ */ import_react14.default.createElement(I.print, { size: 16 }), " Print")), /* @__PURE__ */ import_react14.default.createElement("nav", { className: "prevnext", "aria-label": "More stories" }, prev ? /* @__PURE__ */ import_react14.default.createElement("a", { href: hrefFor("post/" + prev.slug) }, /* @__PURE__ */ import_react14.default.createElement("small", null, /* @__PURE__ */ import_react14.default.createElement(I.back, { size: 14 }), " Older"), prev.title) : /* @__PURE__ */ import_react14.default.createElement("span", null), next ? /* @__PURE__ */ import_react14.default.createElement("a", { className: "r", href: hrefFor("post/" + next.slug) }, /* @__PURE__ */ import_react14.default.createElement("small", null, "Newer ", /* @__PURE__ */ import_react14.default.createElement(I.arrow, { size: 14 })), next.title) : /* @__PURE__ */ import_react14.default.createElement("span", null)));
  }
  function Events() {
    return /* @__PURE__ */ import_react14.default.createElement("div", { className: "events-page" }, /* @__PURE__ */ import_react14.default.createElement("h1", { className: "h-sm" }, "Upcoming Events"), /* @__PURE__ */ import_react14.default.createElement("p", { className: "muted" }, "Dates are subject to change. All events are on campus unless noted."), /* @__PURE__ */ import_react14.default.createElement("ul", { className: "events big" }, D.events.map((e) => /* @__PURE__ */ import_react14.default.createElement("li", { className: "event", key: e.id }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "event-date", "aria-hidden": "true" }, /* @__PURE__ */ import_react14.default.createElement("b", null, String((/* @__PURE__ */ new Date(e.date + "T12:00:00")).getDate()).padStart(2, "0")), /* @__PURE__ */ import_react14.default.createElement("span", null, monthOf(e.date))), /* @__PURE__ */ import_react14.default.createElement("div", { className: "event-body" }, /* @__PURE__ */ import_react14.default.createElement("h2", null, /* @__PURE__ */ import_react14.default.createElement("a", { href: e.link }, e.title)), /* @__PURE__ */ import_react14.default.createElement("p", null, /* @__PURE__ */ import_react14.default.createElement("span", null, /* @__PURE__ */ import_react14.default.createElement(I.calendar, { size: 14 }), " ", fmtDate(e.date)), /* @__PURE__ */ import_react14.default.createElement("span", null, /* @__PURE__ */ import_react14.default.createElement(I.clock, { size: 14 }), " ", e.time), /* @__PURE__ */ import_react14.default.createElement("span", null, /* @__PURE__ */ import_react14.default.createElement(I.pin, { size: 14 }), " ", e.place)))))), /* @__PURE__ */ import_react14.default.createElement("a", { className: "back-link", href: "#/" }, /* @__PURE__ */ import_react14.default.createElement(I.back, { size: 16 }), " Back to news"));
  }
  function News() {
    const hash = useHash();
    const route = parseRoute(hash);
    const [query, setQuery] = (0, import_react14.useState)("");
    (0, import_react14.useEffect)(() => {
      if (route.view === "post") window.scrollTo({ top: 0 });
    }, [route.view, route.slug]);
    const title2 = route.view === "post" ? "News" : route.view === "events" ? "Events" : "News & Events";
    return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(PageBanner, { eyebrow: "Latest from campus", title: title2 === "News" ? "News" : "News & Events", lead: "Results, announcements and dates for the Riverside community.", art: "stage", slot: "banner-news" }), /* @__PURE__ */ import_react14.default.createElement("section", { className: "section news-page" }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "container news-grid" }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "news-main" }, route.view === "post" ? /* @__PURE__ */ import_react14.default.createElement(Post, { slug: route.slug }) : route.view === "events" ? /* @__PURE__ */ import_react14.default.createElement(Events, null) : /* @__PURE__ */ import_react14.default.createElement(List, { route, query, onClear: () => setQuery("") })), /* @__PURE__ */ import_react14.default.createElement(Sidebar, { query, setQuery, activeTag: route.tag }))));
  }

  // src/pages/Contact.jsx
  var import_react15 = __toESM(require_react());
  function ContactForm() {
    const [v, setV] = (0, import_react15.useState)({ name: "", email: "", subject: useQuery("subject"), message: "", website: "" });
    const [err, setErr] = (0, import_react15.useState)({});
    const [state, setState] = (0, import_react15.useState)({ phase: "form" });
    const on = (k) => (e) => setV({ ...v, [k]: e.target.value });
    const submit = async (ev) => {
      ev.preventDefault();
      const e = {};
      if (!v.name.trim()) e.name = "Please enter your full name.";
      if (!emailOk(v.email)) e.email = "Please enter a valid email address.";
      if (!v.subject.trim()) e.subject = "Please add a subject.";
      if (v.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
      setErr(e);
      if (Object.keys(e).length) {
        const first = document.querySelector(".contact-form .has-error input, .contact-form .has-error textarea");
        if (first) first.focus();
        return;
      }
      if (v.website) return;
      setState({ phase: "sending" });
      const r = await sendForm("Website enquiry: " + v.subject, { Name: v.name, Email: v.email, Subject: v.subject, Message: v.message }, S.email);
      if (r.mode === "mailto") window.location.href = r.href;
      setState({ phase: r.mode, href: r.href });
    };
    if (["mailto", "sent", "error"].includes(state.phase)) {
      return /* @__PURE__ */ import_react15.default.createElement(Confirmation, { state }, /* @__PURE__ */ import_react15.default.createElement(Btn, { variant: "ghost", onClick: () => {
        setV({ name: "", email: "", subject: "", message: "", website: "" });
        setState({ phase: "form" });
      } }, "Send another message"));
    }
    return /* @__PURE__ */ import_react15.default.createElement("form", { className: "contact-form", onSubmit: submit, noValidate: true }, /* @__PURE__ */ import_react15.default.createElement(Honeypot, { value: v.website, onChange: on("website") }), /* @__PURE__ */ import_react15.default.createElement(Field2, { label: "Full Name", name: "c-name", value: v.name, onChange: on("name"), error: err.name, required: true, autoComplete: "name" }), /* @__PURE__ */ import_react15.default.createElement(Field2, { label: "Email", name: "c-email", type: "email", value: v.email, onChange: on("email"), error: err.email, required: true, autoComplete: "email" }), /* @__PURE__ */ import_react15.default.createElement(Field2, { label: "Subject", name: "c-subject", value: v.subject, onChange: on("subject"), error: err.subject, required: true }), /* @__PURE__ */ import_react15.default.createElement(Field2, { label: "Message", name: "c-message", textarea: true, rows: 6, value: v.message, onChange: on("message"), error: err.message, required: true }), /* @__PURE__ */ import_react15.default.createElement(Btn, { type: "submit", variant: "gold", disabled: state.phase === "sending", className: "block" }, state.phase === "sending" ? "Sending\u2026" : "Submit Now"));
  }
  function Contact() {
    return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(PageBanner, { eyebrow: "Get in touch", title: "Contact Us", lead: "Questions about admissions, a visit, or anything else? We usually reply within one working day.", art: "building", align: "center", slot: "banner-contact" }), /* @__PURE__ */ import_react15.default.createElement("section", { className: "contact-info" }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "container contact-cols" }, /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement(I.phone, { size: 30 }), /* @__PURE__ */ import_react15.default.createElement("h2", null, "Phone"), /* @__PURE__ */ import_react15.default.createElement("p", null, S.officeHours, ". Our receptionist will put you through to the right person."), /* @__PURE__ */ import_react15.default.createElement("a", { href: "tel:" + S.phoneLink }, S.phone)), /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement(I.mail, { size: 30 }), /* @__PURE__ */ import_react15.default.createElement("h2", null, "Email"), /* @__PURE__ */ import_react15.default.createElement("p", null, "For general questions write to us here. For admissions questions use the Admissions address."), /* @__PURE__ */ import_react15.default.createElement("a", { href: "mailto:" + S.email }, S.email), /* @__PURE__ */ import_react15.default.createElement("br", null), /* @__PURE__ */ import_react15.default.createElement("a", { href: "mailto:" + S.admissionsEmail }, S.admissionsEmail)), /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement(I.pin, { size: 30 }), /* @__PURE__ */ import_react15.default.createElement("h2", null, "Location"), /* @__PURE__ */ import_react15.default.createElement("p", null, S.addressLine1, /* @__PURE__ */ import_react15.default.createElement("br", null), S.addressLine2), /* @__PURE__ */ import_react15.default.createElement("a", { href: mapsLink(), target: "_blank", rel: "noopener noreferrer" }, "View On Google Map")))), /* @__PURE__ */ import_react15.default.createElement("section", { className: "section contact-form-section" }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "container narrow" }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "section-head center" }, /* @__PURE__ */ import_react15.default.createElement("h2", { className: "caps" }, "Leave us your info"), /* @__PURE__ */ import_react15.default.createElement("p", { className: "lead caps" }, "and we will get back to you.")), /* @__PURE__ */ import_react15.default.createElement(ContactForm, null))), /* @__PURE__ */ import_react15.default.createElement("section", { className: "map", "aria-label": "Map" }, /* @__PURE__ */ import_react15.default.createElement("iframe", { title: "Map showing " + S.fullName, src: mapsEmbed(), loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" })));
  }

  // src/main.jsx
  var PAGES = {
    home: [Home, ""],
    academics: [Academics, "Academics"],
    admissions: [Admissions, "Admissions"],
    tuition: [Tuition, "Tuition & Financial Aid"],
    "campus-life": [CampusLife, "Campus Life"],
    tour: [Tour, "Schedule a Tour"],
    news: [News, "News & Events"],
    contact: [Contact, "Contact"]
  };
  var [Page, title] = PAGES[currentPage()] || PAGES.home;
  (0, import_client.createRoot)(document.getElementById("root")).render(
    /* @__PURE__ */ import_react16.default.createElement(Shell, { title }, /* @__PURE__ */ import_react16.default.createElement(Page, null))
  );
})();
