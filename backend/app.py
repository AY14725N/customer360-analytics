import os
from flask import Flask, jsonify
from flask_cors import CORS
from backend.routes import register_routes

def create_app(testing=False):
    app = Flask(__name__)
    app.config["TESTING"] = testing
    CORS(app, resources={r"/api/*":{"origins":"*"}})
    register_routes(app)
    @app.get("/api/health")
    def health(): return jsonify({"status":"healthy","service":"customer360-api"})
    @app.errorhandler(404)
    def not_found(_): return jsonify({"error":"Resource not found"}), 404
    return app

app = create_app()
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("FLASK_PORT", "5000")), debug=os.getenv("FLASK_ENV") == "development")

