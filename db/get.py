from pymongo import MongoClient
from bson.objectid import ObjectId

# get first post
client = MongoClient('<URI>')
db = client['personalBlog']
posts = db['posts']

id = posts.find_one()['_id']
print(id)

def getPost_by_id(id):
    client = MongoClient('<URI>')
    db = client['personalBlog']
    posts = db['posts']
    print(posts.find_one({"_id": id}))

getPost_by_id(ObjectId('5a1250b4ce7872165e35402e'))
