import React from 'react'
import { blue } from '@geut/brand-colors'

export function Logo ({ 
    mono = false, 
    fillColor='none', 
    strokeLinecap='square',
    strokeLinejoin='miter',
    strokeMiterlimit='1.5',
    strokeWidth=(mono ? 10 : 0),
    ...props }) {

  const currentColor = mono && fillColor !== 'none' ? fillColor : 'currentColor'
  const stroke = mono ? currentColor : 'none'

  return ( 
    <svg {...props} viewBox='0 0 311 457' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <g transform='matrix(1,0,0,1,-70,-53)' 
      fillRule='evenodd'
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeMiterlimit={strokeMiterlimit}
      >
        <g transform='matrix(0.86861,0.188418,-0.253824,1.17013,-59.1243,-195.055)'>
          <path 
            fill={mono ? fillColor : blue[300]}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            d='M474.655,152.871C474.655,152.871 319.265,190.988 487.244,274.821C611.943,337.055 616.153,390.422 587.37,442.766C542.656,524.078 376.644,527.945 376.644,527.945C376.644,527.945 532.649,488.609 369.258,404.062C297.357,366.856 209.111,319.441 269.356,232.266C325.541,150.964 474.655,152.871 474.655,152.871Z'
          />
          <clipPath id='_clip1'>
            <path d='M474.655,152.871C474.655,152.871 319.265,190.988 487.244,274.821C611.943,337.055 616.153,390.422 587.37,442.766C542.656,524.078 376.644,527.945 376.644,527.945C376.644,527.945 532.649,488.609 369.258,404.062C297.357,366.856 209.111,319.441 269.356,232.266C325.541,150.964 474.655,152.871 474.655,152.871Z' />
          </clipPath>
          <g clipPath='url(#_clip1)'>
            <g transform='matrix(1.09953,-0.17705,0.238509,0.816201,85.8323,150.7)'>
            {mono ? (
              <path
              fill={fillColor}
              stroke={stroke}
              strokeWidth={strokeWidth}
              d='M334.624,74.207C334.624,74.207 210.919,51.212 192.525,109.112C167.612,187.535 320.163,260.459 271.521,386.396C229.023,496.425 157.882,495.41 157.882,495.41'
            />) : (
              <path
              fill={blue[700]}
              d='M334.624,74.207C334.624,74.207 210.919,51.212 192.525,109.112C167.612,187.535 320.163,260.459 271.521,386.396C229.023,496.425 157.882,495.41 157.882,495.41C157.882,495.41 296.139,519.686 350.05,419.29C397.537,330.855 357.887,294.197 273.279,186.041C192.757,83.106 332.4,77.434 334.624,74.207Z'
              />
            )}
            </g>
            <g transform='matrix(1.09953,-0.17705,0.238509,0.816201,111.531,148.736)'>
              <path
                fill={mono ? fillColor : blue[500]}
                stroke={stroke}
                strokeWidth={strokeWidth}
                d='M334.624,74.207C334.624,74.207 210.919,51.212 192.525,109.112C167.612,187.535 338.977,269.954 306.031,392.286C280.852,485.78 120.882,493.41 120.882,493.41C120.882,493.41 300.139,525.686 350.05,419.29C397.537,330.855 357.887,294.197 273.279,186.041C192.757,83.106 332.4,77.434 334.624,74.207Z'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}