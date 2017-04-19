function openerp_pos_select_salesperson_widgets(instance, module){ //module = openerp.point_of_sale;
    var QWeb = instance.web.qweb;
    var _t = instance.web._t;

    // module.PosWidget = module.PosWidget.extend({
    //     //Overload Section
    //     build_widgets: function(){
    //         this._super();
    //
    //         // this.selectsalesperson = new module.SalesPersonSelectionScreenWidget(this, this.pos.db.salespersons);
    //         // this.selectsalesperson.appendTo(this.$('.screens'));
    //         // this.screen_selector.screen_set['selectsalesperson'] = this.selectsalesperson;
    //
    //         // this.selectsalesperson = new module.SalesPersonSelectionScreenWidget(this, this.pos.db.salespersons);
    //         // console.log('11222223333335555>>>>>>>>', this.pos.db.salespersons)
    //         // this.selectsalesperson.appendTo(this.$('.screens'));
    //
    //         // Add new screen select cashier, set default screen = selectcashier
    //         // After load select cashier screen, reset the default screen for native function
    //         // this.screen_selector.screen_set['selectsalesperson'] = this.selectsalesperson;
    //         //this.screen_selector.default_screen = 'selectsalesperson';
    //     },
    // });

    module.PosWidget.include({
        build_widgets: function(){
            var self = this;
            this._super();

            this.selectsalesperson = new module.SalesPersonSelectionScreenWidget(this, this.pos.db.salespersons);

            this.selectsalesperson.appendTo(this.$('.screens'));
            this.screen_selector.add_screen('selectsalesperson',this.selectsalesperson);

            var salesperson = $(QWeb.render('AssignSalesPerson'));

            salesperson.click(function(){
                var order = self.pos.get('selectedOrder');
                orderLines = order.getSelectedLine();

                console.log('look here >>>>>>>>>>',order)

                console.log('zai zhe li',orderLines)

                if(order.get('orderLines').models.length > 0){

                    console.log('zai zhe li 1 >>>>',order.getSelectedLine())

                    console.log('zai zhe li 1123 >>>>',orderLines)

                    newselectedorderline = orderLines;

                    console.log('look here $$$$', newselectedorderline)

                    self.pos_widget.screen_selector.set_current_screen('selectsalesperson');

                }

            });

            salesperson.appendTo(this.$('.control-buttons'));
            this.$('.control-buttons').removeClass('oe_hidden');
        },
    });
}
