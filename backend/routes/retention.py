from flask import Blueprint, jsonify
retention_bp = Blueprint("retention", __name__)
@retention_bp.get("/retention")
def retention():
    return jsonify({"grossRetention":94.1,"netRevenueRetention":105.2,"expansionRevenue":418000,"monthly":[{"month":m,"rate":r,"expansion":e} for m,r,e in [("Mar",89,7),("Apr",90,8),("May",91,8),("Jun",92,9),("Jul",93,10),("Aug",94,11)]]})

