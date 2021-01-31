import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDay } from '../app/slices/appSlice';
import { dateString } from '../utils/date';

export function Item({ id }) {
  const dispatch = useDispatch();
  const [{ _id, name, date, hourly, temp, min, max }, setActiveDay] = useState(
    {}
  );
  const [img, setImg] = useState('');
  const [init, setInit] = useState(false);

  const { selectedCity } = useSelector((state) => state.app);

  useEffect(() => {
    const { week, url, current } = selectedCity;
    let day;
    day = week.find((item) => item._id === id);
    if (!day) {
      day = current;
    }
    setActiveDay(day);
    setImg(url);
    setInit(true);
  }, [selectedCity, id]);

  if (setInit) {
  }

  const handleLeaveOverlay = () => {
    dispatch(setDay(null));
  };

  return (
    <>
      {init && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: 'auto' }}
            className='overlay'
            onClick={handleLeaveOverlay}
          >
            <Link to='/' />
          </motion.div>
          <div className='card-content-container open'>
            <motion.div
              className='card-content'
              layoutId={`card-container-${_id}`}
            >
              <motion.div
                className='card-image-container minimal'
                layoutId={`card-image-container-${_id}`}
                style={{ background: `url(${img})` }}
              ></motion.div>
              <motion.div
                className='title-container'
                layoutId={`title-container-${_id}`}
              >
                <span className='category'>{dateString(date)}</span>
                <h2>{name}</h2>
                <div className='temp'>{`${Math.round(temp)}º`}</div>
                <div>
                  <span className='top'>max {`${Math.round(max)}º`} /</span>
                  <span className='top'> min {`${Math.round(min)}º`}</span>
                </div>
              </motion.div>
              <motion.div className='content-container minimal' animate>
                {hourly &&
                  hourly.map(({ _id, hour, temp, min, max }) => (
                    <div key={_id} className='hour-row'>
                      <h4>Hour: {hour}</h4>
                      <h4>Temp {`${Math.round(temp)}º`}</h4>
                      <h4>Max {`${Math.round(max)}º`}</h4>
                      <h4>Min {`${Math.round(min)}º`}</h4>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
