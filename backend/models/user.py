from models import db

class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True)
    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    gender = db.StringField(required=True)
    phone_number = db.StringField(required=True)
    graduation_year = db.IntField(required=True)
    major = db.StringField(required=True)
    groups_owned = db.ListField(db.ReferenceField('Event'))
    groups_participating = db.ListField(db.ReferenceField('Event'))