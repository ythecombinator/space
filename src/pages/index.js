import React from 'react'
import Link from 'gatsby-link'

import Menu from '../components/Menu'
import icon from '../assets/external-link.svg'

export default () => (
  <Menu>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/posts'>Posts</Link></li>
    <li><Link to='/talks'>Talks</Link></li>
    <li>
      <a href='https://github.com/ythecombinator' target='_blank'>
        GitHub
      </a>
      <img id='external-link' src={icon} alt='External link icon' />
    </li>
    <li>
      <a href='https://twitter.com/ythecombinator' target='_blank'>
        Twitter
      </a>
      <img id='external-link' src={icon} alt='External link icon' />
    </li>
    <li>
      <a href='https://appear.in/ythecombinator' target='_blank'>
        Appear.in
      </a>
      <img id='external-link' src={icon} alt='External link icon' />
    </li>     
  </Menu>
)
