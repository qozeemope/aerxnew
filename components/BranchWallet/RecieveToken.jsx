import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

function RecieveToken(props) {
  return (
    <Box
      height="739.8px"
      w="257.56px"
      bgColor="#1f1f1f"
      position="absolute"
      top="0"
    >
      <Center>
        <div
          className="m cursor-pointer  hover:bg-[#ffffff39]  flex flex-col
        background-#1F1F1F
        gap-0.5
        mb-[19.18px]
        mt-2
        "
          onClick={props.toggleWallet}
          cursor="pointer"
        >
          <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
          <MinusIcon
            w="21.92px"
            bgColor="rgba(255, 255, 255, 0.3);"
            height="2px"
          />
        </div>
      </Center>
      {/* end */}

      <Box
        mb="16.44px"
        mr="16.44px"
        fontFamily="Poppins"
        fontSize="10.96px"
        fontWeight="400"
      >
        <Flex gap="46.98px">
          <Flex
            gap="5.48px"
            alignItems="center"
            mb="16.44px"
            ml="16.44px"
            onClick={props.recieved}
            cursor="pointer"
          >
            <Image
              src={"../resources/Arrow - Right1.png"}
              color="#FFFFFF4D;"
              w="8.25425px"
              h="10.275px"
            />
            <Text color="#FFFFFF4D">
              Back
            </Text>
          </Flex>
          <Text
            color="#FFFFFF"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize="12.33px"
            lineHeight="18.495px"
          >
            Recieve
          </Text>
        </Flex>
      </Box>
      <Center mb="32.88px">
        <Flex
          flexDirection="column"
          alightItems="center"
          justifyContent="center"
        >
          <Center>
            <Text
              fontFamily="Poppins"
              font-style="normal"
              fontWeight="400"
              fontSize="12.33px"
              lineHeight="18.495px"
              color="#FFFFFF"
              mb="9.1653px"
            >
              AEX
            </Text>
          </Center>
          <Center mb="21.92px">
            <Image
              src="../resources/Group 14694.png"
              w="102.75px"
              h="102.75px"
            />
          </Center>
          <Center mb="22.605px">
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="500"
              fontSize="9.59px"
              color="rgba(255, 255, 255, 0.3)"
            >
              Account id
            </Text>
          </Center>
          <Center mb="10.96px">
            <Flex
              justifyContent="center"
              alignItems="center"
              // padding= "10.96px"
              gap="14.0425px"
              padding="10.96px 16.44px"
              mx="32.88px"
              w="191.8px"
              h="50.69"
              backgroundColor="#FFFFFF0D"
              borderRadius="10.275"

            >
              <Text
                textAlign="center"
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="500"
                fontSize="9.59px"
                color="#FFFFFF"
                w="142.48px"
              >
                e8e9f38940951e644a64a4ca90dcc67108b8f50343d58e1
              </Text>
        
              <Image src="../resources/Group23.png" w="10.65px" h="13.7px" cursor="pointer"/>
            
            </Flex>
          </Center>

          <Center>
            {/* <Flex flexDirection="column" alligItems="center"> */}
            <Box 
              // padding= "10.96px"
      
              padding="10.96px 16.44px"
             w="191.8px"
              h="38.36"
              backgroundColor="#FFFFFF0D"
              borderRadius="10.275"
            >
                
                <Center   mb="10.96px">
              <Text
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="600"
                fontSize="10.96px"
                color="#FFFFFF"
              >
                Invoice
              </Text>
              </Center>
             
            
            </Box>
        
          </Center>
          <Center>
          <Flex  gap="65.76px">
                <Text
                 fontFamily="Poppins"
                 fontStyle="normal"
                 fontWeight="500"
                 fontSize="9.59px"
                 color="#FFFFFF4D"
                ml="24.88px"

                >Available balanace</Text>
                <Text
                 fontFamily="Poppins"
                 fontStyle="normal"
                 fontWeight="400"
                 fontSize="9.59px"
                 color="#FFFFFF4D"
                 mr="24.88px"
                >102.4 AEX</Text>
              </Flex>
          </Center>
        </Flex>
      </Center>
      <Center>
        <Flex
          flexDirection="column"
          alightItems="center"
          justifyContent="center"
        >
          <Center>
            <Text
              fontFamily="Poppins"
              font-style="normal"
              fontWeight="400"
              fontSize="12.33px"
              lineHeight="18.495px"
              color="#FFFFFF"
              mb="9.1653px"
            >
              NEAR
            </Text>
          </Center>
          <Center mb="21.92px">
            <Image
              src="../resources/Group 14694.png"
              w="102.75px"
              h="102.75px"
            />
          </Center>
          <Center mb="22.605px">
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="500"
              fontSize="9.59px"
              color="rgba(255, 255, 255, 0.3)"
            >
              Account id
            </Text>
          </Center>
          <Center mb="10.96px">
            <Flex
              justifyContent="center"
              alignItems="center"
              // padding= "10.96px"
              gap="14.0425px"
              padding="10.96px 16.44px"
              mx="32.88px"
              w="191.8px"
              h="50.69"
              backgroundColor="#FFFFFF0D"
              borderRadius="10.275"

            >
              <Text
                textAlign="center"
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="500"
                fontSize="9.59px"
                color="#FFFFFF"
                w="142.48px"
              >
              e8e9f38940951e644a64a4ca90dcc67108b8f50343d58e1
              </Text>
        
              <Image src="../resources/Group23.png" w="10.65px" h="13.7px" cursor="pointer"/>
            
            </Flex>
          </Center>

          <Center>
            {/* <Flex flexDirection="column" alligItems="center"> */}
            <Box 
              // padding= "10.96px"
              gap="14.0425px"
              padding="10.96px 16.44px"
              w="191.8px"
             
              h="38.36"
              backgroundColor="#FFFFFF0D"
              borderRadius="10.275"
            >
                
                <Center   mb="10.96px">
              <Text
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="600"
                fontSize="10.96px"
                color="#FFFFFF"
              >
                Invoice
              </Text>
              </Center>
            </Box>
          </Center>
          <Center>
          <Flex  >
                <Text
                 fontFamily="Poppins"
                 fontStyle="normal"
                 fontWeight="500"
                 fontSize="9.59px"
                 color="#FFFFFF4D"
                ml="24.88px"
                mr="58.91"

                >Available balanace</Text>
                <Text
                 fontFamily="Poppins"
                 fontStyle="normal"
                 fontWeight="400"
                 fontSize="9.59px"
                 color="#FFFFFF4D"
                 mr="24.88px"
                >102.4 NEAR</Text>
              </Flex>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
}

export default RecieveToken;
