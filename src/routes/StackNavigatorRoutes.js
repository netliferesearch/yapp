import MainScreen from '../screens/MainScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import WorkshopScreen from '../screens/WorkshopScreen';
import TalkScreen from '../screens/TalkScreen';
import ProgramScreen from '../screens/ProgramScreen';

const StackNavigatorRoutes = {
  MainScreen: { screen: MainScreen },
  SpeakersScreen: { screen: SpeakersScreen },
  SpeakerScreen: { screen: SpeakerScreen },
  WorkshopScreen: { screen: WorkshopScreen },
  TalkScreen: { screen: TalkScreen },
  ProgramScreen: { screen: ProgramScreen },
};

export default StackNavigatorRoutes;
