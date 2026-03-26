import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  Image,
  Container,
  SimpleGrid,
  Badge,
  Textarea,
  Select,
  Separator,
  AspectRatio,
} from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Box bg="bg.page" minH="100vh">
      {/* Navbar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        h="72px"
        bg="bg.surface"
        borderBottom="1px solid"
        borderColor="border.subtle"
      >
        <Container maxW="container.xl" h="full">
          <Flex align="center" justify="space-between" h="full">
            {/* Logo */}
            <VStack gap={0} align="start">
              <Text
                fontFamily="heading"
                fontSize="19px"
                fontWeight="medium"
                letterSpacing="0.04em"
                color="text.primary"
                lineHeight={1}
              >
                Russell Kaplan
              </Text>
              <Text
                fontFamily="body"
                fontSize="9px"
                letterSpacing="0.24em"
                textTransform="uppercase"
                color="text.secondary"
                lineHeight={1}
              >
                Auctioneers
              </Text>
            </VStack>

            {/* Navigation Links */}
            <HStack gap={0} display={{ base: 'none', md: 'flex' }}>
              <Link
                px={4}
                fontSize="12px"
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="brand.hover"
                fontWeight="medium"
              >
                Home
              </Link>
              <Link
                px={4}
                fontSize="12px"
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="text.secondary"
                _hover={{ color: 'text.primary' }}
              >
                Sessions & Times
              </Link>
              <Link
                px={4}
                fontSize="12px"
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="text.secondary"
                _hover={{ color: 'text.primary' }}
              >
                Valuations
              </Link>
              <Link
                px={4}
                fontSize="12px"
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="text.secondary"
                _hover={{ color: 'text.primary' }}
              >
                About
              </Link>
              <Link
                px={4}
                fontSize="12px"
                letterSpacing="0.13em"
                textTransform="uppercase"
                color="text.secondary"
                _hover={{ color: 'text.primary' }}
              >
                Contact
              </Link>
            </HStack>

            {/* CTA */}
            <HStack gap={5}>
              <Text
                fontSize="12px"
                color="text.secondary"
                letterSpacing="0.04em"
                display={{ base: 'none', lg: 'block' }}
              >
                +27 11 789 7422
              </Text>
              <Button
                bg="brand.primary"
                color="text.on-brand"
                fontSize="11.5px"
                fontWeight="medium"
                letterSpacing="0.13em"
                textTransform="uppercase"
                px={6}
                py={3}
                borderRadius="md"
                _hover={{
                  bg: 'brand.hover',
                  transform: 'translateY(-1px)',
                }}
                // leftIcon={
                //   <Icon viewBox="0 0 12 12" w={3} h={3}>
                //     <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                //     <path d="M6 3.5v2.5l1.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                //   </Icon>
                // }
              >
                Register to Bid
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Announcement Strip */}
      <Box
        mt="72px"
        bg="brand.subtle"
        borderBottom="1px solid"
        borderColor="brand.primary"
        color="text.primary"
        textAlign="center"
        py={3}
        px={5}
      >
        <Text fontSize="11.5px" letterSpacing="0.14em" textTransform="uppercase">
          Consignments open for our Autumn Wunderkammer Auction —{' '}
          <Link color="brand.hover" fontWeight="medium" textDecoration="underline" textUnderlineOffset="3px">
            Book a valuation
          </Link>
          {' · '}Deadline: Friday, 10 April
        </Text>
      </Box>

      {/* Hero Section */}
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} minH="calc(100vh - 114px)">
        {/* Hero Left */}
        <Flex
          direction="column"
          justify="flex-end"
          p={{ base: 16, lg: 20 }}
          bg="bg.page"
        >
          <HStack gap={3} mb={8}>
            <Box w="32px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="text.secondary"
            >
              Johannesburg's Premier Auction House
            </Text>
          </HStack>

          <Heading
            fontFamily="heading"
            fontSize={{ base: '52px', lg: '84px' }}
            fontWeight="light"
            lineHeight={1}
            color="text.primary"
            mb={7}
          >
            Where Fine Art<br />
            Finds Its<br />
            <Text as="em" fontStyle="italic" color="brand.hover">
              True Value
            </Text>
          </Heading>

          <Text
            fontSize="15px"
            lineHeight={1.75}
            color="text.secondary"
            maxW="380px"
            mb={12}
          >
            Specialising in art, antiques, jewellery and design objects.
            Trusted by collectors and consignors across South Africa since 1984.
          </Text>

          <HStack gap={7}>
            <Button
              bg="text.primary"
              color="bg.surface"
              fontSize="12px"
              fontWeight="medium"
              letterSpacing="0.14em"
              textTransform="uppercase"
              px={8}
              py={4}
              borderRadius="md"
              _hover={{
                bg: 'ink.700',
                transform: 'translateY(-1px)',
              }}
              // rightIcon={
              //   <Icon viewBox="0 0 14 14" w={4} h={4}>
              //     <path d="M3 7h8M8 4l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              //   </Icon>
              // }
            >
              Get a Valuation
            </Button>
            <Link
              fontSize="12px"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="text.secondary"
              borderBottom="1px solid"
              borderColor="border.default"
              pb={0.5}
              _hover={{
                color: 'text.primary',
                borderColor: 'text.primary',
              }}
            >
              View Upcoming Sessions
            </Link>
          </HStack>
        </Flex>

        {/* Hero Right - Collage */}
        <Box position="relative" overflow="hidden">
          <Grid
            templateColumns="1fr 1fr"
            templateRows="1fr 1fr"
            gap="3px"
            position="absolute"
            inset={0}
          >
            <GridItem rowSpan={2} position="relative" overflow="hidden">
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(145deg, #4A4440 0%, #1E1A16 100%)"
                transition="transform 0.6s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
              <Flex
                position="absolute"
                inset={0}
                align="center"
                justify="center"
                opacity={0.18}
              >
                <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                  <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                  <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="0.8"/>
                  <line x1="12" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="0.8"/>
                </Icon>
              </Flex>
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
              />
            </GridItem>

            <GridItem position="relative" overflow="hidden">
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(145deg, #3A4550 0%, #181E26 100%)"
                transition="transform 0.6s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
              <Flex
                position="absolute"
                inset={0}
                align="center"
                justify="center"
                opacity={0.18}
              >
                <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                  <rect x="20" y="20" width="60" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                  <rect x="35" y="35" width="30" height="30" fill="white" opacity="0.3"/>
                </Icon>
              </Flex>
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
              />
            </GridItem>

            <GridItem position="relative" overflow="hidden">
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(145deg, #484038 0%, #201A14 100%)"
                transition="transform 0.6s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
              <Flex
                position="absolute"
                inset={0}
                align="center"
                justify="center"
                opacity={0.18}
              >
                <Icon viewBox="0 0 100 100" w="55%" h="55%" color="white">
                  <polygon points="50,15 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="0.8"/>
                  <polygon points="50,35 72,72 28,72" fill="white" opacity="0.2"/>
                </Icon>
              </Flex>
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
              />
            </GridItem>
          </Grid>

          {/* Hero Tag */}
          <Box
            position="absolute"
            top={7}
            right={7}
            bg="rgba(255,255,255,0.92)"
            px={4}
            py={2}
            fontSize="10.5px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="text.primary"
            borderLeft="2px solid"
            borderColor="brand.primary"
            borderRadius="0 md md 0"
          >
            Summer Wunderkammer · 2026
          </Box>

          {/* Hero Badge */}
          <Box
            position="absolute"
            bottom={12}
            left={-6}
            bg="bg.surface"
            p={6}
            boxShadow="0 8px 40px rgba(0,0,0,0.14)"
            borderLeft="3px solid"
            borderColor="brand.primary"
            minW="210px"
            borderRadius="0 md md 0"
          >
            <Text
              fontFamily="heading"
              fontSize="36px"
              fontWeight="medium"
              color="text.primary"
              lineHeight={1}
            >
              R360,000
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="text.secondary"
              mt={2}
            >
              Top Lot — Guy du Toit
            </Text>
          </Box>
        </Box>
      </Grid>

      {/* Stats Bar */}
      <Box bg="ink.800">
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box
            py={10}
            px={10}
            textAlign="center"
            borderRight="1px solid"
            borderColor="rgba(255,255,255,0.06)"
          >
            <Text
              fontFamily="heading"
              fontSize="44px"
              fontWeight="light"
              color="brand.primary"
              lineHeight={1}
              mb={2}
            >
              40+
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.36)"
            >
              Years in Auction
            </Text>
          </Box>
          <Box
            py={10}
            px={10}
            textAlign="center"
            borderRight="1px solid"
            borderColor="rgba(255,255,255,0.06)"
          >
            <Text
              fontFamily="heading"
              fontSize="44px"
              fontWeight="light"
              color="brand.primary"
              lineHeight={1}
              mb={2}
            >
              R15M+
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.36)"
            >
              Sold Per Season
            </Text>
          </Box>
          <Box
            py={10}
            px={10}
            textAlign="center"
            borderRight="1px solid"
            borderColor="rgba(255,255,255,0.06)"
          >
            <Text
              fontFamily="heading"
              fontSize="44px"
              fontWeight="light"
              color="brand.primary"
              lineHeight={1}
              mb={2}
            >
              6
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.36)"
            >
              Auctions per Year
            </Text>
          </Box>
          <Box py={10} px={10} textAlign="center">
            <Text
              fontFamily="heading"
              fontSize="44px"
              fontWeight="light"
              color="brand.primary"
              lineHeight={1}
              mb={2}
            >
              5,000+
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.36)"
            >
              Registered Bidders
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Highlights Section */}
      <Box bg="bg.page" py={25} px={{ base: 6, lg: 20 }}>
        <Flex justify="space-between" align="flex-end" mb={14}>
          <Box>
            <HStack gap={3} mb={4}>
              <Box w="24px" h="1px" bg="brand.primary" />
              <Text
                fontSize="11px"
                letterSpacing="0.22em"
                textTransform="uppercase"
                color="text.secondary"
              >
                Past Results
              </Text>
            </HStack>
            <Heading
              fontFamily="heading"
              fontSize={{ base: '36px', lg: '54px' }}
              fontWeight="light"
              lineHeight={1.1}
              color="text.primary"
            >
              Auction{' '}
              <Text as="em" fontStyle="italic" color="brand.hover">
                Highlights
              </Text>
            </Heading>
          </Box>
          <Link
            fontSize="12px"
            letterSpacing="0.13em"
            textTransform="uppercase"
            color="text.secondary"
            borderBottom="1px solid"
            borderColor="border.default"
            pb={0.5}
            _hover={{
              color: 'text.primary',
              borderColor: 'text.primary',
            }}
          >
            View All Results →
          </Link>
        </Flex>

        <Grid templateColumns={{ base: '1fr 1fr', md: 'repeat(4, 1fr)' }} gap="3px">
          {/* Large highlight card */}
          <GridItem colSpan={{ base: 2, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
            <AspectRatio ratio={{ base: 1, md: 1 }}>
              <Box
                position="relative"
                overflow="hidden"
                cursor="pointer"
                borderRadius="md"
                bgGradient="linear(148deg, #4C4440 0%, #1E1A16 100%)"
                _hover={{
                  '& > .bg': { transform: 'scale(1.06)' },
                  '& > .info': { transform: 'translateY(0)' },
                }}
              >
                <Box
                  className="bg"
                  position="absolute"
                  inset={0}
                  transition="transform 0.55s ease"
                />
                <Flex
                  position="absolute"
                  inset={0}
                  align="center"
                  justify="center"
                  opacity={0.13}
                >
                  <Icon viewBox="0 0 100 100" w="50%" h="50%" color="white">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                    <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                    <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="0.6"/>
                  </Icon>
                </Flex>
                <Box
                  className="info"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  bgGradient="linear(to top, rgba(0,0,0,0.82) 0%, transparent 100%)"
                  transform="translateY(4px)"
                  transition="transform 0.3s ease"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="22px"
                    fontWeight="normal"
                    color="white"
                    lineHeight={1.3}
                    mb={2}
                  >
                    Guy du Toit — Dancing in the Moonlight
                  </Text>
                  <Badge
                    bg="brand.primary"
                    color="text.on-brand"
                    fontSize="10.5px"
                    fontWeight="medium"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    px={3}
                    py={1}
                    borderRadius="sm"
                  >
                    Sold R360,000
                  </Badge>
                </Box>
              </Box>
            </AspectRatio>
          </GridItem>

          {/* Regular highlight cards */}
          {[
            { name: 'Ladies Rolex Oyster Perpetual DateJust', price: 'R260,000', gradient: 'linear(148deg, #38485A 0%, #182030 100%)', icon: 'rect' },
            { name: 'Wallace Sterling Silver Cutlery Set', price: 'R260,000', gradient: 'linear(148deg, #4A4034 0%, #22180E 100%)', icon: 'triangle' },
            { name: 'Keith Calder — Klipspringers', price: 'R300,000', gradient: 'linear(148deg, #384858 0%, #182028 100%)', icon: 'ellipse' },
            { name: 'Keith Alexander — House in the Dunes', price: 'R250,000', gradient: 'linear(148deg, #463C30 0%, #1E1610 100%)', icon: 'circles' },
            { name: 'Mies van der Rohe Barcelona Daybed', price: 'R130,000', gradient: 'linear(148deg, #3A4858 0%, #181E28 100%)', icon: 'cross' },
            { name: 'Gents Rolex Yacht Master Wristwatch', price: 'R200,000', gradient: 'linear(148deg, #403830 0%, #1C1410 100%)', icon: 'wave' },
          ].map((item, index) => (
            <GridItem key={index}>
              <AspectRatio ratio={1}>
                <Box
                  position="relative"
                  overflow="hidden"
                  cursor="pointer"
                  borderRadius="md"
                  bgGradient={item.gradient}
                  _hover={{
                    '& > .bg': { transform: 'scale(1.06)' },
                    '& > .info': { transform: 'translateY(0)' },
                  }}
                >
                  <Box
                    className="bg"
                    position="absolute"
                    inset={0}
                    transition="transform 0.55s ease"
                  />
                  <Flex
                    position="absolute"
                    inset={0}
                    align="center"
                    justify="center"
                    opacity={0.13}
                  >
                    <Icon viewBox="0 0 100 100" w="50%" h="50%" color="white">
                      {item.icon === 'rect' && (
                        <>
                          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                          <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                        </>
                      )}
                      {item.icon === 'triangle' && (
                        <polygon points="50,10 90,80 10,80" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                      )}
                      {item.icon === 'ellipse' && (
                        <>
                          <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                          <ellipse cx="50" cy="50" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                        </>
                      )}
                      {item.icon === 'circles' && (
                        <>
                          <circle cx="30" cy="50" r="18" fill="white" opacity="0.5"/>
                          <circle cx="70" cy="50" r="18" fill="white" opacity="0.5"/>
                        </>
                      )}
                      {item.icon === 'cross' && (
                        <>
                          <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.7"/>
                          <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.7"/>
                          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                        </>
                      )}
                      {item.icon === 'wave' && (
                        <path d="M20,50 Q50,10 80,50 Q50,90 20,50z" fill="none" stroke="currentColor" strokeWidth="0.7"/>
                      )}
                    </Icon>
                  </Flex>
                  <Box
                    className="info"
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={5}
                    bgGradient="linear(to top, rgba(0,0,0,0.82) 0%, transparent 100%)"
                    transform="translateY(4px)"
                    transition="transform 0.3s ease"
                  >
                    <Text
                      fontFamily="heading"
                      fontSize="15px"
                      fontWeight="normal"
                      color="white"
                      lineHeight={1.3}
                      mb={2}
                    >
                      {item.name}
                    </Text>
                    <Badge
                      bg="brand.primary"
                      color="text.on-brand"
                      fontSize="10.5px"
                      fontWeight="medium"
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      px={3}
                      py={1}
                      borderRadius="sm"
                    >
                      Sold {item.price}
                    </Badge>
                  </Box>
                </Box>
              </AspectRatio>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Services Section */}
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} bg="bg.raised">
        {/* Sessions Panel */}
        <Box p={20} position="relative" borderRight={{ lg: '1px solid' }} borderColor="border.subtle">
          <Text
            fontFamily="heading"
            fontSize="80px"
            fontWeight="light"
            color="rgba(26,26,26,0.07)"
            lineHeight={1}
            position="absolute"
            top={9}
            right={11}
          >
            01
          </Text>
          <Flex
            w="46px"
            h="46px"
            border="1px solid"
            borderColor="brand.primary"
            borderRadius="full"
            align="center"
            justify="center"
            mb={7}
          >
            <Icon viewBox="0 0 20 20" w={5} h={5} color="brand.hover">
              <rect x="2" y="3" width="16" height="15" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M6 2v2M14 2v2M2 8h16" stroke="currentColor" strokeWidth="1.3"/>
            </Icon>
          </Flex>
          <Heading
            fontFamily="heading"
            fontSize="34px"
            fontWeight="normal"
            mb={4}
            lineHeight={1.15}
          >
            Auction Sessions<br />& Times
          </Heading>
          <Text
            fontSize="15px"
            lineHeight={1.75}
            color="text.secondary"
            mb={8}
            maxW="380px"
          >
            Our signature Wunderkammer Auctions are held six times per year,
            combining fine art, antiques, jewellery, furniture and collectables
            in one curated live event — open to all.
          </Text>
          <VStack gap={3} mb={8}>
            {[
              { season: 'Spring', time: 'September / October', tag: 'Live + Online', active: false },
              { season: 'Summer', time: 'November / December', tag: 'Live + Online', active: false },
              { season: 'Autumn', time: 'April / May', tag: 'Open Now', active: true },
              { season: 'Winter', time: 'June / July', tag: 'Coming Soon', active: false },
            ].map((item, index) => (
              <Flex
                key={index}
                align="center"
                gap={4}
                py={3}
                px={4}
                bg="bg.surface"
                borderLeft="2px solid"
                borderColor="brand.primary"
                borderRadius="0 md md 0"
                w="full"
              >
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="text.primary"
                  minW="66px"
                >
                  {item.season}
                </Text>
                <Text fontSize="13px" color="text.secondary">
                  {item.time}
                </Text>
                <Badge
                  ml="auto"
                  bg={item.active ? '#E8F5EC' : 'brand.subtle'}
                  color={item.active ? '#2E7D47' : 'brand.hover'}
                  fontSize="10px"
                  fontWeight="medium"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  px={2}
                  py={1}
                  borderRadius="sm"
                >
                  {item.tag}
                </Badge>
              </Flex>
            ))}
          </VStack>
          <Link
            fontSize="12px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="text.secondary"
            borderBottom="1px solid"
            borderColor="border.default"
            pb={0.5}
            _hover={{
              color: 'text.primary',
              borderColor: 'text.primary',
            }}
          >
            View Full Calendar
          </Link>
        </Box>

        {/* Valuations Panel */}
        <Box p={20} position="relative">
          <Text
            fontFamily="heading"
            fontSize="80px"
            fontWeight="light"
            color="rgba(26,26,26,0.07)"
            lineHeight={1}
            position="absolute"
            top={9}
            right={11}
          >
            02
          </Text>
          <Flex
            w="46px"
            h="46px"
            border="1px solid"
            borderColor="brand.primary"
            borderRadius="full"
            align="center"
            justify="center"
            mb={7}
          >
            <Icon viewBox="0 0 20 20" w={5} h={5} color="brand.hover">
              <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2z" fill="none" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3"/>
            </Icon>
          </Flex>
          <Heading
            fontFamily="heading"
            fontSize="34px"
            fontWeight="normal"
            mb={4}
            lineHeight={1.15}
          >
            Item<br />Valuations
          </Heading>
          <Text
            fontSize="15px"
            lineHeight={1.75}
            color="text.secondary"
            mb={8}
            maxW="380px"
          >
            Our specialist team offers professional valuations for art, antiques,
            jewellery, furniture and collectables — whether you are looking
            to sell, insure, or simply understand what you own.
          </Text>
          <VStack gap={3} mb={8}>
            {[
              { type: 'Showroom', info: 'Mon – Fri · 9:30 am – 4:30 pm', tag: 'Walk-in', active: false },
              { type: 'Online', info: 'Submit photos via enquiry form', tag: 'Free', active: false },
              { type: 'Autumn', info: 'Consignments close 10 April', tag: 'Booking Open', active: true },
            ].map((item, index) => (
              <Flex
                key={index}
                align="center"
                gap={4}
                py={3}
                px={4}
                bg="bg.surface"
                borderLeft="2px solid"
                borderColor="brand.primary"
                borderRadius="0 md md 0"
                w="full"
              >
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="text.primary"
                  minW="66px"
                >
                  {item.type}
                </Text>
                <Text fontSize="13px" color="text.secondary">
                  {item.info}
                </Text>
                <Badge
                  ml="auto"
                  bg={item.active ? '#E8F5EC' : 'brand.subtle'}
                  color={item.active ? '#2E7D47' : 'brand.hover'}
                  fontSize="10px"
                  fontWeight="medium"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  px={2}
                  py={1}
                  borderRadius="sm"
                >
                  {item.tag}
                </Badge>
              </Flex>
            ))}
          </VStack>
          <Link
            fontSize="12px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="text.secondary"
            borderBottom="1px solid"
            borderColor="border.default"
            pb={0.5}
            _hover={{
              color: 'text.primary',
              borderColor: 'text.primary',
            }}
          >
            Request a Valuation
          </Link>
        </Box>
      </Grid>

      {/* About Section */}
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 12, lg: 22 }}
        //align="center"
        bg="bg.surface"
        py={25}
        px={{ base: 6, lg: 20 }}
      >
        {/* About Visual */}
        <Box position="relative" h="500px" overflow="hidden" borderRadius="md">
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(140deg, #3A3530 0%, #1A1714 100%)"
          />
          <Box
            position="absolute"
            inset={0}
            bgImage="radial-gradient(circle at 30% 60%, rgba(249,176,0,0.07) 0%, transparent 50%), radial-gradient(circle at 75% 20%, rgba(255,255,255,0.03) 0%, transparent 40%)"
          />
          <Flex
            position="absolute"
            inset={0}
            align="center"
            justify="center"
            direction="column"
            gap={2}
          >
            <Text
              fontFamily="heading"
              fontSize="100px"
              fontWeight="light"
              color="rgba(255,255,255,0.07)"
              lineHeight={1}
              letterSpacing="0.08em"
            >
              RKA
            </Text>
            <Text
              fontSize="11px"
              letterSpacing="0.3em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.18)"
            >
              Est. 1984 · Johannesburg
            </Text>
          </Flex>
          <Box
            position="absolute"
            bottom={9}
            right={-6}
            bg="brand.primary"
            p={7}
            boxShadow="0 16px 56px rgba(0,0,0,0.2)"
            borderRadius="md"
          >
            <Text
              fontFamily="heading"
              fontSize="50px"
              fontWeight="light"
              color="text.on-brand"
              lineHeight={1}
            >
              Est.
            </Text>
            <Text
              fontFamily="heading"
              fontSize="50px"
              fontWeight="light"
              color="text.on-brand"
              lineHeight={1}
            >
              1984
            </Text>
            <Text
              fontSize="10.5px"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="text.on-brand"
              mt={2}
              opacity={0.7}
            >
              Ferndale, Randburg
            </Text>
          </Box>
        </Box>

        {/* About Content */}
        <Box>
          <HStack gap={3} mb={4}>
            <Box w="24px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="text.secondary"
            >
              Our Story
            </Text>
          </HStack>
          <Heading
            fontFamily="heading"
            fontSize={{ base: '38px', lg: '52px' }}
            fontWeight="light"
            lineHeight={1.1}
            mb={6}
          >
            South Africa's Most<br />
            <Text as="em" fontStyle="italic" color="brand.hover">
              Trusted
            </Text>{' '}
            Auction House
          </Heading>
          <Text
            fontSize="15px"
            lineHeight={1.82}
            color="text.secondary"
            mb={4}
          >
            Russell Kaplan Auctioneers has been at the heart of South Africa's
            art and antique market for over 40 years. Founded in Johannesburg,
            we have earned a reputation for integrity, expertise, and exceptional results.
          </Text>
          <Text
            fontSize="15px"
            lineHeight={1.82}
            color="text.secondary"
            mb={8}
          >
            From our showroom at 256 Oak Avenue, Ferndale — our specialists
            curate each auction with meticulous attention to provenance, quality
            and market value, connecting buyers and sellers across the country.
          </Text>
          <SimpleGrid columns={2} gap={4}>
            {[
              'Fine Art & Paintings',
              'Jewellery & Watches',
              'Antiques & Furniture',
              'Ceramics & Glassware',
              'Silver & Collectables',
              'Design Objects',
            ].map((item, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="6px"
                  h="6px"
                  bg="brand.primary"
                  borderRadius="full"
                />
                <Text fontSize="13.5px" color="text.primary">
                  {item}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Grid>

      {/* Showroom Section */}
      <Box bg="ink.800" py={25} px={{ base: 6, lg: 20 }}>
        <Flex justify="space-between" align="flex-start" mb={14}>
          <Box>
            <HStack gap={3} mb={4}>
              <Box w="24px" h="1px" bg="brand.primary" />
              <Text
                fontSize="11px"
                letterSpacing="0.22em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.32)"
              >
                Visit Us
              </Text>
            </HStack>
            <Heading
              fontFamily="heading"
              fontSize={{ base: '36px', lg: '54px' }}
              fontWeight="light"
              lineHeight={1.1}
              color="white"
            >
              Our{' '}
              <Text as="em" fontStyle="italic" color="brand.primary">
                Showroom
              </Text>
            </Heading>
          </Box>
          <Text
            textAlign="right"
            fontSize="14px"
            color="rgba(255,255,255,0.38)"
            lineHeight={1.9}
          >
            256 Oak Avenue, Cnr Republic Road<br />
            Ferndale, Randburg 2194<br />
            Mon – Fri · 9:30 am – 4:30 pm
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="3px">
          {[
            { title: 'Main Gallery', subtitle: 'Fine Art & Paintings', bg: 'linear(140deg, #504848, #282020)' },
            { title: 'Jewellery Room', subtitle: 'Watches, Gems & Precious Metals', bg: 'linear(140deg, #404858, #202030)' },
            { title: 'Furniture & Objects', subtitle: 'Antiques, Design & Ceramics', bg: 'linear(140deg, #485040, #202820)' },
          ].map((room, index) => (
            <AspectRatio key={index} ratio={4/3}>
              <Box
                position="relative"
                overflow="hidden"
                cursor="pointer"
                borderRadius="md"
                bgGradient={room.bg}
                _hover={{
                  '& > .bg': { transform: 'scale(1.05)' },
                }}
              >
                <Box
                  className="bg"
                  position="absolute"
                  inset={0}
                  transition="transform 0.5s ease"
                />
                <Flex
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to top, rgba(0,0,0,0.72), transparent)"
                  align="flex-end"
                  p={7}
                >
                  <Box>
                    <Heading
                      fontFamily="heading"
                      fontSize="22px"
                      fontWeight="normal"
                      color="white"
                      lineHeight={1.2}
                      mb={1}
                    >
                      {room.title}
                    </Heading>
                    <Text
                      fontSize="12px"
                      color="rgba(255,255,255,0.5)"
                      letterSpacing="0.08em"
                    >
                      {room.subtitle}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </AspectRatio>
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={20}
        bg="bg.page"
        py={25}
        px={{ base: 6, lg: 20 }}
      >
        {/* Contact Left */}
        <Box>
          <HStack gap={3} mb={4}>
            <Box w="24px" h="1px" bg="brand.primary" />
            <Text
              fontSize="11px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="text.secondary"
            >
              Get in Touch
            </Text>
          </HStack>
          <Heading
            fontFamily="heading"
            fontSize={{ base: '38px', lg: '52px' }}
            fontWeight="light"
            lineHeight={1.1}
            mb={7}
          >
            We'd Love to<br />
            <Text as="em" fontStyle="italic" color="brand.hover">
              Hear
            </Text>{' '}
            From You
          </Heading>
          <Text
            fontSize="15px"
            lineHeight={1.8}
            color="text.secondary"
            mb={10}
          >
            Whether you have items to sell, a collection to value, or simply
            want to know more about upcoming auctions — our team is here to help.
          </Text>

          <VStack gap={0}>
            {[
              {
                icon: (
                  <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                    <path d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3"/>
                  </Icon>
                ),
                label: 'Email',
                value: 'admin@rkauctioneers.co.za',
              },
              {
                icon: (
                  <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                    <path d="M3 2h3l1.5 3.5-1.5 1a9 9 0 0 0 3.5 3.5l1-1.5L14 10v3a1 1 0 0 1-1 1C6.5 14 2 9.5 2 3a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                  </Icon>
                ),
                label: 'Phone',
                value: '+27 11 789 7422',
              },
              {
                icon: (
                  <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.5-2-4.5-4.5-4.5z" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="8" cy="6" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                  </Icon>
                ),
                label: 'Showroom',
                value: '256 Oak Avenue, Cnr Republic Road\nFerndale, Randburg 2194',
              },
              {
                icon: (
                  <Icon viewBox="0 0 16 16" w={4} h={4} color="text.secondary">
                    <rect x="2" y="3" width="12" height="11" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.3"/>
                  </Icon>
                ),
                label: 'Opening Hours',
                value: 'Monday – Friday: 9:30 am – 4:30 pm',
              },
            ].map((contact, index) => (
              <Flex
                key={index}
                align="flex-start"
                gap={5}
                py={5}
                borderBottom="1px solid"
                borderColor="border.subtle"
                w="full"
                _first={{ borderTop: '1px solid', borderTopColor: 'border.subtle' }}
              >
                <Flex
                  w="38px"
                  h="38px"
                  border="1px solid"
                  borderColor="border.subtle"
                  align="center"
                  justify="center"
                  borderRadius="md"
                  bg="bg.surface"
                >
                  {contact.icon}
                </Flex>
                <Box>
                  <Text
                    fontSize="10.5px"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    color="text.secondary"
                    mb={1}
                  >
                    {contact.label}
                  </Text>
                  <Text
                    fontSize="15px"
                    color="text.primary"
                    lineHeight={1.55}
                    whiteSpace="pre-line"
                  >
                    {contact.value}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>

        {/* Contact Form */}
        <Box>
          <Heading
            fontFamily="heading"
            fontSize="30px"
            fontWeight="normal"
            mb={8}
          >
            Send an Enquiry
          </Heading>
          <VStack gap={5}>
            <HStack gap={4} w="full">
              <Box>
                <Text
                  fontSize="10.5px"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  color="text.secondary"
                  mb={2}
                >
                  First Name
                </Text>
                <Input
                  placeholder="Jane"
                  bg="bg.surface"
                  border="1px solid"
                  borderColor="rgba(26,26,26,0.12)"
                  borderRadius="md"
                  fontSize="14px"
                  color="text.primary"
                  _focus={{
                    borderColor: 'brand.primary',
                    boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontSize="10.5px"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  color="text.secondary"
                  mb={2}
                >
                  Last Name
                </Text>
                <Input
                  placeholder="Smith"
                  bg="bg.surface"
                  border="1px solid"
                  borderColor="rgba(26,26,26,0.12)"
                  borderRadius="md"
                  fontSize="14px"
                  color="text.primary"
                  _focus={{
                    borderColor: 'brand.primary',
                    boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                  }}
                />
              </Box>
            </HStack>
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="text.secondary"
                mb={2}
              >
                Email Address
              </Text>
              <Input
                type="email"
                placeholder="jane@example.com"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                _focus={{
                  borderColor: 'brand.primary',
                  boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                }}
              />
            </Box>
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="text.secondary"
                mb={2}
              >
                Enquiry Type
              </Text>
              {/* <Select
                placeholder="Select a topic…"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                _focus={{
                  borderColor: 'brand.primary',
                  boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                }}
              >
                <option>Selling / Consignment</option>
                <option>Item Valuation</option>
                <option>Buying / Bidding</option>
                <option>General Question</option>
              </Select> */}
            </Box>
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="text.secondary"
                mb={2}
              >
                Message
              </Text>
              <Textarea
                placeholder="Tell us about your item or enquiry…"
                bg="bg.surface"
                border="1px solid"
                borderColor="rgba(26,26,26,0.12)"
                borderRadius="md"
                fontSize="14px"
                color="text.primary"
                minH="110px"
                resize="vertical"
                _focus={{
                  borderColor: 'brand.primary',
                  boxShadow: '0 0 0 3px rgba(249,176,0,0.12)',
                }}
              />
            </Box>
            <Button
              w="full"
              bg="text.primary"
              color="bg.surface"
              fontSize="12px"
              fontWeight="medium"
              letterSpacing="0.14em"
              textTransform="uppercase"
              py={4}
              borderRadius="md"
              _hover={{ bg: 'ink.700' }}
            >
              Send Message →
            </Button>
          </VStack>
        </Box>
      </Grid>

      {/* Footer */}
      <Box bg="ink.900" color="rgba(255,255,255,0.38)" py={16} px={{ base: 6, lg: 20 }}>
        <Grid
          templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr' }}
          gap={{ base: 9, md: 13 }}
          mb={12}
        >
          {/* Brand Column */}
          <Box>
            <Text
              fontFamily="heading"
              fontSize="21px"
              fontWeight="light"
              color="white"
              mb={1}
            >
              Russell Kaplan Auctioneers
            </Text>
            <Text
              fontSize="9.5px"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.28)"
              mb={5}
            >
              Art & Antique Auctions · Est. 1984
            </Text>
            <Text
              fontSize="13px"
              lineHeight={1.75}
              color="rgba(255,255,255,0.33)"
              maxW="280px"
              mb={7}
            >
              Connecting collectors, sellers and the curious for over
              40 years. Based in Ferndale, Johannesburg, South Africa.
            </Text>
            <HStack gap={3}>
              {[
                {
                  icon: (
                    <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                      <path d="M7.8 14V7.8h2l.3-2.3H7.8V4c0-.7.2-1.1 1.2-1.1H10V1C9.7 1 8.9.9 8 .9 6.2.9 5 2 5 4.2v1.3H3V7.8h2V14h2.8z"/>
                    </Icon>
                  ),
                  href: 'https://www.facebook.com/rkauctioneers/',
                  title: 'Facebook',
                },
                {
                  icon: (
                    <Icon viewBox="0 0 14 14" w={3} h={3} color="rgba(255,255,255,0.4)">
                      <rect x="1.5" y="1.5" width="11" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="7" cy="7" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="10.5" cy="3.5" r="0.5" fill="currentColor"/>
                    </Icon>
                  ),
                  href: 'https://www.instagram.com/russellkaplanauctioneers/',
                  title: 'Instagram',
                },
                {
                  icon: (
                    <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                      <path d="M12.5 4s-.2-1-1-1.3C10.8 2.4 7 2.4 7 2.4s-3.8 0-4.5.3C1.7 3 1.5 4 1.5 4S1.3 5.1 1.3 6.3v1.1c0 1.2.2 2.3.2 2.3s.2 1 1 1.3c.7.3 4.5.3 4.5.3s3.8 0 4.5-.3c.8-.3 1-.7 1-1.3 0 0 .2-1.1.2-2.3v-1C12.7 5.1 12.5 4 12.5 4zM5.8 8.8V4.9L9.2 7 5.8 8.8z"/>
                    </Icon>
                  ),
                  href: 'http://www.youtube.com/@RussellKaplanAuctioneers',
                  title: 'YouTube',
                },
                {
                  icon: (
                    <Icon viewBox="0 0 14 14" w={3} h={3} fill="currentColor">
                      <path d="M7 1C3.7 1 1 3.7 1 7c0 1.1.3 2.1.8 3L1 13l3.1-.8c.9.5 1.9.8 3 .8C10.3 13 13 10.3 13 7S10.3 1 7 1zm3.2 8.7c-.1.4-.8.7-1.1.8-.3 0-.6.1-.9 0-.2 0-.5-.1-.9-.3-1.6-.7-2.6-2.3-2.7-2.4-.1-.1-.6-.9-.6-1.7 0-.8.4-1.2.6-1.3.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.3.1.3.5 1.1.5 1.2.1.1.1.2 0 .3-.1.1-.1.2-.2.3-.1.1-.2.2-.1.3.1.2.4.7.9 1.1.6.5 1.1.7 1.2.7.1.1.2.1.3 0 .1-.1.4-.5.5-.6.1-.2.2-.1.4-.1.2.1 1.1.5 1.3.6.2.1.3.1.3.3.1.2 0 .7-.2 1.1z"/>
                    </Icon>
                  ),
                  href: 'https://api.whatsapp.com/message/MMTJPEYF2UHAN1',
                  title: 'WhatsApp',
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  w="35px"
                  h="35px"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.1)"
                  borderRadius="full"
                  display="flex"
                  //align="center"
                  //justify="center"
                  _hover={{
                    borderColor: 'brand.primary',
                    bg: 'rgba(249,176,0,0.08)',
                  }}
                  title={social.title}
                >
                  {social.icon}
                </Link>
              ))}
            </HStack>
          </Box>

          {/* Navigate Column */}
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.55)"
              mb={5}
            >
              Navigate
            </Text>
            <VStack align="start" gap={3}>
              {['Home', 'Sessions & Times', 'Valuations', 'About RKA', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  fontSize="13.5px"
                  color="rgba(255,255,255,0.33)"
                  _hover={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {item}
                </Link>
              ))}
            </VStack>
          </Box>

          {/* Auctions Column */}
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.55)"
              mb={5}
            >
              Auctions
            </Text>
            <VStack align="start" gap={3}>
              {['Current Auction', 'Past Results', 'Register to Bid', 'Consign a Lot', 'Showroom Gallery'].map((item, index) => (
                <Link
                  key={index}
                  fontSize="13.5px"
                  color="rgba(255,255,255,0.33)"
                  _hover={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {item}
                </Link>
              ))}
            </VStack>
          </Box>

          {/* Get the App Column */}
          <Box>
            <Text
              fontSize="10.5px"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.55)"
              mb={5}
            >
              Get the App
            </Text>
            <VStack align="start" gap={3} mb={6}>
              {['App Store (iOS)', 'Google Play'].map((item, index) => (
                <Link
                  key={index}
                  fontSize="13.5px"
                  color="rgba(255,255,255,0.33)"
                  _hover={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {item}
                </Link>
              ))}
            </VStack>
            <Box>
              <Text
                fontSize="10.5px"
                letterSpacing="0.16em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.22)"
                mb={3}
              >
                Bid Live Online
              </Text>
              <Button
                bg="brand.primary"
                color="text.on-brand"
                fontSize="11.5px"
                fontWeight="medium"
                letterSpacing="0.12em"
                textTransform="uppercase"
                px={5}
                py={3}
                borderRadius="md"
                _hover={{ bg: 'brand.hover' }}
              >
                Register to Bid →
              </Button>
            </Box>
          </Box>
        </Grid>

        <Separator borderColor="rgba(255,255,255,0.06)" mb={7} />
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={4}
        >
          <Text fontSize="12px">
            &copy; 2026 Russell Kaplan Auctioneers. All rights reserved.
          </Text>
          <Text
            fontSize="12px"
            color="rgba(249,176,0,0.7)"
          >
            256 Oak Avenue, Cnr Republic Road, Ferndale, Randburg
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default HomePage