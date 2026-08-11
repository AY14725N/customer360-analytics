from flask import Blueprint, jsonify, request
from backend.data import CUSTOMERS
customers_bp = Blueprint("customers", __name__)
@customers_bp.get("/customers")
def list_customers():
    query = request.args.get("q", "").lower()
    rows = [c for c in CUSTOMERS if query in f"{c['name']} {c['id']} {c['segment']}".lower()]
    return jsonify({"items": rows, "count": len(rows)})
@customers_bp.get("/customers/<customer_id>")
def get_customer(customer_id):
    customer = next((c for c in CUSTOMERS if c["id"] == customer_id), None)
    return (jsonify(customer), 200) if customer else (jsonify({"error":"Customer not found"}), 404)

