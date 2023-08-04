import {omit} from 'lodash';
import React, {useState} from 'react';
import {StyleProp, Text as RNText} from 'react-native';
import Colors from '../themes/Colors';
import {generateFastStyles} from '../utils/StyleUtils';

export interface TextProps {
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNodeArray;
  // Style
  style?: StyleProp<any>;

  medium?: boolean;
  regular?: boolean;
  regularRoboto?: boolean;
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  boldRoboto?: boolean;

  white?: boolean;
  black?: boolean;
  grey?: boolean;
  center?: boolean;
  json?: boolean;
  upperCase?: boolean;
  italic?: boolean;
  number?: boolean;
  underline?: boolean;

  Component?: any;
  shadowLevel?: number;
  readMoreLength?: number;
  [x: string]: any;

  color?: string;
  primary?: boolean;
  secondary?: boolean;
  content?: boolean;
}

const Text = React.memo((props: TextProps): JSX.Element => {
  const [expand, setExpand] = useState(false);

  const {
    medium,
    bold = false,
    regular = false,
    light = false,
    center = false,
    Component = RNText,
    json = false,
    upperCase = false,
    italic = false,
    number = false,
    shadowLevel,
    children,
    style,
    primary = false,
    secondary = false,
    content = false,
    black = false,
    white = false,
    grey = false,
    readMoreLength = 0,
    underline = false,
    color,
    semibold,
    regularRoboto,
    boldRoboto,
  } = props;

  const fastStyle = generateFastStyles(omit(props, ['children']));
  let _style: any = [style, fastStyle];

  return (
    <Component {...omit(props, ['children'])} style={[{}, _style]}>
      {/* <Text json>{flatten(_style)}</Text> */}
      {children}
    </Component>
  );
});

export default Text;
