
import './tailwind.css'
import { palette, blue, green } from '@geut/brand-colors'


export default {
  title: 'colors',
  decorators: [ Story => <div className='m-5'><Story /></div> ]
}

export const colors = () => {
  return (
    <div>
     <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Blue</div>
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
                <div className='w-6 font-medium text-gray-900'>{shade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Green</div>
            <div>
              <code className='text-xs text-gray-500'>green</code>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
          {Object.keys(blue).map(shade => (
            <div key={`color-green-${shade}`} className='space-y-1.5'>
              <div 
                style={{ backgroundColor: green[shade] }}
                className='h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0'
              />
              <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                <div className='w-6 font-medium text-gray-900'>{shade}</div>
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
    <div className='space-y-4'>
     <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Blue Shades</div>
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
                <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                  <div className='w-6 font-medium text-gray-900'>{shade}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
       <div className='w-64 flex-shrink-0'>
         <div className='h-10 flex flex-col justify-center'>
           <div className='text-sm font-semibold text-gray-900'>Geut Green Shades</div>
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
                <div className='px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block'>
                  <div className='w-6 font-medium text-gray-900'>{shade}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>      
    </div> 
  )
}
