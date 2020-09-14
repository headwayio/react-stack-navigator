import React from 'react';
import { Text, View, Button } from 'react-native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
type ModalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Modal'>;

type Props = {
  navigation: ModalScreenNavigationProp;
};

const Modal = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.05)' }}>
      <Text>I am a modal</Text>
      <Button title="Close" onPress={navigation.goBack} />
    </View>
  );
};

export default Modal;
