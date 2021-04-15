// FOOD RULE VIOLATION STRINGS

// more than 5 ingredients
export const VIOLATION_NUM_INGREDIENTS = "Avoid food products with more than 5 ingredients found";

// recalled food item
export const VIOLATION_RECALLED = "Avoid recalled food items";

// difficult to pronounce any ingredients in the food
// avoid food products containing ingredients that a third grader cannot pronounce.
export const VIOLATION_PRONUNCIATION = "Avoid food products containing ingredients that a third grader cannot pronounce";

// avoid food products containing ingredients that
// no ordinary human would keep in the pantry
// EX: ethoxylated diglycerides, cellulose, xanthan gum, calcium propionate, ammonium sulfate
export const VIOLATION_NO_ORDINARY_INGREDIENTS = "Avoid food products containing ingredients that no ordinary human would keep in the pantry";

// avoid food products with the word "lite", "low-fat" or "nonfat"
export const VIOLATION_HEALTH_CLAIM_WORDS = "Avoid food products with the word 'lite', 'low-fat' or 'nonfat'";

// avoid foods called by the same name in every language (Big Mac, Cheetos, Pringles)
export const VIOLATION_UNIVERSAL_NAME = "Avoid foods called by the same name in every language (Big Mac, Cheetos, Pringles)";

// avoid food products that contain high-fructose corn syrup
export const VIOLATION_AVOID_HFCS = "Avoid food products that contain high-fructose corn syrup";

// avoid some form of added sugar/sweetener
// EX: aspartame, Splenda, barley malt, beet sugars, brown rice syrup, guar gum
// EX: cane juice, corn sweetener, dextrin, dextrose, fructo-oligosaccharides
// EX: fruit juice concentrate, glucose, invert sugar, polydextrose, sucrose, turbinado sugar
export const VIOLATION_ADDED_SUGAR = "Avoid any form of added sugars and sweeteners";