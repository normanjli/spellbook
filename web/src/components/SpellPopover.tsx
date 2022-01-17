import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { memo, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  useAddChar_SpellMutation,
  useMyCharsQuery,
} from "src/generated/graphql";

interface SpellPopoverProps {
  spellName: string | undefined;
  className: string | undefined;
}
const SpellPop: React.FC<SpellPopoverProps> = ({ spellName, className }) => {
  const { data: session, status } = useSession();
  const [, addCharSpell] = useAddChar_SpellMutation();
  const [charList] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
  });
  const [charId, setCharId] = useState(0);
  const toast = useToast();
  return (
    <Popover preventOverflow={false}>
      <PopoverTrigger>
        <Button
          bg="unset"
          h="fit-content"
          w="fit-content"
          px={1}
          py={1}
          onClick={() =>
            setCharId(
              charList.data?.myChars?.character
                ? charList.data?.myChars?.character[0].id
                : 0
            )
          }
        >
          <FaPlus size="6em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Add {spellName} to a spellbook</PopoverHeader>
        <PopoverBody>
          {status === "authenticated" ? (
            <Formik
              initialValues={{}}
              onSubmit={async () => {
                if (session?.user && status === "authenticated") {
                  try {
                    const charSpell = await addCharSpell({
                      options: {
                        charId: charId as number,
                        spellName: spellName as string,
                      },
                    });
                    if (charSpell.data?.addChar_Spell?.errors) {
                      toast({
                        title: "Error",
                        description: charSpell.data.addChar_Spell.errors,
                        duration: 3000,
                        isClosable: true,
                      });
                    } else {
                      toast({
                        title: `Successfully added ${spellName}`,
                        duration: 3000,
                        isClosable: true,
                      });
                    }
                  } catch (err) {
                    toast({
                      title: "Something went wrong",
                      description: err.message,
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <Box>
                      <Field as="select" name="characterId" placeholder="id">
                        {charList ? (
                          charList.data?.myChars?.character
                            ?.filter((character) => {
                              return (
                                character.class === className ||
                                character.class === "Other"
                              );
                            })
                            .map((e) => (
                              <option
                                key={e.id}
                                value={e.id}
                                onClick={() => {
                                  setCharId(e.id);
                                }}
                              >
                                {e.name} the {e.class}
                              </option>
                            ))
                        ) : (
                          <Spinner />
                        )}
                      </Field>
                    </Box>
                    <Button isLoading={props.isSubmitting} type="submit">
                      <FaPlus />
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <Link href={"/login"}>Login to add to your spell books!</Link>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const SpellPopover = memo(SpellPop);
export default SpellPopover;
