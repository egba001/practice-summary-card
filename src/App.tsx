import SummaryCard from "./components/SummaryCard";
import { summaryCardsData } from "./constants/dummyData";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-[Inter]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Practice Card Summary</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaryCardsData.map((cardData) => (
            <SummaryCard key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
