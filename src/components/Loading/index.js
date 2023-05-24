import React from 'react';
import { Modal, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

export default function Loading(props) {
  const {text, backgroundColor} = props;
  const processing = useSelector(state => state.leaderBoard.processing);
  return (
    <Modal transparent={true} animationType={'none'} visible={processing}>
      <View style={styles.modalBackground}>
        <View
          style={[
            styles.activityIndicatorWrapper,
            {backgroundColor: backgroundColor},
          ]}>
          <ActivityIndicator
            animating={true}
            size={'large'}
            color={'orange'}
          />
          <Text style={styles.waiting}>Please wait</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.52)',
  },
  activityIndicatorWrapper: {
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 30,
  },
});
