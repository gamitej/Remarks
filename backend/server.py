from flask import Flask, request, jsonify

app = Flask(__name__)

data = [
    {"work": "coding", "remarkText": "hi amitej", "day": "monday"},
    {"work": "coding", "remarkText": "hi singh", "day": "wednesday"},
    {"work": "coding", "remarkText": "hi amisha", "day": "monday"},
    {"work": "coding", "remarkText": "hi tiwari", "day": "friday"},
]


@app.route('/remarks', methods=["GET", "POST"])
def login():
    try:
        if request.method == "GET":
            return jsonify({"data": data}), 200
        if request.method == "POST":
            req = request.get_json()
            return jsonify({"data": "Password Incorrect!!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"data": 'Error Occured'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
