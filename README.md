Для швидкого початку роботи з вікторинами можна вставити в консоль браузера слідуючий код для формування у localStorage масиву з вікторинами для подальшої роботи з ними(після вставки цього кода у консоль та підтвердження виконання потрібно оновити сторінку)

---

localStorage.setItem("quizList", JSON.stringify([
{
"id": "1716652490600",
"title": "Mystery Quiz",
"questions": [
{
"question": "What is the capital of Imagineland?",
"options": ["Faketown", "Inventopolis", "Phantom City"],
"answer": "Inventopolis"
},
{
"question": "Which creature is known for its legendary disguise abilities?",
"options": ["Chameleopard", "Invisible Hound", "Phantom Lynx"],
"answer": "Chameleopard"
},
{
"question": "What is the secret ingredient in the famous Elixir of Life?",
"options": ["Phoenix Feather", "Dragon Scale", "Unicorn Horn"],
"answer": "Phoenix Feather"
},
{
"question": "Who is the ruler of the enchanted forest?",
"options": ["Fairy Queen", "Goblin King", "Elf Lord"],
"answer": "Fairy Queen"
},
{
"question": "What is the ancient language spoken by the elves?",
"options": ["Elvish", "Ancient Tongue", "Mystic Speech"],
"answer": "Elvish"
}
]
},
{
"id": "1716653490380",
"title": "Fantasy Knowledge",
"questions": [
{
"question": "What is the name of the dragon guarding the Crystal Cave?",
"options": ["Smaug", "Draco", "Fafnir"],
"answer": "Fafnir"
},
{
"question": "Which element is associated with the Fire Wizards?",
"options": ["Firestone", "Blazium", "Flamecrystal"],
"answer": "Blazium"
},
{
"question": "What is the name of the legendary sword of the Kings?",
"options": ["Excalibur", "Stormbringer", "Dragonslayer"],
"answer": "Excalibur"
},
{
"question": "Which creature has the body of a lion and the head of an eagle?",
"options": ["Griffin", "Manticore", "Sphinx"],
"answer": "Griffin"
},
{
"question": "What magical power does a unicorn's horn possess?",
"options": ["Healing", "Invisibility", "Flight"],
"answer": "Healing"
}
]
},
{
"id": "1716653496134",
"title": "Historical Trivia",
"questions": [
{
"question": "Who was the first emperor of Rome?",
"options": ["Julius Caesar", "Augustus", "Nero"],
"answer": "Augustus"
},
{
"question": "Which ancient civilization built the pyramids?",
"options": ["Mesopotamians", "Egyptians", "Mayans"],
"answer": "Egyptians"
},
{
"question": "Who discovered America in 1492?",
"options": ["Christopher Columbus", "Leif Erikson", "Ferdinand Magellan"],
"answer": "Christopher Columbus"
},
{
"question": "Which war was fought between the North and South regions of the United States?",
"options": ["Revolutionary War", "Civil War", "World War I"],
"answer": "Civil War"
},
{
"question": "Who was the first woman to fly solo across the Atlantic Ocean?",
"options": ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman"],
"answer": "Amelia Earhart"
}
]
},
{
"id": "1716653503032",
"title": "Science and Nature",
"questions": [
{
"question": "What is the chemical symbol for water?",
"options": ["O2", "H2O", "CO2"],
"answer": "H2O"
},
{
"question": "Which planet is known as the Red Planet?",
"options": ["Mars", "Jupiter", "Venus"],
"answer": "Mars"
},
{
"question": "What gas do plants absorb from the atmosphere?",
"options": ["Oxygen", "Nitrogen", "Carbon Dioxide"],
"answer": "Carbon Dioxide"
},
{
"question": "What is the hardest natural substance on Earth?",
"options": ["Diamond", "Gold", "Iron"],
"answer": "Diamond"
},
{
"question": "Which planet is closest to the Sun?",
"options": ["Venus", "Mercury", "Earth"],
"answer": "Mercury"
}
]
},
{
"id": "1716653507796",
"title": "Pop Culture",
"questions": [
{
"question": "Who directed the movie 'Inception'?",
"options": ["Steven Spielberg", "Christopher Nolan", "James Cameron"],
"answer": "Christopher Nolan"
},
{
"question": "What is the name of the wizarding school in 'Harry Potter'?",
"options": ["Hogwarts", "Beauxbatons", "Durmstrang"],
"answer": "Hogwarts"
},
{
"question": "Who is known as the King of Pop?",
"options": ["Elvis Presley", "Michael Jackson", "Prince"],
"answer": "Michael Jackson"
},
{
"question": "Which TV show features a character named Sheldon Cooper?",
"options": ["Friends", "The Big Bang Theory", "How I Met Your Mother"],
"answer": "The Big Bang Theory"
},
{
"question": "Who played the character of Jack in the movie 'Titanic'?",
"options": ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp"],
"answer": "Leonardo DiCaprio"
}
]
},
{
"id": "1716656908203",
"title": "Mythical Beasts",
"questions": [
{
"question": "Which mythical beast has a lion's head, a goat's body, and a serpent's tail?",
"options": ["Chimera", "Griffin", "Hydra"],
"answer": "Chimera"
},
{
"question": "What is the name of the winged horse in Greek mythology?",
"options": ["Pegasus", "Cerberus", "Minotaur"],
"answer": "Pegasus"
},
{
"question": "Which creature is known for turning people to stone?",
"options": ["Medusa", "Basilisk", "Gorgon"],
"answer": "Medusa"
},
{
"question": "What is the name of the Norse wolf destined to bring about Ragnarok?",
"options": ["Fenrir", "Jormungandr", "Hel"],
"answer": "Fenrir"
},
{
"question": "Which bird is said to rise from its own ashes?",
"options": ["Phoenix", "Roc", "Harpy"],
"answer": "Phoenix"
}
]
},
{
"id": "1716664629980",
"title": "General Knowledge",
"questions": [
{
"question": "What is the smallest unit of life?",
"options": ["Atom", "Molecule", "Cell", "Organ"],
"answer": "Cell"
},
{
"question": "What is the speed of light?",
"options": ["299,792 km/s", "300,000 km/s", "299,792 m/s"],
"answer": "299,792 km/s"
},
{
"question": "Which country is known as the Land of the Rising Sun?",
"options": ["China", "Japan", "South Korea"],
"answer": "Japan"
},
{
"question": "Who wrote the play 'Romeo and Juliet'?",
"options": ["William Shakespeare", "Charles Dickens", "Jane Austen"],
"answer": "William Shakespeare"
},
{
"question": "What is the main ingredient in traditional Japanese miso soup?",
"options": ["Soybeans", "Rice", "Fish"],
"answer": "Soybeans"
}
]
}
]
))
