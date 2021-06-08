
import './tailwind.css'
import { Iso, Logo } from '@geut/brand'

import TShirtWhiteSrc from './images/t-shirt-white.png'
import TShirtBlackSrc from './images/t-shirt-black.png'

export default {
  title: 'GEUT',
  components: [Iso, Logo]
}

export const IsoAndLogo = () => {
  return (
    <div className='flex flex-col max-w-xs'>
      <div className='flex flex-col items-center m-5 space-y-2'>
        <Logo className='h-20'/><Iso className='h-8'/>
      </div>
      <div className='flex flex-row items-center m-5 space-x-2'>
        <Logo className='h-20'/><Iso className='h-8'/>
      </div>
    </div>
  )
}

export const Isotype = () => {
  return (
    <div className='flex flex-col items-start max-w-xs'>
      <Iso className='h-2'/>
      <Iso className='h-4 text-geutGreen-300'/>
      <Iso className='h-8 text-geutGreen-500'/>
      <Iso className='h-10 text-geutGreen-700'/>
      <Iso className='h-12 text-geutBlue-300'/>
      <Iso className='h-16 text-geutBlue-500'/>
      <Iso className='h-32 text-geutBlue-700'/>
      <Iso className='h-48 text-geutBlue-900'/>
      <Iso className='h-56'/>
    </div>
  )
}

export const Logotype = () => {
  return (
    <div className='flex flex-col items-start max-w-xs'>
      <Logo className='h-2'/>
      <Logo className='h-4'/>
      <Logo className='h-8'/>
      <Logo className='h-10'/>
      <Logo className='h-12'/>
      <Logo className='h-16'/>
      <Logo className='h-32'/>
      <Logo className='h-64'/>
    </div>
  )
}

export const LogotypeVariants = () => {
  return (
    <div className='flex items-start text-geutBlue-300'>
      <Logo className='h-64'/>
      <Logo className='h-64' mono/>
      <Logo className='h-64' overlap/>
    </div>
  )
}

export const LogotypeOnSurfaces = () => {
  return (
    <div className='flex'>
      
      <div className='relative inline-block'>
        <img src={TShirtWhiteSrc} className='' style={{ width: 700, height: 700}}/>

        <div className='absolute w-56 h-96 flex flex-row' style={{ top: 150, left: 220 }}>          
          <div className='overflow-hidden flex-1 border-black border-0'>
            <Logo className='text-gray-200' mono style={{ height: 380}}/> 
          </div>
          <div className='self-end flex-none w-12'>
            <Iso className=' text-gray-300'  style={{ width: 100, transformOrigin: '0 -100%', transform: 'rotate(-90deg) translate3d(-30px, -10px, 0)' }}/> 
          </div>
        </div>
      </div>


      <div className='relative inline-block'>
        <img src={TShirtBlackSrc} className='' style={{ width: 700, height: 700}} />
        <div className='absolute w-56 h-96 flex flex-row' style={{ top: 150, left: 220 }}>          
          <div className='overflow-hidden flex-1 border-black border-0'>
            <Logo className='text-gray-800' mono style={{ height: 380}}/> 
          </div>
          <div className='self-end flex-none w-12'>
            <Iso className=' text-gray-700'  style={{ width: 100, transformOrigin: '0 -100%', transform: 'rotate(-90deg) translate3d(-30px, -10px, 0)' }}/> 
          </div>
        </div>

      </div>
    </div>

  )
}