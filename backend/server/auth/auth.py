from flask import Flask,request,jsonify
from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=["POST"])
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
