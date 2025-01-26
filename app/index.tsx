import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-2xl">index</Text>
      <Link href="/profile" style={{ color: 'blue' }}>
        Go to Profile
      </Link>
    </View>
  )
}

export default index
