import { RecipeType } from '@/types';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function RecipePage() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState<RecipeType>();

    useEffect(() => {
        const fetchRecipe = async () => {
            if (recipeId) {
                const response = await fetch(
                    `https://dummyjson.com/recipes/${recipeId}`
                );
                const recipe = await response.json();

                if (recipe) {
                    setRecipe(recipe);
                }
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <p className='px-3 py-3'>Recipe is being cooked...</p>;
    }

    return (
        <div className="xl:px-48 px-10 pb-12 bg-gradient-to-br from-pink-200 via-violet-200 to-orange-200">
            <div className="grid xl:grid-cols-2 pb-10 xl:pb-20">
                <div className="pt-12 xl:px-12">
                    <Link to="/" className="text-2xl">
                        <p>← Back to All Recipes</p>
                    </Link>
                    <h1 className="text-2xl lg:text-4xl my-8 font-bold">{recipe.name}</h1>
                    <div className="grid grid-cols-3 gap-16">
                        <div className="flex flex-col">
                            <p className="text-md lg:text-2xl">🍽️ Serves</p>
                            <p className="text-gray-800 text-md lg:text-2xl font-bold">
                                {recipe.servings}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-md lg:text-2xl">⏳ Prep Time</p>
                            <p className="text-gray-800 text-md lg:text-2xl font-bold">
                                {recipe.prepTimeMinutes} min
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-md lg:text-2xl">⏱️ Cook Time</p>
                            <p className="text-gray-800 text-md lg:text-2xl font-bold">
                                {recipe.cookTimeMinutes} min
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-md lg:text-2xl">🍔 Cuisine</p>
                            {recipe.cuisine === "Mediterranean" ? <p className="text-gray-800 text-md lg:text-lg font-bold ">
                                {recipe.cuisine}
                            </p> : <p className="text-gray-800 text-md lg:text-2xl font-bold">
                                {recipe.cuisine}
                            </p>}

                        </div>
                        <div className="flex flex-col">
                            <p className="text-md lg:text-2xl">🔥 Difficulty</p>
                            <p className="text-gray-800 text-md lg:text-2xl font-bold">
                                {recipe.difficulty}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-12 mx-auto">
                    <img
                        src={recipe.image}

                        className="w-96 h-80 lg:h-[500px] lg:w-[600px]"
                    />
                </div>
            </div>

            <div className="grid xl:grid-cols-2">
                <div className="xl:px-12">
                    <h2 className="xl:text-4xl lg:my-12 my-10 text-2xl">Ingredients</h2>
                    <div className="flex flex-col divide-y divide-orange-800 ">
                        {recipe.ingredients.map((ingredient: string, idx: number) => (
                            <div className="py:2" key={`${ingredient}-${idx}`}>
                                <p className="text-md lg:text-2xl">{ingredient}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:px-12">
                    <h2 className="xl:text-4xl lg:my-12 my-10 text-2xl">Instructions</h2>
                    <div className="flex flex-col ">
                        {recipe.instructions.map((instruction: string, idx: number) => (
                            <ul className="py-2 list-disc" key={`${instruction}-${idx}`}>
                                <li className="text-md lg:text-2xl">{instruction}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}