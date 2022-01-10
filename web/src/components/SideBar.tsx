import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import CreateCharForm from "./CreateCharForm";
interface sideBarProps {}
const SideBar: React.FC<sideBarProps> = ({ ...children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef.current}
        bg={"tomato"}
        onClick={onOpen}
        position={"sticky"}
        top={"95vh"}
        left={"1em"}
        zIndex={1}
      >
        <FaPlus />
        <Box ml={"0.5em"}>Add a Character</Box>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Characters</DrawerHeader>

          <DrawerBody>
            <CreateCharForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" form={"addChar"}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideBar;
