// Create city
mutation {
  createCity(cityInput: {name: "Madrid", country: "ES", url: "https://d500.epimg.net/cincodias/imagenes/2018/11/09/midinero/1541785111_101699_1541785255_noticia_normal.jpg"}) {
    _id
    name
    country
    url
    current {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
    week {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
  }
}

//Show all cities
query {
  cities {
  	_id
    name
    country
    url
    current {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
    week {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
  }
}

// Name filter
query {
  city (name:"madrid"){
  	_id
    name
    country
    url
    current {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
    week {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
  }
}

// Name and date filters
query {
  city (name:"madrid", date: "2021-01-30T23:59:41.336Z"){
  	_id
    name
    country
    url
    current {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
    week {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
  }
}

// Delete all data
mutation {
  delete
}
// Delete by id 
mutation {
  delete(id: "")
}

// Update current from given dity id 
mutation {
  updateCity(id:"") {
  	_id
    name
    country
    url
    current {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
    week {
      _id
      name
      main
      date
      description
      icon
      feels
      clouds
      temp
      min
      max
      pressure
      humidity
      wind
      rain
      uvi
      hourly {
        _id
        main
        hour
        description
        icon
        feels
        temp
        min
        max
      }
    }
  }
}