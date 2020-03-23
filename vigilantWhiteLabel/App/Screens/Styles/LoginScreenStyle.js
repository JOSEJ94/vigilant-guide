import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Theme/Colors';

export default EStyleSheet.create({
  loginScreenBackgroundImage: {
    backgroundColor: Colors.Primary,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  screenContainer: {
    flex: 1
  },
  centeredLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '15rem',
    height: '15rem'
  },
  loginFormContainer: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'space-around'
  },
  marginTopSmall: {
    marginTop: '2rem'
  },
  marginTopMicro: {
    marginTop: '1rem'
  },
  marginRightMicro: {
    marginRight: '1rem'
  },
  loginButton: {
    backgroundColor: Colors.Primary,
    height: '4rem'
  },
  inputNoUnderline: {
    borderBottomWidth: 0
  },
  inputStyle: {
    color: Colors.White
  },
  roundedInput: {
    borderStyle: 'solid',
    overflow: 'hidden',
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.SnowWhiteTranslucid,
    backgroundColor: Colors.SnowWhiteTranslucid,
    opacity: 0.65,
    borderRadius: 25
  },
  roundedButton: {
    borderStyle: 'solid',
    overflow: 'hidden',
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 40
  },
  bottomOptions: {
    marginTop: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  secondaryOptions: {
    color: Colors.SnowWhite,
    fontWeight: 'bold'
  }
});
