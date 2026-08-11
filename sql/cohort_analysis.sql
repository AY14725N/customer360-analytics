WITH cohorts AS (SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) cohort_month FROM orders GROUP BY customer_id)
SELECT c.cohort_month, DATE_DIFF('month', c.cohort_month, DATE_TRUNC('month', o.order_date)) cohort_age, COUNT(DISTINCT o.customer_id) retained FROM orders o JOIN cohorts c USING (customer_id) GROUP BY 1,2 ORDER BY 1,2;

