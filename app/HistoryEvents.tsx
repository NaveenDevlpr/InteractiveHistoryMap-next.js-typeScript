import { historicalEvent } from "./components/MapApp"

const eventData:historicalEvent[]=[
    {
        id:1,
        title:'Normandy Landings (D-Day)',
        description:'Allied forces landed on the beaches of Normandy, france on June 6',
        position:[49.4144,-0.8322],
        category:'War'
    },
    {
        id:2,
        title:'Completion of the Sistine Chapel Ceiling',
        description:'Michelangelo completed the ceiling of the Sistine Chapel in Vatican City',
        position:[41.9029,12.4244],
        category:'Art'
    },
    {
        id: 3,
        title: "Declaration of Independence",
        "description": "The Continental Congress declared the independence of the Thirteen Colonies from British rule on July 4, 1776",
        "position": [39.9478, -75.1466],
        "category": "Politics"
      },
      {
        id: 4,
        "title": "The Fall of the Berlin Wall",
        "description": "The Berlin Wall, which divided East and West Berlin, fell on November 9, 1989",
        "position": [52.5200, 13.4050],
        "category": "Cold War"
      },
      {
        "id": 5,
        "title": "Apollo 11 Moon Landing",
        "description": "Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon on July 20, 1969",
        "position": [0.6741, -23.4730],
        "category": "Space Exploration"
      },
      {
        "id": 6,
        "title": "Rosa Parks and the Montgomery Bus Boycott",
        "description": "Rosa Parks refused to give up her bus seat, sparking the Montgomery Bus Boycott in 1955",
        "position": [32.3668, -86.2999],
        "category": "Civil Rights"
      },
      {
        "id": 7,
        "title": "The Great Wall of China Construction",
        "description": "Construction of the Great Wall of China began during the 7th century BC",
        "position": [40.4319, 116.5704],
        "category": "Architecture"
      },
      {
        "id": 8,
        "title": "The Renaissance Period",
        "description": "A period of European cultural, artistic, political, and economic rebirth during the 14th to 17th centuries",
        "position": [43.7711, 11.2486],
        "category": "Art and Culture"
      },
      {
        "id": 9,
        "title": "The Wright Brothers' First Powered Flight",
        "description": "Orville and Wilbur Wright achieved the first powered, controlled, and sustained airplane flight on December 17, 1903",
        "position": [35.9042, -75.6664],
        "category": "Aviation"
      },
      {
        "id": 10,
        "title": "The Emancipation Proclamation",
        "description": "President Abraham Lincoln issued the Emancipation Proclamation on January 1, 1863, declaring all slaves in Confederate-held territory to be free",
        "position": [38.8895, -77.0353],
        "category": "Civil War"
      },

      {
        "id": 11,
        "title": "The Industrial Revolution",
        "description": "A period of rapid industrialization and technological advancement that began in the late 18th century",
        "position": [51.5074, -0.1278],
        "category": "Industrialization"
      },
      {
        "id": 12,
        "title": "The Cuban Missile Crisis",
        "description": "A 13-day confrontation between the United States and the Soviet Union over Soviet ballistic missiles deployed in Cuba in 1962",
        "position": [23.1136, -82.3666],
        "category": "Cold War"
      },
      {
        "id": 13,
        "title": "The French Revolution",
        "description": "A period of radical social and political upheaval in France from 1789 to 1799 that profoundly affected French and modern history",
        "position": [48.8566, 2.3522],
        "category": "Revolution"
      },
      {
        "id": 14,
        "title": "The Manhattan Project",
        "description": "A research and development project during World War II that produced the first nuclear weapons",
        "position": [35.0844, -106.6504],
        "category": "Science and Technology"
      },
      {
        "id": 15,
        "title": "The Boston Tea Party",
        "description": "A political protest that took place on December 16, 1773, in Boston, where American colonists, frustrated and angry at Britain for imposing 'taxation without representation,' dumped 342 chests of tea into the harbor",
        "position": [42.3601, -71.0589],
        "category": "Revolution"
      },
      {
        "id": 16,
        "title": "The Rosetta Stone Deciphered",
        "description": "The Rosetta Stone, a key to deciphering ancient Egyptian hieroglyphs, was discovered by French soldiers in 1799 and later decoded by Jean-François Champollion",
        "position": [31.1350, 29.9792],
        "category": "Archaeology"
      },
      {
        "id": 17,
        "title": "The Salem Witch Trials",
        "description": "A series of hearings and prosecutions of people accused of witchcraft in colonial Massachusetts between 1692 and 1693",
        "position": [42.5208, -70.8967],
        "category": "Colonial America"
      },
      {
        "id": 18,
        "title": "The Space Race",
        "description": "A competition between the United States and the Soviet Union to achieve significant milestones in space exploration during the Cold War",
        "position": [45.4215, -75.6993],
        "category": "Space Exploration"
      },
      {
        "id": 19,
        "title": "The Black Death",
        "description": "The devastating pandemic that struck Europe in the 14th century, resulting in widespread death and social upheaval",
        "position": [51.5099, -0.1180],
        "category": "Pandemic"
      },
      {
        "id": 20,
        "title": "The Siege of Leningrad",
        "description": "A prolonged military blockade conducted by the German Army during World War II, lasting from September 1941 to January 1944",
        "position": [59.9343, 30.3351],
        "category": "World War II"
      },
      {
        "id": 21,
        "title": "The Great Fire of London",
        "description": "A major conflagration that swept through the central parts of London from September 2 to 6, 1666",
        "position": [51.5099, -0.1180],
        "category": "Disaster"
      },
      {
        "id": 22,
        "title": "The Trail of Tears",
        "description": "The forced relocation of Native American nations from their ancestral homelands to areas west of the Mississippi River in the 1830s",
        "position": [35.4676, -94.8430],
        "category": "Native American History"
      },
      {
        "id": 23,
        "title": "The Treaty of Ghent",
        "description": "The peace treaty that ended the War of 1812 between the United States and the United Kingdom",
        "position": [51.0576, 3.7206],
        "category": "War of 1812"
      },
      {
        "id": 24,
        "title": "The Mayflower Compact",
        "description": "A set of rules for self-governance established by the English Pilgrims who arrived on the Mayflower in 1620",
        "position": [41.7025, -70.2418],
        "category": "Colonial America"
      },
      {
        "id": 25,
        "title": "The Treaty of Tordesillas",
        "description": "An agreement between Spain and Portugal, signed on June 7, 1494, dividing newly discovered lands outside Europe between them",
        "position": [40.4168, -3.7038],
        "category": "Exploration"
      },
      {
        "id": 26,
        "title": "The Nuremberg Trials",
        "description": "A series of military tribunals held after World War II to prosecute prominent leaders of Nazi Germany for war crimes",
        "position": [49.4520, 11.0768],
        "category": "World War II"
      },
      {
        "id": 27,
        "title": "The Battle of Gettysburg",
        "description": "A decisive engagement during the American Civil War, fought from July 1 to 3, 1863",
        "position": [39.8106, -77.0947],
        "category": "Civil War"
      },
      {
        "id": 28,
        "title": "The Cultural Revolution in China",
        "description": "A sociopolitical movement in China from 1966 to 1976, led by Mao Zedong, aiming to preserve communist ideology",
        "position": [39.9042, 116.4074],
        "category": "Revolution"
      },
      {
        "id": 29,
        "title": "The Battle of Marathon",
        "description": "A key battle during the Greco-Persian Wars in 490 BCE, where the Athenians defeated the Persian invasion",
        "position": [38.1052, 23.8587],
        "category": "Ancient Greece"
      },
      {
        "id": 30,
        "title": "The Trail of Tears",
        "description": "The forced relocation of Native American nations from their ancestral homelands to areas west of the Mississippi River in the 1830s",
        "position": [35.4676, -94.8430],
        "category": "Native American History"
      },
      {
        "id": 31,
        "title": "The Battle of Stalingrad",
        "description": "A major battle on the Eastern Front of World War II, lasting from August 23, 1942, to February 2, 1943",
        "position": [48.7080, 44.5133],
        "category": "World War II"
      },
      {
        "id": 32,
        "title": "The Women's Suffrage Movement",
        "description": "A social and political movement advocating for women's right to vote, gaining momentum in the late 19th and early 20th centuries",
        "position": [51.5074, -0.1278],
        "category": "Women's Rights"
      },
      {
        "id": 33,
        "title": "The Cultural Revolution in China",
        "description": "A sociopolitical movement in China from 1966 to 1976, led by Mao Zedong, aiming to preserve communist ideology",
        "position": [39.9042, 116.4074],
        "category": "Revolution"
      },
      {
        "id": 34,
        "title": "The Magna Carta",
        "description": "A foundational document in English legal history, signed in 1215, limiting the powers of the monarchy and establishing certain legal principles",
        "position": [51.7945, -1.8063],
        "category": "Legal History"
      },
      {
        "id": 35,
        "title": "The Siege of Orleans",
        "description": "A key turning point in the Hundred Years' War, where Joan of Arc played a significant role in lifting the siege in 1429",
        "position": [47.9029, 1.9098],
        "category": "Medieval History"
      },
      {
        "id": 36,
        "title": "The Treaty of Westphalia",
        "description": "A series of peace treaties signed in 1648, ending the Thirty Years' War in the Holy Roman Empire and the Eighty Years' War between Spain and the Dutch Republic",
        "position": [52.5156, 13.4050],
        "category": "Peace Treaties"
      },
      {
        "id": 37,
        "title": "The Gold Rush in California",
        "description": "The rapid influx of people seeking gold in California, starting in 1848, leading to significant economic and social changes",
        "position": [36.7783, -119.4179],
        "category": "American West"
      },
      {
        "id": 38,
        "title": "The Reformation",
        "description": "A 16th-century movement for the reform of the Roman Catholic Church, led by figures such as Martin Luther and John Calvin",
        "position": [51.1657, 10.4515],
        "category": "Religious History"
      },
      {
        "id": 39,
        "title": "The March on Washington for Jobs and Freedom",
        "description": "A landmark event in the American Civil Rights Movement, held on August 28, 1963, where Martin Luther King Jr. delivered his famous 'I Have a Dream' speech",
        "position": [38.9072, -77.0370],
        "category": "Civil Rights"
      },
      {
        "id": 40,
        "title": "The Treaty of Paris (1783)",
        "description": "The treaty that ended the American Revolutionary War, recognizing the independence of the United States from British rule",
        "position": [48.8566, 2.3522],
        "category": "American Revolution"
      },
      {
        "id": 41,
        "title": "The Battle of Midway",
        "description": "A decisive naval battle in the Pacific Theater of World War II, fought between June 4 and 7, 1942",
        "position": [28.2143, -177.3760],
        "category": "World War II"
      },
      {
        "id": 42,
        "title": "The Louisiana Purchase",
        "description": "The acquisition of the Louisiana Territory by the United States from France in 1803, doubling the size of the country",
        "position": [37.7749, -122.4194],
        "category": "American Expansion"
      },
      {
        "id": 43,
        "title": "The Treaty of Nanking",
        "description": "The treaty that ended the First Opium War between the United Kingdom and China in 1842, ceding Hong Kong to the British",
        "position": [22.3964, 114.1095],
        "category": "Colonialism"
      },
      {
        "id": 44,
        "title": "The Great Famine in Ireland",
        "description": "A period of mass starvation and disease in Ireland from 1845 to 1852, caused by a potato blight",
        "position": [53.3498, -6.2603],
        "category": "Famine"
      },
      {
        "id": 45,
        "title": "The Battle of Saratoga",
        "description": "A pivotal battle in the American Revolutionary War, fought in 1777 and considered a turning point in favor of the Patriots",
        "position": [43.0831, -73.7846],
        "category": "American Revolution"
      },
      {
        "id": 46,
        "title": "The Marshall Plan",
        "description": "An American initiative providing economic aid to Western European countries after World War II to help rebuild their economies",
        "position": [38.9072, -77.0370],
        "category": "Post-WWII Reconstruction"
      },
      {
        "id": 47,
        "title": "The Battle of Thermopylae",
        "description": "A famous battle in 480 BCE where a small Greek force led by King Leonidas I defended the pass against the Persian army",
        "position": [38.8018, 22.5420],
        "category": "Ancient Greece"
      },
      {
        "id": 48,
        "title": "The Cultural Revolution in China",
        "description": "A sociopolitical movement in China from 1966 to 1976, led by Mao Zedong, aiming to preserve communist ideology",
        "position": [39.9042, 116.4074],
        "category": "Revolution"
      },
      {
        "id": 49,
        "title": "The Berlin Airlift",
        "description": "A massive Allied operation to supply West Berlin with food and other essentials during the Soviet blockade from 1948 to 1949",
        "position": [52.5200, 13.4050],
        "category": "Cold War"
      },
      {
        "id": 50,
        "title": "The Trail of Tears",
        "description": "The forced relocation of Native American nations from their ancestral homelands to areas west of the Mississippi River in the 1830s",
        "position": [35.4676, -94.8430],
        "category": "Native American History"
      },
      {
        "id": 51,
        "title": "The Wright Brothers' First Powered Flight",
        "description": "Orville and Wilbur Wright achieved the first powered, controlled, and sustained airplane flight on December 17, 1903",
        "position": [35.9042, -75.6664],
        "category": "Aviation"
      },
      {
        "id": 52,
        "title": "The Vietnam War",
        "description": "A conflict between North and South Vietnam, along with its principal ally, the United States, lasting from 1955 to 1975",
        "position": [14.0583, 108.2772],
        "category": "Vietnam War"
      },
      {
        "id": 53,
        "title": "The Sinking of the Titanic",
        "description": "The RMS Titanic, a British passenger liner, sank on its maiden voyage in the North Atlantic Ocean on April 15, 1912",
        "position": [41.7269, -49.9487],
        "category": "Maritime History"
      },
      {
        "id": 54,
        "title": "The Trail of Tears",
        "description": "The forced relocation of Native American nations from their ancestral homelands to areas west of the Mississippi River in the 1830s",
        "position": [35.4676, -94.8430],
        "category": "Native American History"
      },
      {
        "id": 55,
        "title": "The Industrial Revolution",
        "description": "A period of rapid industrialization and technological advancement that began in the late 18th century",
        "position": [51.5074, -0.1278],
        "category": "Industrialization"
      },
      {
        "id": 56,
        "title": "The Salem Witch Trials",
        "description": "A series of hearings and prosecutions of people accused of witchcraft in colonial Massachusetts between 1692 and 1693",
        "position": [42.5208, -70.8967],
        "category": "Colonial America"
      },
      {
        "id": 57,
        "title": "The Treaty of Ghent",
        "description": "The peace treaty that ended the War of 1812 between the United States and the United Kingdom",
        "position": [51.0576, 3.7206],
        "category": "War of 1812"
      },
      {
        "id": 58,
        "title": "The Mayflower Compact",
        "description": "A set of rules for self-governance established by the English Pilgrims who arrived on the Mayflower in 1620",
        "position": [41.7025, -70.2418],
        "category": "Colonial America"
      },
      {
        "id": 59,
        "title": "The Treaty of Tordesillas",
        "description": "An agreement between Spain and Portugal, signed on June 7, 1494, dividing newly discovered lands outside Europe between them",
        "position": [40.4168, -3.7038],
        "category": "Exploration"
      },
      {
        "id": 60,
        "title": "The Nuremberg Trials",
        "description": "A series of military tribunals held after World War II to prosecute prominent leaders of Nazi Germany for war crimes",
        "position": [49.4520, 11.0768],
        "category": "World War II"
      },
      {
        "id": 61,
        "title": "The Battle of Stalingrad",
        "description": "A major battle on the Eastern Front of World War II, lasting from August 23, 1942, to February 2, 1943",
        "position": [48.7080, 44.5133],
        "category": "World War II"
      },
      {
        "id": 62,
        "title": "The Louisiana Purchase",
        "description": "The acquisition of the Louisiana Territory by the United States from France in 1803, doubling the size of the country",
        "position": [37.7749, -122.4194],
        "category": "American Expansion"
      },
      {
        "id": 63,
        "title": "The Treaty of Nanking",
        "description": "The treaty that ended the First Opium War between the United Kingdom and China in 1842, ceding Hong Kong to the British",
        "position": [22.3964, 114.1095],
        "category": "Colonialism"
      },
      {
        "id": 64,
        "title": "The Great Famine in Ireland",
        "description": "A period of mass starvation and disease in Ireland from 1845 to 1852, caused by a potato blight",
        "position": [53.3498, -6.2603],
        "category": "Famine"
      },
      {
        "id": 65,
        "title": "The Battle of Saratoga",
        "description": "A pivotal battle in the American Revolutionary War, fought in 1777 and considered a turning point in favor of the Patriots",
        "position": [43.0831, -73.7846],
        "category": "American Revolution"
      },
      {
        "id": 66,
        "title": "The Marshall Plan",
        "description": "An American initiative providing economic aid to Western European countries after World War II to help rebuild their economies",
        "position": [38.9072, -77.0370],
        "category": "Post-WWII Reconstruction"
      },
      {
        "id": 67,
        "title": "The Battle of Thermopylae",
        "description": "A famous battle in 480 BCE where a small Greek force led by King Leonidas I defended the pass against the Persian army",
        "position": [38.8018, 22.5420],
        "category": "Ancient Greece"
      },
      {
        "id": 68,
        "title": "The Cultural Revolution in China",
        "description": "A sociopolitical movement in China from 1966 to 1976, led by Mao Zedong, aiming to preserve communist ideology",
        "position": [39.9042, 116.4074],
        "category": "Revolution"
      },
      {
        "id": 69,
        "title": "The Berlin Airlift",
        "description": "A massive Allied operation to supply West Berlin with food and other essentials during the Soviet blockade from 1948 to 1949",
        "position": [52.5200, 13.4050],
        "category": "Cold War"
      },
      {
        "id": 70,
        "title": "The Trail of Tears",
        "description": "The forced relocation of Native American nations from their ancestral homelands to areas west of the Mississippi River in the 1830s",
        "position": [35.4676, -94.8430],
        "category": "Native American History"
      },
      {
        "id": 71,
        "title": "The Silk Road",
        "description": "A network of trade routes that connected the East and West, facilitating cultural exchange and commerce from the 2nd century BCE to the 14th century CE",
        "position": [34.0522, -118.2437],
        "category": "Trade Routes"
      },
      {
        "id": 72,
        "title": "The Mongol Empire",
        "description": "Founded by Genghis Khan in 1206, the Mongol Empire became the largest contiguous empire in history, stretching from Eastern Europe to Asia",
        "position": [47.9188, 106.9173],
        "category": "Empire"
      },
      {
        "id": 73,
        "title": "The Forbidden City",
        "description": "A palace complex in Beijing, China, that served as the imperial palace from the Ming Dynasty to the end of the Qing Dynasty",
        "position": [39.9042, 116.4074],
        "category": "Architecture"
      },
      {
        "id": 74,
        "title": "The Opium Wars",
        "description": "Two conflicts between China and Western powers (1839–1842 and 1856–1860) over trade imbalances and the opium trade",
        "position": [22.3964, 114.1095],
        "category": "Colonialism"
      },
      {
        "id": 75,
        "title": "The Meiji Restoration",
        "description": "A period in Japanese history (1868–1912) where the Emperor Meiji was restored to power, leading to rapid modernization and industrialization",
        "position": [35.6895, 139.6917],
        "category": "Japanese History"
      },
      {
        "id": 76,
        "title": "The Great Wall of China Construction",
        "description": "Construction of the Great Wall of China began during the 7th century BC",
        "position": [40.4319, 116.5704],
        "category": "Architecture"
      },
      {
        "id": 77,
        "title": "The Indian Independence Movement",
        "description": "A series of protests and movements aimed at ending British rule in India, leading to independence in 1947",
        "position": [20.5937, 78.9629],
        "category": "Independence"
      },
      {
        "id": 78,
        "title": "The Vietnam War",
        "description": "A conflict between North and South Vietnam, along with its principal ally, the United States, lasting from 1955 to 1975",
        "position": [14.0583, 108.2772],
        "category": "Vietnam War"
      },
      {
        "id": 79,
        "title": "The Cultural Revolution in China",
        "description": "A sociopolitical movement in China from 1966 to 1976, led by Mao Zedong, aiming to preserve communist ideology",
        "position": [39.9042, 116.4074],
        "category": "Revolution"
      },
      {
        "id": 80,
        "title": "The Hiroshima and Nagasaki Atomic Bombings",
        "description": "The United States dropped atomic bombs on Hiroshima and Nagasaki in 1945, leading to Japan's surrender in World War II",
        "position": [34.3852, 132.4553],
        "category": "World War II"
      },
      {
        "id": 81,
        "title": "The Great Wall of China Construction",
        "description": "Construction of the Great Wall of China began during the 7th century BC",
        "position": [40.4319, 116.5704],
        "category": "Architecture"
      },
      {
        "id": 82,
        "title": "The Khmer Empire",
        "description": "A powerful empire in Southeast Asia from the 9th to the 15th century, centered in present-day Cambodia",
        "position": [12.5657, 104.9910],
        "category": "Empire"
      },
      {
        "id": 83,
        "title": "The Boxer Rebellion",
        "description": "An anti-foreign and anti-Christian uprising in China from 1899 to 1901, suppressed by foreign powers",
        "position": [39.9042, 116.4074],
        "category": "Rebellion"
      },
      {
        "id": 84,
        "title": "The Taj Mahal Construction",
        "description": "Construction of the Taj Mahal, a magnificent marble mausoleum in Agra, India, completed in 1653",
        "position": [27.1751, 78.0421],
        "category": "Architecture"
      },
      {
        "id": 85,
        "title": "The Indonesian Declaration of Independence",
        "description": "Indonesia declared its independence from Dutch colonial rule on August 17, 1945",
        "position": [-0.7893, 113.9213],
        "category": "Independence"
      },
      {
        "id": 86,
        "title": "The Great Wall of China Construction",
        "description": "Construction of the Great Wall of China began during the 7th century BC",
        "position": [40.4319, 116.5704],
        "category": "Architecture"
      },
      {
        "id": 87,
        "title": "The Partition of India",
        "description": "The division of British India into India and Pakistan in 1947, leading to significant demographic and political changes",
        "position": [20.5937, 78.9629],
        "category": "Partition"
      },
      {
        "id": 88,
        "title": "The Khmer Rouge Regime",
        "description": "The totalitarian regime led by Pol Pot in Cambodia from 1975 to 1979, resulting in mass genocide and atrocities",
        "position": [12.5657, 104.9910],
        "category": "Genocide"
      },
      {
        "id": 89,
        "title": "The Terracotta Army Discovery",
        "description": "The discovery of the Terracotta Army in the mausoleum of the first Emperor of China, Qin Shi Huang, in 1974",
        "position": [34.3846, 109.2724],
        "category": "Archaeology"
      },
      {
        "id": 90,
        "title": "The Korean War",
        "description": "A conflict between North Korea (supported by China and the Soviet Union) and South Korea (supported by the United Nations and the United States) from 1950 to 1953",
        "position": [38.9072, -77.0370],
        "category": "Korean War"
      },
      {
        "id": 91,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 92,
        "title": "The Sri Lankan Civil War",
        "description": "An armed conflict between the government of Sri Lanka and the Liberation Tigers of Tamil Eelam (LTTE) from 1983 to 2009",
        "position": [7.8731, 80.7718],
        "category": "Civil War"
      },
      {
        "id": 93,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 94,
        "title": "The Spice Trade",
        "description": "A historical trade network that connected the East and West, with spices as highly sought-after commodities",
        "position": [12.8797, 121.7740],
        "category": "Trade"
      },
      {
        "id": 95,
        "title": "The Malayan Emergency",
        "description": "A guerrilla war between Commonwealth armed forces and the Malayan National Liberation Army (MNLA) from 1948 to 1960",
        "position": [4.2105, 101.9758],
        "category": "Emergency"
      },
      {
        "id": 96,
        "title": "The Gupta Empire",
        "description": "An ancient Indian empire that ruled from the 4th to the 6th century, known for its cultural and scientific achievements",
        "position": [20.5937, 78.9629],
        "category": "Empire"
      },
      {
        "id": 97,
        "title": "The Carthage Civilization",
        "description": "An ancient civilization centered in Carthage (modern-day Tunisia) that played a significant role in Mediterranean history",
        "position": [36.8065, 10.1815],
        "category": "Civilization"
      },
      {
        "id": 98,
        "title": "The Great Zimbabwe Kingdom",
        "description": "A medieval kingdom in Southern Africa known for its impressive stone structures, flourishing between the 11th and 15th centuries",
        "position": [-19.0154, 29.1549],
        "category": "Kingdom"
      },
      {
        "id": 99,
        "title": "The Maurya Empire",
        "description": "An ancient Indian empire that existed from the 4th to the 2nd century BCE, under the rule of Emperor Ashoka",
        "position": [20.5937, 78.9629],
        "category": "Empire"
      },
      {
        "id": 100,
        "title": "The Battle of Cannae",
        "description": "A decisive battle between the Roman Republic and the Carthaginian forces led by Hannibal in 216 BCE",
        "position": [40.3666, 16.3091],
        "category": "Ancient Warfare"
      },
      {
        "id": 101,
        "title": "The Mali Empire",
        "description": "A medieval West African empire that thrived from the 13th to the 16th century, known for its wealth and trade routes",
        "position": [17.5707, -3.9962],
        "category": "Empire"
      },
      {
        "id": 102,
        "title": "The Tang Dynasty",
        "description": "A golden age in Chinese history (618–907) marked by advancements in art, culture, and technology",
        "position": [35.8617, 104.1954],
        "category": "Dynasty"
      },
      {
        "id": 103,
        "title": "The Kingdom of Axum",
        "description": "An ancient kingdom in present-day Ethiopia and Eritrea, known for its trading power in the Red Sea",
        "position": [14.1167, 38.7333],
        "category": "Kingdom"
      },
      {
        "id": 104,
        "title": "The Inca Empire",
        "description": "The largest empire in pre-Columbian America, centered in modern-day Peru, and known for its advanced engineering and agriculture",
        "position": [-9.1900, -75.0152],
        "category": "Empire"
      },
      {
        "id": 105,
        "title": "The Songhai Empire",
        "description": "A West African empire that existed from the 15th to the 16th century, known for its military and economic power",
        "position": [14.4974, -11.4255],
        "category": "Empire"
      },
      {
        "id": 106,
        "title": "The Yuan Dynasty",
        "description": "The dynasty in China established by Kublai Khan, the grandson of Genghis Khan, ruling from 1271 to 1368",
        "position": [35.8617, 104.1954],
        "category": "Dynasty"
      },
      {
        "id": 107,
        "title": "The Mansa Musa's Pilgrimage",
        "description": "Mansa Musa, the emperor of the Mali Empire, embarked on a famous pilgrimage to Mecca in the 14th century",
        "position": [24.4709, 39.6122],
        "category": "Pilgrimage"
      },
      {
        "id": 108,
        "title": "The Ming Treasure Voyages",
        "description": "A series of naval expeditions led by Admiral Zheng He during the early 15th century, showcasing Chinese maritime power",
        "position": [24.8800, 118.6689],
        "category": "Exploration"
      },
      {
        "id": 109,
        "title": "The Kingdom of Kush",
        "description": "An ancient kingdom in Nubia (modern Sudan), known for its powerful civilization and pyramids",
        "position": [12.8628, 30.2176],
        "category": "Kingdom"
      },
      {
        "id": 110,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 111,
        "title": "The Ottoman Empire",
        "description": "A major empire that lasted from 1299 to 1922, spanning Southeast Europe, Western Asia, and North Africa",
        "position": [41.0082, 28.9784],
        "category": "Empire"
      },
      {
        "id": 112,
        "title": "The Benin Kingdom",
        "description": "A medieval kingdom in present-day Nigeria, known for its advanced metallurgy and artistic achievements",
        "position": [6.5244, 5.8980],
        "category": "Kingdom"
      },
      {
        "id": 113,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 114,
        "title": "The Zulu Kingdom",
        "description": "A Southern African kingdom that rose to prominence under King Shaka in the early 19th century",
        "position": [-28.5306, 30.8958],
        "category": "Kingdom"
      },
      {
        "id": 115,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 116,
        "title": "The Swahili Coast Trading Cities",
        "description": "A network of trading cities along the East African coast, known for cultural exchange and commerce",
        "position": [-6.7924, 39.2083],
        "category": "Trade"
      },
      {
        "id": 117,
        "title": "The Safavid Empire",
        "description": "A Persian empire that ruled from 1501 to 1736, known for its cultural achievements and conflict with the Ottoman Empire",
        "position": [32.4279, 53.6880],
        "category": "Empire"
      },
      {
        "id": 118,
        "title": "The Ming Dynasty",
        "description": "The ruling dynasty of China from 1368 to 1644, known for its cultural and economic achievements",
        "position": [39.9042, 116.4074],
        "category": "Dynasty"
      },
      {
        "id": 119,
        "title": "The Mansa Musa's Pilgrimage",
        "description": "Mansa Musa, the emperor of the Mali Empire, embarked on a famous pilgrimage to Mecca in the 14th century",
        "position": [24.4709, 39.6122],
        "category": "Pilgrimage"
      },
      {
        "id": 120,
        "title": "The Ming Treasure Voyages",
        "description": "A series of naval expeditions led by Admiral Zheng He during the early 15th century, showcasing Chinese maritime power",
        "position": [24.8800, 118.6689],
        "category": "Exploration"
      },
      {
        "id": 121,
        "title": "The Mali Empire",
        "description": "A medieval West African empire that thrived from the 13th to the 16th century, known for its wealth and trade routes",
        "position": [17.5707, -3.9962],
        "category": "Empire"
      },
      {
        "id": 122,
        "title": "The Yuan Dynasty",
        "description": "The dynasty in China established by Kublai Khan, the grandson of Genghis Khan, ruling from 1271 to 1368",
        "position": [35.8617, 104.1954],
        "category": "Dynasty"
      },
      {
        "id": 123,
        "title": "The Kingdom of Axum",
        "description": "An ancient kingdom in present-day Ethiopia and Eritrea, known for its trading power in the Red Sea",
        "position": [14.1167, 38.7333],
        "category": "Kingdom"
      },
      {
        "id": 124,
        "title": "The Inca Empire",
        "description": "The largest empire in pre-Columbian America, centered in modern-day Peru, and known for its advanced engineering and agriculture",
        "position": [-9.1900, -75.0152],
        "category": "Empire"
      },
      {
        "id": 125,
        "title": "The Songhai Empire",
        "description": "A West African empire that existed from the 15th to the 16th century, known for its military and economic power",
        "position": [14.4974, -11.4255],
        "category": "Empire"
      },
      {
        "id": 126,
        "title": "The Yuan Dynasty",
        "description": "The dynasty in China established by Kublai Khan, the grandson of Genghis Khan, ruling from 1271 to 1368",
        "position": [35.8617, 104.1954],
        "category": "Dynasty"
      },
      {
        "id": 127,
        "title": "The Mansa Musa's Pilgrimage",
        "description": "Mansa Musa, the emperor of the Mali Empire, embarked on a famous pilgrimage to Mecca in the 14th century",
        "position": [24.4709, 39.6122],
        "category": "Pilgrimage"
      },
]


export default eventData