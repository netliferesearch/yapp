import MainScreen from '../screens/MainScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import WorkshopScreen from '../screens/WorkshopScreen';
import TalkScreen from '../screens/TalkScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SponsorsScreen from '../screens/SponsorsScreen';
import YMapScreen from '../screens/YMapScreen';
import MyProgramsScreen from '../screens/MyProgramsScreen';

const StackNavigatorRoutes = {
  MainScreen: { screen: MainScreen },
  SpeakersScreen: { screen: SpeakersScreen },
  SpeakerScreen: { screen: SpeakerScreen },
  WorkshopScreen: { screen: WorkshopScreen },
  TalkScreen: { screen: TalkScreen },
  CalendarScreen: { screen: CalendarScreen },
  SponsorsScreen: { screen: SponsorsScreen },
  YMapScreen: { screen: YMapScreen },
  MyProgramsScreen: { screen: MyProgramsScreen },
};

export default StackNavigatorRoutes;
