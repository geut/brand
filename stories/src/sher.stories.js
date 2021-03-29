
import './tailwind.css'
import { Iso, Logo } from '@geut/brand-sher'

export default {
  title: 'SHER',
  decorators: [
    story => (<div className='min-h-screen h-full p-5 bg-geutBlue-900 text-gray-200' >{story()}</div>)
  ]
}

export const IsoAndLogo = () => {
  return (
    <div className='flex flex-col max-w-xs'>
      <div className='flex flex-col items-center m-5 space-y-3'>
        <Logo className='h-20'/><Iso className='h-8'/>
      </div>
      <div className='flex flex-row items-center m-5 space-x-4'>
        <Logo className='h-24'/><Iso className='h-16'/>
      </div>
    </div>
  )
}

export const Isotype = () => {
  return (
    <div className='flex flex-col items-start max-w-xs border-l-2'>
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
    <div className='flex flex-col items-start max-w-xs border-l-2'>
      <Logo className='h-2'/>
      <Logo className='h-4'/>
      <Logo className='h-8'/>
      <Logo className='h-10'/>
      <Logo className='h-12'/>
      <Logo className='h-16'/>
      <Logo className='h-32'/>
      <Logo className='h-64'/>
      <Logo className='h-96'/>
    </div>
  )
}

export const LogotypeMonochromatic = () => {
  return (
    <div className='flex flex-col items-start max-w-xs border-l-2'>
      <Logo mono className='h-2'/>
      <Logo mono className='h-4'/>
      <Logo mono className='h-8'/>
      <Logo mono className='h-10'/>
      <Logo mono className='h-12'/>
      <Logo mono className='h-16'/>
      <Logo mono className='h-32'/>
      <Logo mono className='h-64'/>
    </div>
  )
}

export const LogotypeOnBackground = () => {
  return (
    <div className='flex flex-col items-start max-w-xs border-l-2'>
      <div className='flex flex-row items-center'>
        <Logo className='h-4'/>
        <Logo mono className='h-4'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-8'/>
        <Logo mono className='h-8'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-10'/>
        <Logo mono className='h-10'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-12'/>
        <Logo mono className='h-12'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-16'/>
        <Logo mono className='h-16'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-32'/>
        <Logo mono className='h-32'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-64'/>
        <Logo mono className='h-64'/>
      </div>
      <div className='flex flex-row items-center'>
        <Logo className='h-96'/>
        <Logo mono className='h-96'/>
      </div>

    </div>
  )
}