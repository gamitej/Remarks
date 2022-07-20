from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/remarks', methods=["GET", "POST"])
def login():
    try:
        if request.method == "GET":
            return jsonify({"data": []}), 200
        if request.method == "POST":
            req = request.get_json()
            return jsonify({"data": "Password Incorrect!!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
