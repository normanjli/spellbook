import { Center } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import React from "react";
import { useAddCharMutation } from "src/generated/graphql";
import { InputField } from "./InputField";
interface createCharFormProps {}
const CreateCharForm: React.FC<createCharFormProps> = () => {
  const [, addChar] = useAddCharMutation();
  const { data, status } = useSession();
  return (
    <div>
      <Center flexDir={"column"}>
        <Formik
          initialValues={{ name: "", class: "" }}
          onSubmit={async (values, { setErrors }) => {
            if (data?.user && status === "authenticated") {
              const char = await addChar({
                options: {
                  name: values.name,
                  class: !values.class ? "other" : values.class,
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
          </Form>
        </Formik>
      </Center>
    </div>
  );
};

export default CreateCharForm;
