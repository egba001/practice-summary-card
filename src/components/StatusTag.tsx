export default function StatusTag({ conversionRate }: { conversionRate: number }) {
    return (
        <div>
            <span className={`p-1 rounded-2xl text-xs text-white ${
                conversionRate >= 20 ? 'bg-green-500' : 
                conversionRate <= 10 ? 'bg-red-500' : 'bg-gray-500'
            }`}>
                {
                    conversionRate >= 20 ? 'High Performer' : 
                    conversionRate <= 10 ? 'At Risk' : 'Stable'
                }
            </span>
        </div>
    )
}