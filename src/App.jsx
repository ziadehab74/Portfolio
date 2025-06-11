import { useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Skills from './components/6-skills/skills'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import FadeInSections from './components/FadeInSections';

function App() {

  return (
    <div className='container' id='up'>
      <Header />
      <FadeInSections><Hero /></FadeInSections>
      <div className='divider' />
      <FadeInSections><Skills /></FadeInSections>
      <div className='divider' />
      <FadeInSections><Main /></FadeInSections>
      <div className='divider' />
      <FadeInSections><Contact /></FadeInSections>
      <div className='divider' />
      <FadeInSections><Footer /></FadeInSections>
    </div>
  )
}

export default App
