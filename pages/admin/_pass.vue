<template>
  <div />
</template>

<script>
import sha256 from "sha256";

export default {
  validate({ params }) {
    console.log(sha256.x2(process.env.ADMIN_URL)); // use it to know how to rename the admin config folder
    return params.pass === process.env.ADMIN_URL;
  },
  head() {
    return {
      link: [
        {
          href: `admin/${sha256.x2(process.env.ADMIN_URL)}/config.yml`,
          type: "text/yaml",
          rel: "cms-config-url"
        }
      ],
      script: [
        { src: "https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js" },
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>
