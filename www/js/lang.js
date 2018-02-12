// This is a JavaScript file

//var lng = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
var lng=lang;
if (lng.split('-').length == 2)
  lng = lng.split('-')[0];
i18next.use(i18nextXHRBackend).init({
    lng: lng,
    backend: {
        loadPath: `./locales/${lng}.json`
    }
}, function(err, t) {
  jqueryI18next.init(i18next, $);
  $("[data-i18n]").localize();
});
 