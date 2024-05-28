from flask import Flask, request, jsonify
import json
from elastic_index import Index
import requests


app = Flask(__name__)

config = {
    "url" : "localhost",
    "port" : "9200",
    "doc_type" : "sport"
}

index = Index(config)


@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    response.headers['Content-type'] = 'application/json'
    return response

@app.route("/")
def hello_world():
    retStruc = {"app": "REPUBLIC Entity service", "version": "0.1"}
    return json.dumps(retStruc)


@app.route("/facet", methods=['GET','POST'])
def get_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return json.dumps(ret_struc)

@app.route("/nested-facet", methods=['GET'])
def get_nested_facet():
    facet = request.args.get("name")
    amount = request.args.get("amount")
    facet_filter = request.args.get("filter")
    ret_struc = index.get_nested_facet(facet + ".keyword", amount, facet_filter)
    return json.dumps(ret_struc)


@app.route("/browse", methods=['POST'])
def browse():
    struc = request.get_json()
    ret_struc = index.browse(struc["page"], struc["page_length"], struc["searchvalues"])
    return json.dumps(ret_struc)

@app.route("/organisatie/<id>", methods=['GET'])
def organisatie(id):
    ret_struc = index.get_entity('Organisatie', id)
    return json.dumps(ret_struc)

@app.route("/locatie/<id>", methods=['GET'])
def locatie(id):
    ret_struc = index.get_entity('Lokatie', id)
    return json.dumps(ret_struc)

@app.route("/persoon/<id>", methods=['GET'])
def organisatie(id):
    ret_struc = index.get_entity('Persoon', id)
    return json.dumps(ret_struc)

@app.route("/hoedanigheid/<id>", methods=['GET'])
def organisatie(id):
    ret_struc = index.get_entity('Hoedanigheid', id)
    return json.dumps(ret_struc)

@app.route("/commissie/<id>", methods=['GET'])
def organisatie(id):
    ret_struc = index.get_entity('Commissie', id)
    return json.dumps(ret_struc)



#Start main program

if __name__ == '__main__':
    app.run()

