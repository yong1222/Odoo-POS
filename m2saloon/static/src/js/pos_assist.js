odoo.define('m2saloon.assistant', function (require) {
  "use strict";

  var models = require('point_of_sale.models');
  var screens = require('point_of_sale.screens');
  var core = require('web.core');

  var QWeb = core.qweb;
  var _t   = core._t;

  console.log("----->POS JS Loaded3")

  var AssistantButton = screens.ActionButtonWidget.extend({
    template: "AddAssistantButton",

  });

  screens.define_action_button({
    'name': 'assistant',
    'widget': AssistantButton,
  });

  console.log("------POS JS Loaded4------")
});
