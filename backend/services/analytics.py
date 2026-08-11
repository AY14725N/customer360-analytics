def customer_health(orders: int, days_inactive: int, support_tickets: int = 0) -> int:
    """Return a bounded, explainable customer health score."""
    return max(0, min(100, round(50 + orders * 2 - days_inactive * 1.2 - support_tickets * 4)))

