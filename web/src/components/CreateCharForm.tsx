import { Box, Button, Center } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React from "react";
import { useAddCharMutation } from "src/generated/graphql";
import { InputField } from "./InputField";
interface createCharFormProps {
  dndClass: string;
}
const CreateCharForm: React.FC<createCharFormProps> = ({
  children,
  dndClass,
}) => {
  const [, addChar] = useAddCharMutation();
  const { data, status } = useSession();

  return (
    <Center flexDir={"column"} h="90%">
      <Formik
        initialValues={{ name: "", class: dndClass }}
        onSubmit={async (values, { setErrors }) => {
          if (data?.user && status === "authenticated") {
            const char = await addChar({
              options: {
                name: values.name,
                class: dndClass ? dndClass : values.class,
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
        <Form id="addChar">
          <InputField
            name="name"
            placeholder="Character Name"
            label="Character Name"
          ></InputField>
          {children}
          <Box display={{ base: "inline", md: "none" }}>
            <Field mt="3" as="select" name="class" placeholder="Class">
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
  );
};

export default CreateCharForm;
