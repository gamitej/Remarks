from flask import Flask, request, jsonify
from flask_cors import CORS
from rem import getRemarks, postRemark, delRemark, updateRemark

app = Flask(__name__)
CORS(app)


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
            return jsonify({"message": res}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


@app.route('/remarks/<id>', methods=["DELETE", "PUT"])
def putDeleteRemark(id):
    try:
        if request.method == "DELETE":
            res = delRemark(id)
            if res:
                return jsonify({"data": res}), 200
            return jsonify({"data": "Remark Deleted Already"}), 200
        if request.method == "PUT":
            req = request.get_json()
            study, remarkText, day = req["study"], req["remark"], req["day"]
            res = updateRemark(study, remarkText, day, id)
            if res:
                return jsonify({"message": res}), 500
            return jsonify({"message": "Reamrk Updated successfully"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
