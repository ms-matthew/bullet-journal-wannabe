import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './index.css';
import ToDo from './ToDo';



export default function App() {
  useEffect(() => {
    const daysWrapper = document.querySelector('.react-calendar__month-view__days');
    const nav = document.querySelector('.react-calendar__navigation');
    const label = nav?.querySelector('.react-calendar__navigation__label');
    const arrows = nav?.querySelectorAll('.react-calendar__navigation__arrow');

    //konkretny dzien
    if (daysWrapper) {
      daysWrapper.classList.add(
        'grid', 'grid-cols-7',
        'min-h-[20rem]', 'sm:min-h-[22rem]',
        'overflow-hidden'
      );
    }

    //nav w którym jest nazwa górna
    if (nav) {
      nav.classList.add(
        'flex', 'items-center', 'justify-between',
        'flex-wrap', 'gap-1', 'mb-1',
        'border', 'border-dashed', 'border-gray-300',
        'rounded-md', 'p-1', 'bg-white', 'shadow-sm'
      );
    }

    //nazwa gorna - {miesiac/rok}
    label?.classList.add(
      'text-lg', 'font-semibold', 'text-gray-700',
      'text-center', 'flex-grow', 'whitespace-nowrap'
    );

    arrows?.forEach(btn => {
      btn.classList.add(
        'text-xl', 'text-red-600',
        'hover:text-red-800', 'transition', 'duration-150'
      );
    });
  }, []);
  const [clickedDay, setClickedDay] = useState('')

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).replace(',', ' -');
  };

  return (
    <div className='flex flex-row border-2'>
      <div className="p-2 max-w-md mx-auto flex flex-row gap-5">
        <Calendar
          locale="pl-PL"
          className="grid gap-1 border border-gray-400 border-dashed rounded-lg p-2 bg-white"
          onClickDay={(value) => setClickedDay(value)}
          tileClassName={() =>
            'aspect-square border border-gray-300 border-dashed relative flex items-start justify-start text-xs sm:text-sm p-1 hover:bg-blue-100 transition duration-200'
          }
        />
      </div>
      <div className='flex w-1/3'>
        <ToDo>{formatDate(clickedDay)}</ToDo>
      </div>
    </div>
    
  );
}
