import { useEffect } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchUrl from './utils/Fetch';
import { Header } from './components/Header';
import { Item } from './components/Item';
import { List } from './components/List';
import { setCities, setCity } from './app/slices/appSlice';

const Landing = () => {
  const { selectedDay } = useSelector((state) => state.app);

  return (
    <>
      <List selectedId={selectedDay} />
      <AnimatePresence>
        {selectedDay && <Item id={selectedDay} />}
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const {
    selectedCity: { _id },
  } = useSelector((state) => state.app);

  useEffect(() => {
    (async () => {
      const fetchCities = `
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
      }`;
      const allCities = await FetchUrl({
        payload: fetchCities,
        name: 'cities',
      });
      const [firstCity] = allCities;
      dispatch(setCity(firstCity));
      return dispatch(setCities(allCities));
    })();
  }, [dispatch]);

  //Each minute will update the selected and current item, and it will refresh
  useEffect(() => {
    const interval = setInterval(async () => {
      const updateCurrentCity = `
    mutation {
      updateCity(id:"${_id}") {
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
    }`;
      const updatedCity = await FetchUrl({
        payload: updateCurrentCity,
        name: 'updateCity',
      });
      dispatch(setCity(updatedCity));
    }, 60000);

    return () => clearInterval(interval);
  }, [_id, dispatch]);

  return (
    <div className='container'>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <BrowserRouter>
          <Route path={['/:id', '/']} component={Landing} />
        </BrowserRouter>
      </AnimateSharedLayout>
    </div>
  );
};

export default App;
