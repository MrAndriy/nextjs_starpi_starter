export default ({ env }) => {
  return {
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
  };
};
