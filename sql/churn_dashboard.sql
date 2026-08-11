SELECT customer_id, health_score, predicted_churn_probability, annual_revenue FROM customer_scores WHERE predicted_churn_probability >= 0.65 ORDER BY annual_revenue DESC;

