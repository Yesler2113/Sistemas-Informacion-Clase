import {Pressable, Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { ProductScreen } from '../products/ProductScreen';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      {/* <Pressable style={globalStyles.primaryButton} 
      onPress={() => navigation.navigate('Products' as never)}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}
      <PrimaryButton 
      label="Productos" 
      onPress={() => navigation.navigate('Products' as never)}/>
    </View>
  );
};
