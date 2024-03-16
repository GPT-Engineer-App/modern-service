import React from "react";
import { Box, Button, Container, Flex, Heading, Text, Image, Stack, SimpleGrid, Icon, Avatar, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaCheck, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white" color="gray.700">
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex="1" pr={{ md: 8 }}>
              <Heading as="h1" size="2xl" mb={4}>
                Streamline Your Business with Our SaaS Solution
              </Heading>
              <Text fontSize="xl" mb={8}>
                Boost productivity, reduce costs, and scale your business with our powerful software.
              </Text>
              <Button size="lg" colorScheme="white" color="blue.600">
                Get Started
              </Button>
            </Box>
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1634496994539-ebffdbfe6e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTA2MTE4Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Dashboard" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Icon as={FaCheck} boxSize={12} color="blue.600" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Automation
              </Heading>
              <Text>Automate repetitive tasks and streamline your workflows.</Text>
            </Box>
            <Box>
              <Icon as={FaCheck} boxSize={12} color="blue.600" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Analytics
              </Heading>
              <Text>Gain valuable insights into your business performance.</Text>
            </Box>
            <Box>
              <Icon as={FaCheck} boxSize={12} color="blue.600" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Collaboration
              </Heading>
              <Text>Collaborate seamlessly with your team and clients.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            What Our Customers Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text mb={4}>"This SaaS has revolutionized our business. We've seen a significant increase in productivity and efficiency."</Text>
              <Flex align="center">
                <Avatar name="John Doe" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcxMDYxMTg2OHww&ixlib=rb-4.0.3&q=80&w=1080" mr={4} />
                <Box>
                  <Text fontWeight="bold">John Doe</Text>
                  <Text fontSize="sm">CEO, ABC Company</Text>
                </Box>
              </Flex>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text mb={4}>"The analytics features have provided us with valuable insights to make data-driven decisions."</Text>
              <Flex align="center">
                <Avatar name="Jane Smith" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzEwNjExODY4fDA&ixlib=rb-4.0.3&q=80&w=1080" mr={4} />
                <Box>
                  <Text fontWeight="bold">Jane Smith</Text>
                  <Text fontSize="sm">Marketing Manager, XYZ Inc.</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Pricing Plans
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box bg="gray.100" p={8} borderRadius="md" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Basic
              </Heading>
              <Text fontSize="3xl" fontWeight="bold">
                $9.99
              </Text>
              <Text fontSize="sm" mb={6}>
                per month
              </Text>
              <Stack spacing={4} mb={8}>
                <Text>10 users</Text>
                <Text>Basic features</Text>
                <Text>1 GB storage</Text>
              </Stack>
              <Button colorScheme="blue">Choose Plan</Button>
            </Box>
            <Box bg="blue.600" p={8} borderRadius="md" textAlign="center" color="white">
              <Heading as="h3" size="lg" mb={4}>
                Pro
              </Heading>
              <Text fontSize="3xl" fontWeight="bold">
                $29.99
              </Text>
              <Text fontSize="sm" mb={6}>
                per month
              </Text>
              <Stack spacing={4} mb={8}>
                <Text>Unlimited users</Text>
                <Text>Advanced features</Text>
                <Text>10 GB storage</Text>
              </Stack>
              <Button colorScheme="white" color="blue.600">
                Choose Plan
              </Button>
            </Box>
            <Box bg="gray.100" p={8} borderRadius="md" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Enterprise
              </Heading>
              <Text fontSize="3xl" fontWeight="bold">
                Custom
              </Text>
              <Text fontSize="sm" mb={6}>
                per month
              </Text>
              <Stack spacing={4} mb={8}>
                <Text>Customized features</Text>
                <Text>Dedicated support</Text>
                <Text>Unlimited storage</Text>
              </Stack>
              <Button colorScheme="blue">Contact Us</Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Contact Us
          </Heading>
          <Box maxW="md" mx="auto">
            <form>
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" />
              </FormControl>
              <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
                Send Message
              </Button>
            </form>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.600" color="white" py={8}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; 2023 SaaS Company. All rights reserved.</Text>
            <Icon as={FaEnvelope} boxSize={6} />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
