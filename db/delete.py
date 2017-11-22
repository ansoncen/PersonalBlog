from pymongo import MongoClient

client = MongoClient('<URI>')
db = client['personalBlog']
posts = db['posts']

id = posts.find_one()['_id']

def delPost_by_id(id):
    client = MongoClient('<URI>')
    db = client['personalBlog']
    posts = db['posts']
    result = posts.delete_many({"_id": id})
    return result

print(delPost_by_id(id))
