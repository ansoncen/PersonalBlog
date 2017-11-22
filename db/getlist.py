from pymongo import MongoClient, DESCENDING
from bson import json_util

# get list of posts
def getList():
    # connect to the MongoDB
    client = MongoClient('<URI>')
    db = client['personalBlog']
    return db['posts']

posts = getList()
posts = posts.find(projection={'_id': True, 'title': True, 'time': True, 'author': True}).sort('_id', DESCENDING)
print(json_util.dumps(posts))
