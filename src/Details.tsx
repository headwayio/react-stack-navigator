import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: DetailScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const Details = ({ navigation, route }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.message}</Text>
      <Button onPress={navigation.goBack} title="Go Back" />
    </View>
  );
};

export default Details;
