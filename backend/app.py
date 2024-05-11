from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///test.db'




@app.route('/', methods=['GET'])
def get_articles():
    return jsonify({{"Hello":"Worlds"}})




if __name__ == '__main__':
    app.run(debug=True)