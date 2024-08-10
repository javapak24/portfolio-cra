import React from 'react'
import MyHeader from './components/MyHeader'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'

export default function Home() {
  return (
    <div className="App">
    <MyHeader/>
    <MyMain/>
    <MyFooter/>
   </div>
  )
}