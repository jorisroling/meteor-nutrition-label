Package.describe({
  name:"jorisroling:nutrition-label",
  summary: "jQuery plugin providing a FDA-style nutrition label with any nutrition data source",
  version: "0.0.1",
  git: "https://github.com/jorisroling/meteor-nutrition-label.git"
});


Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

    // api.use(['templating', 'underscore', 'momentjs:moment@2.9.0'], 'client');

  // api.export('livestamp');

  api.addFiles(['lib/nutrition-label/nutritionLabel.js', 'lib/nutrition-label/nutritionLabel.css'], 'client');
  
  api.addAssets(['lib/nutrition-label/images/up.png','lib/nutrition-label/images/down.png'], 'client');
});