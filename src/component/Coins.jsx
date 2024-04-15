import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [Coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (pageIndex) => {
    setPage(pageIndex);
    setLoading(true);
  };

  const maxDisplayedPages = 5;
  const totalPages = 130; // Total number of pages
  const startPage = Math.max(
    1,
    Math.min(
      page - Math.floor(maxDisplayedPages / 2),
      totalPages - maxDisplayedPages + 1
    )
  );
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);

        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("Error fetching data:", error);
      }
    };
    fetchCoin();
  }, [currency, page]);

  if (Error) return <ErrorComponent message={"Error while fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"} p={"8"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"eur"}>EURO</Radio>
              <Radio value="usd">USD</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {Coins.map((i) => (
              <CoinCard
                id={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack
            w={"full"}
            justify={"center"}
            align={"center"}
            p={"8"}
            spacing={2}
          >
            {page > 1 && (
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                onClick={() => changePage(page - 1)}
                _hover={{ bg: "blue.500" }}
                borderRadius="full"
                size="sm"
                boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
              >
                Prev
              </Button>
            )}

            {Array.from(
              { length: endPage - startPage + 1 },
              (_, index) => startPage + index
            ).map((item) => (
              <Button
                key={item}
                variant={item === page ? "solid" : "outline"}
                colorScheme={item === page ? "blue" : "gray"}
                onClick={() => changePage(item)}
                _hover={{
                  bg: item === page ? "blue.500" : "gray.200",
                }}
                borderRadius="full"
                size="sm"
                boxShadow={
                  item === page ? "0px 0px 5px rgba(0, 0, 0, 0.3)" : "none"
                }
              >
                {item}
              </Button>
            ))}

            {page < totalPages && (
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                onClick={() => changePage(page + 1)}
                _hover={{ bg: "blue.500" }}
                borderRadius="full"
                size="sm"
                boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
              >
                Next
              </Button>
            )}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
