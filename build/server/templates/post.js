var Handlebars = require("handlebars/runtime");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"post-main-img-container\">\n      <img\n        class=\"post-main-img\"\n        alt=\"\"\n        src=\""
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "-800px.jpg\"\n        srcset=\""
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "-1024px.jpg 1024w,\n                "
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "-800px.jpg 800w,\n                "
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "-640px.jpg 640w,\n                "
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "-320px.jpg 320w\"\n        sizes=\"(min-width: 800px) 765px,\n               (min-width: 600px) calc(100vw - 32px),\n               calc(100vw - 16px)\"  \n      >\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<article class=\"card post\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"post-content\">\n    <img\n      class=\"post-avatar\"\n      alt=\"\"\n      width=\"40\" height=\"40\"\n      src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "-1x.jpg\"\n      srcset=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "-2x.jpg 2x,\n              "
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "-3x.jpg 3x\"\n    >\n    <div class=\"post-text-content\">\n      <div class=\"post-title\">\n        <h1 class=\"post-heading\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n        <time class=\"post-time\" datetime=\""
    + alias3(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "\"></time>\n      </div>\n      <p>\n        "
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n      </p>\n    </div>\n  </div>\n</article>";
},"useData":true});