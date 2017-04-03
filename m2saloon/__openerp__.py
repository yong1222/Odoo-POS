{
    'name': "POS M2 Sales Person",
    'version': '0.1',
    'author': 'ITSMART - SY',
    'category': 'Point of Sale',
    'website': 'https://www.itsmart.my',
    'depends': ['point_of_sale'],
    'data': [
        'views.xml',
    ],
    'qweb': [
        'static/src/xml/assistant.xml',
        'static/src/xml/salesperson.xml',
    ],
    'installable': True,
}