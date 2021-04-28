import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

const FooterAdmin = () => {
    return (
        <MDBFooter backgroundColor='light' className='text-center text-lg-left'>          
          <div className='text-white text-center p-3' style={{ backgroundColor: '#0097A7' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-white' href='https://www.medianet.tn/fr'>
                Mediashop.tn
        </a>
        </div>
        </MDBFooter>
    )
}
export default FooterAdmin