import { Box, useRadio } from "@chakra-ui/react";

const RadioCard: React.FC = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props as any);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
