from flask import Flask, jsonify

app = Flask(__name__)

# Example route to serve as an API endpoint
@app.route('/api/data')
def get_data():
    # This could be data fetched from a database or generated dynamically
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

# Example route to serve the React frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    # Serve the React frontend from the build directory
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)
