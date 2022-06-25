const LoadingSpinner = ({ className = '' }) => (
  <svg
    width='331px'
    height='331px'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    className={className}
    style={{
      marginRight: '-2px',
      display: 'block',
      backgroundRepeat: 'initial',
      animationPlayState: 'paused',
    }}
  >
    <path
      d='M27 50A23 23 0 0 0 73 50A23 27.2 0 0 1 27 50'
      fill='#0157ff'
      stroke='none'
      transform='matrix(1,0,0,1,0,0)'
      style={{
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        animationPlayState: 'paused',
      }}
    ></path>
  </svg>
)

export default LoadingSpinner
