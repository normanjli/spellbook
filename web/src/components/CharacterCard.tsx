import {
  Button,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Spacer,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaTimes } from "react-icons/fa";
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
  const [, deleteChar] = useDeleteCharMutation();
  const [, editChar] = useEditCharMutation();
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
          <>
            <Card key={e.id} position={"relative"}>
              <Button
                position="absolute"
                top=".25em"
                left=".25em"
                size="sm"
                bg={"unset"}
                onClick={async () => {
                  if (charList.character) {
                    charList.character.splice(i, 1);
                  }
                  try {
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
                <FaTimes />
              </Button>
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
            <Spacer />
          </>
        ))}
      </>
    );
  } else {
    return <Spinner size="xl" />;
  }
};

export default CharacterCard;
