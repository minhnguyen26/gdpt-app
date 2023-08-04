import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Image from '../../../components/Image';
import React from 'react';
import Metrics from '../../../themes/Metrics';
import Text from '../../../components/Text';
import {ImageBackground} from 'react-native';

export interface Props {
  onPress: (item: any, index: number) => void;
  onSelected?: any;
  selectedIndex?: number;
  data: any;
  horizontal?: boolean;
  imageHeaderStyle?: StyleProp<ViewStyle>;
  listKey?: string;
}

const ContentList: React.FC<Props> = props => {
  const renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={{marginBottom: 30, marginLeft: 17}}
        onPress={() => props.onPress(item, index)}>
        <ImageBackground source={item.background}>
          <View
            style={{
              marginTop: 10,
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              style={styles.imageStyle}
              resizeMode="cover"
            />
            <View
              style={{
                width: Metrics.screenWidth * 0.44,
                marginTop: 5,
                alignItems: 'center',
                height: Metrics.screenWidth * 0.25,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  lineHeight: 21,
                  fontSize: 18,
                  fontWeight: '500',
                  marginVertical: 10,
                }}>
                {item?.name}
              </Text>
              <Text style={{lineHeight: 21, fontSize: 14}}>{item?.desc}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <FlatList
        data={props.data}
        keyExtractor={(item: any, index: any) => index + item?.id.toString()}
        renderItem={({item, index}: any) => renderItem(item, index)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        initialNumToRender={1}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  imageStyle: {
    aspectRatio: 1,
    width: Metrics.screenWidth * 0.26,
    height: undefined,
    borderRadius: 5,
  },
});
