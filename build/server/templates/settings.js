var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div>\n          <label class=\"material-radio\">\n            <input type=\"radio\" name=\"connectionType\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <span class=\"material-radio-btn\"></span>\n            <span class=\"material-radio-text\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n          </label>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "checked";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"scroller\">\n  <section class=\"card settings\">\n    <form class=\"settings-form\" action=\"/set\" method=\"POST\">\n      <h1>Connection to server</h1>\n      <div class=\"warning\">\n        <p>You browser doesn't support the fetch API, so this won't work. Try Chrome or Firefox.</p>\n      </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.connectionTypes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\n  </section>\n  <section class=\"card settings tester\">\n    <form class=\"test-form\">\n      <h1>Test results</h1>\n      <p>\n        During the course you'll be able to come here and run tests to verify everything\n        is working as expected.\n      </p>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n        <input class=\"mdl-textfield__input test-id\" type=\"text\" id=\"testId\" name=\"testId\" />\n        <label class=\"mdl-textfield__label\" for=\"testId\">Test ID</label>\n      </div>\n      <div class=\"feedback-text\"></div>\n      <div class=\"meme-container\"><div class=\"meme-img-container\"></div></div>\n    </form>\n  </section>\n</div>\n<script>\n  var config = {\n    appPort: "
    + this.escapeExpression(((helper = (helper = helpers.appPort || (depth0 != null ? depth0.appPort : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"appPort","hash":{},"data":data}) : helper)))
    + "\n  };\n</script>";
},"useData":true});