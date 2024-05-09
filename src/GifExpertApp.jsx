import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (categorie) => {
    if (categories.includes(categorie)) return;

    setCategories([categorie, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
