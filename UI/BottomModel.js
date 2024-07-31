import React from 'react';
import { BottomModal, SlideAnimation } from "react-native-modals";

const BottomModel = (props) => {

  
  return (
    
    <BottomModal
                   
    onBackdropPress={() => props.toggleModel()}
    swipeDirection={["up", "down"]}
    swipeThreshold={200}
    modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
    onHardwareBackPress={() => props.toggleModel()}
    visible={props.visible}
    onTouchOutside={() => props.toggleModel()}
>
   
    {props.children}
</BottomModal>
  )
}

export default BottomModel