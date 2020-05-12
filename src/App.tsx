import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
