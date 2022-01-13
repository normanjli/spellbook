import {
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
interface sideBarProps {
  dndClass: string;
}
const SideBar: React.FC<sideBarProps> = ({ dndClass }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef.current}
        bg={"tomato"}
        onClick={onOpen}
        position={"fixed"}
        top={"90vh"}
        left={"1em"}
        zIndex={1}
        display={{ md: "none" }}
      >
        <FaPlus />
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
            <CreateCharForm dndClass={dndClass} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideBar;
