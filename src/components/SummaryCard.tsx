import type { SummaryCardProps } from "../types/SummaryCard"
import StatusTag from "./StatusTag"
import MiniBarChart from "./MiniBarChart"

export default function SummaryCard({
    id,
    name,
    city,
    country,
    newPatientsThisMonth,
    appointmentRequests,
    conversionRate,
    monthlyTrend,
    monthlyData,
    recommendations,
}: SummaryCardProps) {

    return (
        <div className="rounded-xl bg-white p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">{city}, {country}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{id}</p>
                </div>
                <StatusTag conversionRate={conversionRate} />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <p className="text-[10px] text-gray-600 mb-0.5">New Patients</p>
                    <p className="text-xl font-bold text-blue-600">{newPatientsThisMonth}</p>
                </div>
                <div className="bg-purple-100 p-2 rounded-lg">
                    <p className="text-[10px] text-gray-600 mb-0.5">Appointments</p>
                    <p className="text-xl font-bold text-purple-600">{appointmentRequests}</p>
                </div>
                <div className="bg-green-50 p-2 rounded-lg">
                    <p className="text-[10px] text-gray-600 mb-0.5">Conversion Rate</p>
                    <p className="text-xl font-bold text-green-600">{conversionRate}%</p>
                </div>
                <div className={`bg-gradient-to-br ${monthlyTrend >= 0 ? 'from-emerald-50 to-emerald-100' : 'from-red-50 to-red-100'} p-2 rounded-lg`}>
                    <p className="text-[10px] text-gray-600 mb-0.5">Monthly Trend</p>
                    <p className={`text-xl font-bold ${monthlyTrend >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {Math.abs(monthlyTrend)}%
                    </p>
                </div>
            </div>

            {/* Activity Chart */}
            <MiniBarChart data={monthlyData} />

            {/* Recommendations */}
            <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Recommendations</p>
                <ul className="list-disc list-inside space-y-1">
                    {recommendations.map((recommendation, index) => (
                        <li key={index} className="text-xs text-gray-600">
                            {recommendation}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}