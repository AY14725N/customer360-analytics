from .customers import customers_bp
from .churn import churn_bp
from .retention import retention_bp
from .cohorts import cohorts_bp
from .dashboard import dashboard_bp

def register_routes(app):
    for blueprint in (customers_bp, churn_bp, retention_bp, cohorts_bp, dashboard_bp):
        app.register_blueprint(blueprint, url_prefix="/api")

