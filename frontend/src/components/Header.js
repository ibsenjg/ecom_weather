import { useSelector } from 'react-redux';
import Search from './Search';
import { dateString } from '../utils/date';

export const Header = () => {
  const { selectedCity } = useSelector((state) => state.app);
  const filled = selectedCity && selectedCity.current;
  return (
    <header>
      <div className='relative'>
        <span className='date'>
          {dateString(filled ? selectedCity.current.date : null)}
        </span>
        <h1>{filled ? selectedCity.name : 'Today'}</h1>
        <div className='avatar'>
          <img
            className='card-image'
            src={
              'https://avatars.githubusercontent.com/u/18384611?s=460&u=8ad3dc9582c6e27076bf90890551a2371d619a38&v=4'
            }
            alt='ibsen gitgub page profile'
          />
        </div>
      </div>
      <Search />
    </header>
  );
};
