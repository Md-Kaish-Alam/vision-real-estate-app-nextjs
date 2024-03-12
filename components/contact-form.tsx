import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 my-4"
    >
      <Input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        value={email}
        placeholder="Enter Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        value={message}
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
