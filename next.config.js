module.exports = {
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "example.com",
        defaultLocale: "en",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
      },
    ],
  },
};
