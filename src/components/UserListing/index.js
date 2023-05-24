import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/leaderboard.actions";


export default function UserListing (props) {
  const listingUsers = useSelector(state => state.leaderBoard.listingUsers);

  const renderItemView = ({item, index}) => {
    return (
      <View style={styles.topContainer}>
        <Text style={[styles.topContainerText, {flex: 0.40, color: item?.isSearchedUser ? 'red' : 'black'}]}>{item?.name}</Text>
        <Text style={[styles.topContainerText, {flex: 0.20}]}>{item?.rank}</Text>
        <Text style={[styles.topContainerText, {flex: 0.20}]}>{item?.bananas}</Text>
        <Text style={[styles.topContainerText, {flex: 0.20}]}>{item?.isSearchedUser ? 'yes' : 'no'}</Text>
      </View>
    )
  };

  return (
    <FlatList
      data={listingUsers}
      renderItem={renderItemView}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={() => {
        return(
          <View style={styles.topContainer}>
            <Text style={[styles.topContainerText, {flex: 0.40, fontWeight: 'bold'}]}>Name</Text>
            <Text style={[styles.topContainerText, {flex: 0.20, fontWeight: 'bold'}]}>Rank</Text>
            <Text style={[styles.topContainerText, {flex: 0.20, fontWeight: 'bold'}]}>Number of bananas</Text>
            <Text style={[styles.topContainerText, {flex: 0.20, fontWeight: 'bold'}]}>isSearchedUser?</Text>
          </View>
        )
      }}
      ListEmptyComponent={() => {
        return (
          <View style={styles.noDataContainer}>
            <Text style={styles.noData}>
              This user name does not exist! Please specify an existing user name!
            </Text>
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    width: '88%',
    overflow: 'hidden',
  },
  topContainerText: {
    flex: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 6,
    fontSize: 12,
    color: '#000',
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  searchContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noDataContainer: {
    flex: 1,
    marginTop: 200,
    width: '87%'
  },
  noData: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
