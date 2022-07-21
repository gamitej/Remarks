from flask import Flask, request, jsonify
from flask_cors import CORS
from rem import getRemarks

app = Flask(__name__)
CORS(app)


@app.route('/remarks', methods=["GET", "POST"])
def login():
    try:
        if request.method == "GET":
            res = getRemarks()
            return jsonify({"data": res}), 200
        if request.method == "POST":
            req = request.get_json()
            print(req)
            return jsonify({"data": "Password Incorrect!!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
