import * as React from 'react';

const Cancel = ({onClick}) => (

    
  <svg
  onClick={onClick}
    viewBox='0 0 105 105'
    style={{
      enableBackground: 'new 0 0 150 105',
      cursor: 'pointer'
    }}
  >
    <linearGradient
      id='a'
      gradientUnits='userSpaceOnUse'
      x1={-181.5}
      y1={148.5}
      x2={-181.5}
      y2={248.5}
      gradientTransform='matrix(1 0 0 -1 234 251)'
    >
      <stop
        offset={0}
        style={{
          stopColor: '#ff2c55',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#ff4166',
        }}
      />
    </linearGradient>
    <path
      d='M102.5 80.07c0 12.34-10.02 22.43-22.27 22.43H24.77C12.52 102.5 2.5 92.41 2.5 80.07V24.93C2.5 12.59 12.52 2.5 24.77 2.5h55.46c12.25 0 22.27 10.09 22.27 22.43v55.14z'
      style={{
        fill: 'url(#a)',
      }}
    />
    <path
      d='m54.39 52.5 22.73-23.6c.52-.54.51-1.41-.04-1.93-.54-.52-1.41-.51-1.93.04L52.5 50.53 29.85 27.01a1.37 1.37 0 0 0-1.93-.04 1.37 1.37 0 0 0-.04 1.93l22.73 23.6-22.73 23.6c-.52.54-.51 1.41.04 1.93.26.25.61.38.95.38.36 0 .71-.14.98-.42L52.5 54.47 75.15 78c.27.28.62.42.98.42.34 0 .68-.13.95-.38.54-.52.56-1.38.04-1.93L54.39 52.5z'
      style={{
        fill: '#fff',
      }}
    />
  </svg>
  
);

export default Cancel;
