# API usage

Base URL: `http://localhost:5000/api`

| Endpoint | Purpose |
|---|---|
| `GET /health` | Service health |
| `GET /dashboard/overview` | Executive KPIs, revenue, segments |
| `GET /customers?q=` | Searchable customer directory |
| `GET /customers/:id` | Customer detail |
| `GET /churn` | Churn risk and drivers |
| `GET /retention` | Retention metrics and history |
| `GET /cohorts` | Cohort retention matrix |

Errors use `{ "error": "message" }` with an appropriate HTTP status.

