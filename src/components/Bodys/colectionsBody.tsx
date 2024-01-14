import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Heading,
  Image,
  Flex,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function HomeBody() {
  const slidesPerView = useBreakpointValue({ base: 1, md: 1 });

  return (
    <ChakraProvider>
      <Box width="full">
        {/* Texto descritivo */}
        <Text px={6} py={4}>
          Ateliê de design artesanal que nasceu com a ideia de criar produtos em
          cerâmica fria aplicados a objetos tradicionais e contemporâneos.
        </Text>
        <Text px={6}>
          Tudo é esculpido à mão, por isso nunca dois modelos serão iguais.
        </Text>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Image src="florescer 1.jpg" width="full" />
            <Flex
              position="absolute"
              top="50%"
              right="10%"
              transform="translateY(-50%)"
              direction="column"
              alignItems="flex-start"
            >
              <Heading size="lg" mb={4}>
                COLEÇÃO FLORESCER
              </Heading>
              <Button as="a" href="/colecao-zumaia">
                READ MORE
              </Button>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="landa 1.jpg" width="full" />
            <Flex
              position="absolute"
              top="50%"
              right="10%"
              transform="translateY(-50%)"
              direction="column"
              alignItems="flex-start"
            >
              <Heading size="lg" mb={4}>
                COLEÇÃO CERAMICA ESMALTADA
              </Heading>
              <Button as="a" href="/colecao-zumaia">
                READ MORE
              </Button>
            </Flex>
          </SwiperSlide>
          {/* Repetir SwiperSlide para cada item da coleção */}
        </Swiper>
      </Box>
    </ChakraProvider>
  );
}
