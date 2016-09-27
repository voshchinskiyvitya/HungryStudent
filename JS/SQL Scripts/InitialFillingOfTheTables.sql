INSERT INTO `test_db`.`Products`
VALUES(1, 'Potatoe');

INSERT INTO `test_db`.`Products`
VALUES(2, 'Cheese');

INSERT INTO `test_db`.`Products`
VALUES(3, 'Oil');

INSERT INTO `test_db`.`Products`
VALUES(4, 'Meal');

INSERT INTO `test_db`.`Products`
VALUES(5, 'Water');

INSERT INTO `test_db`.`Products`
VALUES(6, 'Egg');

INSERT INTO `test_db`.`Products`
VALUES(7, 'Tomatoe');



INSERT INTO `test_db`.`Recipes`
VALUES(1, 'Pizza', '1. Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but its not essential for a thin crust.
2. Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.
3. Roll out the dough: If youve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.
4. Top and bake: Heat oven to 240C/fan 220C /gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. Repeat step for remaining pizza.');

INSERT INTO `test_db`.`Recipes`
VALUES(2, 'Fries', 'Peel and rinse the potatoes. Then cut them into sticks by cutting the potato in 4 or 5 vertical pieces, and then cutting each piece into sticks.
Place them in a large bowl and cover with cold water. Allow them to soak, 2 to 3 hours. (You can also stick them in the fridge and let them soak overnight.)
When youre ready to make the fries, drain off the water and lay the potatoes on 2 baking sheets lined with paper towels. Blot with paper towels to dry them.
Heat a few inches of oil in a heavy pot to 300 degrees F. In 3 or 4 batches, cook the potatoes until soft, 4 to 5 minutes per batch. They should not be brown at this point! You just want to start the cooking process. Remove each batch and drain on new/dry paper towels.
Once all the potatoes have been fried at 300 degrees F, turn up the heat until the oil reaches 400 degrees F. When the oils hot, start frying the potatoes in batches again, cooking until the fries are golden and crisp. Remove the potatoes from the oil and drain on paper towels.
Sprinkle with sea salt and dive in!');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(1, 2, 1, 200, 'g');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(2, 3, 1, 50, 'g');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(3, 4, 1, 500, 'g');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(4, 5, 1, 200, 'g');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(5, 6, 1, 2, 'p');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(6, 7, 1, 2, 'p');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(7, 2, 2, 500, 'g');

INSERT INTO `test_db`.`RecipeProducts`
VALUES(8, 3, 2, 100, 'g');