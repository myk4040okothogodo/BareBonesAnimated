import React, {useEffect,useState, useCallback } from 'react'
import {
  ScrollView,
  Box,
  HStack,
  Text,
  VStack,
  Icon,
  IconButton,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
//import {StyleSheet, View, Text} from 'react-native';

const AboutScreen = ({ navigation }) => {
 const [currentDate, setCurrentDate] = useState('');
 const [currentDay, setCurrentDay] = useState('');
 
 useEffect(() => {
    var date = moment()
                  .utcOffset('+05:30')
                  .format(' hh:mm:ss a');
    setCurrentDate(date);
    setCurrentDay(moment().day())
  }, []);

  const handlePressBackButton = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  return (
  <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title=<Text>{currentDate}</Text>
        image={require('../assets/masthead.jpg')}
      >
        <HStack justify-content="center">
         <IconButton
            style ={{marginTop:30, marginLeft:15}}
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
          <HStack>
          <Text style={{paddingTop: 50, marginLeft:35,fontSize:36,color:'white'}}>{currentDate}</Text>
          <Text style={{paddingTop: 50, marginLeft:35,fontSize:36,color:'white'}}>{currentDay}</Text>
          </HStack>
        </HStack>
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('green.200', 'primary.900')}
        mt="-130px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
         
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
    </SafeAreaView>
  )
}

export default AboutScreen
