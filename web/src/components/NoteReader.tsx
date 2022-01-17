import {
  Box,
  Button,
  CloseButton,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaPen } from "react-icons/fa";
import {
  useDeleteCharSpellMutation,
  useDeleteNoteMutation,
  useMyNotesQuery,
  useUpateNoteMutation,
} from "src/generated/graphql";
import DeleteConfirmModal from "./DeleteConfirmModal";
import EditableControls from "./EditableControls";
import NotePopover from "./NotePopover";
interface NoteReaderProps {
  charSpell: [
    {
      __typename?: "Char_Spell" | undefined;
      id: number;
      spell_id: string;
    }
  ];
}
const NoteReader: React.FC<NoteReaderProps> = ({ charSpell }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, deleteNote] = useDeleteNoteMutation();
  const [{ data: charNotes }, getNotes] = useMyNotesQuery({
    variables: { options: charSpell[0].id },
  });
  const toast = useToast();
  const [, updateNote] = useUpateNoteMutation();
  const [, deleteCharSpell] = useDeleteCharSpellMutation();
  const delCharSpellFn = (id: number) => {
    deleteCharSpell({
      charSpellId: id,
    });
  };
  return (
    <>
      <IconButton
        aria-label="edit notes"
        as={Link}
        bg="unset"
        h="fit-content"
        w="fit-content"
        px={1}
        py={1}
        onClick={() => {
          getNotes();
          onOpen();
        }}
        icon={<FaPen size={"3em"} />}
      ></IconButton>
      <DeleteConfirmModal deleteFn={delCharSpellFn} id={charSpell[0].id} />
      <Modal
        size={"6xl"}
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{charSpell[0].spell_id} Notes</ModalHeader>
          <ModalCloseButton size={"6xl"} />
          <ModalBody>
            {!charNotes?.myNotes?.note ? (
              <Spinner size="xl" />
            ) : (
              <Flex flexDir={"column"} gap={"1em"}>
                {charNotes.myNotes.note.map((note, i) => {
                  return (
                    <Box key={note.id}>
                      <Flex justifyContent={"space-between"}>
                        <Heading size={"m"}>
                          <Editable
                            defaultValue={note.title}
                            h="fit-content"
                            display={"flex"}
                            submitOnBlur={false}
                            onSubmit={async (value) => {
                              try {
                                const res = await updateNote({
                                  options: {
                                    noteId: note.id,
                                    text: note.text,
                                    title: value,
                                  },
                                });
                                if (res.error?.message) {
                                  return toast({
                                    title: "error",
                                    description: res.error.message,
                                    duration: 3000,
                                    isClosable: true,
                                  });
                                } else {
                                  return toast({
                                    title: `Successfully updated note`,
                                    duration: 3000,
                                    isClosable: true,
                                  });
                                }
                              } catch (err) {
                                return toast({
                                  title: "Something went wrong",
                                  description: err.message,
                                  duration: 3000,
                                  isClosable: true,
                                });
                              }
                            }}
                          >
                            <EditablePreview></EditablePreview>
                            <EditableInput />
                            <EditableControls />
                          </Editable>
                        </Heading>
                        <CloseButton
                          onClick={async () => {
                            try {
                              const res = await deleteNote({
                                noteId: note.id,
                              });
                              if (res.error?.message) {
                                return toast({
                                  title: "error",
                                  description: res.error.message,
                                  duration: 3000,
                                  isClosable: true,
                                });
                              } else {
                                charNotes.myNotes?.note?.splice(i, 1);
                                return toast({
                                  title: `Successfully deleted note`,
                                  duration: 3000,
                                  isClosable: true,
                                });
                              }
                            } catch (err) {
                              return toast({
                                title: "Something went wrong",
                                description: err.message,
                                duration: 3000,
                                isClosable: true,
                              });
                            }
                          }}
                        />
                      </Flex>
                      <Divider />
                      <Text whiteSpace={"pre"} h="fit-content">
                        <Editable
                          defaultValue={note.text}
                          h="fit-content"
                          display={"flex"}
                          flexDir={"column"}
                          submitOnBlur={false}
                          onSubmit={async (value) => {
                            try {
                              const res = await updateNote({
                                options: {
                                  noteId: note.id,
                                  text: value,
                                  title: note.title,
                                },
                              });
                              if (res.error?.message) {
                                return toast({
                                  title: "error",
                                  description: res.error.message,
                                  duration: 3000,
                                  isClosable: true,
                                });
                              } else {
                                return toast({
                                  title: `Successfully updated note`,
                                  duration: 3000,
                                  isClosable: true,
                                });
                              }
                            } catch (err) {
                              return toast({
                                title: "Something went wrong",
                                description: err.message,
                                duration: 3000,
                                isClosable: true,
                              });
                            }
                          }}
                        >
                          <EditablePreview />
                          <EditableInput as="textarea" />
                          <EditableControls />
                        </Editable>
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              marginRight={"1em"}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <NotePopover charSpell={charSpell} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoteReader;
