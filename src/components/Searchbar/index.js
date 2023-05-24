// SearchBar.js
import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { _setProcessing, getAllUsers } from "../../redux/actions/leaderboard.actions";
import { useDispatch } from "react-redux";

const SearchBar = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();
  const search = () => {
    dispatch(getAllUsers(searchPhrase, (cb) => {
      if (!cb) {
        Alert.alert('User', 'This user name does not exist! Please specify an existing user name!', [
          {text: 'OK', onPress: () => {
              setSearchPhrase('');
            }},
        ]);
      }
      dispatch(_setProcessing(false));
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar__clicked}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.searchButton}
          onPress={() => search()}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    overflow: 'hidden',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "75%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
  },
  input: {
    height: 50,
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  searchButton: {
    marginLeft: 10,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: "22%",
  },
  searchButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
