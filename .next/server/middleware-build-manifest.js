self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/404": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/404.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/about-us": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/about-us.js"
    ],
    "/contact-us": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/contact-us.js"
    ],
    "/helpful-information": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/helpful-information.js"
    ],
    "/wheelchair-ramp-rentals": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/wheelchair-ramp-rentals.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];