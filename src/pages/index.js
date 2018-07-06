import React from 'react'
import Link from 'gatsby-link'

import Menu from '../components/Menu'
import externalLinkIcon from '../assets/external-link.svg'
import mailIcon from '../assets/mail.svg'

export default () => (
  <Menu>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/posts'>Posts</Link></li>
    <li><Link to='/talks'>Talks</Link></li>
    <li>
      <a href='mailto:land@ythecombinator.space?subject=Let%27s%20have%20some%20coffee'>
        land[AT]ythecombinator[DOT]space
      </a>
      <img id='mail' src={mailIcon} alt='Email' />
    </li>
    <li>
      <a href='https://github.com/ythecombinator' target='_blank'>
        GitHub
      </a>
      <img id='external-link' src={externalLinkIcon} alt='Github' />
    </li>
    <li>
      <a href='https://twitter.com/ythecombinator' target='_blank'>
        Twitter
      </a>
      <img id='external-link' src={externalLinkIcon} alt='Twitter' />
    </li>
    <li>
      <a href='https://appear.in/ythecombinator' target='_blank'>
        Appear.in
      </a>
      <img id='external-link' src={externalLinkIcon} alt='Appear.in' />
    </li>     
  </Menu>
)
