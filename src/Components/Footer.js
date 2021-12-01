import { Container, Link } from '@mui/material'
import React from 'react'

function Footer() {
   return (
      <Container>
         <div >
         <h2>
            Social media
         </h2>
         <Link to='/'>Instagram</Link><br/>
         <Link to='/'>Github</Link><br/>
         <Link to='/'>Linkedin</Link><br/>
         <Link to='/'>Discord</Link><br/>
         </div>
      </Container>
      
   )
}

export default Footer

