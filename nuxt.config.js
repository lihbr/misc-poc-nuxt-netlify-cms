const pkg = require("./package");
const { resolve } = require("path");
require("dotenv").config();

const { generateStaticRoutes, blogPosts } = require("./assets/js/static");

const APP_NAME = process.env.APP_NAME || pkg.name;
const APP_DESC = process.env.APP_DESC || pkg.description;
const APP_HOST = process.env.APP_HOST || "0.0.0.0";
const APP_PORT = process.env.APP_PORT || 3000;
const APP_URL = process.env.APP_URL || `http://${APP_HOST}:${APP_PORT}`;

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: APP_NAME,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: APP_DESC
      },
      { name: "msapplication-TileColor", content: "#2b5797" },
      { name: "theme-color", content: "#ffffff" }
    ],
    script: [
      // {
      //   src: SRC,
      //   defer: "", // delete key to false
      //   async: "", // delete key to false
      //   body: true // in body if true
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },

  /*
   ** Global CSS
   */
  css: ["~/assets/vendor/css/reset.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/globals.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "cookie-universal-nuxt",
    [
      "nuxt-stylus-resources-loader",
      resolve(__dirname, "assets/stylus/main.styl")
    ]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: process.env.API_URL
  },

  /*
   ** Sitemap
   */
  sitemap: {
    hostname: APP_URL,
    gzip: true,
    exclude: ["/admin/**"]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  /*
   ** Server configuration
   */
  server: {
    host: APP_HOST,
    port: APP_PORT
  },

  /*
   ** Env
   */
  env: {
    // api_url: process.env.API_URL,
    app_name: APP_NAME,
    app_desc: APP_DESC,
    cms_blogPosts: blogPosts
  },

  /*
   ** Generate
   */
  generate: {
    routes: function() {
      const _map = [];

      const staticRoutes = generateStaticRoutes();

      _map.push(...staticRoutes);

      // Add url to each route
      _map.forEach(i => {
        if (typeof i === "object") i.url = i.route;
      });

      return _map;
    }
  }
};
