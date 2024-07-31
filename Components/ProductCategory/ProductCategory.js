import { View, Text , Pressable, TextInput} from 'react-native'
import {React, useState} from 'react';
import categoryStyle from './ProductCategoryStyle';
import { Feather } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { CategoryProductImages } from './CategoryProductImages';


const ProductCategory= ({route}) => {

  const {name} = route.params ?? null;

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();  

  const shortby = [
    { label: 'low-to-high', value: 'lowPrice' },
    { label: 'high-to-low', value: 'highPrice' },
    { label: 'top-sales', value: 'topSale' },
    { label: 'new-rival', value: 'newRival' },
  ];

  return (
 <View style={{height:'100%'}}>


<View style={categoryStyle.shortbyView}>
      <Pressable style={categoryStyle.homeSearch}>
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder="Search for your Product..." />
      </Pressable>

      <View style={categoryStyle.sortby}>
        <DropDownPicker
          items={shortby}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          placeholder="sort by"
          placeholderStyle={{ fontFamily: 'InikaRegular', fontSize: 16, color: 'grey' }}
          style={{ borderWidth: 0, borderBottomWidth: 0 ,}} // Customize the style here
        />
      </View>
    </View>


    <CategoryProductImages name={name} />



 </View>
  )
}

export default ProductCategory;