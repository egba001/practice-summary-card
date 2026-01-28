import type { MonthlyData } from "./MiniBarChart";

export type SummaryCardProps = {
    id: string;
    name: string;
    city: string;
    country: string;
    newPatientsThisMonth: number;
    appointmentRequests: number;
    conversionRate: number;
    monthlyTrend: number;
    monthlyData: MonthlyData[];
    recommendations: string[];
}