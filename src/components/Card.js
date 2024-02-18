import { Heading, HStack, Image, Text, VStac,Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardBody, CardFooter,Divider,ButtonGroup,Button } from '@chakra-ui/react'
import React from "react";

const Cardjs = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
<Card maxW='sm'>
  <CardBody>
    <Image
      src={imageSrc}
      alt=''
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
       {description}
      </Text>
      
    </Stack>
  </CardBody>
      <Divider />
      <CardFooter>See More <FontAwesomeIcon icon={faArrowRight} size="1x" style={{marginTop:3, marginLeft:5}} /></CardFooter>
</Card>
  );
};

export default Cardjs;
