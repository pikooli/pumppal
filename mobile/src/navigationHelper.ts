import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const getActiveRoute = async (
  navigationState: any
): Promise<{ name: string; key: string } | null> =>
  new Promise((resolve) => {
    if (!navigationState) {
      resolve(null);
    }
    if (!navigationState?.routes) {
      resolve(navigationState.name);
    }

    const route = navigationState?.routes?.[navigationState.index];
    // dive into nested navigators
    if (route?.state?.routes) {
      resolve(getActiveRoute(route.state));
    }

    resolve(route);
  });

const navigate = (name: string, params?: Record<string, unknown>): void =>
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name,
      params,
    })
  );

const replace = (routeName: string, params?: Record<string, unknown>): void =>
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));

const goBack = (): void => navigationRef.current?.goBack();

const refresh = (params?: Record<string, unknown>): void =>
  navigationRef.current?.dispatch({
    ...CommonActions.setParams({
      ...params,
    }),
  });

const goBackToTop = (): void =>
  navigationRef.current?.dispatch(StackActions.popToTop());

const pop = (n: number): void =>
  navigationRef.current?.dispatch(StackActions.pop(n));

const popToTop = (): void =>
  navigationRef.current?.dispatch(StackActions.popToTop());

const push = (routeName: string, params?: Record<string, unknown>): void =>
  navigationRef.current?.dispatch(StackActions.push(routeName, params));

const reset = (
  index: number,
  routes: { name: string; params?: Record<string, unknown> }[]
): void => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    })
  );
};

const addListener = (
  listener: "state" | "options" | "__unsafe_action__",
  callback: () => void
): void => {
  navigationRef.current?.addListener(listener, callback);
};

const navigationHelper = {
  addListener,
  goBack,
  goBackToTop,
  navigationRef,
  navigate,
  pop,
  popToTop,
  push,
  refresh,
  replace,
  reset,
};

export default navigationHelper;
