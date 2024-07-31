import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import MainHeader from '../Header/MainHeader'
import MainSearch from './MainSearch'
import Category from '../Categories/Category'
import AllProducts from '../Products/AllProducts'

export default function MainScreen() {
  return (
    <ScrollView>

<StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

    <MainHeader/>
    <MainSearch/>
    <Category/>
    <AllProducts/>

    </ScrollView>
  )
}