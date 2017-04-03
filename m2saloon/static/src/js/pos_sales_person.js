odoo.define('m2saloon.salesperson', function (require) {
  "use strict";

  var models = require('point_of_sale.models');
  var screens = require('point_of_sale.screens');
  var core = require('web.core');

  var QWeb = core.qweb;
  var _t   = core._t;

  var _super_orderline = models.Orderline.prototype;

  var SalesPersonButton = screens.ActionButtonWidget.extend({
    template: "AssignSalesPerson",
    button_click: function(){
      var line = this.pos.get_order().get_selected_orderline();
      if (line) {
        var list = [];
        for(var i = 0; i < this.pos.users.length; i++) {
          var user = this.pos.users[i];
          list.push({
            'label': user.name,
            'item': user,
          });
        }
        this.gui.show_popup('selection',{
          title: _t('Sales Person'),
          list: list,
        });
      }
    },
  });

  screens.define_action_button({
    'name': 'salesperson',
    'widget': SalesPersonButton,
  });
});
