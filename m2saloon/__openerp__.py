{
    'name': "POS M2 Sales Person",
    'version': '1.0.0',
    'author': 'ITSMART - SY',
    'category': 'Point of Sale',
    'website': 'https://www.itsmart.my',
    'depends': ['point_of_sale'],
    'description':"""
    This module will add salesperson and sales assistants into each POS orderline.
    Add two function into POS system which allow cashier to assign Salesperson and Assistants into the Order/Invoice 
    """,
    'data': [
        'views.xml',
    ],
    'qweb': [
        'static/src/xml/*.xml',
    ],
    'installable': True,
    'application': True,
}
