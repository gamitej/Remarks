from flask import Flask, jsonify
from flask_cors import CORS
from auth.auth import auth
from crud.crud import crud

app = Flask(__name__)
app.register_blueprint(auth, url_prefix='/')
app.register_blueprint(crud, url_prefix='/')
CORS(app)

@app.errorhandler(404)
def error(e):
    return jsonify({"msg": "Wrong Route"}),404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
