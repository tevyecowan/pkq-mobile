import { View, StyleSheet } from 'react-native';
import * as React from 'react';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
<div> infobar</div>
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
