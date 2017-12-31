import React from 'react';
import {AppRegistry, View, Text, StyleSheet, Dimensions} from 'react-native';

import {Container} from 'native-base'
import MapContainer from './MapContainer/MapContainer';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent/FooterComponent';
import FloatingActionButton from './FloatingActionButton/FloatingActionButton';
import FloatingCenterMarker from './FloatingCenterMarker/FloatingCenterMarker';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.020
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Home extends React.Component {

  componentDidMount() {
    this.props.checkLocationPermission();
    // this.props.getCurrentLocation();
  }

  // componentWillMount() {
  //   setTimeout(() => this.forceUpdate(), 500);
  // }

  render() {
    return(
      <Container>
        <HeaderComponent />
        {this.props.region.latitude &&
          <MapContainer
            userCoord={this.props.userCoord}
            region={this.props.region}
            // displayCentreMarker={this.props.displayCentreMarker}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getLocationPredictions={this.props.getLocationPredictions}
            resultTypes={this.props.resultTypes}
            predictions={this.props.predictions}
            getSelectedAddress={this.props.getSelectedAddress}
            selectedAddress={this.props.selectedAddress}
            handleRegionChangeComplete={this.props.handleRegionChangeComplete}
            nearbyParkingSpots={this.props.nearbyParkingSpots}
          />
        }
        {this.props.displayCentreMarker &&
          <FloatingCenterMarker displayCentreCoord={this.props.displayCentreCoord} />
        }
        <FloatingActionButton getCurrentLocation={this.props.getCurrentLocation} />
        <FooterComponent/>
      </Container>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('Home', () => Home);