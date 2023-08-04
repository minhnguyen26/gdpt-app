import React, {useEffect, useState} from 'react';
import {LogBox, Platform, StatusBar, View} from 'react-native';
import AppNavigation from '../navigation/AppNavigation';

const MainLayout = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <AppNavigation />
    </>
  );
};

export default MainLayout;
