import { Button, Center } from "@chakra-ui/react";
import { Form, Formik } from "formik";
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
                name: values.name.trim(),
                class:
                  dndClass !== "Other"
                    ? dndClass
                    : values.class !== "Other"
                    ? values.class
                    : "Other",
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
          <Button type="submit" isDisabled={status !== "authenticated"}>
            Submit
          </Button>
        </Form>
      </Formik>
    </Center>
  );
};

export default CreateCharForm;
