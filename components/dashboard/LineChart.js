import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function LineChart() {
  const data = {
    labels: [
      'Apr 14',
      'Apr 15',
      'Apr 16',
      'Apr 17',
      'Apr 18',
      'Apr 19',
      'Apr 20',
    ],
    datasets: [
      {
        label: 'Income',
        data: [4000, 5000, 5500, 3500, 2500, 6000, 5500],
        borderColor: '#15803d',
      },
      {
        label: 'Expenses',
        data: [4500, 4500, 4000, 2500, 1500, 6500, 5600],
        borderColor: '#22c55e',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          lineWidth: 1,
          color: '#edebeb',
        },
      },
      y: {
        grid: {
          drawBorder: false,
          lineWidth: 0,
        },
        min: 0,
      },
    },
  };

  return (
    <div className='w-full h-fit mt-4 mb-12 border rounded-md px-3 py-2'>
      {/* Title bar */}
      <div className='w-full flex justify-between'>
        <h3 className='text-lg bold'>Working capital</h3>

        <div className='flex justify-between gap-x-6'>
          {/* Legend */}
          <div className='flex gap-x-2'>
            <LegendItem name='Income' colorClass='bg-[#15803d]' />
            <LegendItem name='Expenses' colorClass='bg-[#22c55e]' />
          </div>

          {/* Timeframe picker */}
          <button
            id='timeframeButton'
            className='bg-gray-300 rounded flex items-center gap-x-2 px-2 py-1'
          >
            <label
              htmlFor='timeframeButton'
              className='pointer-events-none text-sm'
            >
              Last 7 Days
            </label>
            <div className='-rotate-90'>{'<'}</div>
          </button>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
}

function LegendItem({ name, colorClass }) {
  return (
    <div className='flex gap-x-2 text-sm items-center'>
      <div className={`w-3 h-3 rounded-full ${colorClass}`}></div>
      <p>{name}</p>
    </div>
  );
}
