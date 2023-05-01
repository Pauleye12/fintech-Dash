import React from 'react'

import Users from './Users';
import Table from './Table';
function Dashboarddetails({Filter}) {

    
  return (
      <div className='dashBody'>
          <div className='dashBodyWrapper'>
              <Users />
              <Table Filter= {Filter} />
          </div>
    </div>
  )
}

export default Dashboarddetails