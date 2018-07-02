import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  p {
    margin: 0;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: #fb958b;
      text-decoration: none;
    }
  }
`

export default () => (
  <StyledAbout>
    <p>
      I'm a client-side architect–with an iOS/front-end and node.js background–currently working as a front-end engineer at Beakyn, a company whose mission is to help people better understand locations by building the most comprehensive geofence and Point of Interest (PoI) data in the America.
    </p>
    <p>
      My areas of interest/passions include: JavaScript, Swift, architecture patterns (redux et al.), User Interfaces libraries and frameworks (React et al.), developer tooling, functional and reactive programming, unix philosophy, and User Interaction design.
    </p>
    <p>
      I also try to help as much as I can Brazilian local communities like Dev I/O Foundation, Ionic Brazil, CocoaHeads Fortaleza, Lambda I/O Foundation, and many others!
    </p>
  </StyledAbout>
)
