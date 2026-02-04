import React from "react";
import Card from "./Card";
import HumanIcon from "../../assets/users-01.png";
import Book from "../../assets/book-open-01.png";
import Building from "../../assets/building-08.png";

const CardRow = () => {
  return (
    <div
      className="
        w-full
        max-w-[779px]
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
      "
    >
      <Card
        title="Total learners"
        value="2,114"
        icon={HumanIcon}
      />

      <Card
        title="Partner institute"
        value="2,114"
        icon={Building}
      />

      <Card
        title="Live courses"
        value="2,114"
        icon={Book}
      />
    </div>
  );
};

export default CardRow;
