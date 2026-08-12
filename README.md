# Customer360 Analytics Dashboard

A full-stack customer intelligence workspace with a React/Vite dashboard and FastAPI backend for executive KPIs, customer health, RFM segmentation, cohort retention, and churn prevention.

## Run locally

1. Install frontend packages: `npm install`
2. Install backend packages: `python -m pip install -r requirements.txt`
3. Start the FastAPI service: `python backend/app.py`
4. In another terminal, start the dashboard: `npm run dev`
5. Open `http://localhost:3000`

FastAPI Swagger documentation is available at `http://localhost:8000/docs`.

You can also run both services with `docker compose up --build`.

## Test and build

- Backend: `python -m pytest tests/backend`
- Frontend: `npm test`
- Production frontend: `npm run build`

All displayed demo metrics are deterministic mock data and safe to replace with warehouse-backed queries.
