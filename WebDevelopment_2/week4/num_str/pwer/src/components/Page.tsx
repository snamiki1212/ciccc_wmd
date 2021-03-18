import React from "react";
import {
  Button,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  HStack,
  Stack,
  Text,
  Center,
  useToast,
} from "@chakra-ui/react";

// REF: https://en.wikipedia.org/wiki/List_of_Unicode_characters
const CHAR_CODE_OF_UPPER_A = 65;
const CHAR_CODE_OF_LOWER_A = 97;
const LENGTH_OF_ALPHABET = 26;
const generateAllAlphabets = ({ isUpper = false }) => {
  const CHAR_CODE_OF_A = isUpper ? CHAR_CODE_OF_UPPER_A : CHAR_CODE_OF_LOWER_A;
  return Array.from({ length: LENGTH_OF_ALPHABET }, (_v, idx) =>
    String.fromCharCode(CHAR_CODE_OF_A + idx)
  );
};

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_v, idx) => from + idx);

const SYMBOL_RANGE_LIST = [
  // REF: https://en.wikipedia.org/wiki/List_of_Unicode_characters
  [33, 47],
  [58, 64],
  [91, 96],
  [123, 126],
];
function generateSymbols() {
  return SYMBOL_RANGE_LIST.reduce(
    (prev, [from, to]) => [...prev, ...range(from, to)],
    []
  ).map((decimal) => String.fromCharCode(decimal));
}
const generateNumStrings = () =>
  Array.from({ length: 10 }, (_v, idx) => String(idx));

const LIST_OF_LOWER_CHAR = generateAllAlphabets({ isUpper: false });
const LIST_OF_UPPER_CHAR = generateAllAlphabets({ isUpper: true });
const LIST_OF_NUMBER = generateNumStrings();
const LIST_OF_SYMBOL = generateSymbols();

const getRandom = (list: unknown[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

const generatePw = ({
  length = 32,
  shouldIncludeUpper = false,
  shouldIncludeNumber = false,
  shouldIncludeSymbol = false,
}) => {
  const list = LIST_OF_LOWER_CHAR;
  if (shouldIncludeUpper) list.push(...LIST_OF_UPPER_CHAR);
  if (shouldIncludeNumber) list.push(...LIST_OF_NUMBER);
  if (shouldIncludeSymbol) list.push(...LIST_OF_SYMBOL);
  const pw = Array.from({ length }, () => getRandom(list)).join("");
  return pw;
};

const initialPw = generatePw({
  length: 32,
  shouldIncludeNumber: true,
  shouldIncludeSymbol: true,
  shouldIncludeUpper: true,
});

const useToggle = () => React.useReducer((prev) => !prev, true);

export function Page() {
  const [shouldIncludeUpper, toggleShouldIncludeUpper] = useToggle();
  const [shouldIncludeNumber, toggleShouldIncludeNumber] = useToggle();
  const [shouldIncludeSymbol, toggleShouldIncludeSymbol] = useToggle();
  const [length, setLength] = React.useState<number>(32);
  const handleLength = React.useCallback((event) => {
    const maybeNum = parseInt(event || 0);
    if (isNaN(maybeNum)) return console.warn("Something error on input number");
    setLength(maybeNum);
  }, []);

  const [pw, setPw] = React.useState<string>(initialPw);
  const generate = React.useCallback(() => {
    setPw(
      generatePw({
        length,
        shouldIncludeNumber,
        shouldIncludeSymbol,
        shouldIncludeUpper,
      })
    );
  }, [length, shouldIncludeNumber, shouldIncludeSymbol, shouldIncludeUpper]);

  const toast = useToast();
  const handleClickPw = React.useCallback(() => {
    navigator.clipboard
      .writeText(pw)
      .then(() => {
        toast({
          title: "Copied",
          status: "info",
          duration: 1_500,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Can't copy",
          status: "error",
          duration: 1_500,
        });
      });
  }, [toast, pw]);

  return (
    <Center height="100vh" bg="purple.900">
      <Stack
        boxShadow="0 10px 25px black"
        minWidth="400"
        maxWidth="400"
        bg="purple.50"
        borderRadius="10"
        p="5"
      >
        <Text fontSize="3xl" color="purple.700" fontWeight="900" align="center">
          Password Genererator
        </Text>
        <Stack spacing="8">
          <Box
            align="center"
            height="200"
            overflowX="scroll"
            borderWidth="1px"
            borderColor="purple.100"
            borderRadius="10"
            p="5"
            _hover={{
              cursor: "pointer",
            }}
            onClick={handleClickPw}
          >
            <Text color="purple.400" wordBreak="break-all">
              {pw}
            </Text>
          </Box>
          <Box align="center">
            <Button onClick={generate} colorScheme="purple" w="100%">
              Generate
            </Button>
          </Box>
          <Stack spacing="1">
            <Text color="purple.700">Length</Text>
            <Slider value={length} onChange={handleLength} max={1000} min={1}>
              <SliderTrack bg="purple.100">
                <SliderFilledTrack bg="purple" />
              </SliderTrack>
              <SliderThumb boxSize={10}>
                <Box color="purple">{length}</Box>
              </SliderThumb>
            </Slider>
          </Stack>
          <HStack justifyContent="space-between">
            <Text color="purple.700">Include Uppercase?</Text>
            <Switch
              onChange={toggleShouldIncludeUpper}
              isChecked={shouldIncludeUpper}
              colorScheme="purple"
            />
          </HStack>
          <HStack justifyContent="space-between">
            <Text color="purple.700">Include number?</Text>
            <Switch
              onChange={toggleShouldIncludeNumber}
              isChecked={shouldIncludeNumber}
              colorScheme="purple"
            />
          </HStack>
          <HStack justifyContent="space-between">
            <Text color="purple.700">Include symbol?</Text>
            <Switch
              onChange={toggleShouldIncludeSymbol}
              isChecked={shouldIncludeSymbol}
              colorScheme="purple"
            />
          </HStack>
        </Stack>
      </Stack>
    </Center>
  );
}
