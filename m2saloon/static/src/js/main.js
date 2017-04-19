 openerp.m2saloon = function(instance){

    instance.m2saloon = {};

    var module = openerp.point_of_sale;

    // Variables to temporary store Salesperson and selected orderline
    var servicepersonID = {};
    var newselectedorderline = {};

    //openerp_pos_select_salesperson_db is a function defined in db.js
    openerp_pos_select_salesperson_db(instance,module); //this line is to import db.js
    //openerp_pos_select_salesperson_db is a function defined in models.js
    openerp_pos_select_salesperson_models(instance,module);
    openerp_pos_select_salesperson_screens(instance,module);	   // import pos_select_cashier_screens.js
    openerp_pos_select_salesperson_widgets(instance,module);    // import pos_select_cashier_widgets.js


};
