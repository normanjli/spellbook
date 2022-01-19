import {
  Button,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
interface DelConfirmProps {
  deleteFn: any;
  id: number;
}
const DeleteConfirmModal: React.FC<DelConfirmProps> = ({ deleteFn, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const errorMsg = {
    title: "Something Went Wrong",
    description: `Try again`,
    duration: 3000,
    isClosable: true,
  };

  return (
    <>
      <IconButton
        aria-label="delete note"
        as={Link}
        bg="unset"
        h="fit-content"
        w="fit-content"
        px={1}
        py={1}
        icon={<FaTimes size="3em" />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Are you sure you want to do this?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This will remove all information related to this item forever.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              variant="ghost"
              onClick={async () => {
                setLoading(true);
                try {
                  await deleteFn(id);
                  toast({
                    title: "Successfully Deleted!",
                    duration: 3000,
                    isClosable: true,
                  });
                  onClose();
                } catch (err) {
                  toast(errorMsg);
                } finally {
                  setLoading(false);
                }
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteConfirmModal;
