import React from 'react';
import { useSelector } from 'react-redux';
import useFetchAsset from '../hooks/useFetchAsset';
import Snackbar from '../styles/Snackbar';

function Media({
  match: {
    params: { nasaid }
  }
}) {
  const isFetching = useSelector(state => state.assets.isFetching);
  const asset = useSelector(state => state.assets.items[nasaid]);

  useFetchAsset(nasaid);

  return (
    <>
      <hr />

      {asset && (
        <div>
          <h1>{asset.metadata['XMP:Title']}</h1>
          <p>{asset.metadata['XMP:Description']}</p>

          {asset.metadata['AVAIL:MediaType'] === 'image' && (
            <img
              src={asset.links[1].href}
              alt={asset.metadata['AVAIL:Title']}
            />
          )}

          {asset.metadata['AVAIL:MediaType'] === 'audio' && (
            <audio src={asset.links[0].href} controls />
          )}
        </div>
      )}

      <Snackbar show={isFetching}>
        Loading Asset&hellip;
      </Snackbar>
    </>
  );
}

export default Media;