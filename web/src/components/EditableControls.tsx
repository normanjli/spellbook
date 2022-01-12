import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FaCheck, FaEdit, FaTimes } from "react-icons/fa";

const EditableControls: React.FC = ({}) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm" m={".5em"}>
      <IconButton icon={<FaCheck />} {...(getSubmitButtonProps() as any)} />
      <IconButton icon={<FaTimes />} {...(getCancelButtonProps() as any)} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        size="sm"
        bg="unset"
        // position={"relative"}
        // top={"1em"}
        icon={<FaEdit />}
        {...(getEditButtonProps() as any)}
      />
    </Flex>
  );
};
export default EditableControls;
