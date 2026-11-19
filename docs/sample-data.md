# Sample Data

Use this data in `prisma/seed.ts` so you can spend your time on the database, not on making up recipes. You do not have to use all of it: pick enough to meet the rules in each task. The chefs and cookbooks are made up. Any real person or book with the same name is a coincidence.

## The minimum set

Rows marked ✓ in the **Min** column are the **minimum set**: 3 chefs, 3 cookbooks, 6 recipes, 4 nutrition labels and 5 ingredients. The minimum set meets every rule in the task sheet, so use it to save typing. Add the other rows only if you finish early.

The minimum set meets every rule because:

- Rosa Bell has more than one cookbook.
- Every cookbook in the set has two recipes.
- _Mackerel on Toast_ and _Seared Scallops_ have no nutrition label yet. A recipe can have no label, but never two.
- _Crab Linguine_ uses more than one ingredient.
- _Garlic_, _Butter_ and _Chilli_ are each used in more than one recipe.
- _Peanuts_ is used in no recipes yet, and Megan Pryce has no cookbooks yet. Both are allowed. Think about what they tell you about each relationship.

The **Variable** column gives a name you can use for each record in your seed script. Later tasks use these names.

## Chefs (Task 1)

| Min | Variable     | name        | speciality  | town         |
| --- | ------------ | ----------- | ----------- | ------------ |
| ✓   | `rosaBell`   | Rosa Bell   | Seafood     | Brixham      |
| ✓   | `tomAsante`  | Tom Asante  | Street Food | Exeter       |
| ✓   | `meganPryce` | Megan Pryce | Baking      | Newton Abbot |

## Cookbooks (Task 2)

| Min | Variable         | title            | publishedYear | Chef         |
| --- | ---------------- | ---------------- | ------------- | ------------ |
| ✓   | `catchOfTheDay`  | Catch of the Day | 2021          | `rosaBell`   |
| ✓   | `harbourSuppers` | Harbour Suppers  | 2024          | `rosaBell`   |
| ✓   | `fireAndSpice`   | Fire and Spice   | 2023          | `tomAsante`  |
|     | `risingSlowly`   | Rising Slowly    | 2025          | `meganPryce` |

## Recipes (Task 3)

`cookingMinutes` is the total time to make the recipe, in minutes (90 minutes = 1 hour 30 minutes).

| Min | Variable        | title               | pageNumber | cookingMinutes | Cookbook         |
| --- | --------------- | ------------------- | ---------- | -------------- | ---------------- |
| ✓   | `crabLinguine`  | Crab Linguine       | 14         | 25             | `catchOfTheDay`  |
| ✓   | `mackerelToast` | Mackerel on Toast   | 22         | 15             | `catchOfTheDay`  |
|     | `ciderMussels`  | Cider Mussels       | 31         | 20             | `catchOfTheDay`  |
| ✓   | `fishPie`       | Brixham Fish Pie    | 18         | 60             | `harbourSuppers` |
| ✓   | `scallops`      | Seared Scallops     | 40         | 10             | `harbourSuppers` |
| ✓   | `jerkChicken`   | Jerk Chicken        | 12         | 90             | `fireAndSpice`   |
| ✓   | `chickpeaCurry` | Chickpea Curry      | 27         | 40             | `fireAndSpice`   |
|     | `potatoWedges`  | Sweet Potato Wedges | 35         | 35             | `fireAndSpice`   |
|     | `sourdough`     | Country Sourdough   | 8          | 50             | `risingSlowly`   |
|     | `devonScones`   | Devon Scones        | 20         | 25             | `risingSlowly`   |

## Nutrition labels (Task 4)

Values are per portion. A recipe that is not listed here has no label yet.

| Min | Recipe          | calories | saltGrams |
| --- | --------------- | -------- | --------- |
| ✓   | `crabLinguine`  | 610      | 2.1       |
| ✓   | `fishPie`       | 540      | 1.8       |
| ✓   | `jerkChicken`   | 480      | 2.4       |
| ✓   | `chickpeaCurry` | 390      | 1.3       |
|     | `ciderMussels`  | 350      | 1.9       |
|     | `devonScones`   | 310      | 0.6       |

## Ingredients (Task 5)

The **allergen** column is blank when an ingredient is not one of the main food allergens. Your schema has to cope with that.

In the minimum set, leave out any recipe in the **Used in** column that you did not create.

| Min | Variable     | name         | allergen | Used in                                                     |
| --- | ------------ | ------------ | -------- | ----------------------------------------------------------- |
| ✓   | `garlic`     | Garlic       |          | `crabLinguine`, `jerkChicken`, `chickpeaCurry`, `ciderMussels` |
| ✓   | `butter`     | Butter       | Milk     | `mackerelToast`, `fishPie`, `scallops`, `ciderMussels`, `devonScones` |
| ✓   | `wheatFlour` | Wheat Flour  | Gluten   | `crabLinguine`, `fishPie`, `sourdough`, `devonScones`       |
| ✓   | `chilli`     | Chilli       |          | `crabLinguine`, `jerkChicken`, `chickpeaCurry`, `potatoWedges` |
| ✓   | `peanuts`    | Peanuts      | Peanuts  | (none)                                                      |
|     | `cream`      | Double Cream | Milk     | `fishPie`, `devonScones`                                    |

## Users (extension task only)

| Variable | username | email            | Favourite recipes             | Follows chefs             |
| -------- | -------- | ---------------- | ----------------------------- | ------------------------- |
| `jess`   | jess_t   | jess@example.com | `crabLinguine`, `jerkChicken` | `rosaBell`, `tomAsante`   |
| `sam`    | sam_k    | sam@example.com  | `fishPie`                     | `meganPryce`, `rosaBell`  |

## Reviews (extension task only)

| User   | Recipe         | rating | comment                                     |
| ------ | -------------- | ------ | ------------------------------------------- |
| `jess` | `crabLinguine` | 5      | Quick, easy and tastes like a restaurant.   |
| `jess` | `fishPie`      | 4      | Lovely, but it took longer than it said.    |
| `sam`  | `jerkChicken`  | 3      | Good flavour. Far too hot for my kids.      |
