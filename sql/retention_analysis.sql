SELECT DATE_TRUNC('month', activity_date) month, COUNT(DISTINCT customer_id) active_customers, COUNT(DISTINCT customer_id) * 100.0 / LAG(COUNT(DISTINCT customer_id)) OVER (ORDER BY DATE_TRUNC('month', activity_date)) retention_rate FROM customer_activity GROUP BY 1 ORDER BY 1;

