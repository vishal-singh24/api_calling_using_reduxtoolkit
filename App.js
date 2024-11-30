
import React from 'react'
import Navigation from './src/Navigation/Navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Store from './src/redux/Store'

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={Store}>

      <Navigation/>
      </Provider>
      
    </GestureHandlerRootView>

  )
}

export default App