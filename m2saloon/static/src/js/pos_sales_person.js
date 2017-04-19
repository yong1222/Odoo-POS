function openerp_m2saloon_salesperson(instance, module) {

    var QWeb = instance.web.qweb;
    var _t   = instance.web._t;

    // //Get data from database
    // module.PosDB1 = instance.web.Class.extend({
    //     name: 'openerp_pos_db',
    //     limit: 100,
    //     init: function(options){
    //         options = options || {};
    //         this.name = options.name || this.name;
    //         this.limit = options.limit || this.limit;
    //
    //         //cache the data in memory to avoid roundtrips to the localstorage
    //         this.cache = {};
    //
    //         this.user_sorted = [];
    //         this.user_by_id = {};
    //     },
    //
    //     get_user_by_id: function(id){
    //         return this.user_by_id[id];
    //     },
    //
    //     get_users_sorted: function(max_count){
    //         max_count = max_count ? Math.min(this.user_sorted.length, max_count) : this.user_sorted.length;
    //         var users = [];
    //         for (var i = 0; i < max_count; i++){
    //             users.push(this.user_by_id[this.user_sorted[i]]);
    //         }
    //         return users;
    //     },
    // });
    //
    // //Screen to select sales person
    // module.UserListScreenWidget = module.ScreenWidget.extend({
    //     template: 'SalesPersonListScreenWidget',
    //
    //     // init: function(parent, options){
    //     //   this._super(parent, options);
    //     // }
    //
    //     show_leftpane: false,        //the screen does not show leftpane
    //     previous_screen: 'products', //when click cancel will back to product list screen
    //
    //     renderElement: function(){
    //         var self = this;
    //         this._super();
    //         var order = this.pos.get('selectedOrder');
    //         if(!order){
    //             return;
    //         }
    //         this.$('.back').click(function(){
    //             self.pos_widget.screen_selector.set_current_screen(self.previous_screen);
    //         });
    //     },
    //
    //     show: function(){
    //         var self = this;
    //         this._super();
    //         this.renderElement();
    //
    //         console.log('aaaaaaa');
    //         console.log(this.pos.db.get_partners_sorted(1000));
    //
    //         var users = new module.PosDB1(this,{});
    //
    //         console.log(users);
    //
    //         var userslist = users.get_users_sorted(1000);
    //
    //         console.log(userslist);
    //
    //         this.render_list(this.pos.db.get_partners_sorted(1000));
    //
    //         var order = this.pos.get('selectedOrder');
    //
    //         var neworder = new module.Order({
    //             pos: this.pos,
    //             temporary: true,
    //         });
    //         neworder.set('client',order.get('client'));
    //     },
    //
    //     render_list: function(users){
    //         var self = this;
    //
    //         var contents = this.$el[0].querySelector('.client-list-contents');
    //         contents.innerHTML = "";
    //         for(var i = 0, len = Math.min(users.length,1000); i < len; i++){
    //             var user = users[i];
    //             var clientline_html = Qweb.render('Userline',{widget: this, partner:users[i]});
    //             var clientline = document.createElement('tbody');
    //             clientline.innerHTML = client_html;
    //             clientline = clientline.childNodes[1];
    //
    //             if(users === this.new_client){
    //                 clientline.classList.add('highlight');
    //             }else{
    //                 clientline.classList.remove('highlight');
    //             }
    //
    //             contents.appendChild(clientline);
    //         }
    //     },
    //
    // });
    //
    // //Append the Salesperson button and Salesperson Screen widget
    // module.PosWidget.include({
    //     build_widgets: function(){
    //         var self = this;
    //         this._super();
    //
    //         this.userlist_screen = new module.UserListScreenWidget(this,{});
    //         this.userlist_screen.appendTo(this.$('.screens'));
    //         this.screen_selector.add_screen('salesperson',this.userlist_screen);
    //
    //         var salesperson = $(QWeb.render('AssignSalesPerson'));
    //
    //         salesperson.click(function(){
    //             var order = self.pos.get('selectedOrder');
    //
    //             if(order.get('orderLines').models.length > 0){
    //
    //                 self.pos_widget.screen_selector.set_current_screen('selectsalesperson');
    //
    //             }
    //         });
    //         salesperson.appendTo(this.$('.control-buttons'));
    //         this.$('.control-buttons').removeClass('oe_hidden');
    //     },
    // });

}
