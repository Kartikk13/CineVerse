
const moviesData = [
    { 
        id: 1, 
        title: "Inception", 
        type: "movie", 
        genre: "sci-fi", 
        year: 2010, 
        rating: 8.8, 
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", 
        description: "A skilled thief is given a chance at redemption if he can successfully perform inception: planting an idea in someone's mind." 
    },
    { 
        id: 2, 
        title: "Breaking Bad", 
        type: "series", 
        genre: "drama", 
        year: 2008, 
        rating: 9.5, 
        poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg", 
        description: "A chemistry teacher turns to cooking meth after a cancer diagnosis to secure his family's future." 
    },
    { 
        id: 3, 
        title: "Attack on Titan", 
        type: "anime", 
        genre: "action", 
        year: 2013, 
        rating: 9.0, 
        poster: "assets/attackontitans.jfif", 
        description: "Humanity fights for survival against giant humanoid Titans that devour humans." 
    },
    { 
        id: 4, 
        title: "The Dark Knight", 
        type: "movie", 
        genre: "action", 
        year: 2008, 
        rating: 9.0, 
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", 
        description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy." 
    },
    { 
        id: 5, 
        title: "Stranger Things", 
        type: "series", 
        genre: "sci-fi", 
        year: 2016, 
        rating: 8.7, 
        poster: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", 
        description: "A group of kids uncover supernatural mysteries in their small town." 
    },
    { 
        id: 6, 
        title: "Death Note", 
        type: "anime", 
        genre: "thriller", 
        year: 2006, 
        rating: 9.0, 
        poster: "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", 
        description: "A high school student discovers a notebook that allows him to kill anyone whose name he writes in it." 
    },
    { 
        id: 7, 
        title: "Pulp Fiction", 
        type: "movie", 
        genre: "drama", 
        year: 1994, 
        rating: 8.9, 
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", 
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine." 
    },
    { 
        id: 8, 
        title: "Game of Thrones", 
        type: "series", 
        genre: "fantasy", 
        year: 2011, 
        rating: 9.2, 
        poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", 
        description: "Noble families vie for control of the Iron Throne in the Seven Kingdoms." 
    },
    { 
        id: 9, 
        title: "One Punch Man", 
        type: "anime", 
        genre: "comedy", 
        year: 2015, 
        rating: 8.7, 
        poster: "assets/onepunchman.jfif", 
        description: "A superhero who can defeat any enemy with a single punch seeks a worthy opponent." 
    },
    { 
        id: 10, 
        title: "The Shawshank Redemption", 
        type: "movie", 
        genre: "drama", 
        year: 1994, 
        rating: 9.3, 
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", 
        description: "Two imprisoned men bond over years, finding redemption through acts of common decency." 
    },
    { 
        id: 11, 
        title: "The Conjuring", 
        type: "movie", 
        genre: "horror", 
        year: 2013, 
        rating: 7.5, 
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg", 
        description: "Paranormal investigators work to help a family terrorized by a dark presence." 
    },
    { 
        id: 12, 
        title: "The Office", 
        type: "series", 
        genre: "comedy", 
        year: 2005, 
        rating: 9.0, 
        poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg", 
        description: "A mockumentary on a group of office workers where the workday consists of ego clashes and inappropriate behavior." 
    },
    { 
        id: 13, 
        title: "Your Name", 
        type: "anime", 
        genre: "romance", 
        year: 2016, 
        rating: 8.4, 
        poster: "assets/yourname.jpg", 
        description: "Two teenagers share a profound connection after they begin to mysteriously swap bodies." 
    },
    { 
        id: 14, 
        title: "Interstellar", 
        type: "movie", 
        genre: "sci-fi", 
        year: 2014, 
        rating: 8.6, 
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", 
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." 
    },
    { 
        id: 15, 
        title: "The Witcher", 
        type: "series", 
        genre: "fantasy", 
        year: 2019, 
        rating: 8.2, 
        poster: "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg", 
        description: "A monster hunter struggles to find his place in a world where people often prove more wicked than beasts." 
    },
    { 
        id: 16, 
        title: "Demon Slayer", 
        type: "anime", 
        genre: "action", 
        year: 2019, 
        rating: 8.6, 
        poster: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg", 
        description: "A boy becomes a demon slayer to avenge his family and cure his sister." 
    },
    { 
        id: 17, 
        title: "Parasite", 
        type: "movie", 
        genre: "thriller", 
        year: 2019, 
        rating: 8.6, 
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg", 
        description: "A poor family schemes to become employed by a wealthy family and infiltrate their household." 
    },
    { 
        id: 18, 
        title: "Black Mirror", 
        type: "series", 
        genre: "sci-fi", 
        year: 2011, 
        rating: 8.7, 
        poster: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", 
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations collide." 
    },
    { 
        id: 19, 
        title: "Spirited Away", 
        type: "anime", 
        genre: "fantasy", 
        year: 2001, 
        rating: 8.6, 
        poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", 
        description: "A young girl enters a world of spirits and must work to free her parents and return to the human world." 
    },
    { 
        id: 20, 
        title: "The Matrix", 
        type: "movie", 
        genre: "sci-fi", 
        year: 1999, 
        rating: 8.7, 
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", 
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers." 
    },
    { 
        id: 21, 
        title: "Peaky Blinders", 
        type: "series", 
        genre: "drama", 
        year: 2013, 
        rating: 8.8, 
        poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", 
        description: "A gangster family epic set in 1900s England, centered on a gang who sew razor blades in the peaks of their caps." 
    },
    { 
        id: 22, 
        title: "Cowboy Bebop", 
        type: "anime", 
        genre: "sci-fi", 
        year: 1998, 
        rating: 8.9, 
        poster: "assets/cowboybepop.jfif", 
        description: "The futuristic misadventures of a bounty hunter crew traveling in their spaceship." 
    },
    { 
        id: 23, 
        title: "Fight Club", 
        type: "movie", 
        genre: "drama", 
        year: 1999, 
        rating: 8.8, 
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", 
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club." 
    },
    { 
        id: 24, 
        title: "The Crown", 
        type: "series", 
        genre: "drama", 
        year: 2016, 
        rating: 8.6, 
        poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg", 
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the 20th century." 
    },
    { 
        id: 25, 
        title: "Fullmetal Alchemist", 
        type: "anime", 
        genre: "fantasy", 
        year: 2003, 
        rating: 9.1, 
        poster: "https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg", 
        description: "Two brothers search for a Philosopher's Stone after an attempt to revive their mother goes wrong." 
    },
    { 
        id: 26, 
        title: "Forrest Gump", 
        type: "movie", 
        genre: "drama", 
        year: 1994, 
        rating: 8.8, 
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", 
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75." 
    },
    { 
        id: 27, 
        title: "The Mandalorian", 
        type: "series", 
        genre: "sci-fi", 
        year: 2019, 
        rating: 8.7, 
        poster: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg", 
        description: "A lone bounty hunter makes his way through the outer reaches of the galaxy." 
    },
    { 
        id: 28, 
        title: "Steins;Gate", 
        type: "anime", 
        genre: "sci-fi", 
        year: 2011, 
        rating: 9.1, 
        poster: "assets/steinsgate.jpg", 
        description: "A group of friends discover a way to send text messages to the past, leading to dire consequences." 
    },
    { 
        id: 29, 
        title: "Goodfellas", 
        type: "movie", 
        genre: "drama", 
        year: 1990, 
        rating: 8.7, 
        poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", 
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen." 
    },
    { 
        id: 30, 
        title: "Dark", 
        type: "series", 
        genre: "thriller", 
        year: 2017, 
        rating: 8.8, 
        poster: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", 
        description: "A family saga with a supernatural twist, set in a German town where the disappearance of children exposes relationships." 
    }
];