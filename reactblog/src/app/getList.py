import json
from bson import json_util, ObjectId
from pymongo import MongoClient, DESCENDING

def getPostsFromDB():
    # connect to the MongoDB
    client = MongoClient('mongodb://censihan:csh1993@personalblog-shard-00-00-vuuuj.mongodb.net:27017,personalblog-shard-00-01-vuuuj.mongodb.net:27017,personalblog-shard-00-02-vuuuj.mongodb.net:27017/test?ssl=true&replicaSet=personalBlog-shard-0&authSource=admin')
    db = client['personalBlog']
    posts = db['posts']

    return json.loads(json_util.dumps(posts.find(projection={'_id': True, 'title': True, 'time': True, 'author': True}).sort('_id', DESCENDING)))


def getList(event, context):
    body = getPostsFromDB()

    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
            "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
            },
        "body": json.dumps(body)
    }

    return response
