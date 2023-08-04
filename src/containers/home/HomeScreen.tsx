import React, {useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackHeader from '../../components/BackHeader';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Images from '../../themes/Images';
import Metrics from '../../themes/Metrics';
import {content} from '../../utils/AppData';
import {isANDROID} from '../../utils/AppUtils';
import {navigate} from '../../utils/navigation';
import ContentList from './components/contentList';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const onPressNavigate = (item: any) => {
    console.log('=>item', item);
    if (item.id === 3) {
      navigate('SemaphoreScreen');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: isANDROID ? undefined : insets.top,
        },
      ]}>
      <ImageBackground source={Images.background} style={{flex: 1}}>
        <BackHeader
          // children={ }
          title={'GDPT Đức Tuệ'}
          styleTitle={{
            fontWeight: '600',
            fontSize: 18,
          }}
        />
        <View style={{height: 60}} />
        <ContentList data={content} onPress={onPressNavigate} />
      </ImageBackground>
      {/* <Image source={{}} style={styles.image} /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    aspectRatio: 1,
    width: Metrics.screenWidth * 0.7,
    height: undefined,
  },
});
