import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet, Text,
  useColorScheme,
  View
} from "react-native";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import { persistStore1, store } from "./src/redux/store";
import SearchBar from "./src/components/Searchbar";
import UserListing from "./src/components/UserListing";
import Loading from "./src/components/Loading";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore1}>
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
          <Loading />
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View
            style={[backgroundStyle, styles.container]}>
            <SearchBar />
            <UserListing />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  searchContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
