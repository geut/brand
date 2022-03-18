
import './tailwind.css'
import { palette, blue, green, sherBlue, sherGreen } from '@geut/brand-colors'


export default {
  title: 'colors',
  decorators: [ Story => <div className='m-5'><Story /></div> ]
}

export const colors = () => {
  return (
    <div className='flex flex-col space-y-4'>
     <div className='flex flex-col space-y-6 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>GEUT Blue</div>
            <div>
              <code className='text-xs text-gray-500'>blue</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
          {Object.keys(blue).map(shade => (
            <div key={`color-blue-${shade}`} className='space-y-1.5'>
              <div 
                style={{ backgroundColor: blue[shade] }}
                className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
              />
              <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                <div className=' font-medium text-gray-900'>{shade}</div>
                <code className=' font-medium text-gray-900'>{blue[shade]}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-6 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>GEUT Green</div>
            <div>
              <code className='text-xs text-gray-500'>green</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
          {Object.keys(green).map(shade => (
            <div key={`color-green-${shade}`} className='space-y-1.5'>
              <div 
                style={{ backgroundColor: green[shade] }}
                className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
              />
              <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                <div className='w-6 font-medium text-gray-900'>{shade}</div>
                <code className=' font-medium text-gray-900'>{green[shade]}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-6 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>SHER Blue</div>
            <div>
              <code className='text-xs text-gray-500'>blue</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
          {Object.keys(sherBlue).map(shade => (
            <div key={`color-green-${shade}`} className='space-y-1.5'>
              <div 
                style={{ backgroundColor: sherBlue[shade] }}
                className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
              />
              <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                <div className='w-6 font-medium text-gray-900'>{shade}</div>
                <code className=' font-medium text-gray-900'>{sherBlue[shade]}</code>
              </div>
            </div>
          ))}
        </div>
      </div>   

      <div className='flex flex-col space-y-6 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>SHER Green</div>
            <div>
              <code className='text-xs text-gray-500'>green</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
          {Object.keys(sherGreen).map(shade => (
            <div key={`color-green-${shade}`} className='space-y-1.5'>
              <div 
                style={{ backgroundColor: sherGreen[shade] }}
                className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
              />
              <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                <div className='w-6 font-medium text-gray-900'>{shade}</div>
                <code className=' font-medium text-gray-900'>{sherGreen[shade]}</code>
              </div>
            </div>
          ))}
        </div>
      </div>   

    </div> 
  )
}


export const palettes = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>GEUT Blue Shades</div>
            <div>
              <code className='text-xs text-gray-500'>palette.blue</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-10 gap-x-4'>
          {[50,100,200,300,400,500,600,700,800,900].map(
            shade => (
              <div key={`palette.blue-${shade}`} className='space-y-1.5'>
                <div 
                  style={{ backgroundColor: palette.blue[shade] }}
                  className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
                />
                <div className='px-0.5 md:flex flex-col md:justify-between 2xl:block'>
                  <div className='font-small text-gray-900'>{shade}</div>
                  <code className='font-small text-gray-900'>{palette.blue[shade]}</code>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>GEUT Green Shades</div>
            <div>
              <code className='text-xs text-gray-500'>palette.green</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-10 gap-x-4'>
          {[50,100,200,300,400,500,600,700,800,900].map(
            shade => (
              <div key={`palette.green-${shade}`} className='space-y-1.5'>
                <div 
                  style={{ backgroundColor: palette.green[shade] }}
                  className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
                />
                <div className='px-0.5 md:flex flex-col md:justify-between 2xl:block'>
                  <div className='w-6 font-medium text-gray-900'>{shade}</div>
                  <code className='font-small text-gray-900'>{palette.green[shade]}</code>
                </div>
              </div>
            )
          )}
        </div>
      </div>      
    </div> 
  )
}