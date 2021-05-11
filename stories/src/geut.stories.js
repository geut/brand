
import './tailwind.css'
import { Iso, Logo } from '@geut/brand'

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
