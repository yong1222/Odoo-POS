function openerp_m2saloon_salesperson(instance, module) {

  var QWeb = instance.web.qweb;
  var _t   = instance.web._t;

  module.PosDB = instance.web.Class.extend({
    name: 'openerp_pos_db',
    limit: 100,
    init: function(options){
      options = options || {};
      this.name = options.name || this.name;
      this.limit = options.limit || this.limit;

      //cache the data in memory to avoid roundtrips to the localstorage
      this.cache = {};

      this.user_sorted = [];
      this.user_by_id = {};
    },

    get_user_by_id: function(id){
      return this.user_by_id[id];
    },

    get_users_sorted: function(max_count){
      max_count = max_count ? Math.min(this.partner_sorted.length, max_count) : this.partner_sorted.length;
      var users = [];
      for (var i = 0; i < max_count; i++){
        users.push(this.user_by_id[this.user_sorted[i]]);
      }
      return users;
    },
  });


  module.UserListScreenWidget = module.ScreenWidget.extend({
    template: 'SalesPersonListScreenWidget',

    show_leftpane: false,
    previous_screen: 'products',

    // start: function(){
    //   var self = this;
    //   return instance.web.Model('res.users')
    //   .query(['name'])
    //   .then(function (results) {
    //     _(results).each(function (item) {
    //       self.$el.append(QWeb.render('SalesPersonListScreenWidget',{item: item}));
    //     });
    //   });
    //
    // },

    renderElement: function(){
      var self = this;
      this._super();
      var order = this.pos.get('selectedOrder');
      if(!order){
        return;
      }
      this.$('.back').click(function(){
        self.pos_widget.screen_selector.set_current_screen(self.previous_screen);
      });
    },

    show: function(){
      var self = this;
      this._super();
      this.renderElement();

      this.old_client = this.pos.get_order().get_client();

      var order = this.pos.get('selectedOrder');
      var neworder = new module.Order({
        pos: this.pos,
        temporary: true,
      });
      neworder.set('client',order.get('client'));
    },
  });

  module.PosWidget.include({
    build_widgets: function(){
      var self = this;
      this._super();

      this.userlist_screen = new module.UserListScreenWidget(this,{});
      this.userlist_screen.appendTo(this.$('.screens'));
      this.screen_selector.add_screen('salesperson',this.userlist_screen);

      var salesperson = $(QWeb.render('AssignSalesPerson'));

      salesperson.click(function(){
        var order = self.pos.get('selectedOrder');

        if(order.get('orderLines').models.length > 0){

          self.pos_widget.screen_selector.set_current_screen('salesperson');

        }
      });
      salesperson.appendTo(this.$('.control-buttons'));
      this.$('.control-buttons').removeClass('oe_hidden');
    },
  });
}


// salesperson.click(function(){
//   var order = self.pos.get('selectedOrder');
//
//   if(order.get('orderLines').models.length > 0){
//
//     var UserListScreenWidget = ScreenWidget.extend({
//       template: 'SalesPersonListScreenWidget',
//
//       auto_back: true,
//
//       show: function(){
//         var self = this;
//         this._super();
//
//         this.$('.back').click(function(){
//           self.gui.back();
//         });
//       }
//
//       hide: function(){
//         this._super();
//       },
//     });
//     gui.define_screen({name: 'userlist', widget: SalesPersonListScreenWidget});
//   });
//
// });
