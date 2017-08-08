import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,Box,
  LiveEnvCamera,
  Cylinder,
  Model,
  Sphere,
  Video,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('backgrounds/open_road.jpg')}/>
        <Text
          style={{
            backgroundColor: '#00777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Hitesh
        </Text>



        <Box
        style={{
            //Change color of Box
            //color: '#00777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
          //ShowWireframe
          // wireframe = {true}
          texture={asset('texture/wood.jpg')}
          dimWidth={2}
          dimDepth={1}
          dimHeight={1}
        />

        <Cylinder
          texture={asset('texture/steel.png')}
          radiusTop={0.5}
          radiusBottom={0.5}
          dimHeight={1}
          segments={12}
          style={{
          transform: [{translate: [.5, 0, -3]}],
          }}
        />

        <Cylinder
          texture={asset('texture/glass.jpg')}
          radiusTop={0}
          radiusBottom={.5}
          dimHeight={1}
          segments={12}
          style={{
          transform: [{translate: [.5, 1, -3]}],
          }}
        />

        <Sphere
          texture={asset('texture/lava.jpg')}
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
          style={{
          transform: [{translate: [-2, 0,-2]}],
          }}
        />

          <Video style={{width: 5.0, height:5.0,
        
          }}

          source={{uri: 'assets/video/test.mp4'}}
          />

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
