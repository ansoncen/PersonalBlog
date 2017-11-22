from pymongo import MongoClient
import datetime

# make new post
post = {
    'title': 'blog',
    'text': 'context',
    'time': str(datetime.date.today()),
    'author': 'your name'
}

def post_request(post):
    client = MongoClient('<URI>')
    db = client['personalBlog']
    posts = db['posts']

    post_id = posts.insert_one(post).inserted_id
    return post_id

print(post_request(post))
