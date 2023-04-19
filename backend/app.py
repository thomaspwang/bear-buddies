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

app.config["MONGODB_HOST"] = "mongodb+srv://username:Password1234@cluster0.z5glouc.mongodb.net/?retryWrites=true&w=majority"


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
    idNum = request.json['id']
    deletedEvent = Event.objects.get(id=idNum)
    deletedEvent.delete()
    return jsonify(deletedEvent)

@app.route('/delete-user', methods = ['DELETE'])
def delete_user():
    idNum = request.json['id']
    deletedUser = User.objects.get(id=idNum)
    deletedUser.delete()
    return jsonify(deletedUser)

@app.route('/get-user', methods = ['GET'])
def get_user():
    idNum = request.json['id']
    returnedUser = User.objects.get(id=idNum)
    return jsonify(returnedUser)

@app.route('/get-event', methods = ['GET'])
def get_event():
    idNum = request.json['id']
    returnedEvent = Event.objects.get(id=idNum)
    return jsonify(returnedEvent)

@app.route('/update-event', methods = ['PUT'])
def update_event():
    changes = request.get_json()
    idNum = changes['id']
    changedEvent = Event.objects.get(id=idNum)
    changedEvent.update(**changes)
    return jsonify(changedEvent)

@app.route('/update-user', methods = ['PUT'])
def update_user():
    changes = request.get_json()
    idNum = changes['id']
    changedEvent = User.objects.get(id=idNum)
    changedEvent.update(**changes)
    return jsonify(changedEvent)

@app.route('/get-all-events', methods = ['GET'])
def get_all_events():
    doc = Event.objects()
    return jsonify(doc)



if __name__ == "__main__":
    app.run(debug=True)