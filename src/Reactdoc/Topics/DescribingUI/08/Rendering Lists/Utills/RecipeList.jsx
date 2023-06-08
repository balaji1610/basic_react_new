export default function RecipeList({ id, name, ingredients }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredients) => {
          return <li key={ingredients}>{ingredients}</li>;
        })}
      </ul>
    </div>
  );
}
