// Movie data using TMDB public image URLs
const TMDB_IMG = 'https://image.tmdb.org/t/p';
const POSTER = `${TMDB_IMG}/w500`;
const BACKDROP = `${TMDB_IMG}/original`;

export const FEATURED = {
  id: 'featured-1',
  title: 'Dune: Part Two',
  description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
  backdrop: `${BACKDROP}/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`,
  poster: `${POSTER}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`,
  year: 2024,
  rating: 'PG-13',
  duration: '2h 46m',
  match: '98%',
  genres: ['Sci-Fi', 'Adventure', 'Drama'],
  cast: ['Timothée Chalamet', 'Zendaya', 'Austin Butler', 'Florence Pugh'],
};

export const categories = [
  {
    title: 'Trending Now',
    id: 'trending',
    movies: [
      { id: 't1', title: 'Oppenheimer', poster: `${POSTER}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`, year: 2023, rating: 'R', duration: '3h 0m', match: '97%', genres: ['Drama', 'History'], description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.' },
      { id: 't2', title: 'The Batman', poster: `${POSTER}/74xTEgt7R36Fpooo50r9T25onhq.jpg`, year: 2022, rating: 'PG-13', duration: '2h 56m', match: '92%', genres: ['Action', 'Crime'], description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.' },
      { id: 't3', title: 'Everything Everywhere All at Once', poster: `${POSTER}/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg`, year: 2022, rating: 'R', duration: '2h 19m', match: '95%', genres: ['Action', 'Comedy', 'Sci-Fi'], description: 'A middle-aged Chinese immigrant is swept up in an insane adventure involving parallel universes.' },
      { id: 't4', title: 'Top Gun: Maverick', poster: `${POSTER}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`, year: 2022, rating: 'PG-13', duration: '2h 11m', match: '96%', genres: ['Action', 'Drama'], description: 'After thirty years of service, Pete Mitchell is where he belongs, pushing the limits as a top naval aviator.' },
      { id: 't5', title: 'Spider-Man: No Way Home', poster: `${POSTER}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`, year: 2021, rating: 'PG-13', duration: '2h 28m', match: '94%', genres: ['Action', 'Adventure', 'Sci-Fi'], description: 'Peter Parker seeks Doctor Strange\'s help to make people forget he is Spider-Man.' },
      { id: 't6', title: 'The Menu', poster: `${POSTER}/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg`, year: 2022, rating: 'R', duration: '1h 47m', match: '88%', genres: ['Horror', 'Comedy', 'Thriller'], description: 'A couple travels to a remote island to eat at an exclusive restaurant run by a celebrated chef.' },
      { id: 't7', title: 'Glass Onion', poster: `${POSTER}/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg`, year: 2022, rating: 'PG-13', duration: '2h 19m', match: '90%', genres: ['Comedy', 'Crime', 'Mystery'], description: 'Detective Benoit Blanc travels to Greece for his latest case.' },
      { id: 't8', title: 'Avatar: The Way of Water', poster: `${POSTER}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`, year: 2022, rating: 'PG-13', duration: '3h 12m', match: '87%', genres: ['Sci-Fi', 'Adventure'], description: 'Jake Sully and Neytiri form a new family and explore the underwater regions of Pandora.' },
    ],
  },
  {
    title: 'Popular on Cineverse',
    id: 'popular',
    movies: [
      { id: 'p1', title: 'Interstellar', poster: `${POSTER}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`, year: 2014, rating: 'PG-13', duration: '2h 49m', match: '98%', genres: ['Sci-Fi', 'Adventure', 'Drama'], description: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.' },
      { id: 'p2', title: 'Inception', poster: `${POSTER}/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg`, year: 2010, rating: 'PG-13', duration: '2h 28m', match: '97%', genres: ['Action', 'Sci-Fi', 'Thriller'], description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.' },
      { id: 'p3', title: 'The Dark Knight', poster: `${POSTER}/qJ2tW6WMUDux911BTUgMe1Mq2SH.jpg`, year: 2008, rating: 'PG-13', duration: '2h 32m', match: '99%', genres: ['Action', 'Crime', 'Drama'], description: 'Batman raises the stakes in his war on crime against the menace known as the Joker.' },
      { id: 'p4', title: 'Parasite', poster: `${POSTER}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`, year: 2019, rating: 'R', duration: '2h 12m', match: '96%', genres: ['Drama', 'Thriller', 'Comedy'], description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.' },
      { id: 'p5', title: 'Whiplash', poster: `${POSTER}/7fn624j5lj3xTme2SgiLCeuedmO.jpg`, year: 2014, rating: 'R', duration: '1h 46m', match: '95%', genres: ['Drama', 'Music'], description: 'A promising young drummer enrolls at a cut-throat music conservatory guided by an abusive instructor.' },
      { id: 'p6', title: 'The Shawshank Redemption', poster: `${POSTER}/9cjIGRQL5fSUZsn2zGhPKJqLaOu.jpg`, year: 1994, rating: 'R', duration: '2h 22m', match: '99%', genres: ['Drama'], description: 'Over the course of years, two convicts form an unlikely friendship, seeking consolation and redemption through acts of common decency.' },
      { id: 'p7', title: 'Fight Club', poster: `${POSTER}/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`, year: 1999, rating: 'R', duration: '2h 19m', match: '93%', genres: ['Drama', 'Thriller'], description: 'An insomniac office worker forms an underground fight club with a soap salesman.' },
      { id: 'p8', title: 'Pulp Fiction', poster: `${POSTER}/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`, year: 1994, rating: 'R', duration: '2h 34m', match: '96%', genres: ['Crime', 'Drama'], description: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
    ],
  },
  {
    title: 'Action & Adventure',
    id: 'action',
    movies: [
      { id: 'a1', title: 'Mad Max: Fury Road', poster: `${POSTER}/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg`, year: 2015, rating: 'R', duration: '2h 0m', match: '96%', genres: ['Action', 'Adventure', 'Sci-Fi'], description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler searching for her homeland.' },
      { id: 'a2', title: 'John Wick: Chapter 4', poster: `${POSTER}/vZloFAK7NmvMGKE7LsyLBlhJgaP.jpg`, year: 2023, rating: 'R', duration: '2h 49m', match: '94%', genres: ['Action', 'Thriller', 'Crime'], description: 'John Wick uncovers a path to defeating The High Table, but first must face a new enemy.' },
      { id: 'a3', title: 'Gladiator', poster: `${POSTER}/ty8TGRuvJLPUmAR1H1nRIsgCGnr.jpg`, year: 2000, rating: 'R', duration: '2h 35m', match: '95%', genres: ['Action', 'Drama', 'Adventure'], description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.' },
      { id: 'a4', title: 'The Matrix', poster: `${POSTER}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`, year: 1999, rating: 'R', duration: '2h 16m', match: '97%', genres: ['Action', 'Sci-Fi'], description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.' },
      { id: 'a5', title: 'Mission: Impossible - Dead Reckoning', poster: `${POSTER}/NNxYkU70HPurnNCSiCjYAmacwm.jpg`, year: 2023, rating: 'PG-13', duration: '2h 43m', match: '91%', genres: ['Action', 'Thriller'], description: 'Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.' },
      { id: 'a6', title: 'Extraction 2', poster: `${POSTER}/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg`, year: 2023, rating: 'R', duration: '2h 2m', match: '85%', genres: ['Action', 'Thriller'], description: 'After barely surviving his wounds, Tyler Rake is back as the underworld\'s most lethal weapon.' },
      { id: 'a7', title: 'Guardians of the Galaxy Vol. 3', poster: `${POSTER}/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg`, year: 2023, rating: 'PG-13', duration: '2h 30m', match: '93%', genres: ['Action', 'Adventure', 'Comedy'], description: 'The Guardians must protect Rocket from his past while facing a powerful new enemy.' },
      { id: 'a8', title: 'Kill Bill: Vol. 1', poster: `${POSTER}/v7TKTaBAstXJUCDKDGVpWsGz02E.jpg`, year: 2003, rating: 'R', duration: '1h 51m', match: '92%', genres: ['Action', 'Crime'], description: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.' },
    ],
  },
  {
    title: 'Sci-Fi & Fantasy',
    id: 'scifi',
    movies: [
      { id: 's1', title: 'Blade Runner 2049', poster: `${POSTER}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`, year: 2017, rating: 'R', duration: '2h 44m', match: '93%', genres: ['Sci-Fi', 'Drama', 'Mystery'], description: 'A young blade runner discovers a long-buried secret that could plunge what\'s left of society into chaos.' },
      { id: 's2', title: 'Arrival', poster: `${POSTER}/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg`, year: 2016, rating: 'PG-13', duration: '1h 56m', match: '94%', genres: ['Sci-Fi', 'Drama'], description: 'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.' },
      { id: 's3', title: 'The Martian', poster: `${POSTER}/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg`, year: 2015, rating: 'PG-13', duration: '2h 24m', match: '95%', genres: ['Sci-Fi', 'Adventure', 'Drama'], description: 'An astronaut is stranded on Mars and must find a way to survive while NASA works to bring him home.' },
      { id: 's4', title: 'Ex Machina', poster: `${POSTER}/btbRB7BrD887pW9mI2hbRUhUbGr.jpg`, year: 2014, rating: 'R', duration: '1h 48m', match: '91%', genres: ['Sci-Fi', 'Drama', 'Thriller'], description: 'A programmer is selected to participate in an experiment evaluating the human qualities of an AI.' },
      { id: 's5', title: 'Annihilation', poster: `${POSTER}/d3qcpfNwbAMCNqWDHzPQsUYiUgE.jpg`, year: 2018, rating: 'R', duration: '1h 55m', match: '88%', genres: ['Sci-Fi', 'Horror', 'Mystery'], description: 'A biologist signs up for a dangerous expedition into a mysterious zone where the laws of nature don\'t apply.' },
      { id: 's6', title: 'The Lord of the Rings: The Fellowship', poster: `${POSTER}/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg`, year: 2001, rating: 'PG-13', duration: '2h 58m', match: '98%', genres: ['Fantasy', 'Adventure'], description: 'A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring.' },
      { id: 's7', title: 'Eternal Sunshine of the Spotless Mind', poster: `${POSTER}/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg`, year: 2004, rating: 'R', duration: '1h 48m', match: '94%', genres: ['Sci-Fi', 'Drama', 'Romance'], description: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.' },
      { id: 's8', title: 'Tenet', poster: `${POSTER}/k68nPLbIST6NP96JmTxmZijEvCA.jpg`, year: 2020, rating: 'PG-13', duration: '2h 30m', match: '86%', genres: ['Sci-Fi', 'Action', 'Thriller'], description: 'Armed with only one word, an agent journeys through a twilight world of international espionage on a mission to prevent World War III.' },
    ],
  },
  {
    title: 'Award-Winning Dramas',
    id: 'dramas',
    movies: [
      { id: 'd1', title: 'The Godfather', poster: `${POSTER}/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`, year: 1972, rating: 'R', duration: '2h 55m', match: '99%', genres: ['Crime', 'Drama'], description: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant youngest son.' },
      { id: 'd2', title: 'Schindler\'s List', poster: `${POSTER}/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg`, year: 1993, rating: 'R', duration: '3h 15m', match: '98%', genres: ['Drama', 'History', 'War'], description: 'In German-occupied Poland, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.' },
      { id: 'd3', title: 'No Country for Old Men', poster: `${POSTER}/bj1v6YKF8yHqA489GFiHRgeTVMi.jpg`, year: 2007, rating: 'R', duration: '2h 2m', match: '95%', genres: ['Crime', 'Drama', 'Thriller'], description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong in the desert.' },
      { id: 'd4', title: 'There Will Be Blood', poster: `${POSTER}/fa0RDkAlCec0STeMNAhPaF89q6U.jpg`, year: 2007, rating: 'R', duration: '2h 38m', match: '93%', genres: ['Drama'], description: 'A story of family, religion, and oil told through the ruthless rise of a silver miner turned oilman.' },
      { id: 'd5', title: 'The Grand Budapest Hotel', poster: `${POSTER}/eWDyYq6ElEkFvJECRjJLBqhGWgN.jpg`, year: 2014, rating: 'R', duration: '1h 39m', match: '92%', genres: ['Comedy', 'Drama', 'Adventure'], description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years as a lobby boy.' },
      { id: 'd6', title: 'Moonlight', poster: `${POSTER}/4911T5FbJ9eD2Faz5Z8cT3SUhU3.jpg`, year: 2016, rating: 'R', duration: '1h 51m', match: '94%', genres: ['Drama'], description: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.' },
      { id: 'd7', title: '1917', poster: `${POSTER}/iZf0KyrE25z1sage4SYFLCCrMi9.jpg`, year: 2019, rating: 'R', duration: '1h 59m', match: '91%', genres: ['Drama', 'War'], description: 'Two British soldiers are sent to deliver a message deep in enemy territory that could save 1,600 men.' },
      { id: 'd8', title: 'The Social Network', poster: `${POSTER}/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg`, year: 2010, rating: 'PG-13', duration: '2h 0m', match: '93%', genres: ['Drama', 'Biography'], description: 'The story of the founding of Facebook and the lawsuits that followed.' },
    ],
  },
  {
    title: 'Horror & Suspense',
    id: 'horror',
    movies: [
      { id: 'h1', title: 'Get Out', poster: `${POSTER}/qbaIHQpjMGW2VJe7gPbMfUZqRxs.jpg`, year: 2017, rating: 'R', duration: '1h 44m', match: '95%', genres: ['Horror', 'Mystery', 'Thriller'], description: 'A young African-American visits his white girlfriend\'s parents, where his growing uneasiness about their reception leads to a horrifying discovery.' },
      { id: 'h2', title: 'Hereditary', poster: `${POSTER}/p9fmuz2Oj1JkMHuFRIL1tMAfQPH.jpg`, year: 2018, rating: 'R', duration: '2h 7m', match: '89%', genres: ['Horror', 'Drama', 'Mystery'], description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their grandmother.' },
      { id: 'h3', title: 'A Quiet Place', poster: `${POSTER}/nAU74GmpUk7t5iklEp3bufwDq4n.jpg`, year: 2018, rating: 'PG-13', duration: '1h 30m', match: '92%', genres: ['Horror', 'Sci-Fi', 'Drama'], description: 'A family struggles to survive in a world overtaken by creatures that hunt by sound.' },
      { id: 'h4', title: 'The Silence of the Lambs', poster: `${POSTER}/uS9m8OBk1RVfw59RPSr5lICdRxn.jpg`, year: 1991, rating: 'R', duration: '1h 58m', match: '97%', genres: ['Crime', 'Drama', 'Thriller'], description: 'A young FBI cadet must receive the help of an incarcerated cannibalistic killer to help catch another serial killer.' },
      { id: 'h5', title: 'The Shining', poster: `${POSTER}/9fgh2GFjVEhOZE5eGiaoBOkVDVK.jpg`, year: 1980, rating: 'R', duration: '2h 24m', match: '96%', genres: ['Horror', 'Drama'], description: 'A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence.' },
      { id: 'h6', title: 'Midsommar', poster: `${POSTER}/7LEI8ulZEBdt75DNb9foYMF3kmc.jpg`, year: 2019, rating: 'R', duration: '2h 28m', match: '87%', genres: ['Horror', 'Drama', 'Mystery'], description: 'A couple travels to Northern Europe to visit a rural Swedish festival, but the retreat quickly devolves into a nightmare.' },
      { id: 'h7', title: 'Us', poster: `${POSTER}/ux2dU1jQ2ACIMShzB3yP93Udezr.jpg`, year: 2019, rating: 'R', duration: '1h 56m', match: '86%', genres: ['Horror', 'Thriller'], description: 'A family\'s serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.' },
      { id: 'h8', title: 'The Witch', poster: `${POSTER}/zap5Jv7pOTbMINfWBdxqiBqJOCT.jpg`, year: 2015, rating: 'R', duration: '1h 32m', match: '88%', genres: ['Horror', 'Drama', 'Mystery'], description: 'A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.' },
    ],
  },
];

export const myList = [
  categories[0].movies[0],
  categories[1].movies[2],
  categories[2].movies[0],
  categories[3].movies[5],
  categories[4].movies[0],
];
