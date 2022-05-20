import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  selectedIndicator: {
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'hsl(200, 8%, 94%)',
    borderRadius: 5,
    top: '50%',
  },
  scrollView: {
    overflow: 'hidden',
    flex: 1,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    zIndex: 100,
  },
});
