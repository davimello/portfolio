import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App;
