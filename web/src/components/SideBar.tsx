import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useAddCharMutation } from "src/generated/graphql";
import { InputField } from "./InputField";
interface sideBarProps {}
const SideBar: React.FC<sideBarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [, addChar] = useAddCharMutation();
  const { data, status } = useSession();

  return (
    <>
      <Button
        ref={btnRef.current}
        bg={"tomato"}
        onClick={onOpen}
        position={"fixed"}
        top={"90vh"}
        left={"10vw"}
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
            <Center flexDir={"column"} h="90%">
              <Formik
                initialValues={{ name: "", class: "Other" }}
                onSubmit={async (values, { setErrors }) => {
                  if (data?.user && status === "authenticated") {
                    const char = await addChar({
                      options: {
                        name: values.name.trim(),
                        class: values.class,
                        user: data.user.email as string,
                      },
                    });
                    if (char.error !== undefined) {
                      setErrors(char.error);
                    }
                  } else {
                    setErrors({ name: "something broke" });
                  }
                }}
              >
                <Form>
                  <InputField
                    name="name"
                    placeholder="Character Name"
                    label="Character Name"
                  ></InputField>
                  <Box display={{ base: "inline", md: "none" }} gap=".25em">
                    <Field
                      style={{ padding: ".5em", borderRadius: "5px" }}
                      mt="3"
                      as="select"
                      name="class"
                      placeholder="Class"
                    >
                      <option value="Barbarian">Barbarian</option>
                      <option value="Bard">Bard</option>
                      <option value="Cleric">Cleric</option>
                      <option value="Druid">Druid</option>
                      <option value="Fighter">Fighter</option>
                      <option value="Monk">Monk</option>
                      <option value="Paladin">Paladin</option>
                      <option value="Ranger">Ranger</option>
                      <option value="Rogue">Rogue</option>
                      <option value="Sorcerer">Sorcerer</option>
                      <option value="Warlock">Warlock</option>
                      <option value="Wizard">Wizard</option>
                      <option value="Other">Other</option>
                    </Field>
                  </Box>
                  <Button type="submit">Submit</Button>
                </Form>
              </Formik>
            </Center>
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
