from flask import Blueprint, jsonify
from backend.data import REVENUE, SEGMENTS
dashboard_bp = Blueprint("dashboard", __name__)
@dashboard_bp.get("/dashboard/overview")
def overview():
    return jsonify({"kpis":{"customers":48291,"arr":12800000,"clv":2840,"churnRate":3.8},"revenue":REVENUE,"segments":SEGMENTS})

