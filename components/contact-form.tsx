import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const inpurRef = useRef();

  const onSubmit = () => {
    // inpurRef.current.value = "";
  };

  return (
    <form className="flex flex-col items-center gap-2 my-4">
      <Input
        type="text"
        placeholder="Enter your name"
        // ref={inputRef}
      />
      <Input
        type="email"
        placeholder="Enter Email Address"
        // ref={inputRef}
      />
      <Textarea
        placeholder="Type your message here..."
        // ref={inputRef}
      />
      <Button onClick={() => onSubmit()}>Submit</Button>
    </form>
  );
};
