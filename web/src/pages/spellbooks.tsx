import { Button, Center, Heading } from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { InputField } from "src/components/InputField";
import { useAddCharMutation } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";

const CreateCharacter: NextPage = () => {
  const [, addChar] = useAddCharMutation();
  const { data, status } = useSession();
  return (
    <Center flexDir={"column"}>
      <Heading size={"lg"} padding={"1em"}>
        Make a new Character
      </Heading>
      <Formik
        initialValues={{ name: "", class: "" }}
        onSubmit={async (values, { setErrors }) => {
          if (data?.user && status === "authenticated") {
            const char = await addChar({
              options: {
                name: values.name,
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
          <Field mt="3" as="select" name="class" placeholder="Class">
            <option value="barbarian">Barbarian</option>
            <option value="cleric">Cleric</option>
            <option value="bard">Bard</option>
            <option value="druid">Druid</option>
            <option value="paladin">Paladin</option>
            <option value="monk">Monk</option>
            <option value="rogue">Rogue</option>
            <option value="ranger">Ranger</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="wizard">Wizard</option>
            <option value="warlock">Warlock</option>
            <option value="other">Other</option>
          </Field>
          <Button ml="3" size="sm" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Center>
  );
};

export default withUrqlClient(createUrqlClient)(CreateCharacter);
