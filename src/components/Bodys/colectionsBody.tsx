import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import styles from "@/styles/home.module.css";

export default function HomeBody() {
  const slidesPerView = useBreakpointValue({ base: 1, md: 1 });

  return (
    <Flex width="full" pb={45}>
      <Box width="70%">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <AspectRatio w="100%" ratio={16 / 10}>
              <Image src="florescer 1.jpg" objectFit="cover" />
            </AspectRatio>

            <Flex
              position="absolute"
              top="50%"
              right="10%"
              transform="translateY(-50%)"
              direction="column"
              alignItems="flex-end"
              gap={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                bgColor="rgba(255, 255, 255, 0.4)"
                borderRadius={5}
                p={5}
              >
                <Text className={styles.p} fontSize="5xl">
                  COLEÇÃO FLORESCER
                </Text>
              </Box>
              <Button
                className={styles.p}
                fontSize="3xl"
                color="black"
                variant="solid"
                bgColor="rgba(255, 255, 255, 0.7)"
                _hover={{ bgColor: "rgba(255, 255, 255, 0.9)" }}
                size="lg"
              >
                LER MAIS
              </Button>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <AspectRatio w="100%" ratio={16 / 10}>
              <Image src="landa 1.jpg" objectFit="cover" />
            </AspectRatio>
            <Flex
              position="absolute"
              top="50%"
              right="10%"
              transform="translateY(-50%)"
              direction="column"
              alignItems="flex-end"
              gap={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                bgColor="rgba(255, 255, 255, 0.4)"
                borderRadius={5}
                p={5}
              >
                <Text className={styles.p} fontSize="5xl">
                  CERAMICA ESMALTADA
                </Text>
              </Box>
              <Button
                className={styles.p}
                fontSize="3xl"
                color="black"
                variant="solid"
                bgColor="rgba(255, 255, 255, 0.7)"
                _hover={{ bgColor: "rgba(255, 255, 255, 0.9)" }}
                size="lg"
              >
                LER MAIS
              </Button>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Flex
        width="30%"
        flexDirection="column"
        justifyContent="space-between"
        px={6}
      >
        <Text className={styles.p} fontSize="5xl" textAlign="center">
          Ateliê de design artesanal que nasceu com a ideia de criar produtos em
          cerâmica fria aplicados a objetos tradicionais e contemporâneos.
        </Text>
        <Text className={styles.p} fontSize="4xl" textAlign="center">
          Tudo é esculpido à mão, por isso nunca dois modelos serão iguais.
        </Text>
      </Flex>
    </Flex>
  );
}
