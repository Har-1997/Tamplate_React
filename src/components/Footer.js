import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='contactsFooter'>
            <a href="tel:+374112554222" className='telLink'><b className='namCont'>Tel:</b> +374 (11)-554-2222</a>
            <a href="mailto:someone@example.com"><b className='namCont'>Email:</b> someone@example.com</a>
        </div>
        <div className='dateComp'>© 1993—2022 EsimInch</div>
      </div>
    )
  }
}
