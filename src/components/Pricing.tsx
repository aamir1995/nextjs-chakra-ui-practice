import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { CheckIcon } from '../icons/icons'

export const ListItem: FC<StackProps> = ({ children, ...rest }) => {
  return (
    <HStack as="li" spacing={['2', '2', '5']} {...rest} alignItems="center">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={['left', 'left', 'center']}>{children}</Text>
    </HStack>
  )
}

export const Pricing: FC = () => {
  const items = [
    'International calling and messaging API',
    'Additional phone numbers',
    'Automated messages via Zapier',
    '24/7 support and consulting',
  ]
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-64"
        borderRadius="12px"
        boxShadow="0px 10px 10px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)"
        overflow={'hidden'}
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box p={['9', '9', '60px']} bg="#F0EAFB">
            <Text fontSize="2xl" fontWeight="extrabold">
              Premium Pro
            </Text>
            <Heading as="h3" fontSize={['5xl', '5xl', '6xl']} mt="4">
              $329
            </Heading>
            <Text color="gray.900" mt="4" fontSize="lg" fontWeight="medium">
              billed just once
            </Text>
            <Button
              mt="8"
              colorScheme="purple"
              size="lg"
              width={['full', 'full', '282px']}
              height="59px"
            >
              Get Started
            </Button>
          </Box>
          <Box
            textAlign="left"
            bg="white"
            px={['4', '4', '60px']}
            py={['10', '10', '60px']}
            fontSize="lg"
          >
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              {items.map((val, key) => (
                <ListItem key={key}>{val}</ListItem>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
