import { StyleSheet } from "react-native";
import theme from "./theme";

const meetupEventStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: theme.colors.yummyPink
  },
  screenTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.yellingRed,
    textAlign: 'center',
  },
  screenTitle_wrapper: {
    padding: 12,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'NetlifeY',
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.yellingRed,
  },
  subTitleText: {
    fontFamily: 'NetlifeY',
    fontWeight: 'normal',
    fontSize: 16,
    color: theme.colors.yellingRed,
  },
  sponsorText: {
    fontFamily: 'NetlifeY',
    fontWeight: 'normal',
    fontSize: 16,
    color: theme.colors.babyBlue,
  },
});
export default meetupEventStyles;