WITH metrics AS (SELECT customer_id, MAX(order_date) last_order, COUNT(*) frequency, SUM(revenue) monetary FROM orders GROUP BY customer_id)
SELECT customer_id, NTILE(5) OVER (ORDER BY last_order) recency_score, NTILE(5) OVER (ORDER BY frequency) frequency_score, NTILE(5) OVER (ORDER BY monetary) monetary_score FROM metrics;

