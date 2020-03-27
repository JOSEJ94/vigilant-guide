import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Theme/Colors';

export default EStyleSheet.create({
  screenContainer: {
    flex: 1
  },
  optionContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.SnowWhite
  },
  optionIconContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },
  optionTitleContainer: {
    flex: 5,
    justifyContent: 'center'
  },
  optionTitleText: {
    fontSize: '$regularfontSize'
  },
  optionIcon: { width: 40, height: 40 }
});
