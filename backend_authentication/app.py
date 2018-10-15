# -*- coding: utf-8 -*-

import time
import math
import hashlib
import redis
from flask import Flask
from flask import Response
from flask import json
import time


app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

"""
Jsonify an array and wrapper an instance of Response object.

Returns an instance of flask.Response.
"""
def api_response(data, statusCode=200):
    body = json.dumps(data)
    return Response(body, status=statusCode, mimetype='application/json')

"""
Get the amount of authentication request. Could raise an instance of
redis.exceptions.ConnectionError.

>>> get_hit_count()
200
"""
def get_hit_count():
    # try 3 times to get the amount of hits in redis server
    retries = 3
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

"""
Build a md5 hash to connect to Marvel API. Read the section "Authentication for
Server-Side Applications".

Receive three paramaters: count/timestamp, privateKey
and publicKey/apiKey.

Returns md5 hash.

Link: https://developer.marvel.com/documentation/authorization
"""
def generate_hash(count, privateKey, publicKey):
    m = hashlib.md5()
    m.update(count.encode('utf-8'))
    m.update(privateKey.encode('utf-8'))
    m.update(publicKey.encode('utf-8'))

    return m.hexdigest()

@app.route('/v1/auth')
def authentication():
    try:
        count = get_hit_count()
    except Exception as e:

        # If we cannot able to get it in redis server, we return the current time.
        # It is not a backdoor. The mean of timestamp is to be a unique value to
        # create the md5 hash.
        count = math.ceil(time.time())

    # TODO get from env file
    privateKey = 'myprivate'

    # TODO get from env file
    apiKey = 'foo'
    count = str(count)

    hash = generate_hash(count, privateKey, apiKey)

    data = {
        'hash': hash,
        'timestamp': count
    }

    return api_response(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
