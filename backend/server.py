from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/remarks')
def login():
    return jsonify({"data": []}), 200


@app.route('/remarks', methods=["POST"])
def login():
    try:
        req = request.get_json()

        return jsonify({"msg": "Password Incorrect!!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"msg": 'Error Occured'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
