/* 

Contains: 
-Colors (yummyPink, yellingRed, yetiWhite)
-Padding (paddingSmall,-Medium,-Large)
-Headers (h1,h2,h3)

*/

const theme = {
  colors: {
    yummyPink: '#FCF0EE',
    yellingRed: '#DD1215',
    yetiWhite: '#FFFFFF',
    babyBlue: '#0000FF',
  },
  paddingSmall: {
    padding: 10
  }, 
  paddingMedium: {
    padding: 15
  },
  paddingLarge: {
    padding: 20
  },
  h1: {
    fontSize: 55,
    fontFamily: 'NetlifeY',
    paddingTop: 20,
    paddingBottom: 20
  },
  h2: {
    fontSize: 35,
    fontFamily: 'NetlifeY',
    paddingTop: 15,
    paddingBottom: 15
  },
  h3: {
    fontSize: 25,
    fontFamily: 'NetlifeY',
    paddingTop: 7,
    paddingBottom: 7
  }, 
  p: {
    fontSize: 15,
    fontFamily: 'NetlifeY',
  }
}

export default theme;