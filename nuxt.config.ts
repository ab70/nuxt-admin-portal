// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "nHRM",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        // { rel: "preconnect", href: "/assets/fonts.googleapis.com/index.html" },
        // { rel: "preconnect", href: "/assets/fonts.gstatic.com/index.html" },
        // { rel: "stylesheet", href: "/assets/fonts.googleapis.com/css21eba.css?family=Inter:wght@300;400;500;600;700&amp;ampdisplay=swap" },
        { rel: "stylesheet", href: "/assets/vendor/fonts/materialdesignicons.css" },
        { rel: "stylesheet", href: "/assets/vendor/fonts/flag-icons.css" },
        // { rel: "stylesheet", href: "/assets/vendor/libs/node-waves/node-waves.css" },
        { rel: "stylesheet", href: "/assets/vendor/css/rtl/core.css" },
        { rel: "stylesheet", href: "/assets/vendor/css/rtl/theme-default.css" },
        { rel: "stylesheet", href: "/assets/css/demo.css" },
        // { rel: "stylesheet", href: "/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" },
        // { rel: "stylesheet", href: "/assets/vendor/libs/typeahead-js/typeahead.css" },
        // { rel: "stylesheet", href: "/assets/vendor/libs/%40form-validation/umd/styles/index.min.css" },
        { rel: "stylesheet", href: "/assets/vendor/css/pages/dashboards-crm.css" },
        // { rel: "stylesheet", href: "/assets/vendor/libs/apex-charts/apex-charts.css" }
      ],
      script: [
        { type: "text/javascript", defer: true, src: "/assets/vendor/js/helpers.js" },
        // { type: "text/javascript", defer: true, src: "/assets/vendor/js/template-customizer.js" },
        { type: "text/javascript", defer: true, src: "/assets/js/config.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/jquery/jquery.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/popper/popper.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/js/bootstrap.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/node-waves/node-waves.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/hammer/hammer.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/i18n/i18n.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/typeahead-js/typeahead.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/js/menu.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/%40form-validation/umd/bundle/popular.min.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/%40form-validation/umd/plugin-bootstrap5/index.min.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/%40form-validation/umd/plugin-auto-focus/index.min.js" },
        { type: "text/javascript", defer: true, src: "/assets/js/main.js" },
      //   { type: "text/javascript", defer: true, src: "/assets/vendor/libs/apex-charts/apexcharts.js" },
      //   { type: "text/javascript", defer: true, src: "/assets/js/pages-auth.js" },
        { type: "text/javascript", defer: true, src: "/assets/js/dashboards-crm.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/cleavejs/cleave.js" },
        { type: "text/javascript", defer: true, src: "/assets/vendor/libs/cleavejs/cleave-phone.js" },
      ]
    }
  }
})
