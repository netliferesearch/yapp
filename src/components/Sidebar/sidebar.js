import React from 'react';
import { SafeAreaView } from 'react-native';
import { DrawerItems } from 'react-navigation';

import { styles, drawer } from '../../styles/SidebarStyles';

const Sidebar = props => (
  <SafeAreaView style={styles.wrapper}>
    <DrawerItems
      {...props}
      activeTintColor={drawer.activeTintColor}
      activeBackgroundColor={drawer.activeBackgroundColor}
      inactiveTintColor={drawer.activeTintColor}
      inactiveBackgroundColor={drawer.inactiveBackgroundColor}
      labelStyle={drawer.labelStyle}
      fontFamily="NetlifeY"
    />
  </SafeAreaView>
);

export default Sidebar;
