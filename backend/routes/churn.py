from flask import Blueprint, jsonify
churn_bp = Blueprint("churn", __name__)
@churn_bp.get("/churn")
def churn():
    return jsonify({"atRisk":1842,"revenueAtRisk":624000,"modelAccuracy":91.7,"drivers":[{"name":"Low product usage","value":78},{"name":"Support friction","value":62},{"name":"Payment failures","value":51},{"name":"Price sensitivity","value":44}]})

