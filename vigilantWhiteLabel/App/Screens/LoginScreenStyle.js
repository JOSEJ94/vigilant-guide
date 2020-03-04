import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
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
  loginButton: {
    height: '4rem'
  }
});
