from ast import JoinedStr
from flask import Flask, request, jsonify
from flask_cors import CORS
from remark.rem import getRemarks, postRemark, delRemark, updateRemark

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=["POST"])
def login():
    try:
        req = request.get_json()
        userId, passwd = req["userId"], req["password"]
        if userId != "Amitej":
            return jsonify({"msg": "Username not found"}), 400
        if passwd != "1234":
            return jsonify({"msg": "Password Incorrect"}), 400
        return jsonify({"msg": "Login Successfull"}), 200
    except Exception as e:
        print(e)
        return jsonify({"msg": "Something went wrong"}), 500


@app.route('/remarks', methods=["GET", "POST"])
def getPostRemark():
    try:
        if request.method == "GET":
            res = getRemarks()
            return jsonify({"data": res}), 200
        if request.method == "POST":
            req = request.get_json()
            study, remarkText, day = req["study"], req["remark"], req["day"]
            res = postRemark(study, remarkText, day)
            if res:
                return jsonify({"message": res}), 500
            return jsonify({"message": "Remark Added Successfully"}), 200

    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@app.route('/remarks/<string:id>', methods=["DELETE", "PUT"])
def putDeleteRemark(id):
    try:
        if request.method == "DELETE":
            res = delRemark(id)
            if res:
                return jsonify({"message": "Remark Deleted Already"}), 200
            return jsonify({"message": "Remark Deleted Successfully"}), 200
        if request.method == "PUT":
            req = request.get_json()
            study, remarkText, day = req["study"], req["remark"], req["day"]
            res = updateRemark(study, remarkText, day, id)
            if res:
                return jsonify({"message": res}), 500
            return jsonify({"message": "Remark Updated successfully"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@app.errorhandler(404)
def error(e):
    return jsonify({"msg": "Wrong Route"}),404


if __name__ == '__main__':
    app.run(debug=True, port=5000)
