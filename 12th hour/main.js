const people = [
  { fName: "Percy", lName: "Zieme" },
  { fName: "Tania", lName: "VonRueden" },
  { fName: "Theresa", lName: "Will" },
  { fName: "Maybell", lName: "Dicki" },
  { fName: "Rosetta", lName: "Quitzon" },
  { fName: "Krista", lName: "Kessler" },
  { fName: "Sadie", lName: "Von" },
  { fName: "Carson", lName: "Conroy" },
  { fName: "Eladio", lName: "Fay" },
  { fName: "Tierra", lName: "Terry" },
  { fName: "Asa", lName: "O'Kon" },
  { fName: "Braeden", lName: "Pfannerstill" },
  { fName: "Emmanuelle", lName: "Harber" },
  { fName: "Mario", lName: "Hintz" },
  { fName: "Tamara", lName: "Welch" },
  { fName: "Melvina", lName: "Kemmer" },
  { fName: "Beth", lName: "Weber" },
  { fName: "Durward", lName: "Mosciski" },
  { fName: "Tevin", lName: "Becker" },
  { fName: "Serena", lName: "Hackett" },
  { fName: "Keshaun", lName: "Baumbach" },
  { fName: "Kacey", lName: "Murray" },
  { fName: "Rashawn", lName: "Jaskolski" },
  { fName: "Brown", lName: "Greenholt" },
  { fName: "Kelvin", lName: "Nader" },
  { fName: "Earline", lName: "Mertz" },
  { fName: "Orlando", lName: "Runte" },
  { fName: "Dorothea", lName: "Stoltenberg" },
  { fName: "Cassie", lName: "Yundt" },
  { fName: "Clark", lName: "Schowalter" },
  { fName: "Teresa", lName: "Mayert" },
  { fName: "Ines", lName: "Bartoletti" },
  { fName: "Florine", lName: "Howe" },
  { fName: "Ines", lName: "White" },
  { fName: "Karlie", lName: "Wintheiser" },
  { fName: "Sadie", lName: "Grimes" },
  { fName: "Lottie", lName: "Pfannerstill" },
  { fName: "Mohammad", lName: "Walker" },
  { fName: "Serena", lName: "Leuschke" },
  { fName: "Raphael", lName: "Schultz" },
  { fName: "Merl", lName: "Schuster" },
  { fName: "Arianna", lName: "Blanda" },
  { fName: "Clovis", lName: "Lehner" },
  { fName: "Tyrell", lName: "Dickinson" },
  { fName: "Lottie", lName: "Hudson" },
  { fName: "Jaylon", lName: "Langosh" },
  { fName: "Vicente", lName: "Schulist" },
  { fName: "Mohammed", lName: "Ankunding" },
  { fName: "Elvera", lName: "Moen" },
  { fName: "Tyreek", lName: "Oberbrunner" },
  { fName: "Cale", lName: "O'Hara" },
  { fName: "Fay", lName: "Feest" },
  { fName: "Callie", lName: "Schinner" },
  { fName: "Ronaldo", lName: "Gutmann" },
  { fName: "Timothy", lName: "Runolfsdottir" },
  { fName: "Myles", lName: "McKenzie" },
  { fName: "Dannie", lName: "Ferry" },
  { fName: "Stella", lName: "Wintheiser" },
  { fName: "Jana", lName: "Sporer" },
  { fName: "Torrey", lName: "Runolfsdottir" },
  { fName: "Reanna", lName: "Collier" },
  { fName: "Claire", lName: "Torp" },
  { fName: "Gudrun", lName: "Willms" },
  { fName: "Lily", lName: "Pfannerstill" },
  { fName: "Abigail", lName: "Considine" },
  { fName: "Glenna", lName: "Braun" },
  { fName: "Kurt", lName: "Leuschke" },
  { fName: "Ned", lName: "Pouros" },
  { fName: "Leora", lName: "Wilderman" },
  { fName: "Elena", lName: "Watsica" },
  { fName: "Margie", lName: "Turcotte" },
  { fName: "Eleonore", lName: "Murphy" },
  { fName: "Elvis", lName: "Considine" },
  { fName: "Vada", lName: "Schmeler" },
  { fName: "Reggie", lName: "Ruecker" },
  { fName: "Alysa", lName: "Haley" },
  { fName: "Malcolm", lName: "Stroman" },
  { fName: "Vernie", lName: "Walsh" },
  { fName: "Kyle", lName: "Williamson" },
  { fName: "Bruce", lName: "Hoppe" },
  { fName: "Linnie", lName: "O'Connell" },
  { fName: "Garrison", lName: "Torphy" },
  { fName: "Gudrun", lName: "Herman" },
  { fName: "Jackson", lName: "Jacobson" },
  { fName: "Kamren", lName: "Kutch" },
  { fName: "Kole", lName: "Rosenbaum" },
  { fName: "Brianne", lName: "Quitzon" },
  { fName: "Rachel", lName: "Stiedemann" },
  { fName: "Alexandrea", lName: "Nader" },
  { fName: "Yasmin", lName: "Lebsack" },
  { fName: "Delfina", lName: "Gibson" },
  { fName: "Roberto", lName: "Tromp" },
  { fName: "Drew", lName: "Mayer" },
  { fName: "Ariel", lName: "Gerhold" },
  { fName: "Macy", lName: "Brekke" },
  { fName: "Wava", lName: "Lebsack" },
  { fName: "Monique", lName: "Nikolaus" },
  { fName: "Scot", lName: "Conroy" },
  { fName: "Gabriel", lName: "Dicki" },
  { fName: "Obie", lName: "Hayes" },
];

const searchBar = document.querySelector("#searchbar");
const results = document.querySelector("#results");

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Filter search results whenever value changes
searchBar.addEventListener("input", async (e) => {
  const searchValue = e.target.value.trim().toLowerCase();

  if (searchValue) {
    await sleep(250);
  }

  const filteredResults = people
    .map((person) => `${person.fName} ${person.lName}`)
    .filter((fullName) => {
      return fullName.toLowerCase().includes(searchValue);
    })
    .sort();

  results.innerHTML = filteredResults.join("<br>");
});

results.innerHTML = people
  .map((person) => `${person.fName} ${person.lName}`)
  .sort()
  .join("<br>");
