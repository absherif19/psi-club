import React from 'react'
import Title from './Title'
import ImageTitle from './Image&Title';
import TheApps from './TheApps';

const GetTheAppMain = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Title />
        <ImageTitle />
        <TheApps />
    </div>
  )
}

export default GetTheAppMain
