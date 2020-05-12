import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false, // tira o header padrão
      cardStyle: { backgroundColor: '#fffeff' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Details" component={Details} />
  </App.Navigator>
);

export default AppRoutes;
