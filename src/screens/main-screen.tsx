import React, { useCallback, useState } from 'react'
import { Icon, VStack, useColorModeValue, Fab } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
//import TaskList from '../components/task-list'
import shortid from 'shortid'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'
import Actions from '../components/actions'
import {
  ScrollView,
  Box,
  HStack,
  Text,
  IconButton,
  Image,
} from 'native-base' 
import { Feather } from '@expo/vector-icons';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false
  },
  {
      id: shortid.generate(),
      subject: 'Work out',                                                         
      done: false
    },
    {
      id: shortid.generate(),
      subject: 'Do the laundry',                                                         
      done: false
    }


]

export default function MainScreen({ navigation}) {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)


  const handlePressForwardButton = useCallback(() => {
    navigation.navigate('About') }, [navigation])
  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])
  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])
  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id)
  }, [])
  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="this"
        image={
          require('../assets/green.jpg')}
      >
      <HStack  flex={1} justifyContent ="space-between">
        <NavBar />
        <VStack>
          <Text stylei>FOR YOU.</Text>
          <Text>Date:</Text>
        </VStack>
        <IconButton
            style ={{marginTop:30, marginLeft:15}}
            onPress={handlePressForwardButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-right',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-5px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
      </VStack>
  
      <Actions  />
    </AnimatedColorBox>
  )
}

