from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime as datetime
import certifi

from models import db
from models.user import User
from models.event import Event

# Setup

app = Flask(__name__)


CORS(app) # To prevent CORS errors during local development
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config["MONGODB_HOST"] = "mongodb+srv://username:Password1234@cluster0.z5glouc.mongodb.net/ssl_cert_reqs=CERT_NONE?retryWrites=true&w=majority"


db.init_app(app)


# Routes
@app.route('/ping')
def pingpong():
    return "pong"

@app.route('/create-user', methods = ['POST'])
def create_user():
    body = request.get_json()
    new_user = User(**body).save()
    return jsonify(new_user)

@app.route('/create-event', methods = ['POST'])
def create_event():
    date = datetime.datetime.strptime(request.json['time'], '%Y-%m-%d %H:%M:%S')
    new_event = Event(
        title = request.json['title'],
        time = date,
        description = request.json['description'],
        max_participants = request.json['max_participants'],
        owner = request.json['owner'],
    ).save()
    return jsonify(new_event)

@app.route('/delete-event', methods = ['DELETE'])
def delete_event():
    idNum = request.json['_id']['$oid']
    deletedEvent = Event.objects.get(id=idNum)
    deletedEvent.delete()
    return jsonify(deletedEvent)

@app.route('/delete-user', methods = ['DELETE'])
def delete_user():
    idNum = request.json['_id']['$oid']
    deletedUser = User.objects.get(id=idNum)
    deletedUser.delete()
    return jsonify(deletedUser)

if __name__ == "__main__":
    app.run(debug=True)