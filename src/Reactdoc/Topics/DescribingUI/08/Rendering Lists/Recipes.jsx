import { recipe } from "./Utills/data";
import RecipeList from "./Utills/RecipeList";
export default function Recipes() {
  return (
    <div>
      <h1>Extracting a list item component</h1>

      {recipe.map((recipe) => {
        return <RecipeList {...recipe} key={recipe.id} />;
      })}
    </div>
  );
}
