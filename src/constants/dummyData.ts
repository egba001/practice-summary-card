import type { SummaryCardProps } from "../types/SummaryCard";

export const summaryCardsData: SummaryCardProps[] = [
    {
        id: "1",
        name: "Dr. Sarah Johnson",
        city: "New York",
        country: "USA",
        newPatientsThisMonth: 45,
        appointmentRequests: 78,
        conversionRate: 20.4,
        monthlyTrend: 12.5,
        monthlyData: [
            { month: 'Jul', value: 45 },
            { month: 'Aug', value: 52 },
            { month: 'Sep', value: 38 },
            { month: 'Oct', value: 61 },
            { month: 'Nov', value: 55 },
            { month: 'Dec', value: 78 },
        ],
        recommendations: [
            "Consider increasing ad budget on top-performing channels",
            "Optimize appointment scheduling to reduce wait times"
        ]
    },
    {
        id: "2",
        name: "Dr. Michael Chen",
        city: "San Francisco",
        country: "USA",
        newPatientsThisMonth: 62,
        appointmentRequests: 95,
        conversionRate: 13,
        monthlyTrend: 8.2,
        monthlyData: [
            { month: 'Jul', value: 72 },
            { month: 'Aug', value: 68 },
            { month: 'Sep', value: 81 },
            { month: 'Oct', value: 75 },
            { month: 'Nov', value: 88 },
            { month: 'Dec', value: 95 },
        ],
        recommendations: [
            "Focus on improving conversion rate through better follow-up",
            "Implement automated appointment reminders to reduce no-shows"
        ]
    },
    {
        id: "3",
        name: "Dr. Emily Williams",
        city: "London",
        country: "UK",
        newPatientsThisMonth: 38,
        appointmentRequests: 52,
        conversionRate: 9,
        monthlyTrend: -3.4,
        monthlyData: [
            { month: 'Jul', value: 58 },
            { month: 'Aug', value: 55 },
            { month: 'Sep', value: 49 },
            { month: 'Oct', value: 44 },
            { month: 'Nov', value: 41 },
            { month: 'Dec', value: 52 },
        ],
        recommendations: [
            "Review and refresh marketing strategy to reverse declining trend",
            "Enhance patient experience to improve retention and referrals"
        ]
    }
];
