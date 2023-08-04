import React, {useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackHeader from '../../components/BackHeader';
import Image from '../../components/Image';
import Text from '../../components/Text';
import {typeAlphabet} from '../../functions/semaphoreEnum';
import Images from '../../themes/Images';
import Metrics from '../../themes/Metrics';
import {content} from '../../utils/AppData';
import {isANDROID} from '../../utils/AppUtils';

const SemaphoreScreen = () => {
  const insets = useSafeAreaInsets();

  const string = ['b', 'o'];

  useEffect(() => {
    string.map((item: any) => console.log('=>>>>,'));
    console.log(string[1]);
    console.log(typeof string[1]);
    console.log('asd', typeAlphabet.A);
  }, []);

  const renderSer = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={{}} style={{width: 100, height: 100}} />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: isANDROID ? undefined : insets.top,
        },
      ]}>
      <BackHeader
        // children={ }
        title={'Luyện semaphore'}
        styleTitle={{
          fontWeight: '600',
          fontSize: 18,
        }}
      />
      {renderSer()}
    </View>
  );
};

export default SemaphoreScreen;

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
