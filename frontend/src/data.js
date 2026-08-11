export const overview = {
  kpis: [
    { label: 'Total customers', value: '48,291', change: '+8.4%', tone: 'blue' },
    { label: 'Annual recurring revenue', value: '$12.8M', change: '+12.6%', tone: 'violet' },
    { label: 'Customer lifetime value', value: '$2,840', change: '+5.2%', tone: 'green' },
    { label: 'Churn rate', value: '3.8%', change: '-0.6%', tone: 'orange' }
  ],
  revenue: [
    { month: 'Sep', revenue: 780, target: 820 }, { month: 'Oct', revenue: 850, target: 850 },
    { month: 'Nov', revenue: 890, target: 880 }, { month: 'Dec', revenue: 940, target: 920 },
    { month: 'Jan', revenue: 1020, target: 950 }, { month: 'Feb', revenue: 990, target: 980 },
    { month: 'Mar', revenue: 1080, target: 1010 }, { month: 'Apr', revenue: 1120, target: 1040 },
    { month: 'May', revenue: 1180, target: 1080 }, { month: 'Jun', revenue: 1160, target: 1110 },
    { month: 'Jul', revenue: 1240, target: 1150 }, { month: 'Aug', revenue: 1310, target: 1190 }
  ],
  segments: [
    { name: 'Champions', value: 31, color: '#5b5bd6' }, { name: 'Loyal', value: 27, color: '#17a67a' },
    { name: 'Promising', value: 22, color: '#e9a23b' }, { name: 'At risk', value: 13, color: '#ef6a67' },
    { name: 'Hibernating', value: 7, color: '#91a0b5' }
  ]
};

export const customers = [
  { id: 'CUS-10482', name: 'Elena Rodriguez', segment: 'Champion', value: 12840, orders: 34, health: 96, lastActive: 'Today' },
  { id: 'CUS-10471', name: 'Marcus Chen', segment: 'Loyal', value: 9320, orders: 28, health: 91, lastActive: 'Yesterday' },
  { id: 'CUS-10454', name: 'Priya Shah', segment: 'Promising', value: 4680, orders: 12, health: 83, lastActive: '2 days ago' },
  { id: 'CUS-10423', name: 'Noah Williams', segment: 'At risk', value: 3210, orders: 9, health: 42, lastActive: '18 days ago' },
  { id: 'CUS-10398', name: 'Amina Diallo', segment: 'Loyal', value: 7860, orders: 21, health: 88, lastActive: '3 days ago' },
  { id: 'CUS-10376', name: 'Oliver Smith', segment: 'Hibernating', value: 1960, orders: 5, health: 24, lastActive: '46 days ago' }
];

export const churn = {
  trend: [{ month: 'Mar', actual: 4.6, predicted: 4.5 }, { month: 'Apr', actual: 4.4, predicted: 4.3 }, { month: 'May', actual: 4.1, predicted: 4.2 }, { month: 'Jun', actual: 4.0, predicted: 4.0 }, { month: 'Jul', actual: 3.9, predicted: 3.8 }, { month: 'Aug', actual: 3.8, predicted: 3.7 }],
  drivers: [{ name: 'Low product usage', value: 78 }, { name: 'Support friction', value: 62 }, { name: 'Payment failures', value: 51 }, { name: 'Price sensitivity', value: 44 }]
};

export const retention = [
  { month: 'Mar', rate: 89, expansion: 7 }, { month: 'Apr', rate: 90, expansion: 8 }, { month: 'May', rate: 91, expansion: 8 },
  { month: 'Jun', rate: 92, expansion: 9 }, { month: 'Jul', rate: 93, expansion: 10 }, { month: 'Aug', rate: 94, expansion: 11 }
];

export const cohorts = [
  { cohort: 'Mar 2026', customers: 822, values: [100, 87, 78, 72, 68, 65] },
  { cohort: 'Apr 2026', customers: 901, values: [100, 89, 81, 76, 72] },
  { cohort: 'May 2026', customers: 968, values: [100, 91, 84, 79] },
  { cohort: 'Jun 2026', customers: 1042, values: [100, 92, 86] },
  { cohort: 'Jul 2026', customers: 1118, values: [100, 94] },
  { cohort: 'Aug 2026', customers: 1204, values: [100] }
];

