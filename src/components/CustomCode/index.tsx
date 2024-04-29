import {
  cloneElement,
  useEffect,
  useState,
  type FC,
  type ReactElement,
} from "react";
import { Input } from "@adjust/components";

const BuildCustomCode: FC<{
  label: string;
  overwriteValue: string;
  content: ReactElement;
}> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [blockValue, setBlockValue] = useState(props.content);
  const updateBlock = (newValue: string) => {
    let currentValue = props.content.props.value as string;
    let updatedValue = currentValue.replaceAll(props.overwriteValue, newValue);
    let newBlock = cloneElement(props.content, { value: updatedValue });
    setBlockValue(newBlock);
  };

  useEffect(() => {
    if (!inputValue) {
      setBlockValue(props.content);
    }
  }, [inputValue]);

  return (
    <>
      <div className="pb-4">
        <Input
          placeholder={props.overwriteValue}
          value={inputValue}
          label={props.label}
          onChange={(e) => {
            setInputValue(e.target.value);
            updateBlock(e.target.value);
          }}
          onClear={() => {
            setInputValue("");
            setBlockValue(props.content);
          }}
        />
      </div>
      {blockValue}
    </>
  );
};

export default BuildCustomCode;
