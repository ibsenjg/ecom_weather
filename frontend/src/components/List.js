import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setDay } from '../app/slices/appSlice';
import { dateString } from '../utils/date';

const Card = ({ _id: id, img, name, date, temp, max, min }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(setDay(id));
  };

  return (
    <li className={`card`}>
      <div className='card-content-container'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
            style={{ background: `url(${img})` }}
          >
            {/* <img className='card-image' src={img} alt='' /> */}
          </motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <span className='category'>{dateString(date)}</span>
            <h2>{name}</h2>
            <div className='temp'>{`${Math.round(temp)}º`}</div>
            <div>
              <span className='top'>max {`${Math.round(max)}º`} /</span>
              <span className='top'> min {`${Math.round(min)}º`}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {id && (
        <Link
          to={id}
          className={`card-open-link`}
          onClick={handleClick.bind(this, id)}
        />
      )}
    </li>
  );
};

const Carda = ({ _id: id, img, name, date, temp, min, max }) => {
  return (
    <li className={`card`}>
      <div className='card-content-container'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
            style={{ background: `url(${img})` }}
          ></motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <span className='category'>{dateString(date)}</span>
            <h2>Current time</h2>
            <div className='temp'>{`${Math.round(temp)}º`}</div>
            <div>
              <span className='top'>max {`${Math.round(max)}º`} /</span>
              <span className='top'> min {`${Math.round(min)}º`}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
};

export const List = ({ selectedId }) => {
  const [week, setWeek] = useState([]);
  const [current, setCurrent] = useState([]);
  const [img, setImg] = useState('');

  const { selectedCity } = useSelector((state) => state.app);

  useEffect(() => {
    if (selectedCity) {
      const { current, week, url } = selectedCity;
      setWeek(week);
      setCurrent(current);
      setImg(url);
    }
  }, [selectedCity]);

  return (
    <ul className='card-list'>
      <>
        {current && (
          <Carda
            {...current}
            img={img}
            isSelected={current._id === selectedId}
          />
        )}
        {week &&
          week.map((day) => (
            <Card
              key={day._id}
              img={img}
              {...day}
              isSelected={day._id === selectedId}
            />
          ))}
      </>
    </ul>
  );
};
