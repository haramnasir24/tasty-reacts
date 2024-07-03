import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RecipeType } from "@/types";
import React, { useEffect, useState } from "react";

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [badge, setBadge] = useState("");

    const getAllRecipes = async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        return data.recipes;
    }

    useEffect(() => {
        const getRecipes = async () => {
            const recipes = await getAllRecipes();

            if (recipes) {
                // console.log({ data });
                setRecipes(recipes);
            }
        }

        getRecipes();
    }, [])

    useEffect(() => {
        const getFilteredRecipes = async () => {
            const recipes = await getAllRecipes();
            const filteredRecipesByCuisine = recipes.filter((recipe: RecipeType) => recipe.cuisine === badge);
            setFilteredRecipes(filteredRecipesByCuisine);
        }

        if (badge) {
            getFilteredRecipes();
        }
    })

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cuisine: string) => {
        e.preventDefault();
        setBadge(cuisine);
    }

    const cuisines: Array<string> = ['All', 'Asian', 'American', 'Greek', 'Italian', 'Indian', 'Japanese',
        'Mediterranean', 'Mexican', 'Pakistani']
    return (
        <div className="xl:px-20 px-10">

            <div className="mt-12">
                {cuisines.map((cuisine, idx) => (
                    <Badge
                        key={`${cuisine}-${idx}`}
                        variant={'outline'}
                        className="border-orange-800
                text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer
                bg-orange-50 hover:scale-110
                ease-in duration-100"
                        onClick={(e) => handleOnClick(e, cuisine)}> {cuisine}
                    </Badge>
                ))}
            </div>


            <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:pt-24 pt-12 pb-40 ">
                {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map((recipe: RecipeType, idx: number) => (

                    <a href={`/recipes/${recipe.id}`}> <Card key={`${recipe.name}-${idx}`}
                        className="flex flex-col bg-orange-100 hover:scale-105 ease-in duration-200 xl:min-h-[500px] bg-gradient-to-br from-pink-200 via-violet-200 to-orange-200">
                        <CardHeader>
                            <img src={recipe.image} alt={recipe.name} width={500} height={500} className="bg-cover rounded-md shadow-xl" />
                        </CardHeader>

                        <CardContent>
                            <CardTitle className="lg:text-xl relative font-bold line-clamp-2"> {recipe.name} </CardTitle>
                        </CardContent>

                        <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col lg:px-2 px-5">
                            <div className="flex flex-col">
                                <p className="text-md">Serves</p>
                                <p className="text-gray-800">{recipe.servings}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Prep Time</p>
                                <p className="text-gray-800">{recipe.prepTimeMinutes} min</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Cook Time</p>
                                <p className="text-gray-800">{recipe.cookTimeMinutes} min</p>
                            </div>
                        </CardFooter>
                    </Card> </a>)

                )}
            </div>

        </div >

    )
}