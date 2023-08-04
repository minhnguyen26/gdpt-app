import React from 'react';
import {StyleProp} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../themes/Colors';

const ICON_GROUP_NAMES = [
  {Component: MaterialIcons, name: 'MaterialIcons'},
  {Component: Ionicons, name: 'Ionicons'},
  {Component: Feather, name: 'Feather'},
];

type IconGroupName = 'MaterialIcons' | 'Ionicons' | 'Feather';

// Check this for icon list
// https://oblador.github.io/react-native-vector-icons/

export interface IconProps {
  groupName?: IconGroupName;
  name?: string;
  size?: number;
  color?: string;
  style?: StyleProp<any>;

  onPress?: () => void;
}

const Icon = React.memo((props: IconProps): JSX.Element => {
  const {
    style = {},
    groupName,
    name,
    size = 30,
    onPress,
    color = Colors.greyScale1,
  } = props;

  var Component: any = MaterialIcons;
  ICON_GROUP_NAMES.map(Icon => {
    if (Icon.name === groupName) {
      Component = Icon.Component;
    }
  });
  return (
    <Component
      name={name}
      size={size}
      color={color}
      style={style}
      onPress={onPress}
    />
  );
});

export default Icon;
