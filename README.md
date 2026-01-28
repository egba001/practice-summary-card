# Practice Summary Card

A responsive React component for displaying practice metrics and analytics in a dashboard.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd practice-summary-card
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

**Development Mode:**
```bash
npm run dev
```
The application will start at `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

**Lint Code:**
```bash
npm run lint
```

---

## Component and Styling Decision

The folder structure follows a modular, single responsibility pattern which ensures that each component has one clear job it is handling. This approach makes it easy to add new features and maintain existing features within a component.

For styling, I chose tailwind because of it's in built design system and speed of implementation. Leveraging on Tailwind's utility first approach, I was able to style the components within a short period of time.

To ensure visual consistency, I made use of Tailwind's numbered color scale `(50, 100, 200, 300, 400, 400)` for consistent shades as well as Tailwind's spacing scale for consistent spacing.
## Scaling and Real world use

### Component Reusability Strategy
- The Card is available for export as a standalone module that can be imported into any parent components ( PracticeFuel Dashboard in this case)
- All data displayed on the card will be passed via props from the API data source

### Changes and additions if given extra time
- Accessibility and UX Enhancement: I will add ARIA labels, error boundaries and possibly loading state if we happen to integrate an API to fetch the data displayed in the summary card

- I will create a Tailwind theme configuration and refactor all components to use theme tokens. It makes it easy to rebrand and also ensures design consistency across the web application

## Time Management
- Setup - 10 mins
- Reusable component setups - Approximately 30mins
- Styling and Polishing - Approximately 40mins
- Readme - Approxiamtely 20min
