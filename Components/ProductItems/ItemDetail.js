import React, { useState } from 'react'
import { Image, ScrollView , View,Text, Pressable, TouchableOpacity} from 'react-native'
import ItemStyle from './ItemStyle';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../UI/Button';

export const ItemDetail = ({product}) => {

    const [moreFeature, setMoreFeature] = useState(false);

    const handleMoreFeature = ()=>{
      setMoreFeature(!moreFeature);
    }


  return (
    <ScrollView>

<View style={ItemStyle.itemDetailImg}>
   <Image source={product.image} style={{width:'100%', height:'100%', objectFit:'contain',borderBottomLeftRadius:50,borderBottomRightRadius:50}} />
</View>


<View  style={ItemStyle.detailView}>
        <Text style={ItemStyle.itemHeading}>{product.name}-{product.store}</Text>

        <View style={ItemStyle.descView}>
            <View style={ItemStyle.descRight}>
                <Text style={{fontFamily:'PoppinsMedium', fontSize:16,textDecorationLine:'underline'}}>Description</Text>
                <Text style={{fontFamily:'PoppinsRegular', fontSize:13}}>{product.description}</Text>
            </View >
            
            <View style={ItemStyle.descLeft}>
            <Text style={{fontFamily:'InriaBold', fontSize:18,color:'#D53624' }} >Rs {product.price}/-</Text>
            <Text style={{textDecorationLine:'line-through',color:'rgba(0,0,0,0.5)', alignSelf:'flex-end'}} >Rs {product.oldPrice}/-</Text>
            </View>
        </View>

            {moreFeature && (
                <View style={{gap:5,alignItems:'center'}}>
                    <Text>Brand: {product.brand}</Text>
                    <Text>Color: Red</Text>
                    <Text>Size: Single</Text>
                    <Text>Delivery: Rs 250/-</Text>
                    </View>
            )}

        <View style={ItemStyle.lineView}>
            <View style={ItemStyle.horizontalLine} ></View>
            <View style={ItemStyle.feature}>
                <Text style={{color:'rgba(0,0,0,0.6)',fontFamily:'InikaRegular', fontSize:13}}>{!moreFeature ? 'More Features': 'Less Features'}</Text>
                <TouchableOpacity onPress={handleMoreFeature}><Ionicons name={!moreFeature ? "chevron-down-circle-sharp":"chevron-up-circle-sharp"} size={26} color="rgba(0,0,0,0.3)" /></TouchableOpacity>
            </View>
            <View style={ItemStyle.horizontalLine} ></View>
        </View>

</View>

            <View style={{justifyContent:'center', alignItems:'center', marginBottom:20, gap:20}}>
                <Text  style={{fontFamily:'Mogra', fontSize:16, color:'#D53624'}}>Product Question Answer</Text>
                <Text style={{fontFamily:'Jomolhar'}}>Oops! No question answer yet</Text>
                <Button>Ask a Question</Button>
            </View>

    </ScrollView>
  )
}
