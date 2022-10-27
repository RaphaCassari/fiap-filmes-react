import HomeRoute from './routes/HomeRoute';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Sobre from './screens/Sobre';
import Favoritos from './screens/Favoritos';
import UltimoVisto from './screens/UltimoVisto';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { UltimoVistoProvider } from './contexts/UltimoVistoContext';

export default function App() {
  const Tab = createBottomTabNavigator();
  function AppProviders({ children }) {
    return (
      <UltimoVistoProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </UltimoVistoProvider>
    );
  }

  return (
    <AppProviders>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name='Home'
            component={HomeRoute}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='Favoritos'
            component={Favoritos}
            options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: ({ color, size }) => <Ionicons name='heart' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='Último Visto'
            component={UltimoVisto}
            options={{
              tabBarLabel: 'Último Visto',
              tabBarIcon: ({ color, size }) => <AntDesign name='clockcircleo' color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name='Sobre'
            component={Sobre}
            options={{
              tabBarLabel: 'Sobre',
              tabBarIcon: ({ color, size }) => <AntDesign name='questioncircleo' color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProviders>
  );
}
