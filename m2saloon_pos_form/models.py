# from openerp import api, models, fields
#
# class assistant(models.Model):
#     _name = 'pos.assistant.line'
#
#     assistant_id = fields.Many2one('res.users', string="Assistant Name")
#     order_line_id = fields.Many2one('pos.order.line', string="Invoice Line Reference", ondelete='cascade', index=True, readonly='True')
#     name = fields.Selection([('shampoo', 'Shampoo'), ('cut', 'Cut'), ('perm', 'Perm'), ('color', 'Color'), ('dry', 'Dry'), ('other', 'Other')], string="Service")
#     price = fields.Float(string="Price")
#
# class pos_assistant_line(models.Model):
#     _inherit = 'pos.order.line'
#
#     service_point_id = fields.Many2one('res.users', string="Service Person", ondelete='set null')
#     assistant_ids = fields.One2many('pos.assistant.line','order_line_id', string="Assistant")

def show_pos_orderline_form_view(self, cr, uid, ids, context=None):
    return {
        'name': ('Sale line'),
        'view_type': 'form',
        'view_mode': 'form',
        'res_model': 'pos.order.line',
        'view_id': False,
        'type': 'ir.ui.view',
    }
