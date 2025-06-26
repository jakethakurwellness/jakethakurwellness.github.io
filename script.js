/* img 1600x1200
  - Add images to nutrition 
  - Add images to supplements

  - Provide accurate frequency for nutrition
  - Provide accurate frequency for supplements
  
  - Provide accurate servingSize for nutrition
  - Provide accurate servingSize for supplements
  
  - Provide accurate timing for nutrition
  - Provide accurate timing for supplements

  - Provide accurate requisites for nutrition
  - Provide accurate requisites for supplements

  - Provide accurate sources for nutrition
  - Provide accurate sources for supplements

  - Add cooking oil to Nutrition
  - Update nonedibles list
  - Update eating list
  - Update training list
*/

// Local protocol data for testing without fetch
const protocolData = {
  nutrition: {
    meat: [
      {
        id: "chickenBreast",
        name: "Chicken (Breast)",
        description: "Chicken breast is a lean, high-quality source of complete protein rich in essential amino acids, B vitamins (especially B3 and B6), selenium, and phosphorus. It supports muscle growth, recovery, and metabolic function while being low in fat, making it ideal for body recomposition. B6 aids in amino acid metabolism and nervous system health, while selenium contributes to antioxidant defense and immune support. Its high protein density makes it a staple for muscle maintenance, endurance, and fat loss.",
        image: "/meat/chickenBreast.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: ["Lunch", "Dinner"],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "chickenTenderloin",
        name: "Chicken (Tenderloin)",
        description: "Chicken tenderloin is a lean, tender cut located beneath the breast, offering a similar nutritional profile with slightly more softness and faster cooking time. It is rich in complete protein, B vitamins (especially B3 and B6), selenium, and phosphorus. Supports muscle repair, recovery, and immune function. Its quick digestibility and low fat content make it ideal for pre- or post-workout meals focused on lean muscle development and metabolic efficiency.",
        image: "/meat/chickenTenderloin.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "chickenThigh",
        name: "Chicken (Thigh)",
        description: "Chicken thigh is a flavorful, moderately fatty cut rich in complete protein, iron, zinc, B vitamins (especially B6 and B12), selenium, and phosphorus. The higher fat content supports hormone production and energy, making it ideal for muscle growth, recovery, and endurance. B12 aids red blood cell formation and nerve health, while zinc and selenium enhance immunity and tissue repair. Its nutrient density makes it well-suited for performance and strength-focused diets.",
        image: "/meat/chickenThigh.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "beefGround",
        name: "Beef (Ground)",
        description: "Ground beef varies by fat content but is generally rich in complete protein, creatine, heme iron, zinc, B vitamins (especially B12 and niacin), selenium, and phosphorus. Supports muscle growth, strength, recovery, hormone production, and red blood cell formation. Higher-fat versions provide more calories for bulking and hormone support, while leaner versions suit cutting phases. Creatine and carnosine boost power output and endurance, making it ideal for high-intensity training.",
        image: "/meat/beefGround.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "beefEyeOfRound",
        name: "Beef (Eye of Round)",
        description: "Eye of round is a lean, high-protein cut of beef rich in complete amino acids, creatine, carnosine, heme iron, zinc, vitamin B12, niacin, phosphorus, and selenium. Supports muscle growth, endurance, recovery, bone health, hormone regulation, and skin repair. Naturally low in fat, ideal for lean bulking, cutting, and high-performance training. Creatine and carnosine enhance strength and delay fatigue, while heme iron and B vitamins boost oxygen transport and energy metabolism.",
        image: "/meat/beefEyeOfRound.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "beefSirloin",
        name: "Beef (Sirloin)",
        description: "Beef sirloin is a lean, nutrient-dense cut packed with complete protein, creatine, heme iron, zinc, B vitamins (notably B12, B6, and niacin), selenium, and phosphorus. Supports muscle growth, recovery, red blood cell production, and metabolic energy. Its balance of leanness and flavor makes it versatile for both cutting and performance diets. Creatine and carnosine aid in strength and endurance, while zinc and B12 contribute to hormone health and nervous system function.",
        image: "/meat/beefSirloin.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "beefLiver",
        name: "Beef (Liver)",
        description: "Beef liver is one of the most nutrient-dense foods, exceptionally rich in complete protein, vitamin A (as retinol), B12, riboflavin, folate, iron, copper, choline, and zinc. It supports red blood cell formation, energy metabolism, hormone production, detoxification, skin health, and immune function. Its high retinol content enhances vision and skin resilience, while B vitamins and iron fuel endurance, recovery, and overall vitality. Ideal for boosting micronutrient density in performance-focused diets.",
        image: "/meat/beefLiver.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "crabDungeness",
        name: "Crab (Dungeness)",
        description: "Dungeness crab is a lean, high-protein seafood rich in omega-3 fatty acids, vitamin B12, selenium, zinc, copper, and iodine. Supports muscle repair, brain function, thyroid health, immune defense, and anti-inflammatory activity. Its omega-3s and minerals aid joint recovery, skin resilience, and cardiovascular health, while B12 and iodine enhance energy metabolism and nervous system performance. Low in fat and calories, making it ideal for lean muscle support and recovery-focused nutrition.",
        image: "/meat/crabDungeness.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "crabBlue",
        name: "Crab (Blue)",
        description: "Blue crab is a nutrient-rich shellfish offering lean protein, omega-3 fatty acids, vitamin B12, selenium, zinc, copper, and iodine. It supports muscle maintenance, anti-inflammatory response, immune health, thyroid function, and neurological performance. Its high B12 and omega-3 content enhance energy, cognition, and recovery, while selenium and zinc contribute to tissue repair and antioxidant protection. Low in calories and fat, it's an excellent addition to performance and endurance-based diets.",
        image: "/meat/crabBlue.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "salmonSockeye",
        name: "Salmon (Sockeye)",
        description: "Sockeye salmon is a fatty, nutrient-dense fish packed with high-quality protein, long-chain omega-3 fatty acids (EPA and DHA), vitamin D, B12, selenium, and astaxanthin. It supports muscle growth, anti-inflammatory recovery, cardiovascular health, brain function, skin integrity, and hormone regulation. Omega-3s reduce joint stress and boost endurance, while astaxanthin provides powerful antioxidant support. Ideal for enhancing recovery, reducing inflammation, and fueling performance in strength and endurance training.",
        image: "/meat/salmonSockeye.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 fillet",
          timing: [],
          requisite: ["wild-caught"]
        },
        sources: ["test"]
      },
      {
        id: "salmonKeta",
        name: "Salmon (Keta)",
        description: "Keta salmon, also known as chum salmon, is a leaner wild-caught fish offering quality protein, omega-3 fatty acids (EPA and DHA), vitamin D, B12, selenium, and potassium. Supports muscle maintenance, heart and brain health, inflammation control, and immune resilience. Though lower in fat than sockeye, it still provides essential omega-3s for recovery and endurance, while B12 and selenium enhance energy metabolism and antioxidant defense. A solid, lower-fat option for lean performance-focused diets.",
        image: "/meat/salmonKeta.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 fillet",
          timing: [],
          requisite: ["wild-caught"]
        },
        sources: ["test"]
      },
      {
        id: "salmonKing",
        name: "Salmon (King)",
        description: "King salmon, or Chinook salmon, is a rich, fatty fish high in complete protein, omega-3 fatty acids (EPA and DHA), vitamin D, B12, selenium, and potassium. It supports muscle growth, cardiovascular health, brain function, anti-inflammatory recovery, and skin integrity. Its high omega-3 content promotes joint health and endurance, while vitamin D and B12 enhance immune function and energy metabolism. Ideal for strength, recovery, and endurance-focused nutrition.",
        image: "/meat/salmonKing.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 fillet",
          timing: [],
          requisite: ["wild-caught"]
        },
        sources: ["test"]
      },
      {
        id: "shrimpArgentineRed",
        name: "Shrimp (Argentine Red)",
        description: "Argentine red shrimp is a lean seafood rich in high-quality protein, omega-3 fatty acids, vitamin B12, selenium, zinc, and iodine. It supports muscle repair, anti-inflammatory processes, thyroid function, immune health, and energy metabolism. Its nutrient profile aids recovery, skin health, and endurance, making it a valuable addition to performance and lean muscle-focused diets.",
        image: "/meat/shrimpArgentineRed.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "shrimpGulf",
        name: "Shrimp (Gulf)",
        description: "Gulf shrimp is a low-fat, high-protein seafood source rich in vitamin B12, selenium, zinc, iodine, and omega-3 fatty acids. It supports muscle repair, immune function, thyroid health, and energy metabolism. Its nutrients aid anti-inflammatory recovery, skin resilience, and endurance, making it ideal for lean muscle maintenance and performance-focused diets.",
        image: "/meat/shrimpGulf.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "tuna",
        name: "Tuna",
        description: "Tuna is a lean, protein-dense fish rich in complete amino acids, omega-3 fatty acids (especially EPA and DHA), vitamin B12, niacin, selenium, and potassium. It supports muscle growth, cardiovascular health, brain function, anti-inflammatory recovery, and energy metabolism. Its omega-3 content promotes joint health and endurance, while B vitamins aid in red blood cell production and nervous system support. Ideal for lean muscle maintenance and endurance-focused nutrition.",
        image: "/meat/tuna.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      },
      {
        id: "mahiMahi",
        name: "Mahi-Mahi",
        description: "Mahi-mahi is a lean, nutrient-rich fish high in complete protein, B vitamins (B3, B6, B12), selenium, potassium, and phosphorus. It supports muscle growth, energy metabolism, immune function, and recovery. Low in fat and calories, mahi-mahi is ideal for lean muscle development and endurance, providing essential nutrients for tissue repair and antioxidant defense.",
        image: "/meat/mahiMahi.jpg",
        specifications: {
          frequency: "rotational",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic", "free-range"]
        },
        sources: ["test"]
      }
    ],
    vegetables: [
      {
        id: "spinach",
        name: "Spinach",
        description: "Spinach is a nutrient-dense leafy green rich in vitamins A, C, K, folate, iron, magnesium, calcium, and antioxidants like lutein and zeaxanthin. It supports bone health, skin durability, immune function, muscle recovery, and anti-inflammatory processes. Its high nitrate content can improve blood flow and endurance, making it beneficial for running and performance, while its minerals aid in bone growth and muscle function.",
        image: "/vegetables/spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "broccoli",
        name: "Broccoli",
        description: "Broccoli is a cruciferous vegetable rich in vitamins C, K, folate, fiber, and antioxidants such as sulforaphane. It supports immune health, anti-inflammatory processes, bone density, and skin repair. Its compounds aid detoxification and may promote muscle recovery and endurance, making it valuable for overall performance and healing.",
        image: "/vegetables/broccoli.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "asparagus",
        name: "Asparagus",
        description: "Asparagus is a nutrient-rich vegetable containing vitamins A, C, E, K, folate, fiber, and antioxidants. It supports detoxification, anti-inflammatory effects, skin health, and bone strength. Its diuretic properties aid recovery by reducing inflammation and muscle soreness, while folate and vitamins help energy metabolism and endurance.",
        image: "/vegetables/asparagus.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "kale",
        name: "Kale",
        description: "Kale is a nutrient-dense leafy green rich in vitamins A, C, K, calcium, iron, fiber, and antioxidants like quercetin and kaempferol. It supports bone health, immune function, skin durability, anti-inflammatory responses, and muscle recovery. Its high vitamin K content aids bone mineralization, while antioxidants protect tissues from oxidative stress, making it beneficial for performance and healing.",
        image: "/vegetables/kale.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "onionRed",
        name: "Onion (Red)",
        description: "Red onion is a flavorful vegetable rich in antioxidants such as quercetin, sulfur compounds, vitamin C, and fiber. It supports anti-inflammatory and immune functions, cardiovascular health, and may aid muscle recovery. Its antioxidants help reduce oxidative stress and promote skin health, while sulfur compounds contribute to detoxification and tissue repair.",
        image: "/vegetables/onionRed.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "onionYellow",
        name: "Onion (Yellow)",
        description: "Yellow onion contains antioxidants like quercetin and sulfur compounds, along with vitamin C and dietary fiber. It supports immune health, reduces inflammation, aids digestion, and promotes cardiovascular and skin health. Its compounds help detoxification and may assist muscle recovery and endurance.",
        image: "/vegetables/onionYellow.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "onionWhite",
        name: "Onion (White)",
        description: "White onion is a mild-flavored vegetable rich in antioxidants such as quercetin, sulfur compounds, vitamin C, and fiber. It supports anti-inflammatory effects, immune function, cardiovascular health, and digestive health. Its antioxidants help reduce oxidative stress and promote tissue repair, aiding overall recovery and skin resilience.",
        image: "/vegetables/onionWhite.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "onionGreen",
        name: "Onion (Green)",
        description: "Green onion (scallion) is a low-calorie vegetable rich in vitamins A, C, K, folate, and antioxidants like flavonoids. It supports immune health, bone strength, skin repair, and anti-inflammatory processes. Its vitamin K aids blood clotting and bone metabolism, while antioxidants protect against oxidative stress, benefiting recovery and endurance.",
        image: "/vegetables/onionGreen.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "leek",
        name: "Leek",
        description: "Leek is a mild-flavored vegetable rich in vitamins A, C, K, folate, manganese, and antioxidants like kaempferol. It supports immune function, bone health, cardiovascular protection, and anti-inflammatory effects. Its fiber aids digestion, while antioxidants help reduce oxidative stress, promoting muscle recovery and skin health.",
        image: "/vegetables/leek.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "watercress",
        name: "Watercress",
        description: "Watercress is a nutrient-dense leafy green rich in vitamins A, C, K, calcium, and antioxidants such as glucosinolates. It supports bone health, immune function, skin repair, and anti-inflammatory responses. Its high vitamin K content promotes bone mineralization, while antioxidants protect cells from oxidative damage, aiding recovery and endurance.",
        image: "/vegetables/watercress.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "garlic",
        name: "Garlic",
        description: "Garlic is a potent herb rich in sulfur compounds (allicin), vitamins C and B6, manganese, and antioxidants. It supports immune function, cardiovascular health, anti-inflammatory effects, and muscle recovery. Its compounds enhance blood flow, reduce oxidative stress, and may improve endurance and healing processes.",
        image: "/vegetables/garlic.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "carrot",
        name: "Carrot",
        description: "Carrot is a root vegetable rich in beta-carotene (vitamin A precursor), vitamins C and K, potassium, and antioxidants. It supports vision, skin health, immune function, and bone strength. Beta-carotene promotes skin durability and repair, while antioxidants reduce inflammation and oxidative stress, aiding recovery and overall health.",
        image: "/vegetables/carrot.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "greenPea",
        name: "Green Pea",
        description: "Green pea is a nutrient-rich legume high in plant-based protein, fiber, vitamins A, C, K, B vitamins, iron, magnesium, and antioxidants. It supports muscle growth, digestion, immune health, bone strength, and anti-inflammatory processes. Its protein content aids recovery and endurance, while vitamins and minerals promote skin repair and metabolic function.",
        image: "/vegetables/greenPea.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "seaweed",
        name: "Seaweed",
        description: "Seaweed is a nutrient-dense marine vegetable rich in iodine, calcium, magnesium, iron, vitamins A, C, E, K, and antioxidants like fucoxanthin. It supports thyroid health, bone strength, skin durability, immune function, and anti-inflammatory effects. Its iodine content is crucial for hormone regulation, while minerals promote recovery, endurance, and tissue repair.",
        image: "/vegetables/seaweed.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "bokchoy",
        name: "Bok Choy",
        description: "Bok choy is a cruciferous vegetable rich in vitamins A, C, K, calcium, folate, and antioxidants. It supports bone health, immune function, skin repair, and anti-inflammatory processes. Its calcium and vitamin K content promote bone strength, while antioxidants aid recovery and protect against oxidative stress.",
        image: "/vegetables/bokchoy.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "turnip",
        name: "Turnip",
        description: "Turnips are low-calorie root vegetables rich in vitamin C, fiber, potassium, and antioxidants. They support immune health, digestion, skin repair, and anti-inflammatory processes. Their vitamin C aids collagen formation and recovery, while fiber promotes gut health and endurance.",
        image: "/vegetables/turnip.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "potatoWhite",
        name: "Potato (White)",
        description: "White potatoes are starchy tubers high in carbohydrates, vitamin C, potassium, vitamin B6, and fiber. They provide energy for endurance, support muscle recovery, and aid nerve and immune function. Potassium helps maintain electrolyte balance, critical for running and calisthenics performance.",
        image: "/vegetables/potatoWhite.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "potatoSweet",
        name: "Potato (Sweet)",
        description: "Sweet potatoes are nutrient-dense tubers rich in complex carbohydrates, beta-carotene (vitamin A), vitamin C, manganese, fiber, and antioxidants. They support energy metabolism, skin health, immune function, and anti-inflammatory recovery. Beta-carotene promotes skin durability and repair, making them ideal for endurance and healing.",
        image: "/vegetables/potatoSweet.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "beanRed",
        name: "Bean (Red)",
        description: "Red beans are nutrient-rich legumes high in plant-based protein, fiber, iron, folate, magnesium, and antioxidants. They support muscle repair, digestion, energy metabolism, immune function, and blood health. Their iron and folate aid oxygen transport and endurance, while fiber promotes gut health and sustained energy release.",
        image: "/vegetables/beanRed.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "beanBlack",
        name: "Bean (Black)",
        description: "Black beans are nutrient-dense legumes packed with plant-based protein, dietary fiber, iron, folate, magnesium, and antioxidants. They support muscle recovery, digestive health, energy metabolism, immune function, and cardiovascular health. Their high fiber content aids sustained energy release and gut function, while iron and folate enhance oxygen transport and endurance.",
        image: "/vegetables/beanBlack.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "lentils",
        name: "Lentils",
        description: "Lentils are nutrient-dense legumes rich in plant-based protein, fiber, folate, iron, magnesium, potassium, and antioxidants. They support muscle growth, digestion, energy production, immune health, and cardiovascular function. Their high iron and folate content promote red blood cell formation and endurance, while fiber aids gut health and sustained energy levels.",
        image: "/vegetables/lentils.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "pepperJalepeno",
        name: "Jalapeño Pepper",
        description: "Jalapeño pepper is a spicy chili rich in vitamin C, vitamin A, vitamin B6, capsaicin, and antioxidants. It supports immune function, metabolism, circulation, and anti-inflammatory responses. Capsaicin promotes fat oxidation, reduces pain and inflammation, and may enhance endurance by improving blood flow and thermogenesis.",
        image: "/vegetables/pepperJalepeno.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "pepperBell",
        name: "Bell Pepper",
        description: "Bell pepper is a low-calorie vegetable rich in vitamin C, vitamin A (as beta-carotene), vitamin B6, folate, and antioxidants such as lutein and zeaxanthin. It supports immune function, skin and eye health, collagen production, and reduces inflammation. Its high water and fiber content also promote hydration and digestive health.",
        image: "/vegetables/pepperBell.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "pepperHabanero",
        name: "Habanero Pepper",
        description: "Habanero pepper is an intensely spicy chili packed with capsaicin, vitamin C, vitamin A, and antioxidants. It supports metabolism, immune function, pain reduction, and anti-inflammatory effects. Capsaicin enhances circulation, fat burning, and thermogenesis, which may benefit endurance, recovery, and overall performance.",
        image: "/vegetables/pepperHabanero.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "pepperPoblano",
        name: "Poblano Pepper",
        description: "Poblano pepper is a mildly spicy chili rich in vitamin C, vitamin A, vitamin B6, potassium, and antioxidants. It supports immune health, skin repair, metabolism, and anti-inflammatory effects. Its antioxidant profile aids recovery and protects against oxidative stress, while vitamin C supports collagen synthesis and tissue healing.",
        image: "/vegetables/pepperPoblano.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "parsley",
        name: "Parsley",
        description: "Parsley is a nutrient-dense herb high in vitamin K, vitamin C, and vitamin A, along with folate, iron, and antioxidants like flavonoids and carotenoids. It supports bone health, immune function, and detoxification, and has diuretic and anti-inflammatory properties. Parsley also contains apigenin, a compound linked to cellular protection and hormone regulation." ,
        image: "/vegetables/parsley.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "tomato",
        name: "Tomato",
        description: "Tomato is a vibrant fruit rich in lycopene, a powerful antioxidant linked to heart health, skin protection, and cancer prevention. It also provides vitamin C, potassium, folate, and vitamin K, supporting immune function, blood pressure regulation, and bone health. Tomatoes have anti-inflammatory and hydrating properties and support collagen production and overall cellular repair." ,
        image: "/vegetables/tomato.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "okra",
        name: "Okra",
        description: "Okra is a nutrient-dense vegetable high in fiber, vitamin C, vitamin K, folate, and magnesium. It supports digestive health, blood sugar regulation, immune function, and bone strength. Its mucilage helps soothe the gut lining, while antioxidants like flavonoids and polyphenols contribute to anti-inflammatory and cardiovascular benefits. Okra also aids in hydration and supports skin and joint health." ,
        image: "/vegetables/okra.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "eggplant",
        name: "Eggplant",
        description: "Eggplant is a versatile, low-calorie vegetable rich in fiber, antioxidants, and phytonutrients like nasunin, which supports brain health and protects cell membranes from oxidative damage. It contains vitamins B1, B6, and K, along with manganese, copper, and folate, supporting energy metabolism, red blood cell formation, and bone health. Its polyphenols may help regulate blood sugar and support heart health by reducing cholesterol and improving circulation." ,
        image: "/vegetables/eggplant.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "dill",
        name: "Dill",
        description: "Dill is a fragrant herb rich in antioxidants, including flavonoids, terpenoids, and tannins, which help reduce inflammation and oxidative stress. It contains vitamin C, manganese, and small amounts of folate, iron, and calcium, supporting immune function, bone health, and red blood cell production. Dill also has antimicrobial properties and may aid digestion by reducing gas and soothing the digestive tract." ,
        image: "/vegetables/dill.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "basil",
        name: "Basil",
        description: "Basil is a nutrient-dense herb known for its anti-inflammatory and antioxidant properties, largely due to compounds like eugenol, linalool, and rosmarinic acid. It supports cardiovascular health, helps combat oxidative stress, and may aid blood sugar regulation. Rich in vitamin K, manganese, and small amounts of vitamin A and C, basil also contributes to bone health, immune support, and overall cellular function." ,
        image: "/vegetables/basil.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "cilantro",
        name: "Cilantro",
        description: "Cilantro is a flavorful herb rich in antioxidants and micronutrients like vitamin K, vitamin A, vitamin C, and potassium. It supports detoxification, particularly by aiding in the removal of heavy metals, and has antimicrobial and anti-inflammatory properties. Cilantro also promotes heart health, digestion, and blood sugar regulation, making it a valuable addition to a nutrient-focused diet." ,
        image: "/vegetables/cilantro.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "corn",
        name: "Corn",
        description: "Corn is a starchy vegetable and whole grain rich in fiber, B vitamins (especially thiamin and folate), magnesium, and antioxidants like lutein and zeaxanthin, which support eye health. It provides a steady source of complex carbohydrates for energy and supports digestive health. When minimally processed, corn contributes beneficial phytonutrients and can fit well into balanced, performance-oriented diets." ,
        image: "/vegetables/corn.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      }
    ],
    fruits: [
      {
        id: "banana",
        name: "Banana",
        description: "Banana is a nutrient-rich fruit high in carbohydrates, potassium, vitamin B6, vitamin C, and fiber. It supports energy production, muscle function, hydration, and recovery. Potassium helps prevent cramps and maintain electrolyte balance, while its natural sugars and B vitamins provide quick, sustained energy for workouts and endurance.",
        image: "/fruits/banana.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "acai",
        name: "Açai",
        description: "Açai is a nutrient-dense berry rich in antioxidants (especially anthocyanins), healthy fats, fiber, vitamin A, and trace minerals. It supports anti-inflammatory processes, cardiovascular health, skin repair, immune function, and recovery. Its potent antioxidant content helps combat oxidative stress, making it ideal for performance, healing, and cellular protection.",
        image: "/fruits/acai.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "avocado",
        name: "Avocado",
        description: "Avocado is a nutrient-dense fruit rich in healthy monounsaturated fats, fiber, potassium, magnesium, vitamin K, vitamin E, B vitamins, and antioxidants. It supports heart health, anti-inflammatory response, muscle function, skin repair, and recovery. Its healthy fats enhance nutrient absorption, while potassium and magnesium support hydration and performance.",
        image: "/fruits/avocado.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "papaya",
        name: "Papaya",
        description: "Papaya is a tropical fruit rich in vitamin C, vitamin A (beta-carotene), folate, fiber, and the enzyme papain. It supports immune function, skin repair, digestion, and anti-inflammatory processes. Papain aids protein digestion and muscle recovery, while antioxidants help reduce oxidative stress and support tissue healing and endurance.",
        image: "/fruits/papaya.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "dragonFruitYellow",
        name: "Dragon Fruit (Yellow)",
        description: "Yellow dragon fruit is a tropical fruit rich in vitamin C, fiber, magnesium, antioxidants, and prebiotics. It supports immune health, digestion, hydration, and anti-inflammatory effects. Its high water and fiber content promote gut health and recovery, while antioxidants protect against oxidative damage and support skin and tissue repair.",
        image: "/fruits/dragonFruitYellow.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "dragonFruitRed",
        name: "Dragon Fruit (Red)",
        description: "Red dragon fruit is a vibrant tropical fruit rich in vitamin C, fiber, magnesium, betalains, and antioxidants. It supports immune function, digestion, skin repair, and anti-inflammatory processes. Its antioxidants help combat oxidative stress, while fiber aids gut health and magnesium supports muscle recovery and endurance performance.",
        image: "/fruits/dragonFruitRed.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "cherryTart",
        name: "Cherry (Tart)",
        description: "Tart cherry is a nutrient-rich fruit high in anthocyanins, vitamin C, potassium, and antioxidants. It supports recovery, reduces inflammation, improves sleep quality, and enhances muscle healing. Its potent anti-inflammatory and antioxidant compounds help reduce muscle soreness, joint pain, and oxidative stress after intense physical activity.",
        image: "/fruits/cherryTart.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "blueberry",
        name: "Blueberry",
        description: "Blueberry is a nutrient-dense berry rich in vitamins C and K, fiber, manganese, and potent antioxidants like anthocyanins. It supports immune function, cognitive health, anti-inflammatory responses, and muscle recovery. Its antioxidants reduce oxidative stress and inflammation, aiding endurance, skin health, and overall performance.",
        image: "/fruits/blueberry.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "strawberry",
        name: "Strawberry",
        description: "Strawberry is a flavorful fruit rich in vitamin C, manganese, fiber, folate, and antioxidants such as anthocyanins and ellagic acid. It supports immune health, skin repair, anti-inflammatory effects, and cardiovascular function. Its vitamin C content promotes collagen synthesis and muscle recovery, while antioxidants help reduce oxidative stress.",
        image: "/fruits/strawberry.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "blackberry",
        name: "Blackberry",
        description: "Blackberry is a nutrient-rich berry high in vitamins C and K, fiber, manganese, and powerful antioxidants like anthocyanins and ellagic acid. It supports immune health, skin repair, bone strength, and anti-inflammatory processes. Its antioxidants reduce oxidative stress and promote recovery, endurance, and overall cellular protection.",
        image: "/fruits/blackberry.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "raspberry",
        name: "Raspberry",
        description: "Raspberry is a nutrient-dense berry rich in vitamins C, K, fiber, manganese, and antioxidants such as ellagic acid and quercetin. It supports immune function, skin health, digestion, and anti-inflammatory effects. Its antioxidants help reduce oxidative stress and inflammation, aiding recovery, endurance, and tissue repair.",
        image: "/fruits/raspberry.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "appleGreen",
        name: "Apple (Green)",
        description: "Green apple is a crisp fruit rich in vitamin C, dietary fiber, potassium, and antioxidants like quercetin. It supports immune health, digestion, skin repair, and cardiovascular function. Its fiber aids gut health and sustained energy, while antioxidants reduce inflammation and oxidative stress, promoting recovery and overall wellness.",
        image: "/fruits/appleGreen.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "mango",
        name: "Mango",
        description: "Mango is a tropical fruit rich in vitamins A, C, E, dietary fiber, and antioxidants like beta-carotene and zeaxanthin. It supports immune function, skin health, digestion, and eye health. Its vitamins promote collagen production and tissue repair, while antioxidants help reduce inflammation and oxidative stress, aiding recovery and overall vitality.",
        image: "/fruits/mango.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "date",
        name: "Date",
        description: "Date is a nutrient-dense fruit high in natural sugars, fiber, potassium, magnesium, vitamin B6, and antioxidants. It supports sustained energy release, muscle recovery, digestive health, and cardiovascular function. Its potassium aids electrolyte balance and muscle function, while fiber promotes gut health and antioxidants reduce inflammation.",
        image: "/fruits/date.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "lemonJuice",
        name: "Lemon (Juice)",
        description: "Lemon juice is rich in vitamin C, antioxidants, and citric acid. It supports immune function, skin health, digestion, and antioxidant protection. Vitamin C promotes collagen synthesis and tissue repair, while citric acid aids mineral absorption and may help reduce muscle soreness and support recovery.",
        image: "/fruits/lemonJuice.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "coconutWater",
        name: "Cocnut (Water)",
        description: "Coconut water is a natural electrolyte-rich beverage containing potassium, magnesium, calcium, sodium, and small amounts of B vitamins and antioxidants. It supports hydration, muscle function, electrolyte balance, and recovery, making it ideal for endurance, running, and calisthenics performance.",
        image: "/fruits/coconutWater.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "grapefruitJuice",
        name: "Grapefruit (Juice)",
        description: "Grapefruit juice is rich in vitamin C, antioxidants such as flavonoids, potassium, and fiber. It supports immune function, skin health, cardiovascular health, and anti-inflammatory effects. Vitamin C promotes collagen synthesis and tissue repair, while antioxidants reduce oxidative stress, aiding recovery and endurance.",
        image: "/fruits/grapefruitJuice.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "pomegranateJuice",
        name: "Pomegranate (Juice)",
        description: "Pomegranate juice is packed with antioxidants like punicalagins and anthocyanins, vitamin C, potassium, and polyphenols. It supports cardiovascular health, reduces inflammation, enhances muscle recovery, and improves endurance. Its potent antioxidant properties help combat oxidative stress and promote tissue repair.",
        image: "/fruits/pomegranateJuice.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "cranberryJuice",
        name: "Cranberry (Juice)",
        description: "Cranberry juice is rich in vitamin C, antioxidants, and phytonutrients. It supports immune health, urinary tract health, anti-inflammatory effects, and cardiovascular function. Its antioxidants help reduce oxidative stress and promote recovery, while vitamin C aids collagen synthesis and tissue repair.",
        image: "/fruits/cranberryJuice.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "durian",
        name: "Durian",
        description: "Durian is a tropical fruit rich in carbohydrates, healthy fats, vitamin C, potassium, B vitamins, and antioxidants. It supports energy production, immune function, skin health, and anti-inflammatory responses. Its unique nutrient profile aids recovery, muscle function, and overall vitality, though it is calorie-dense and should be consumed in moderation.",
        image: "/fruits/durian.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    dairy: [
      {
        id: "yogurtGreek",
        name: "Yogurt (Greek)",
        description: "Greek yogurt is a high-protein dairy product rich in calcium, probiotics, vitamin B12, phosphorus, and potassium. It supports muscle growth, bone health, digestive health, immune function, and recovery. Its probiotics enhance gut flora, aiding nutrient absorption and overall wellness, while calcium and protein promote bone density and muscle repair.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "milkWhole",
        name: "Milk (Whole)",
        description: "Whole milk is a nutrient-rich dairy product containing protein, calcium, vitamin D, vitamin B12, phosphorus, and healthy fats. It supports muscle growth, bone health, immune function, and energy metabolism. The combination of protein and fats aids recovery and sustained energy, while calcium and vitamin D promote bone density and repair.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "cheeseShredded",
        name: "Cheese (Shredded)",
        description: "Shredded cheese is a dairy product rich in protein, calcium, vitamin A, vitamin B12, and healthy fats. It supports muscle repair, bone health, immune function, and energy metabolism. Its protein content aids recovery and muscle growth, while calcium and vitamins promote strong bones and skin health.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "butter",
        name: "Butter",
        description: "Butter is a dairy fat rich in saturated fats, vitamin A, vitamin D, vitamin E, and small amounts of vitamin K2. It supports energy metabolism, skin health, and fat-soluble vitamin absorption. While calorie-dense, it can aid hormonal balance and inflammation control when consumed in moderation.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    nuts_and_seeds: [
      {
        id: "peanuts",
        name: "Peanuts",
        description: "Peanuts are nutrient-dense legumes rich in protein, healthy monounsaturated fats, fiber, vitamin E, magnesium, folate, and antioxidants. They support muscle growth, heart health, energy metabolism, and skin repair. Their healthy fats and protein promote sustained energy and recovery, while antioxidants reduce inflammation and oxidative stress.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "cashews",
        name: "Cashews",
        description: "Cashews are nutrient-rich nuts high in healthy monounsaturated fats, protein, magnesium, copper, zinc, and antioxidants. They support muscle function, bone health, immune system, and energy metabolism. Their minerals aid collagen formation, nerve function, and recovery, while healthy fats promote heart and skin health.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "pecans",
        name: "Pecans",
        description: "Pecans are nutrient-dense nuts rich in healthy monounsaturated fats, fiber, vitamin E, magnesium, zinc, and antioxidants. They support heart health, immune function, skin repair, and anti-inflammatory processes. Their healthy fats and antioxidants help reduce oxidative stress and promote sustained energy and recovery.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "pistachios",
        name: "Pistachios",
        description: "Pistachios are nutrient-rich nuts high in protein, healthy monounsaturated and polyunsaturated fats, fiber, vitamin B6, potassium, magnesium, and antioxidants. They support muscle growth, heart health, immune function, energy metabolism, and skin repair. Their balanced nutrient profile aids recovery, inflammation control, and sustained energy.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "walnuts",
        name: "Walnuts",
        description: "Walnuts are nutrient-dense nuts rich in omega-3 fatty acids, protein, fiber, vitamin E, magnesium, and antioxidants. They support brain health, heart function, anti-inflammatory response, and recovery. Their omega-3s promote cardiovascular and skin health, while antioxidants help reduce oxidative stress and support overall wellness.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "almonds",
        name: "Almonds",
        description: "Almonds are nutrient-rich nuts high in healthy monounsaturated fats, protein, fiber, vitamin E, magnesium, and antioxidants. They support heart health, muscle recovery, skin repair, and energy metabolism. Their vitamin E content promotes skin durability, while magnesium aids muscle function and reduces inflammation.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "pumpkinSeeds",
        name: "Pumpkin Seeds",
        description: "Pumpkin seeds are nutrient-dense seeds rich in protein, healthy fats, magnesium, zinc, iron, potassium, and antioxidants. They support muscle growth, bone health, immune function, skin repair, and anti-inflammatory processes. Their high magnesium and zinc content aids recovery, endurance, and tissue healing.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "chiaSeeds",
        name: "Chia Seeds",
        description: "Chia seeds are nutrient-packed seeds rich in omega-3 fatty acids, protein, fiber, calcium, magnesium, and antioxidants. They support heart health, bone strength, digestion, muscle recovery, and sustained energy. Their omega-3s reduce inflammation, while fiber aids gut health and calcium promotes bone density.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "hempSeeds",
        name: "Hemp Seeds",
        description: "Hemp seeds are nutrient-dense seeds rich in complete protein, healthy omega-3 and omega-6 fatty acids, magnesium, zinc, iron, and antioxidants. They support muscle growth, heart health, immune function, skin repair, and anti-inflammatory processes. Their balanced fatty acid profile aids recovery and overall wellness.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "flaxSeeds",
        name: "Flax Seeds",
        description: "Flax seeds are nutrient-rich seeds high in omega-3 fatty acids (ALA), fiber, lignans, protein, magnesium, and antioxidants. They support heart health, digestion, hormone balance, skin repair, and anti-inflammatory effects. Their fiber promotes gut health, while omega-3s reduce inflammation and support recovery.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    animal_product: [
      {
        id: "eggs",
        name: "Eggs",
        description: "Eggs are a complete protein source rich in essential amino acids, vitamins A, D, B12, choline, selenium, and healthy fats. They support muscle growth, brain function, eye health, and immune system. Their high-quality protein aids muscle repair and recovery, while choline supports cognitive function and overall vitality.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["Pasture-raised"]
        },
        sources: ["grocery"]
      },
      {
        id: "honeyRaw",
        name: "Honey (Raw)",
        description: "Raw honey is a natural sweetener rich in antioxidants, enzymes, vitamins, and minerals. It supports immune health, wound healing, digestive health, and provides quick energy. Its antimicrobial properties aid recovery and skin repair, while antioxidants help reduce inflammation and oxidative stress.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    cooking_oil: [{
        id: "exampleOil",
        name: "Example Oil",
        description: "",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "example2Oil",
        name: "Example 2 Oil",
        description: "",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    rice_and_grains: [
      {
        id: "riceBasmati",
        name: "Rice (Basmati)",
        description: "Basmati rice is a long-grain rice variety known for its aromatic flavor and lower glycemic index. It is a good source of complex carbohydrates, providing sustained energy, and contains small amounts of protein, B vitamins, and minerals like magnesium and phosphorus. It supports endurance, muscle glycogen replenishment, and digestive health.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "riceBrown",
        name: "Rice (Brown)",
        description: "Brown rice is a whole grain rich in complex carbohydrates, fiber, B vitamins, magnesium, phosphorus, and antioxidants. It supports sustained energy, digestive health, muscle recovery, and cardiovascular function. Its fiber content aids gut health and blood sugar regulation, while minerals promote bone strength and metabolic processes.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "riceNoodle",
        name: "Rice (Noodle)",
        description: "Rice noodles are primarily composed of carbohydrates with small amounts of protein and minimal fat. They provide quick, easily digestible energy, supporting endurance and recovery. While low in fiber and micronutrients compared to whole grains, they serve as a light fuel source for workouts and digestive comfort.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "oats",
        name: "Oats",
        description: "Oats are whole grains rich in complex carbohydrates, soluble fiber (beta-glucan), protein, B vitamins, magnesium, iron, and antioxidants. They support sustained energy, heart health, digestion, muscle recovery, and blood sugar regulation. Their fiber content promotes gut health and satiety, while antioxidants reduce inflammation.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "quinoa",
        name: "Quinoa",
        description: "Quinoa is a high-protein, gluten-free seed rich in all nine essential amino acids, making it a complete protein source. It also provides fiber, iron, magnesium, manganese, phosphorus, and B vitamins. Quinoa supports muscle growth, energy production, bone health, and recovery, while its complex carbs aid in sustained endurance and performance.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      }
    ],
    baked_goods: [
      {
        id: "breadWholeGrain",
        name: "Bread (Whole Grain)",
        description: "Whole grain bread is made from unrefined grains, providing complex carbohydrates, dietary fiber, B vitamins, iron, magnesium, and antioxidants. It supports sustained energy, digestive health, muscle recovery, and cardiovascular function. The fiber aids gut health and blood sugar stability, while minerals contribute to bone strength and metabolism.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      },
      {
        id: "tortillaFlour",
        name: "Tortilla (Flour)",
        description: "Flour tortillas are made from refined wheat flour, providing primarily carbohydrates with some protein and small amounts of fiber, vitamins, and minerals. They offer quick energy for workouts but are lower in nutrients compared to whole grain options. Suitable as a light, versatile carbohydrate source for fueling endurance and recovery.",
        image: "spinach.jpg",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["test2", "test3"]
      }
    ],
    condiments: [
      {
        id: "peanutButter",
        name: "Peanut Butter",
        description: "Peanut butter is a nutrient-dense spread rich in protein, healthy monounsaturated fats, fiber, vitamin E, magnesium, and antioxidants. It supports muscle growth, heart health, energy metabolism, and skin repair. Its balanced fats and protein provide sustained energy and aid muscle recovery and inflammation reduction.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "nutella",
        name: "Nutella",
        description: "Nutella is a sweet spread made from sugar, palm oil, hazelnuts, cocoa, and milk solids. It provides quick energy through carbohydrates and fats, with some vitamin E and magnesium from hazelnuts. While tasty and energizing, it is high in sugar and fats, so best consumed in moderation within a balanced diet.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    spices_and_seasoning: [
      {
        id: "saltHimalayanPink",
        name: "Himalayan Pink Salt",
        description: "Himalayan pink salt is a mineral-rich salt containing sodium chloride along with trace minerals like potassium, magnesium, and calcium. It supports electrolyte balance, hydration, muscle function, and nerve signaling. It may aid endurance and recovery by maintaining proper fluid balance and reducing cramping.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      },
      {
        id: "chiliGarlicPaste",
        name: "Chili Garlic Paste",
        description: "Chili garlic paste combines capsaicin-rich chili peppers and allicin-containing garlic, offering anti-inflammatory, antioxidant, and immune-boosting properties. It supports metabolism, cardiovascular health, digestion, and may enhance endurance and recovery through improved circulation and reduced oxidative stress.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ],
    snacks: [
      {
        id: "popcorn",
        name: "Popcorn",
        description: "Popcorn is a whole-grain snack high in fiber, complex carbohydrates, and antioxidants. It supports digestive health, sustained energy, and provides some B vitamins and minerals. When air-popped and minimally seasoned, it is a low-calorie, nutrient-dense option for healthy snacking and endurance fueling.",
        specifications: {
          frequency: "essential",
          servingSize: "1 cup",
          timing: [],
          requisite: ["organic"]
        },
        sources: ["grocery"]
      }
    ]
  },
  supplements: {
    powders: [
      {
        id: "beetroot",
        name: "Beetroot",
        description: "Beetroot is a nutrient-rich root vegetable high in nitrates, antioxidants, folate, potassium, and vitamin C. It supports cardiovascular health, improves blood flow, enhances endurance and athletic performance, and reduces inflammation. Its nitrates boost nitric oxide production, aiding oxygen delivery and muscle efficiency during exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "cinnamon",
        name: "Cinnamon",
        description: "Cinnamon is a fragrant spice rich in antioxidants, particularly polyphenols, and contains small amounts of calcium, iron, and manganese. It supports blood sugar regulation by improving insulin sensitivity, has anti-inflammatory and antimicrobial properties, and may benefit heart health by lowering cholesterol and triglyceride levels. Ceylon cinnamon is preferred for regular use due to its lower coumarin content.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomReishi",
        name: "Reishi Mushroom",
        description: "Reishi mushroom is an adaptogenic fungus rich in polysaccharides, triterpenes, and antioxidants. It supports immune function, reduces inflammation, improves recovery, enhances sleep quality, and helps regulate stress responses. Reishi may aid endurance and overall resilience by promoting balance in the nervous and immune systems.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomMaitake",
        name: "Maitake Mushroom",
        description: "Maitake mushroom is a functional mushroom rich in beta-glucans, B vitamins, potassium, and antioxidants. It supports immune health, blood sugar regulation, cardiovascular function, and energy metabolism. Maitake aids recovery and resilience by enhancing immune response, reducing inflammation, and supporting hormonal and metabolic balance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomMesima",
        name: "Mesima Mushroom",
        description: "Mesima mushroom (Phellinus linteus) is a medicinal fungus known for its potent anti-inflammatory, antioxidant, and immune-modulating properties. It supports cellular health, reduces oxidative stress, and may aid recovery and resilience under physical stress. Traditionally used in Asian medicine, it also shows promise in supporting liver and metabolic health.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomChaga",
        name: "Chaga Mushroom",
        description: "Chaga mushroom is a nutrient-dense medicinal fungus rich in antioxidants, beta-glucans, and immune-boosting compounds. It supports immune function, reduces inflammation, combats oxidative stress, and may enhance endurance and recovery. Chaga also contributes to skin health, cellular repair, and overall resilience to physical and environmental stressors.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomShiitake",
        name: "Shiitake Mushroom",
        description: "Shiitake mushroom is a savory, nutrient-rich fungus high in B vitamins, copper, selenium, zinc, and lentinan—a powerful beta-glucan. It supports immune function, cardiovascular health, and energy production while offering anti-inflammatory and antimicrobial benefits. Shiitake promotes recovery, cellular repair, and resilience under physical stress.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomWoodEar",
        name: "Wood Ear Mushroom",
        description: "Wood ear mushroom is a jelly-like fungus valued for its fiber, iron, potassium, and polysaccharides. It supports cardiovascular health, blood circulation, and immune function, with mild anti-inflammatory and anticoagulant effects. Its texture and nutrients make it a beneficial addition for digestion, endurance, and recovery.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomLionsMane",
        name: "Lion's Mane Mushroom",
        description: "Lion's Mane mushroom is a nootropic and adaptogenic fungus rich in hericenones and erinacines, compounds that promote nerve growth factor (NGF) production. It supports cognitive function, nerve regeneration, memory, and focus. Additionally, it aids recovery, reduces inflammation, and enhances resilience to mental and physical stress.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomCordyceps",
        name: "Cordyceps Mushroom",
        description: "Cordyceps mushroom is a powerful adaptogen known for enhancing athletic performance, endurance, and energy production. Rich in cordycepin and polysaccharides, it boosts ATP generation, oxygen utilization, and lung capacity. Cordyceps also supports immune function, recovery, and resistance to fatigue, making it ideal for high-performance physical goals.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomTurkeyTail",
        name: "Turkey Tail Mushroom",
        description: "Turkey Tail mushroom is a potent immune-boosting fungus rich in beta-glucans, polysaccharopeptides (PSP and PSK), and antioxidants. It supports gut health, immune regulation, and recovery from stress or illness. Its anti-inflammatory and adaptogenic properties enhance resilience, making it beneficial for endurance, healing, and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "mushroomOyster",
        name: "Oyster Mushroom",
        description: "Oyster mushroom is a nutritious fungus rich in protein, B vitamins, fiber, antioxidants, and minerals like potassium and iron. It supports immune health, cardiovascular function, and energy metabolism. Its anti-inflammatory and cholesterol-lowering properties aid recovery, endurance, and overall metabolic balance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "moringa",
        name: "Moringa",
        description: "Moringa is a nutrient-dense plant rich in vitamins A, C, E, calcium, potassium, iron, and antioxidants. It supports immune function, reduces inflammation, promotes muscle recovery, and enhances energy metabolism. Moringa also aids bone health, skin durability, and overall vitality, making it valuable for performance and recovery.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "whey",
        name: "Whey",
        description: "Whey protein is a high-quality, fast-digesting protein rich in essential amino acids and branched-chain amino acids (BCAAs). It supports muscle growth, repair, and recovery, enhances immune function, and promotes satiety. Whey aids endurance and performance by supplying quick amino acids to muscles post-workout.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "lCarnitine",
        name: "L-Carnitine",
        description: "L-Carnitine is an amino acid derivative that helps transport fatty acids into mitochondria for energy production. It supports endurance, fat metabolism, muscle recovery, and reduces exercise-induced oxidative stress. L-Carnitine may improve speed and stamina by enhancing cellular energy efficiency during workouts.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "lCitrulline",
        name: "L-Citrulline",
        description: "L-Citrulline is an amino acid that boosts nitric oxide production, improving blood flow, oxygen delivery, and nutrient transport to muscles. It enhances endurance, reduces muscle fatigue, supports recovery, and may improve speed and power output during exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "lHistidine",
        name: "L-Histidine",
        description: "L-Histidine is an essential amino acid involved in protein synthesis and the production of histamine, which supports immune response and gastric acid secretion. It helps buffer muscle acidity during intense exercise, enhancing endurance, recovery, and muscle performance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "creatineMonohydrate",
        name: "Creatine Monohydrate",
        description: "Creatine monohydrate is a well-researched supplement that increases phosphocreatine stores in muscles, enhancing ATP production for quick bursts of energy. It supports muscle growth, strength, power, recovery, and cognitive function, making it ideal for boosting performance in strength training, calisthenics, and high-intensity exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "matchaGreenTea",
        name: "Matcha Green Tea",
        description: "Matcha green tea is a powdered form of green tea rich in antioxidants, particularly catechins like EGCG, along with caffeine and L-theanine, which boasts its stimulating yet calming effect. It supports mental focus, energy, fat metabolism, and reduces inflammation. Matcha enhances endurance, recovery, and overall metabolic health.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "coffee",
        name: "Coffee",
        description: "Coffee is a natural stimulant containing caffeine and antioxidants. It enhances alertness, mental focus, endurance, and fat metabolism, while also supporting mood and cognitive function. Moderate coffee intake can improve physical performance and reduce perceived exertion during exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "betaAlanine",
        name: "β-Alanine",
        description: "Beta-alanine is a non-essential amino acid that increases muscle carnosine levels, which buffers lactic acid buildup during high-intensity exercise. This delays muscle fatigue, improves endurance, power output, and recovery, making it beneficial for sprinting, calisthenics, and other anaerobic activities.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "taurine",
        name: "Taurine",
        description: "Taurine is a conditionally essential amino acid involved in muscle function, electrolyte balance, and antioxidant defense. It supports endurance, reduces exercise-induced oxidative stress, aids recovery, and improves muscle contractility and hydration, benefiting both aerobic and anaerobic performance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "lArginine",
        name: "L-Arginine",
        description: "L-Arginine is a semi-essential amino acid that serves as a precursor to nitric oxide, promoting vasodilation and improved blood flow. It enhances oxygen and nutrient delivery to muscles, boosting endurance, recovery, and exercise performance, especially during high-intensity and endurance activities.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "bcaa",
        name: "BCAA",
        description: "BCAAs (branched-chain amino acids: leucine, isoleucine, valine) are essential amino acids that support muscle protein synthesis, reduce muscle breakdown, and improve recovery. They help decrease fatigue during exercise, enhance endurance, and promote muscle growth and repair.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "camuCamu",
        name: "Camu Camu",
        description: "Camu camu is a fruit rich in vitamin C, antioxidants, and anti-inflammatory compounds. It supports immune function, reduces oxidative stress, aids recovery, and promotes skin health. Its high vitamin C content also supports collagen synthesis and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "pineBark",
        name: "Pine Bark",
        description: "Pine bark extract is rich in proanthocyanidins, powerful antioxidants that support cardiovascular health, improve blood flow, and reduce inflammation. It enhances endurance, recovery, skin elasticity, and may protect against oxidative stress and muscle damage.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "acerola",
        name: "Acerola",
        description: "Acerola is a tropical fruit exceptionally high in vitamin C and antioxidants. It supports immune function, collagen production for skin and bone health, reduces inflammation, and aids recovery. Acerola promotes overall vitality and resilience against oxidative stress.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "soursop",
        name: "Soursop",
        description: "Soursop (graviola) is a tropical fruit rich in vitamin C, antioxidants, and anti-inflammatory compounds. It supports immune health, reduces oxidative stress, aids digestion, and may have neuroprotective and anti-cancer properties. Soursop also promotes recovery and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "monkFruit",
        name: "Monk Fruit",
        description: "Monk fruit is a natural sweetener rich in antioxidants called mogrosides, which provide anti-inflammatory and immune-supportive benefits. It contains zero calories, making it a healthy sugar alternative that supports metabolic health without blood sugar spikes.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "rhodiolaRosea",
        name: "Rhodiola Rosea",
        description: "Rhodiola rosea is an adaptogenic herb that enhances physical endurance, reduces fatigue, and supports mental focus under stress. Rich in rosavins and salidrosides, it improves recovery, mood, and resilience to both physical and emotional stressors.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "panaxGinseng",
        name: "Panax Ginseng",
        description: "Panax ginseng is a traditional adaptogen known for boosting energy, endurance, cognitive function, and immune support. Rich in ginsenosides, it enhances physical performance, reduces fatigue, promotes recovery, and supports overall vitality and stress resilience.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "ajugaTurkestanica",
        name: "Ajuga Turkestanica",
        description: "Ajuga turkestanica is a herb traditionally used to support muscle growth, strength, and endurance. It contains ecdysteroids, compounds that may promote protein synthesis and improve recovery. It also exhibits anti-inflammatory and adaptogenic effects beneficial for athletic performance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "gingerRoot",
        name: "Ginger Root",
        description: "Ginger root is a natural anti-inflammatory and antioxidant known to reduce muscle soreness, joint pain, and digestive discomfort. It supports recovery, immune health, and may improve circulation and endurance during exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "collagen",
        name: "Collagen",
        description: "Collagen is a structural protein vital for skin, bone, cartilage, tendons, and ligaments. Supplementing collagen supports joint health, tissue repair, skin elasticity, and recovery from injuries. It helps maintain bone density and may reduce risk of connective tissue damage during training.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "cissusQuadrangularis",
        name: "Cissus Quadrangularis",
        description: "Cissus quadrangularis is a traditional herb known for promoting bone healing, increasing bone density, and reducing joint pain. Rich in antioxidants and anti-inflammatory compounds, it supports recovery from fractures, reduces inflammation, and may enhance connective tissue strength and overall skeletal health.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "bamboo",
        name: "Bamboo",
        description: "Bamboo extract is a rich source of silica, a mineral essential for collagen synthesis, bone strength, skin elasticity, and connective tissue health. It supports bone growth, joint health, wound healing, and improves skin durability, making it valuable for recovery and structural support.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      }
    ],
    capsules: [
      {
        id: "magnesium",
        name: "Magnesium",
        description: "Magnesium is a vital mineral involved in over 300 enzymatic reactions including muscle contraction, energy production, and nerve function. It supports muscle relaxation, reduces cramps, enhances recovery, promotes bone health, and helps regulate inflammation and endurance during exercise.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "fishOil",
        name: "Fish Oil",
        description: "Fish oil is rich in omega-3 fatty acids EPA and DHA, which reduce inflammation, support cardiovascular health, improve joint function, and enhance muscle recovery. It also benefits brain function, skin health, and endurance by promoting optimal cellular function.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "turmeric",
        name: "Turmeric",
        description: "Turmeric contains curcumin, a potent anti-inflammatory and antioxidant compound that helps reduce muscle soreness, joint pain, and chronic inflammation. It supports recovery, immune health, and may improve endurance and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "hyaluronicAcid",
        name: "Hyaluronic Acid",
        description: "Hyaluronic acid is a natural compound that supports joint lubrication, skin hydration, and tissue repair. It helps maintain cartilage health, reduces joint pain, improves skin elasticity, and accelerates recovery from injuries.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "boswellia",
        name: "Boswellia",
        description: "Boswellia, also known as Indian frankincense, is an anti-inflammatory herb that reduces joint pain, improves mobility, and supports cartilage health. It helps decrease inflammation, enhances recovery, and may protect against cartilage degradation in conditions like arthritis.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "methylsulfonylmethane",
        name: "Methylsulfonylmethane (MSM)",
        description: "MSM (methylsulfonylmethane) is a sulfur-containing compound that supports joint health, reduces inflammation, and promotes recovery. It aids collagen synthesis, improves skin and connective tissue strength, and helps alleviate muscle soreness and joint pain.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "glucosamine",
        name: "Glucosamine",
        description: "Glucosamine is a natural compound involved in building cartilage and joint tissue. Supplementing it supports joint health, reduces pain and inflammation, promotes cartilage repair, and improves mobility and recovery from joint stress or injury.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "chondroitin",
        name: "Chondroitin",
        description: "Chondroitin is a vital component of cartilage that helps maintain joint elasticity and hydration. Supplementation supports cartilage repair, reduces joint pain and inflammation, improves joint function, and aids recovery from degenerative joint conditions.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "ashwagandha",
        name: "Ashwagandha",
        description: "Ashwagandha is an adaptogenic herb that reduces stress and cortisol levels, enhances muscle strength and endurance, supports recovery, and improves overall vitality. It also benefits cognitive function, immune health, and inflammation regulation.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "tongkatAli",
        name: "Tongkat Ali",
        description: "Tongkat ali is a traditional herb known to boost testosterone levels, enhance muscle growth, improve endurance, reduce fatigue, and support recovery. It also promotes libido, mood balance, and may reduce stress and cortisol.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "macaRoot",
        name: "Maca Root",
        description: "Maca root is an adaptogenic superfood that supports energy, stamina, hormonal balance, and endurance. It enhances libido, reduces fatigue, promotes recovery, and may improve mood and cognitive function.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "fenugreek",
        name: "Fenugreek",
        description: "Fenugreek is an herb that supports healthy testosterone levels, improves muscle strength and endurance, aids digestion, and helps regulate blood sugar. It also has anti-inflammatory properties and promotes recovery and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "seaMoss",
        name: "Sea Moss",
        description: "Sea moss is a nutrient-dense algae rich in iodine, calcium, potassium, magnesium, and vitamins. It supports thyroid health, boosts immunity, enhances digestion, promotes skin and joint health, and aids in recovery and overall energy.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "burdockRoot",
        name: "Burdock Root",
        description: "Burdock root is a traditional herb known for its antioxidant, anti-inflammatory, and detoxifying properties. It supports liver health, improves digestion, promotes skin health, and may aid recovery and immune function.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "bladderwrack",
        name: "Bladderwrack",
        description: "Bladderwrack is a seaweed rich in iodine, antioxidants, and anti-inflammatory compounds. It supports thyroid function, metabolism, skin health, and joint recovery, and may help reduce inflammation and promote bone strength.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "blackSeedOil",
        name: "Black Seed Oil",
        description: "Black seed oil contains thymoquinone and other antioxidants with potent anti-inflammatory, immune-boosting, and antimicrobial effects. It supports respiratory health, reduces inflammation, aids recovery, and promotes skin and joint health.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "oreganoOil",
        name: "Oregano Oil",
        description: "Oregano oil is a powerful antimicrobial and anti-inflammatory agent rich in carvacrol and thymol. It supports immune health, fights infections, reduces inflammation, and promotes respiratory and digestive wellness.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "elderberry",
        name: "Elderberry",
        description: "Elderberry is rich in antioxidants and vitamins that boost immune function, reduce inflammation, and support respiratory health. It helps shorten cold and flu duration, promotes recovery, and provides antiviral benefits.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "nAcetylcysteine",
        name: "N-Acetylcysteine (NAC)",
        description: "NAC (N-acetylcysteine) is a precursor to glutathione, a key antioxidant that protects cells from oxidative stress. It supports liver detoxification, reduces inflammation, enhances immune function, aids respiratory health, and promotes recovery.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      }
    ],
    chewables: [
      {
        id: "multivitamin",
        name: "Multivitamin",
        description: "A multivitamin provides a broad spectrum of essential vitamins and minerals that support overall health, immune function, energy production, and recovery. It helps fill dietary gaps, supports bone, skin, and muscle health, and optimizes metabolic processes.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "spirulina",
        name: "Spirulina",
        description: "Spirulina is a nutrient-dense blue-green algae rich in protein, B vitamins, iron, antioxidants, and essential fatty acids. It supports muscle growth, immune health, reduces inflammation, boosts endurance, and promotes detoxification and recovery.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "chlorella",
        name: "Chlorella",
        description: "Chlorella is a green algae high in protein, vitamins, minerals, chlorophyll, and antioxidants. It supports detoxification, immune function, nutrient absorption, reduces inflammation, promotes skin health, and aids recovery and overall vitality.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      },
      {
        id: "vitaminD",
        name: "Vitamin D",
        description: "Vitamin D is essential for bone health, calcium absorption, immune function, and muscle performance. It supports bone growth, reduces inflammation, enhances recovery, and may improve mood and endurance.",
        specifications: {
          frequency: "",
          servingSize: "",
          timing: [""],
          requisite: [""]
        },
        sources: ["test2"]
      }
    ]
  },
  eating: {
    breakfast: [
      {
        id: "id5",
        name: "Example I",
        description: "...",
        routine: [
          "pushup",
          "band",
          "EXAMPLE"
        ]
      }
    ],
    snack: [
      {
        id: "id5",
        name: "Example I",
        description: "...",
        routine: [
          "pushup",
          "band",
          "EXAMPLE"
        ]
      }
    ],
    preworkout: [
      {
        id: "id5",
        name: "Example I",
        description: "...",
        routine: [
          "pushup",
          "band",
          "EXAMPLE"
        ]
      }
    ],
    postworkout: [
      {
        id: "id7",
        name: "Example I",
        description: "...",
        routine: [
          "band",
          "german",
          "EXAMPLE"
        ]
      }
    ]
  },
  nonedibles: {
    cosmetic: [
      {
        id: "id5",
        name: "Example I",
        description: "...",
        routine: [
          "pushup",
          "band",
          "EXAMPLE"
        ]
      }
    ]
  },
  training: {
    calisthenics: [
      {
        id: "dynamicsI",
        name: "Dynamics I",
        description: "...",
        routine: [
          "Pushups (1x10)",
          "BHS Pullups (1x5)",
          "Warmup (Bands)",
          "Pushups (1x10)",
          "BHS Pullups(1x5)",
          "Muscle Ups (65 reps, mix and match)",
          "SB Dips (2 sets failure)",
          "Pullups (2 sets failure)",
          "Right Arm Hanging Pulse (2x8)", 
          "Pistol Squats (2x6-10)"
        ]
      },
      {
        id: "staticsI",
        name: "Statics I",
        description: "...",
        routine: [
          "Warmup (Bands)",
          "Supinated Dead Hang (1 set 30+ seconds)",
          "German Hang (2 sets 10+ seconds)",
          "Repeat 2x",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Lever (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back Lever (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Lever Negative (1 rep)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Lever Tuck (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L-sit Ground (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back Lever (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L-sit / V-sit parallettes (max hold)",
          "Repeat 2x",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windshield Wipers (1x5)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toe-To-Bar (1x10)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right Arm Hanging Pulse (1x8)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L-sit to V-sit Raise (1x3)"
        ]
      },
      {
        id: "hybridI",
        name: "Hybrid I",
        description: "...",
        routine: [
          "Warmup (Bands)",
          "Supinated Dead Hang (1 set 30+ seconds)",
          "German Hang (2 sets 10+ seconds)",
          "Repeat 2x",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Lever (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back Lever (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front Lever Tuck (max hold)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L-sit Ground (max hold)",
          "Pushups (1x10)",
          "BHS Pullups(1x5)",
          "Muscle Ups (35 reps, mix and match)",
          "SB Dips (2 sets failure)",
          "Pullups (2 sets failure)",
          "Pistol Squats (2x6-10)",
          "Windshield Wipers (1x5)", 
          "Toe-To-Bar (1x10)", 
          "Right Arm Hanging Pulse (1x8)", 
        ]
      }
    ],
    running: [
      {
        id: "id7",
        name: "Run",
        description: "...",
        routine: [
          "5K"
        ]
      }
    ],
    gym: [
      {
        id: "gymI",
        name: "Gym I",
        description: "...",
        routine: [
          "Barbell RDL (2x6-10)",
          "Smith Machine Heel-Elevated Squats (2x6-10)",
          "Smith Machine Calf Raise (4x8-15)",
          "Kettlebell Tibialis Raise (2x8-15)",
          "Dumbbell Hammer Curl (2x8-15)",
          "Cable Lateral Raise (Handle) (3x8-15)",
          "Cable Reverse Fly (No Handle) (4x8-15)",
          "Cable Supine Bicep Curl (No Handle) (2x8-15)",
          "Cable Overhead Tricep Extension (No Handle) (2x8-15)",
          "Cable Low-High Chest Fly (Handle) (4x8-15)",
          "Cable Lateral Raise (Handle) (3x8-15)"
        ]
      }
    ],
    lengthening: [
      {
        id: "morning",
        name: "Morning",
        description: "Routine to maintain joint health and ROM.", 
        routine: [
          "Laying Foot-Supported Lengthen (Hooking feet on ledge, pull torso forward)",
          "Forearm Cat-Cow (1min slow reps)",
          "Toe-Touch Walkout to Full Cobra (5 reps with hold)",
          "Dead Hang (1min)",
          "Foam Rolling (Left Back + Side)",
          "Foam Rolling (Hamstring, IT Band, Anterior/Posterior/Interior Calf)",
          "Left Side Bolster (placing bolster under left ribs, breath into right ribcage. 3min)",
          "Repeat 2x",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right Side Plank + Hip Lift (1min)",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right Arm Wall Reach Neural Cue (standing with right side to wall, reach right arm as high as possible, left arm to side, breathe into right ribs, holding breath)",
          "Dead Hang (1min)",
          "Flat Lower Bolster (placing bolster above pelvis, lay flat to let hips relax and decompress lumbar. 3min)"
        ]
      },
      {
        id: "evening",
        name: "Evening",
        description: "Routine to maintain joint health and ROM.", 
        routine: [
          "Forearm Cat-Cow (1min slow reps)",
          "Toe-Touch Walkout to Full Cobra (5 reps with hold)",
          "Dead Hang (30sec)",
          "Foam Rolling (Left Back + Side)",
          "Foam Rolling (Hamstring, IT Band, Anterior/Posterior/Interior Calf)",
          "Left Side Bolster (placing bolster under left ribs, breath into right ribcage. 3min)",
          "Dead Hang (30sec)",
          "Flat Lower Bolster (placing bolster above pelvis, lay flat to let hips relax and decompress lumbar. 3min)",
          "Laying Foot-Supported Lengthen (Hooking feet on ledge, pull torso forward)"
        ]
      }
    ]
  }
};

let dark = localStorage.getItem('darkmode') === '1' ? 1 : 0;
let flatItemList = [];
let currentIndex = -1; // tracks currently selected item in flatItemList
let currentId = null;

function renderItems(section) {
  const container = document.getElementById('item-list');
  container.innerHTML = '';

  flatItemList = []; // reset on each render
  currentIndex = -1;

  const dataSection = protocolData[section];
  if (!dataSection) return;

  for (const [subcategory, items] of Object.entries(dataSection)) {
    const subcatDiv = document.createElement('div');
    subcatDiv.className = 'mb-4';

    const subcatTitle = document.createElement('h3');
    subcatTitle.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
    if (subcatTitle.textContent.includes('_')) {
      subcatTitle.textContent = subcatTitle.textContent.replaceAll('_', ' ');
    }
    subcatTitle.className = `text-lg font-bold border-b pb-1 mb-2 ${dark ? 'text-gray-100 border-gray-600' : 'text-gray-800 border-gray-300'}`;
    subcatDiv.appendChild(subcatTitle);

    const ul = document.createElement('ul');
    ul.className = 'pl-4 space-y-1';

    [...items].sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
      flatItemList.push(item); // add item to global flat list

      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = item.name;
      btn.className = 'text-blue-600 hover:underline text-sm pl-2';
      btn.onclick = () => {
        loadDetailById(item.id);
        currentIndex = flatItemList.findIndex(i => i.id === item.id); // update current index on click
      };

      li.appendChild(btn);
      ul.appendChild(li);
    });

    subcatDiv.appendChild(ul);
    container.appendChild(subcatDiv);
  }

  document.getElementById('detail-title').textContent = 'Select an item';
  document.getElementById('detail-content').textContent = 'Click an item on the left to view details.';
}

function renderSourcing() {
  const container = document.getElementById('item-list');
  container.innerHTML = '';

  flatItemList = [];
  currentIndex = -1;

  const sourceMap = {};

  ['nutrition', 'supplements'].forEach(section => {
    const dataSection = protocolData[section];
    for (const subcategory of Object.values(dataSection)) {
      subcategory.forEach(item => {
        if (!item.sources) return;
        item.sources.forEach(source => {
          if (!sourceMap[source]) {
            sourceMap[source] = [];
          }
          sourceMap[source].push(item);
        });
      });
    }
  });

  for (const [source, items] of Object.entries(sourceMap).sort(([a], [b]) => a.localeCompare(b))) {
    const sourceDiv = document.createElement('div');
    sourceDiv.className = 'mb-4';

    const sourceTitle = document.createElement('h3');
    sourceTitle.textContent = source.charAt(0).toUpperCase() + source.slice(1);
    sourceTitle.className = `text-lg font-bold border-b pb-1 mb-2 ${dark ? 'text-gray-100 border-gray-600' : 'text-gray-800 border-gray-300'}`;
    sourceDiv.appendChild(sourceTitle);

    const ul = document.createElement('ul');
    ul.className = 'pl-4 space-y-1';

    [...items].sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
      flatItemList.push(item); // 👈 ADD TO LIST for arrow nav

      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = item.name;
      btn.className = 'text-blue-600 hover:underline text-sm pl-2';
      btn.onclick = () => {
        loadDetailById(item.id);
        currentIndex = flatItemList.findIndex(i => i.id === item.id); // 👈 track index
      };
      li.appendChild(btn);
      ul.appendChild(li);
    });

    sourceDiv.appendChild(ul);
    container.appendChild(sourceDiv);
  }

  document.getElementById('detail-title').textContent = 'Select an item';
  document.getElementById('detail-content').textContent = 'Click an item on the left to view details.';
}

// Load detail into viewer
function loadDetailById(id) {
  currentId = id;
  console.log(currentId);
  for (const category of Object.values(protocolData)) {
    for (const subcategory of Object.values(category)) {
      const found = subcategory.find(item => item.id === id);
      if (found) {
        const title = document.getElementById('detail-title');
        const content = document.getElementById('detail-content');

        title.textContent = found.name;

        // Start building left side content
        let htmlLeft = `<div class="flex-1"><p class="mb-2">${found.description}</p>`;

        // Specifications
        if (found.specifications) {
          const { frequency, servingSize, timing, requisite } = found.specifications;
          htmlLeft += `
            <div class="mt-2">
              <h4 class="font-semibold ${dark ? 'text-gray-100' : 'text-gray-800'}">Specifications:</h4>
              <ul class="list-disc list-inside text-sm ${dark ? 'text-gray-200' : 'text-gray-700'}">
                ${frequency ? `<li><strong>Frequency:</strong> ${frequency}</li>` : ''}
                ${servingSize ? `<li><strong>Serving Size:</strong> ${servingSize}</li>` : ''}
                ${timing && timing.length > 0 ? `<li><strong>Timing:</strong> ${timing.join(', ')}</li>` : ''}
                ${requisite && requisite.length > 0 ? `<li><strong>Requisites:</strong> ${requisite.join(', ')}</li>` : ''}
              </ul>
            </div>`;
        }

        // Sources
        if (found.sources && found.sources.length > 0) {
          htmlLeft += `
            <div class="mt-4">
              <h4 class="font-semibold ${dark ? 'text-gray-100' : 'text-gray-800'}">Sources:</h4>
              <ul class="list-disc list-inside text-sm ${dark ? 'text-gray-200' : 'text-gray-700'}">
                ${found.sources.map(src => `<li>${src}</li>`).join('')}
              </ul>
            </div>`;
        }

        if (found.routine && found.routine.length > 0) {
          htmlLeft += `
            <div class="mt-4">
              <h4 class="font-semibold ${dark ? 'text-gray-100' : 'text-gray-800'}">Routine:</h4>
              <ul class="list-disc list-inside text-sm ${dark ? 'text-gray-200' : 'text-gray-700'}">
                ${found.routine.map(src => `<li>${src}</li>`).join('')}
              </ul>
            </div>`;
        }

        htmlLeft += `</div>`; // close left column

        // Right side image (if present)
        let htmlRight = '';
        if (found.image) {
          htmlRight = `
            <div class="w-128 h-56 flex-shrink-0 ml-2 mr-10">
              <img src="img/${found.image}" alt="${found.name}" class="rounded shadow w-full h-full object-cover" />
            </div>`;
        }

        // Inject combined layout
        content.innerHTML = `<div class="flex flex-col md:flex-row gap-4 items-start">${htmlLeft}${htmlRight}</div>`;

        return;
      }
    }
  }
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('text-blue-700', 'font-semibold'));
    btn.classList.add('text-blue-700', 'font-semibold');

    const tab = btn.dataset.tab;
    if (tab === 'sourcing') {
      renderSourcing();
    } else {
      renderItems(tab);
    }
  });
});

// Run render on default tab when window loads
window.onload = () => {
  if (dark) {
    document.body.className = 'bg-gray-900';
    document.getElementById('item-list').className = 'overflow-y-auto bg-gray-800 text-gray-100 rounded-xl p-4 shadow space-y-2';
    document.getElementById('item-viewer').className = 'col-span-2 bg-gray-800 text-gray-100 rounded-xl p-4 shadow overflow-visible';
    document.getElementById('detail-content').className = 'text-gray-100 flex flex-col md:flex-row gap-4 items-start';
  } else {
    document.body.className = 'bg-gray-100 text-gray-800';
    document.getElementById('item-list').className = 'overflow-y-auto bg-white rounded-xl p-4 shadow space-y-2';
    document.getElementById('item-viewer').className = 'col-span-2 bg-white rounded-xl p-4 shadow overflow-visible';
    document.getElementById('detail-content').className = 'text-gray-700 flex flex-col md:flex-row gap-4 items-start';
  }

  renderItems('nutrition');

  document.getElementById('lighting').addEventListener('click', () => {
    dark = dark ? 0 : 1;
    localStorage.setItem('darkmode', dark.toString());
    location.reload(); // refresh page to re-render with correct dark mode classes
  });

  document.getElementById('arrow-left').addEventListener('click', () => {
    if (flatItemList.length === 0) return;

    if (currentIndex === -1) {
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex - 1 + flatItemList.length) % flatItemList.length;
    }
    loadDetailById(flatItemList[currentIndex].id);
  });

document.getElementById('arrow-right').addEventListener('click', () => {
  if (flatItemList.length === 0) return;

  if (currentIndex === -1) {
    currentIndex = 0;
  } else {
    currentIndex = (currentIndex + 1) % flatItemList.length;
  }
  loadDetailById(flatItemList[currentIndex].id);
});

};