from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)


@app.route('index.html')
def index():
    return render_template('index.html')
