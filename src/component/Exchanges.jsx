import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";
import {
  Container,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Exchanges = () => {
  const [Exchanges, setExchanges] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(15); // Set the number of exchanges to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data);

        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (Error) return <ErrorComponent message={"Error while fetching Exchanges"} />;

  // Calculate the range of exchanges to display based on current page and perPage
  const indexOfLastExchange = currentPage * perPage;
  const indexOfFirstExchange = indexOfLastExchange - perPage;
  const displayedExchanges = Exchanges.slice(indexOfFirstExchange, indexOfLastExchange);

  // Calculate the total number of pages
  const totalPages = Math.ceil(Exchanges.length / perPage);

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={"container.xl"}>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {displayedExchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"_blank"} rel="noopener noreferrer">
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />

      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <HStack mt={8} justifyContent={"center"} mb={'8'}>
    {Array.from({ length: totalPages }).map((_, index) => (
      <Button
        key={index}
        backgroundColor={currentPage === index + 1 ? "blackAlpha.900" : "transparent"}
        color={currentPage === index + 1 ? "white" : "black"}
        fontWeight={currentPage === index + 1 ? "bold" : "normal"}
        borderRadius={"md"}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </Button>
    ))}
  </HStack>
);

export default Exchanges;
