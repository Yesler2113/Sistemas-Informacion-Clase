import { useNavigation } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';

const products = [
  {id: 1, name: 'Arroz'},
  {id: 2, name: 'Frijoles'},
  {id: 3, name: 'Maíz'},
  {id: 4, name: 'Azúcar'},
  {id: 5, name: 'Leche'},
  {id: 6, name: 'Huevos'},
  {id: 7, name: 'Aceite'},
  {id: 8, name: 'Café'},
  {id: 9, name: 'Semitas'},
  {id: 10, name: 'Queso'},
  {id: 11, name: 'Tortillas'},
  {id: 12, name: 'Carne de res'},
  {id: 13, name: 'Pollo'},
  {id: 14, name: 'Pan'},
  {id: 15, name: 'Mantequilla'},
  {id: 16, name: 'Pasta'},
  {id: 17, name: 'Sal'},
  {id: 18, name: 'Plátanos'},
  {id: 19, name: 'Zanahorias'},
  {id: 20, name: 'Papas'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Products</Text>
    </View>
  );
};
;
