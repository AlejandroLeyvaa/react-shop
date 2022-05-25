import React from 'react';
import {
  StyleSheet,
  useColorScheme,

} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { AuthState } from './src/components/AuthProvider';
import { Navigation } from './src/config/navigation';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <AuthState>
        <Navigation />
      </AuthState>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
