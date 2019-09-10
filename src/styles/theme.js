import { Platform } from 'react-native';

const theme = {
  // Misc
  colors: {
    green: '#29cb7e',
    white: '#ffffff',
    black: '#000000',
  },
  margins: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 25,
    xl: 35,
  },
  fontSize: {
    sm: 20,
    md: 28,
    lg: 32,
    xl: 40,
  },
  fontFamily: {
    bold: 'NetlifeSansY-Bold',
    regular: 'NetlifeSansY-Regular',
  },
  // Global styling
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  appWrapper: {
    flex: 1,
  },
};

const font = {
  smRegular: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.fontSize.sm,
  },
  smBold: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.fontSize.sm,
  },
  mdBold: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.fontSize.md,
  },
  lgBold: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    lineHeight: theme.fontSize.lg,
  },
  xlBold: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.xl,
    lineHeight: theme.fontSize.xl,
  },
};

export { theme, font };
