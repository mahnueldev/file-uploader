import DropSvg from '../svg/drop.svg'

const DropFiles = () => {
  return (
    <div className='flex coln bdr-dash-1x rad-2x hgt-6x wdt-6x align-cent justify-cent grab'>
    <div className='flex  '>
<img src={DropSvg} alt="media" className='media-disp' />
    </div>
    <div className=' wdt-3x txt-cent'>
      <p className='col-gray-l'>Drop your files here or <span className='col-blue wgt500 pointer'>Browse</span></p>
    </div>
    </div>
  )
}

export default DropFiles