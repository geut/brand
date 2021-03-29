
import './tailwind.css'

export default {
  title: 'colors' 
}

export const tailwindDefinitions = () => {
  return (
    <div>
     <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-32 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Blue</div>
            <div>
              <code className='text-xs text-gray-500'>colors.geutBlue</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>

          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutBlue-300'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>300</div>
            </div>
          </div>
          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutBlue-500'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>500</div>
            </div>
          </div>
          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutBlue-700'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>700</div>
            </div>
          </div>
          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutBlue-900'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>900</div>
            </div>
          </div>


        </div>
      </div>

      <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-32 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Green</div>
            <div>
              <code className='text-xs text-gray-500'>colors.geutGreen</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>

          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutGreen-300'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>300</div>
            </div>
          </div>
          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutGreen-500'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>500</div>
            </div>
          </div>
          <div className='space-y-1.5'>
            <div className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 bg-geutGreen-700'></div>
            <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
              <div className='w-6 font-medium text-gray-900'>700</div>
            </div>
          </div>

        </div>
      </div>      
    </div> 
  )
}
