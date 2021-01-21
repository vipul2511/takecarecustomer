import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F6F9FE',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#b31474',
  },
  MenuHomeIconStyle: {
    marginLeft: resp(10),
    marginTop: resp(15),
    height: resp(30),
    width: resp(26),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  hederTextStyle: {
    marginTop: 10,
    justifyContent: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  loginButtonStyle: {
    marginTop: resp(50),
    width: resp(350),
    height: resp(50),
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#b31474',
    alignSelf: 'center',
  },
  listContainer: {
    elevation: 1,
    backgroundColor: '#fff',
    margin: 8,
    height: resp(80),
    width: '100%',

    flexDirection: 'row',
  },
  ImageContainer: {
    flex: 0.2,

    alignItems: 'flex-start',
  },
  TextRatingStyle: {
    fontSize: 15,
    marginLeft: 10,
  },
  DetailsContainer: {
    flex: 0.8,

    flexDirection: 'column',
  },
  TextNameStyle: {
    marginTop: 10,
    fontSize: 15,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
  },
  ImageStyle: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',

    height: 60,
    width: 60,
    alignSelf: 'center',
    borderRadius: 50,
  },
  loading: {
    left: 0,
    right: 0,
    top: 20,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  textCon: {
    width: '90%',
    marginLeft: resp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorGrey: {
    color: '#000',
  },
  colorYellow: {
    color: '#000',
  },
})
export default styles
