mutation {
  createCity(cityInput: {name: "Madrid", country: "ES", url: "https://d500.epimg.net/cincodias/imagenes/2018/11/09/midinero/1541785111_101699_1541785255_noticia_normal.jpg"}) {
    _id
    name
    country
    url
    current {
      main
      temp
    }
    week {
      main
      temp
      hourly {
        main
        temp
      }
    }
  }
}


query {
  cities {
    _id
    name
    country
    url
    current {
      _id
    }
    week {
      _id
    }
  }
}