from openerp import api, models, fields

# Add Assistant model into database
class assistant(models.Model):
    _name = 'pos.assistant.line'

    assistant_id = fields.Many2one('res.users', string="Assistant Name")
    order_line_id = fields.Many2one('pos.order.line', string="Invoice Line Reference", ondelete='cascade', index=True, readonly='True')
    name = fields.Selection([('shampoo', 'Shampoo'), ('cut', 'Cut'), ('perm', 'Perm'), ('color', 'Color'), ('dry', 'Dry'), ('other', 'Other')], string="Service")
    price = fields.Float(string="Price")

# Add two fields into pos.order.line model
class pos_assistant_line(models.Model):
    _inherit = 'pos.order.line'

    service_point_id = fields.Many2one('res.users', string="Sales Person", ondelete='set null')
    assistant_ids = fields.One2many('pos.assistant.line','order_line_id', string="Assistant")
