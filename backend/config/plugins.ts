export default ({ env }) => {
  return {
    seo: {
      enabled: true,
    },
    // email: {
    //   config: {
    //     provider: "nodemailer",
    //     providerOptions: {
    //       host: env("SMTP_HOST", "smtp.gmail.com"),
    //       port: env("SMTP_PORT", 587),
    //       // secure: false,
    //       auth: {
    //         type: "login", // default
    //         user: env("SMTP_USER"),
    //         pass: env("SMTP_PASSWORD"),
    //       },
    //     },
    //     settings: {
    //       defaultFrom: `CMS <no-reply@${env("EMAIL_SENDER", "cms")}>`,
    //       defaultReplyTo: env("EMAIL_RECIPIENT"),
    //     },
    //   },
    // },
    "schemas-to-ts": {
      enabled: true,
    },
    sitemap: {
      enabled: true,
      config: {
        cron: "0 0 0 * * *",
        limit: 45000,
        xsl: true,
        autoGenerate: false,
        caching: true,
        allowedFields: ["id", "uid", "slug"],
        excludedTypes: [],
      },
    },
    redirects: {
      enabled: true,
    },
    publisher: {
      enabled: true,
    },
    "preview-button": {
      config: {
        contentTypes: [
          {
            uid: "api::home.home",
            published: {
              url: env("FRONTEND_URL", "http://localhost:3000"),
              copy: false,
            },
          },
          {
            uid: "api::page.page",
            draft: {
              url: `${env("FRONTEND_URL", "http://localhost:3000")}/api/draft`,
              copy: false,
              query: {
                type: "page",
                slug: "{slug}",
                secret: env("PREVIEW_SECRET"),
              },
              openTarget: "_blank",
            },
            published: {
              url: `${env("FRONTEND_URL", "http://localhost:3000")}/{slug}`,
              copy: false,
            },
          },
          {
            uid: "api::post.post",
            draft: {
              url: `${env("FRONTEND_URL", "http://localhost:3000")}/api/draft`,
              copy: false,
              query: {
                type: "news",
                slug: "{slug}",
                secret: env("PREVIEW_SECRET"),
              },
              openTarget: "_blank",
            },
            published: {
              url: `${env(
                "FRONTEND_URL",
                "http://localhost:3000"
              )}/news/{slug}`,
              copy: false,
            },
          },
        ],
      },
    },
  };
};
