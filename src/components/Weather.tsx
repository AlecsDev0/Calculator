import { useState } from 'react'

const Weather = () => {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const convert = () => {
    const celsiusValue = parseFloat(celsius)
    if (!isNaN(celsiusValue)) setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2))
  }

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-medium mb-4">Temperature Converter</h2>
      <div className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={convert}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
        >
          Convert
        </button>
        {fahrenheit && (
          <p className="mt-3 text-lg">
            Fahrenheit: <span className="font-bold">{fahrenheit}</span>
          </p>
        )}
      </div>
    </section>
  )
}

export default Weather