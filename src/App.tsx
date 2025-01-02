import Distance from './components/Distance'
import Weather from './components/Weather'
import Mass from './components/Mass'

const App = () => (
  <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
    <header className="mb-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Calculator</h1>
      <p className="text-sm text-gray-500 mt-2">Convery any units</p>
    </header>
    <main className="space-y-10">
      <Distance />
      <Weather />
      <Mass />
    </main>
  </div>
)

export default App