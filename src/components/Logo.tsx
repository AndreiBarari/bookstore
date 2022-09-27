import React from "react";
import { Image } from "@mantine/core";

function Logo() {
  return (
    <div style={{ width: 100, marginLeft: "auto", marginRight: "auto" }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
        alt="Random unsplash image"
      />
    </div>
  );
}

export default Logo;
