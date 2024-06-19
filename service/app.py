from flask import Flask, request, jsonify
import json
import os
from elastic_index import Index
import requests


app = Flask(__name__, static_folder='browser', static_url_path='')

config = {
    "url" : os.getenv("ES_URI", "http://localhost"),
    "port" : os.getenv("ES_PORT ", "9200"),
    "doc_type" : "entities"
}

index = Index(config)


@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    return response

@app.route("/", methods=['POST', 'GET'])
@app.route("/search")
def catch_some():
    return app.send_static_file("index.html")

@app.route("/persoon/<id>.html")
@app.route("/locatie/<id>.html")
@app.route("/hoedanigheid/<id>.html")
@app.route("/commissie/<id>.html")
@app.route("/organisatie/<id>.html")
def get_entity(id):
    return app.send_static_file("index.html")

@app.route("/persoon/<id>.json")
def persoon_json(id):
    ret_struc = index.get_entity('Persoon', id)
    return jsonify(ret_struc["items"][0])

@app.route("/locatie/<id>.json")
def locatie_json(id):
    ret_struc = index.get_entity('Locatie', id)
    return jsonify(ret_struc["items"][0])

@app.route("/organisatie/<id>.json")
def organisatie_json(id):
    ret_struc = index.get_entity('Organisatie', id)
    return jsonify(ret_struc["items"][0])

@app.route("/commissie/<id>.json")
def commissie_json(id):
    ret_struc = index.get_entity('Commissie', id)
    return jsonify(ret_struc["items"][0])

@app.route("/hoedanigheid/<id>.json")
def hoedanigheid_json(id):
    ret_struc = index.get_entity('Hoedanigheid', id)
    return jsonify(ret_struc["items"][0])

@app.route("/facet", methods=['GET','POST'])
def get_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/nested-facet", methods=['GET', 'POST'])
def get_nested_facet():
    struc = request.get_json()
    ret_struc = index.get_nested_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return jsonify(ret_struc)


@app.route("/browse", methods=['POST'])
def browse():
    struc = request.get_json()
    ret_struc = index.browse(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/detail/<id>")
def dummy(id):
    return jsonify({})

@app.route("/organisatie/<id>", methods=['GET'])
def organisatie(id):
    if request.headers['Content-Type'] == 'application/json':
        ret_struc = index.get_entity('Organisatie', id)
        return jsonify(ret_struc["items"][0])
    else:
        return app.send_static_file("index.html")

@app.route("/locatie/<id>", methods=['GET'])
def locatie(id):
    if request.headers['Content-Type'] == 'application/json':
        ret_struc = index.get_entity('Locatie', id)
        return jsonify(ret_struc["items"][0])
    else:
        return app.send_static_file("index.html")

@app.route("/persoon/<id>", methods=['GET'])
def persoon(id):
    if request.headers['Content-Type'] == 'application/json':
        ret_struc = index.get_entity('Persoon', id)
        return jsonify(ret_struc["items"][0])
    else:
        return app.send_static_file("index.html")

@app.route("/hoedanigheid/<id>", methods=['GET'])
def hoedanigheid(id):
    if request.headers['Content-Type'] == 'application/json':
        ret_struc = index.get_entity('Hoedanigheid', id)
        return jsonify(ret_struc["items"][0])
    else:
        return app.send_static_file("index.html")

@app.route("/commissie/<id>", methods=['GET'])
def commissie(id):
    if request.headers['Content-Type'] == 'application/json':
        ret_struc = index.get_entity('Commissie', id)
        return json.dumps(ret_struc["items"][0])
    else:
        return app.send_static_file("index.html")



#Start main program

if __name__ == '__main__':
    app.run()

