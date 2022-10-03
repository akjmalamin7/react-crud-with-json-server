import React, { Fragment } from 'react'
import { SELECT } from '../styled/input'

const Select = ({children}) => {
  return (
    <Fragment>
        <SELECT name="" id="">
            {children}
        </SELECT>
    </Fragment>
  )
}

export default Select