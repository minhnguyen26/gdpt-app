import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

const config: {
  navigator: any;
} = {
  navigator: null,
};

export function setNavigator(nav: any) {
  if (nav) {
    config.navigator = nav;
  }
  return nav;
}

export function getActiveRouteName(state: any): void {
  if (state) {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  }
}

export const screenTracking = (state: any) => {
  const currentRouteName = getActiveRouteName(state);
  console.log(`====== NAVIGATING to > ${currentRouteName}`);
};

export function replace(routeName: string, params?: any) {
  if (config.navigator && routeName) {
    config.navigator.dispatch(StackActions.replace(routeName, params));
  }
}

export function navigate(routeName: string, params?: any) {
  if (config.navigator && routeName) {
    config.navigator.dispatch(CommonActions.navigate(routeName, params));
  }
}

export function goBack() {
  if (config.navigator) {
    let action = CommonActions.goBack();
    config.navigator.dispatch(action);
  }
}

export function push(routeName: string, params?: any) {
  if (config.navigator && routeName) {
    let action = StackActions.push(routeName, params);
    config.navigator.dispatch(action);
  }
}

export function resetTo(routeName: string, params?: any) {
  if (config.navigator && routeName) {
    let action = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    });
    config.navigator.dispatch(action);
  }
}

export function openDrawer() {
  let action = DrawerActions.openDrawer();
  config.navigator?.dispatch(action);
}

export default config;
