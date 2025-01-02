import { useState } from 'react'

const Mass = () => {
  const [grams, setGrams] = useState('')
  const [kilograms, setKilograms] = useState('')

  const convert = () => {
    const gramsValue = parseFloat(grams)
    if (!isNaN(gramsValue)) setKilograms((gramsValue / 1000).toFixed(2))
  }

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-medium mb-4">Mass Converter</h2>
      <div className="flex flex-col gap-4">
        <input type="number"
          placeholder="Enter grams"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={convert}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
        >
          Convert
        </button>
        {kilograms && (
          <p className="mt-3 text-lg">
            Kilograms: <span className="font-bold">{kilograms}</span>
          </p>
        )}
      </div>
    </section>
  )
}

export default Mass