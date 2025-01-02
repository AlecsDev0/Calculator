import { useState } from 'react'

const Distance = () => {
  const [meters, setMeters] = useState('')
  const [kilometers, setKilometers] = useState('')

  const convert = () => {
    const metersValue = parseFloat(meters)
    if (!isNaN(metersValue)) setKilometers((metersValue / 1000).toFixed(2))
  }

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-medium mb-4">Distance Converter</h2>
      <div className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Enter meters"
          value={meters}
          onChange={(e) => setMeters(e.target.value)}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={convert}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
        >
          Convert
        </button>
        {kilometers && (
          <p className="mt-3 text-lg">
            Kilometers: <span className="font-bold">{kilometers}</span>
          </p>
        )}
      </div>
    </section>
  )
}

export default Distance