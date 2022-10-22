import { Box, HStack, Icon, StackProps, Text, Wrap } from '@chakra-ui/react'
import { ElementType, FC } from 'react'
import { MoneyBack, SetupFees, RoundCircle } from '../icons/icons'
interface FeatureProps extends StackProps {
  icon: ElementType
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props
  return (
    <HStack maxW={['100%', '100%', '290px']} spacing={'24px'} {...rest}>
      <Icon as={icon} boxSize={'12'} />
      <Text textAlign={'left'} fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  )
}

export const Features: FC = () => {
  return (
    <Box
      maxW="1024px"
      m="auto"
      pt={['40px', '40px', '60px']}
      pb="8"
      as="section"
    >
      <Wrap
        px={[6, 6, 12]}
        spacing={7}
        alignItems={['start', 'start', 'center']}
      >
        <Feature icon={MoneyBack}>30 days money back Guarantee</Feature>
        <Feature icon={SetupFees}>No setup fees 100% hassle-free</Feature>
        <Feature icon={RoundCircle}>
          No monthly subscription Pay once and for all
        </Feature>
      </Wrap>
    </Box>
  )
}
