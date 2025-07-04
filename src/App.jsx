import { useEffect } from 'react';
import Calendar from 'react-calendar';
import './index.css';

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
        'flex-wrap', 'gap-4', 'mb-4',
        'border', 'border-dashed', 'border-gray-300',
        'rounded-md', 'p-3', 'bg-white', 'shadow-sm'
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

  return (
    <div className="p-4 max-w-md mx-auto">
      <Calendar
        locale="pl-PL"
        className="grid gap-1 border border-gray-400 border-dashed rounded-lg p-2 bg-white"
        tileClassName={() =>
          'aspect-square border border-gray-300 border-dashed relative flex items-start justify-start text-xs sm:text-sm p-1 hover:bg-blue-100 transition duration-200'
        }
      />
    </div>
  );
}
