import os

import uvicorn
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from backend.data import CUSTOMERS, REVENUE, SEGMENTS


def create_app() -> FastAPI:
    application = FastAPI(
        title="Customer360 Analytics API",
        description="Customer intelligence, retention, cohort, and churn endpoints.",
        version="1.0.0",
    )
    application.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000", "http://localhost:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @application.get("/", tags=["metadata"])
    async def root() -> dict[str, str]:
        return {"service": "Customer360 Analytics API", "docs": "/docs"}

    @application.get("/api/health", tags=["health"])
    async def health() -> dict[str, str]:
        return {"status": "healthy", "service": "customer360-api"}

    @application.get("/api/dashboard/overview", tags=["dashboard"])
    async def dashboard_overview() -> dict:
        return {
            "kpis": {"customers": 48291, "arr": 12800000, "clv": 2840, "churnRate": 3.8},
            "revenue": REVENUE,
            "segments": SEGMENTS,
        }

    @application.get("/api/customers", tags=["customers"])
    async def customers(q: str = Query(default="", max_length=100)) -> dict:
        query = q.casefold()
        items = [
            customer
            for customer in CUSTOMERS
            if query in f"{customer['name']} {customer['id']} {customer['segment']}".casefold()
        ]
        return {"items": items, "count": len(items)}

    @application.get("/api/customers/{customer_id}", tags=["customers"])
    async def customer_detail(customer_id: str) -> dict:
        customer = next((item for item in CUSTOMERS if item["id"] == customer_id), None)
        if customer is None:
            raise HTTPException(status_code=404, detail="Customer not found")
        return customer

    @application.get("/api/churn", tags=["analytics"])
    async def churn() -> dict:
        return {
            "atRisk": 1842,
            "revenueAtRisk": 624000,
            "modelAccuracy": 91.7,
            "drivers": [
                {"name": "Low product usage", "value": 78},
                {"name": "Support friction", "value": 62},
                {"name": "Payment failures", "value": 51},
                {"name": "Price sensitivity", "value": 44},
            ],
        }

    @application.get("/api/retention", tags=["analytics"])
    async def retention() -> dict:
        monthly = [
            {"month": month, "rate": rate, "expansion": expansion}
            for month, rate, expansion in [
                ("Mar", 89, 7), ("Apr", 90, 8), ("May", 91, 8),
                ("Jun", 92, 9), ("Jul", 93, 10), ("Aug", 94, 11),
            ]
        ]
        return {
            "grossRetention": 94.1,
            "netRevenueRetention": 105.2,
            "expansionRevenue": 418000,
            "monthly": monthly,
        }

    @application.get("/api/cohorts", tags=["analytics"])
    async def cohorts() -> dict:
        return {"items": [
            {"cohort": "Mar 2026", "customers": 822, "values": [100, 87, 78, 72, 68, 65]},
            {"cohort": "Apr 2026", "customers": 901, "values": [100, 89, 81, 76, 72]},
            {"cohort": "May 2026", "customers": 968, "values": [100, 91, 84, 79]},
        ]}

    return application


app = create_app()

if __name__ == "__main__":
    uvicorn.run(
        "backend.app:app",
        host=os.getenv("BACKEND_HOST", "0.0.0.0"),
        port=int(os.getenv("BACKEND_PORT", "8000")),
        reload=os.getenv("APP_ENV", "development") == "development",
    )
