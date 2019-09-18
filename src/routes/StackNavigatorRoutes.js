import MainScreen from '../screens/MainScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import WorkshopScreen from '../screens/WorkshopScreen';
import TalkScreen from '../screens/TalkScreen';
import SponsorsScreen from '../screens/SponsorsScreen';
import YMapScreen from '../screens/YMapScreen';
import MyProgramsScreen from '../screens/MyProgramsScreen';
import AboutYScreen from '../screens/AboutYScreen';
import ProgramScreen from '../screens/ProgramScreen';

const StackNavigatorRoutes = {
  MainScreen: {
    screen: MainScreen,
    params: {
      menuTitle: 'START',
    },
  },
  ProgramScreen: {
    screen: ProgramScreen,
    params: {
      menuTitle: 'PROGRAM',
    },
  },
  MyProgramsScreen: {
    screen: MyProgramsScreen,
    params: {
      menuTitle: 'MY PROGRAM',
    },
  },
  SpeakersScreen: {
    screen: SpeakersScreen,
    params: {
      menuTitle: 'SPEAKERS',
    },
  },
  AboutYScreen: {
    screen: AboutYScreen,
    params: {
      menuTitle: 'ABOUT Y',
    },
  },
  SponsorsScreen: {
    screen: SponsorsScreen,
    params: {
      menuTitle: 'SPONSORS',
    },
  },
  YMapScreen: {
    screen: YMapScreen,
    params: {
      menuTitle: 'Y MAP',
    },
  },
  SpeakerScreen: { screen: SpeakerScreen },
  WorkshopScreen: { screen: WorkshopScreen },
  TalkScreen: { screen: TalkScreen },
};

export default StackNavigatorRoutes;
