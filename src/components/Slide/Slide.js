import React, { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gitHub from '../../assets/images/gitHub.png';
import { technologySelector } from '../../redux/technologies/technologies-selectors';

const SlideName = ({ name }) => {
  const newName = useMemo(
    () => name?.substr(name.indexOf('/') + 1, name.length).toUpperCase(),
    [name],
  );
  useEffect(() => {
    document.title = newName;
  }, [newName]);

  return <div style={{ textAlign: 'center' }}>{newName}</div>;
};

const Slide = ({ name, description, stars, avatar }) => {
  const { status, error } = useSelector(technologySelector);

  const newStars = useMemo(() => Math.floor(stars / 1000), [stars]);

  const avatarUrl = avatar?.avatar_url;

  return (
    <div className='slide'>
      <img src={!error ? avatarUrl : gitHub} alt='gitHub' />
      <ul className='list-wrapper '>
        {error && <span>Item is undefined</span>}
        {status === 'loading' && <span>Loading...</span>}
        {status === 'received' && (
          <div>
            <li>
              Technology name:{' '}
              <b>
                <SlideName name={name} />
              </b>
            </li>
            <li>Description: {description}</li>
            <li>☆ {newStars}K</li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Slide;
