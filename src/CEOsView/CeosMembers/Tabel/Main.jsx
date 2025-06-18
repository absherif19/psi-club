import React from 'react'
import Header from './Header'
import Filters from './Filters';
import Tabel from './Tabel';

const MainTabelView = () => {
  return (
    <div className='my-4 space-y-6'>
      <Header />
      <Filters />
      <Tabel />
    </div>
  )
}

export default MainTabelView
