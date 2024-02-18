import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: favicon,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: favicon,
    },
    tutorial: false,
    notifications: { releases: false },
    locales: ["uk"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "CMS Admin",
        "app.components.LeftMenu.navbrand.workplace": "CMS",
        "Auth.form.welcome.title": "Welcome to CMS",
      },
    },
  },
  bootstrap(app: any) {
    document.title = "CMS Admin";
  },
};
