function openerp_pos_select_salesperson_screens(instance, module){ //module = openerp.point_of_sale;
    var QWeb = instance.web.qweb,
    _t = instance.web._t;


    module.SalesPersonSelectionScreenWidget = module.ScreenWidget.extend({
        template: 'SalesPersonSelectionScreenWidget',
        back_screen: 'products', // TODO: remove by default screen

        init: function(parent, options){
            this.options = options || [];
            this.parent = parent || {};
            this._super(parent, options);
        },

        show_leftpane: false,

        show: function() {
            this._super();
            var self = this;

            this.$('.salesperson-item').on('click', function(e) {
                e.stopPropagation();
                self.select_salesperson(this);

            });

            this.$('.back').click(function(){
                self.pos_widget.screen_selector.set_current_screen(self.back_screen);
            });
            // After load we reset the default screen
            // this.pos_widget.screen_selector.set_current_screen(this.back_screen);
        },

        back: function() {
            this.pos_widget.screen_selector.set_current_screen(this.back_screen);
        },

        color_random_generator: function() {
            return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
        },

        select_salesperson: function(target) {
            var self = this;

            var cashier_id = $(target).data('salesperson-id');
            cashier_id = parseInt(cashier_id);
            self.select_salesperson_by_id(cashier_id);
        },

        select_salesperson_by_id: function(salesperson_id) {
            var self = this;

            this.pos.salesperson = this.pos.db.get_salesperson(salesperson_id);

            servicepersonID = this.pos.salesperson;

            newselectedorderline.set_salesperson(servicepersonID);

            console.log(newselectedorderline);

            console.log(servicepersonID);

            this.back();
        },

    });
}
