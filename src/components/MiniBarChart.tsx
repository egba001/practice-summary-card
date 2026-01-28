import type { MiniBarChartProps } from "../types/MiniBarChart";

export default function MiniBarChart({ data }: MiniBarChartProps) {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="border-t border-gray-200 pt-3">
            <p className="text-xs font-semibold text-gray-700 mb-2">Last 6 Months Activity</p>
            <div className="flex items-end justify-between gap-1.5 bg-gray-50 p-2 rounded-lg h-[100px]" >
                {data.map((item, index) => {
                    const maxHeight = 60;
                    const minHeight = 10;
                    const barHeight = Math.max((item.value / maxValue) * maxHeight, minHeight);

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center justify-end gap-1">
                            <div
                                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md hover:from-blue-700 hover:to-blue-500 transition-all duration-200 cursor-pointer relative group shadow-sm"
                                style={{ height: `${barHeight}px` }}
                            >
                                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1.5 py-0.5 rounded shadow-md whitespace-nowrap">
                                    {item.value}
                                </span>
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">{item.month}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
