import json
from bson import json_util, ObjectId
from pymongo import MongoClient

def getPostFromDB(id):
    # connect to the MongoDB
    client = MongoClient('<MongoURI>')
    db = client['personalBlog']
    posts = db['posts']

    return json.loads(json_util.dumps(posts.find_one({"_id": id})))


def getPost(event, context):
    id = event['pathParameters']['id']
    body = getPostFromDB(ObjectId(id))

    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
            "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
            },
        "body": json.dumps(body)
    }

    return response
