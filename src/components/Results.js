import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetchResults from '../hooks/useFetchResults';
import audioIcon from '../media/icon-audio.svg';
import imageIcon from '../media/icon-image.svg';
import Result from '../styles/Result';

const icons = {
  video: audioIcon,
  image: imageIcon
};

const grid = {
  columnCount: "3"
}

function Results() {
  const results = useSelector(state => state.results);

  useFetchResults();

  return (
    <div style={grid}>
      {results.items &&
        results.items.map(item => {
          const { title, media_type: type, nasa_id } = item.data[0];

          return (
            <Result as={Link} to={`media/${nasa_id}`} key={nasa_id} data-testid="result-item">
              <Result.Type src={icons[type]} alt={type} />

              {(type === 'image' || type === 'video') && (
                <Result.Preview src={item.links[0].href} alt={title} />
              )}
            </Result>
          );
        })}
    </div>
  );
}

export default Results;