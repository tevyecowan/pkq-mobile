import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import Button from '@/components/Button';
import MaterialButton from '@/components/MaterialButton';
import InfoBar from '@/components/InfoBar'
const PlaceholderImage = require('@/assets/images/background-image.png');
const stuff = (<div className="stuff">some stuff</div>);



export default function Index() {
  return (
    <View style={styles.container}>
      <InfoBar/>
      <View style={styles.footerContainer}>
         <MaterialButton/>
         
         <div className="blah">
          some text here
         </div>
         <div>
          some more text here
         </div>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
