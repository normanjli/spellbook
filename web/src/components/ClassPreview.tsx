import { Flex } from "@chakra-ui/react";
import React from "react";

interface ClassPreviewProps {
  className: string;
}
const ClassPreview: React.FC<ClassPreviewProps> = ({ className }) => {
  return <Flex>TODO ADD IMAGE FOR {className} AND DESCRIPTION</Flex>;
};

export default ClassPreview;
