import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import FetchUrl from '../utils/Fetch';
import { setCities, setCity } from '../app/slices/appSlice';

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: '100% !important',
  },
  root: {
    '& >div': {
      backgroundColor: 'white',
    },
    width: '100%',
    marginBottom: '1rem',
    '& .Mui-focused fieldset': {
      borderColor: '#232323 !important',
    },
    '& .Mui-focused': {
      color: '#232323',
    },
  },
}));

export default function Search() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

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
      if (active) {
        setOptions(allCities);
      }
      return dispatch(setCities(allCities));
    })();

    return () => {
      active = false;
    };
  }, [loading, dispatch]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSearch = (_, citySelected) => {
    if (citySelected) dispatch(setCity(citySelected));
  };

  return (
    <Autocomplete
      onChange={handleSearch}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => `${option.name}, ${option.country}`}
      options={options}
      loading={loading}
      classes={{ root: classes.autocomplete }}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={{ root: classes.root }}
          placeholder='Search city'
          variant='outlined'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
