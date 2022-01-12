import {
  Box,
  Button,
  Center,
  Flex,
  RadioGroup,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useAddCharMutation } from "src/generated/graphql";
import { InputField } from "./InputField";
import RadioCard from "./RadioCard";
interface createCharFormProps {}
const CreateCharForm: React.FC<createCharFormProps> = () => {
  const [, addChar] = useAddCharMutation();
  const { data, status } = useSession();
  const [dndClass, setDndClass] = useState("Other");
  const options = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Other",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "class",
    defaultValue: "Other",
    onChange: setDndClass,
  });
  const group = getRootProps();
  return (
    <Center flexDir={"column"} h="90%">
      <Formik
        initialValues={{ name: "", class: dndClass }}
        onSubmit={async (values, { setErrors }) => {
          if (data?.user && status === "authenticated") {
            const char = await addChar({
              options: {
                name: values.name,
                class: dndClass,
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
          <RadioGroup
            onChange={setDndClass}
            value={dndClass}
            display={{ base: "none", md: "inline" }}
          >
            <Flex flexDir={"column"}>
              <Stack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </Stack>
            </Flex>
          </RadioGroup>
          <Box display={{ base: "inline", md: "none" }}>
            <Field
              mt="3"
              as="select"
              name="class"
              placeholder="Class"
              defaultValue="Class"
            >
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
          </Box>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Center>
  );
};

export default CreateCharForm;
