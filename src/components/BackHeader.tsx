import Icon from '../components/Icon';
import Text from '../components/Text';
import {isNil} from 'lodash';
import React, {memo} from 'react';
import {Platform, Pressable, StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../themes/Colors';
import Metrics from '../themes/Metrics';

import {goBack, resetTo} from '../utils/navigation';

export declare interface BackHeaderProps {
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNodeArray;
  lightContent?: boolean;
  title: JSX.Element | string;
  style?: any;
  styleTitle?: any;
  iconColor?: any;
  // Fast styles
  rightComponent?: any;
  leftComponent?: any;
  bottomComponent?: any;
  hiddenBack?: boolean;
  backToHome?: boolean;
  [x: string]: any;
}

const BackHeader = (props: BackHeaderProps): JSX.Element => {
  const {
    title,
    lightContent = false,
    children,
    style,
    iconColor = Colors.darkBlue,
    rightComponent,
    leftComponent,
    bottomComponent,
    hiddenBack = false,
    backToHome = false,
    styleTitle,
  } = props;
  const insets = useSafeAreaInsets();

  const onBackPress = () => {
    if (!backToHome) {
      !hiddenBack && goBack();
    } else {
      resetTo('HomeScreen');
    }
  };
  const isANDROID = Platform.OS === 'android';
  return (
    <View
      style={[
        styles.container,
        {marginTop: isANDROID ? insets.top : 0, paddingHorizontal: 16},
        style,
      ]}>
      <StatusBar
        translucent={true}
        barStyle={lightContent ? 'light-content' : 'dark-content'}
      />
      {leftComponent && (
        <View style={{flex: 1, flexDirection: 'row'}}>{leftComponent}</View>
      )}
      {!isNil(children) ? (
        children
      ) : (
        <>
          {!hiddenBack && (
            <Pressable
              hitSlop={{
                left: 10,
                top: 10,
                right: 10,
                bottom: 10,
              }}
              onPress={onBackPress}
              style={{paddingRight: 10}}>
              <View>
                <Icon
                  size={24}
                  groupName={'Ionicons'}
                  name={'chevron-back'}
                  color={iconColor}
                />
              </View>
            </Pressable>
          )}
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 60,
              left: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              fS16
              medium
              style={[{color: Colors.black, textAlign: 'center'}, styleTitle]}>
              {title}
            </Text>
            {!isNil(bottomComponent) && bottomComponent}
          </View>
        </>
      )}
      {rightComponent && (
        <View
          style={{justifyContent: 'flex-end', flex: 1, flexDirection: 'row'}}>
          {rightComponent}
        </View>
      )}
    </View>
  );
};

export default memo(BackHeader);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    width: Metrics.screenWidth,
    borderBottomColor: '#EDF2F7',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingVertical: 6,
  },
});
