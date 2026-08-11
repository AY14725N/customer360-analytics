from flask import Blueprint, jsonify
cohorts_bp = Blueprint("cohorts", __name__)
@cohorts_bp.get("/cohorts")
def cohorts():
    return jsonify({"items":[{"cohort":"Mar 2026","customers":822,"values":[100,87,78,72,68,65]},{"cohort":"Apr 2026","customers":901,"values":[100,89,81,76,72]},{"cohort":"May 2026","customers":968,"values":[100,91,84,79]}]})

