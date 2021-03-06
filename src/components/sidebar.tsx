import React, { useCallback } from 'react'
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

 const handlePressMenuDiary = useCallback(() =>{
   navigation.navigate('Diary')
 }, [navigation])
 
  const handlePressMenuNotes = useCallback(() => {
    navigation.navigate('Notes')
  }, [navigation])
  
  const handlePressMenuEvents = useCallback(() => {
    navigation.navigate('Events')
  }, [navigation])
  const handlePressMenuContacts = useCallback(() => {
    navigation.navigate('Contacts')
  }, [navigation])
 const handlePressMenuStats = useCallback(() => {
    navigation.navigate('Stats')
  }, [navigation])
  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <VStack justifyContent="center">
         <Avatar
          source={require('../assets/profile-image.png')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        />
         
        <Heading mb={4} size="xl">
          Mike Okoth
        </Heading>  
        </VStack>
        
        <VStack>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="home"
        >
          Home
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="user"
        >
          About
        </MenuButton>
        
        <MenuButton
          active={currentRoute === 'Diary'}
          onPress={handlePressMenuDiary}
          icon="edit"
        >
          Diary
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Events'}
          onPress={handlePressMenuEvents}
          icon="clipboard"
        >
          Events
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Contacts'}
          onPress={handlePressMenuContacts}
          icon="phone"
        >
          Contacts
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Statistics'}
          onPress={handlePressMenuStats}
          icon="pie-chart"
        >
          Statistics
        </MenuButton>
        </VStack>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar
