import './index.less'
import Medium from '../../../assets/image/footer/medium@2x.png'
import GitHub from '../../../assets/image/footer/github@2x.png'
import Telegram from '../../../assets/image/footer/telegram@2x.png'
import Twitter from '../../../assets/image/footer/twitter@2x.png'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer_links'>
        <li>
          <a href='https://t.me/blackhole' target='_blank'>
            <img src={Telegram} />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/blackhole' target='_blank'>
            <img src={Twitter} />
          </a>
        </li>
        <li>
          <a href='https://github.com/blackhole' target='_blank'>
            <img className='gitHub_png' src={GitHub} />
          </a>
        </li>
        <li>
          <a href='https://blackhole.finance' target='_blank'>
            <img src={Medium} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
