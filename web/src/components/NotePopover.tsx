import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React, { memo } from "react";
import { FaStickyNote } from "react-icons/fa";
import { useCreateNoteMutation } from "src/generated/graphql";

interface NotePopoverProps {
  charSpell: [
    {
      __typename?: "Char_Spell" | undefined;
      id: number;
      spell_id: string;
    }
  ];
}
const NotePop: React.FC<NotePopoverProps> = ({ charSpell }) => {
  const { data: session, status } = useSession();
  const [, addNote] = useCreateNoteMutation();
  const toast = useToast();
  return (
    <Popover preventOverflow={false}>
      <PopoverTrigger>
        <Button>Add a Note</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Write a note?</PopoverHeader>
        <PopoverBody>
          <Formik
            initialValues={{ note: "", title: "" }}
            onSubmit={async (values) => {
              if (session?.user && status === "authenticated") {
                try {
                  const noteRes = await addNote({
                    options: {
                      char_spellId: charSpell[0].id,
                      title: values.title as string,
                      text: values.note as string,
                    },
                  });
                  if (noteRes.data?.createNote?.errors) {
                    toast({
                      title: "Error",
                      description: noteRes.data?.createNote?.errors,
                      duration: 3000,
                      isClosable: true,
                    });
                  } else {
                    toast({
                      title: `Successfully added ${values.title}`,
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                } catch (err) {
                  toast({
                    title: "Something went wrong",
                    description: err.message,
                  });
                }
              }
            }}
          >
            {(props) => (
              <Form>
                <Box>
                  <Field
                    name="title"
                    placeholder="Title"
                    style={{
                      width: "18em",
                      margin: "auto",
                      padding: ".25em",
                    }}
                  ></Field>
                  <Divider />
                  <Field
                    as="textarea"
                    name="note"
                    style={{
                      width: "18em",
                      margin: "auto",
                      padding: ".25em",
                    }}
                  ></Field>
                  <Button isLoading={props.isSubmitting} type="submit" w="18em">
                    <FaStickyNote />
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const NotePopover = memo(NotePop);
export default NotePopover;
