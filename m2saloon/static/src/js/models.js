function openerp_pos_select_salesperson_models(instance, module){ //module = openerp.point_of_sale;
    var QWeb = instance.web.qweb;
    var _t = instance.web._t;

    var PosModelSuper = module.PosModel;
    module.PosModel = module.PosModel.extend({

        models: (function() {

            var base_posmodel_model = module.PosModel.prototype.models;

            base_posmodel_model.push(
                // get users
                {
                    model: 'res.users',
                    fields: ['id', 'image_small', 'name', 'ean13'],
                    loaded: function(self, users){
                        self.users = users;
                        self.db.set_salesperson(users);
                    },
                }
            );
            console.log(">>>>>>>>>>>>>>", base_posmodel_model)
            return base_posmodel_model;
        })(),
    });

    var orderline_id = 1;

    //overwrite and extend the existing module in POS
    module.Orderline = module.Orderline.extend({
        initialize: function(attr,options){
            this.pos = options.pos;
            this.order = options.order;
            this.product = options.product;
            this.price   = options.product.price;
            this.set_quantity(1);
            this.discount = 0;
            this.discountStr = '0';
            this.type = 'unit';
            this.selected = false;
            this.id       = orderline_id++;
            this.salesperson = {};
            this.assistants = {};
        },
        clone: function(){
            var orderline = new module.Orderline({},{
                pos: this.pos,
                order: null,
                product: this.product,
                price: this.price,
                salesperson: this.saleperson,
            });
            orderline.quantity = this.quantity;
            orderline.quantityStr = this.quantityStr;
            orderline.discount = this.discount;
            orderline.type = this.type;
            orderline.selected = false;
            orderline.salesperson = this.saleperson;
            return orderline;
        },

        set_salesperson: function(salesperson){
            this.salesperson = salesperson;
        },

        get_salesperson: function(){
            return this.salesperson;
        },
        //export to backend database
        export_as_JSON: function() {
            return {
                qty: this.get_quantity(),
                price_unit: this.get_unit_price(),
                discount: this.get_discount(),
                product_id: this.get_product().id,
                service_point_id: this.get_salesperson().id,
                // assistant_ids: this.get_assistants(),
            };
        },
    });
}
