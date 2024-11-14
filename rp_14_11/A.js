
let datas = [
    {
      "title": "Inception",
      "description": "A mind-bending thriller by Christopher Nolan.",
      "releaseDate": "2010-07-16",
      "image": "https://images.unsplash.com/photo-1613679074971-91fc27180061?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "locations": [
        {
          "city": "Delhi",
          "theater": "PVR Cinemas",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
        },
        {
          "city": "Delhi",
          "theater": "INOX",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1"]
        },
        {
          "city": "Mumbai",
          "theater": "PVR Cinemas",
          "showtimes": ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2"]
        }
      ]
    },
    {
      "title": "Interstellar",
      "description": "A journey beyond the stars by Christopher Nolan.",
      "releaseDate": "2014-11-07",
      "image": "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "locations": [
        {
          "city": "Mumbai",
          "theater": "Cinepolis",
          "showtimes": ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
        },
        {
          "city": "Delhi",
          "theater": "PVR Cinemas",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
        }
      ]
    },
    {
      "title": "The Dark Knight",
      "description": "Batman faces his greatest nemesis in this thrilling action film.",
      "releaseDate": "2008-07-18",
      "image": "https://images.unsplash.com/photo-1550802992-9d2ff4937387?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Mumbai",
          "theater": "PVR Cinemas",
          "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3"]
        },
        {
          "city": "Delhi",
          "theater": "INOX",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2", "B3", "C1"]
        }
      ]
    },
    {
      "title": "The Matrix",
      "description": "A computer hacker learns about the true nature of reality.",
      "releaseDate": "1999-03-31",
      "image": "https://images.unsplash.com/photo-1606395619914-34eae3b149fb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Delhi",
          "theater": "INOX",
          "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
          "seats": ["A1", "A2", "B1", "B2"]
        },
        {
          "city": "Bangalore",
          "theater": "Cinepolis",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
          "seats": ["A1", "A2", "A3", "B1"]
        }
      ]
    },
    {
      "title": "The Godfather",
      "description": "The story of a powerful crime family headed by Don Vito Corleone.",
      "releaseDate": "1972-03-24",
      "image": "https://images.unsplash.com/photo-1581091010841-50725f5d5b9b?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Mumbai",
          "theater": "Cinepolis",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
          "seats": ["A1", "A2", "A3", "B1"]
        },
        {
          "city": "Delhi",
          "theater": "PVR Cinemas",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
          "seats": ["A1", "A2", "A3", "B1", "C1"]
        }
      ]
    },
    {
      "title": "Gladiator",
      "description": "A betrayed Roman general seeks revenge against the emperor.",
      "releaseDate": "2000-05-05",
      "image": "https://images.unsplash.com/photo-1600805383656-e3ef72e0c9fc?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Delhi",
          "theater": "INOX",
          "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"],
          "seats": ["A1", "A2", "A3", "B1"]
        },
        {
          "city": "Mumbai",
          "theater": "PVR Cinemas",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
          "seats": ["A1", "A2", "B1", "C1"]
        }
      ]
    },
    {
      "title": "Titanic",
      "description": "A romance blooms between two passengers on the ill-fated RMS Titanic.",
      "releaseDate": "1997-12-19",
      "image": "https://images.unsplash.com/photo-1548897183-8ffb4f70bfe1?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Mumbai",
          "theater": "PVR Cinemas",
          "showtimes": ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
          "seats": ["A1", "A2", "A3", "B1"]
        },
        {
          "city": "Delhi",
          "theater": "INOX",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
          "seats": ["A1", "A2", "B1", "C1"]
        }
      ]
    },
    {
      "title": "Avatar",
      "description": "A paraplegic former Marine dispatched to the moon Pandora on a unique mission.",
      "releaseDate": "2009-12-18",
      "image": "https://images.unsplash.com/photo-1603201025637-0d7a6eb4a5ab?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Delhi",
          "theater": "Cinepolis",
          "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
          "seats": ["A1", "A2", "B1", "B2"]
        },
        {
          "city": "Mumbai",
          "theater": "PVR Cinemas",
          "showtimes": ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
          "seats": ["A1", "A2", "A3", "B1", "B2"]
        }
      ]
    },
    {
      "title": "Forrest Gump",
      "description": "The life story of a slow-witted but kind-hearted man from Alabama.",
      "releaseDate": "1994-07-06",
      "image": "https://images.unsplash.com/photo-1588433548013-687d7261a63a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
      "locations": [
        {
          "city": "Mumbai",
          "theater": "INOX",
          "showtimes": ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
          "seats": ["A1", "A2", "B1", "B2"]
        },
        {
          "city": "Delhi",
          "theater": "PVR Cinemas",
          "showtimes": ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
          "seats": ["A1", "A2", "A3", "B1"]
        }
      ]
    }
  ]