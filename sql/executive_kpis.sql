SELECT COUNT(DISTINCT customer_id) total_customers, SUM(annual_revenue) arr, AVG(lifetime_value) avg_clv, AVG(CASE WHEN status='churned' THEN 1.0 ELSE 0 END) * 100 churn_rate FROM customers;

