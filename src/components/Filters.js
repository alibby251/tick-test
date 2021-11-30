import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChanged } from '../redux/actions';

const FilterList = {
  width: "220px",
  fontSize: "24px",
  marginLeft: "auto",
  marginRight: "auto",
  margin: "25px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly"
}

function Filters() {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.activeFilters);
  const handleChange = event => dispatch(filterChanged(event.target.name));

  return (
    <>
      <div style={FilterList}>
        <input
          id="image"
          type="checkbox"
          name="image"
          checked={activeFilters.includes('image')}
          onChange={handleChange}
        />
        <label htmlFor="image">Images</label>

        <input
          id="audio"
          type="checkbox"
          name="audio"
          checked={activeFilters.includes('audio')}
          onChange={handleChange}
        />
        <label htmlFor="audio">Audio</label>
      </div>
    </>
  );
}

export default Filters;