export class Food {
  constructor(name, ingredientNumber, recall, recallDate, ingredientListStr) {
    this.name = name;
    this.ingredientNumber = ingredientNumber;
    this.recall = recall;
    this.recallDate = recallDate;
    this.ingredientListStr = ingredientListStr;
  }
}

export let input = [
  new Food(
    "oreos",
    8,
    0,
    "no",
    [
      "flour",
      "egg",
      "sugar",
      "milk",
      "corn syrup",
      "preservative1",
      "preservative2",
      "preservative3",
    ],
    "flour, egg, sugar, milk, corn syrup, preservative1, preservative2, preservative3"
  ),
  new Food(
    "apple sauce",
    3,
    0,
    "no",
    ["water", "apples", "sugar"],
    "water, apples, sugar"
  ),
  new Food(
    "pancakes",
    9,
    0,
    "no",
    [
      "flour",
      "egg",
      "sugar",
      "milk",
      "corn syrup",
      "chocolate chips",
      "preservative1",
      "preservative2",
      "preservative3",
    ],
    "flour, egg, sugar, milk, corn syrup, chocolate chips, preservative1, preservative2, preservative3"
  ),
  new Food("banana", 1, 0, "no", ["banana"], "banana"),
  new Food("romaine lettuce", 1, 1, "4/23/2021", ["lettuce"], "lettuce"),
];
