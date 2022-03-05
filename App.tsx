import React from 'react';
import AppContainer from './src/components/app-container';
import Navigator from './src/'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
  <SafeAreaProvider>
   <AppContainer>
      <Navigator  />
   </AppContainer>
   </SafeAreaProvider>
  );
}


