from openerp import api, models, fields


class service_person(models.Model):
    _name = 'pos.service.person'

    service_person_id = fields.Many2one('res.users', string="Service Person Name")
    service_point_ids = fields.One2many('pos.order.line', 'service_point_id', string="Service point references")


class assistant(models.Model):
    _name = 'pos.assistant.line'

    assistant_id = fields.Many2one('res.users', string="Assistant Name")
    order_line_id = fields.Many2one('pos.order.line', string="Invoice Line Reference", ondelete='cascade', index=True, readonly='True')
    product_id = fields.Selection([('shampoo', 'Shampoo'), ('cut', 'Cut'), ('perm', 'Perm'), ('color', 'Color'), ('dry', 'Dry'), ('other', 'Other')], string="Service")
    price = fields.Float(string="Price")


class account_invoice(models.Model):
    _inherit = 'pos.order.line'

    service_point_id = fields.Many2one('pos.service.person', string="Service Person ID", ondelete='set null')
    assistant_ids = fields.One2many('pos.assistant.line', 'order_line_id', string="Assistant references")