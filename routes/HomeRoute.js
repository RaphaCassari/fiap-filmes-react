import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Favoritos from '../screens/Favoritos';
import UltimoVisto from '../screens/UltimoVisto';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Favoritos' component={Favoritos} />
      <Stack.Screen name='UltimoVisto' component={UltimoVisto} />
    </Stack.Navigator>
  );
}
