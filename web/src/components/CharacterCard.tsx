import {
  Button,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaBookOpen, FaTimes } from "react-icons/fa";
import { CharacterContext } from "src/context/characterContext";
import {
  useDeleteCharMutation,
  useEditCharMutation,
} from "src/generated/graphql";
import { Card } from "./Card";
import EditableControls from "./EditableControls";

interface CharacterCardProps {
  charList:
    | {
        __typename?: "CharResponse" | undefined;
        errors?: string | null | undefined;
        character?:
          | {
              __typename?: "Character" | undefined;
              id: number;
              name: string;
              class: string;
            }[]
          | null
          | undefined;
      }
    | null
    | undefined;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ charList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { updateCharFocus } = useContext(CharacterContext) as CharContext;
  const route = useRouter();
  const [, editChar] = useEditCharMutation();
  const [, deleteChar] = useDeleteCharMutation();

  const toast = useToast();
  const errorMsg = {
    title: "Something Went Wrong",
    description: `Try again`,
    duration: 3000,
    isClosable: true,
  };
  if (charList?.character) {
    return (
      <>
        {charList.character.map((e, i) => (
          <Card key={e.id} position={"relative"}>
            <Button
              position="absolute"
              top=".25em"
              left=".25em"
              size="sm"
              bg={"unset"}
              onClick={onOpen}
            >
              <FaTimes />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay></ModalOverlay>
              <ModalContent>
                <ModalHeader>Are you sure you want to do this?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  This characters data will be deleted. Any notes, and saved
                  spells will be gone forever.
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      if (charList.character) {
                        charList.character.splice(i, 1);
                      }
                      try {
                        onClose();
                        await deleteChar({ charId: e.id });
                        toast({
                          title: "Successfully Deleted!",
                          description: `Deleted ${e.name} the ${e.class}`,
                          duration: 3000,
                          isClosable: true,
                        });
                      } catch (err) {
                        toast(errorMsg);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Center
              onClick={() => {
                updateCharFocus(e.class, i, e.id);
                route.push("/spellbooks");
              }}
              _hover={{ cursor: "pointer" }}
            >
              <FaBookOpen size={"6em"} />
            </Center>
            <Center gap="2em">
              <Heading fontSize={{ base: "15px", md: "20px", lg: "30px" }}>
                <Editable
                  defaultValue={e.name}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  submitOnBlur={false}
                  onSubmit={async (value) => {
                    try {
                      const { data } = await editChar({
                        options: { charId: e.id, name: value },
                      });
                      if (data !== "Something went wrong") {
                        toast({
                          title: "Successfully changed character name",
                          duration: 3000,
                        });
                      } else {
                        toast(errorMsg);
                      }
                    } catch (err) {
                      toast(errorMsg);
                    }
                  }}
                >
                  <EditablePreview />
                  <EditableInput
                    border={"1px"}
                    borderColor={"black"}
                    w={"10ch"}
                  />
                  <EditableControls></EditableControls>
                </Editable>
                {` the ${e.class}`}
              </Heading>
            </Center>
          </Card>
        ))}
      </>
    );
  } else {
    return <Spinner size="xl" />;
  }
};

export default CharacterCard;
