import { StyleSheet } from "react-native";
import theme from "./theme";

const meetupListStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: theme.colors.yummyPink
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 4,
    borderColor: theme.colors.babyBlue,
    backgroundColor: theme.colors.yetiWhite,
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
export default meetupListStyles;