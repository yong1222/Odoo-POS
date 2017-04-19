function openerp_pos_select_salesperson_db(instance, module){ //module = openerp.point_of_sale;
    var QWeb = instance.web.qweb, _t = instance.web._t;

    module.PosDB.include({
        init: function(options){
            this._super();
            // Cashier
            this.salespersons = {}
            this.salesperson_by_id = {};
        },

        set_salesperson: function(users) {
            this.salespersons = users;
            var self = this;
            _.each(users, function(user) {
                self.salesperson_by_id[user.id] = {
                    image: user.image_small,
                    name: user.name,
                    id: user.id,
                }
            });
        },

        get_salesperson: function(id) {
            if (typeof(id) == 'undefined') {
                return this.salespersons;
            }
            return this.salesperson_by_id[id] || {};
        },
    });
}
