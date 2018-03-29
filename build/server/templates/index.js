var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <meta name=\"theme-color\" content=\"#303F9F\">\n  <link rel=\"icon\" href=\"/imgs/icon.png\">\n  <link rel=\"manifest\" href=\"/manifest.json\">\n  <link rel=\"stylesheet\" href=\"/css/main.css\">\n  "
    + ((stack1 = ((helper = (helper = helpers.extraCss || (depth0 != null ? depth0.extraCss : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"extraCss","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = ((helper = (helper = helpers.scripts || (depth0 != null ? depth0.scripts : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"scripts","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <title>Wittr</title>\n</head>\n<body>\n  <div class=\"layout\">\n    <header class=\"toolbar\">\n      <h1 class=\"site-title\">Wittr</h1>\n    </header>\n    <main class=\"main\">\n      "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n  </div>\n</body>\n</html>";
},"useData":true});