import { Flex, Text, Img } from "@chakra-ui/react";
import React from "react";
import classDescriptions from "../utils/class.json";
interface ClassPreviewProps {
  className:
    | "Barbarian"
    | "Bard"
    | "Cleric"
    | "Druid"
    | "Fighter"
    | "Monk"
    | "Paladin"
    | "Ranger"
    | "Sorcerer"
    | "Warlock"
    | "Wizard"
    | "Other";
}
const ClassPreview: React.FC<ClassPreviewProps> = ({ className }) => {
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      w={{ base: "15em", lg: "30em" }}
    >
      <Img
        src={classDescriptions[`${className}`].img}
        boxSize={"fit-content"}
        objectFit="cover"
      ></Img>
      <Text>{classDescriptions[`${className}`].desc}</Text>
    </Flex>
  );
};

export default ClassPreview;
