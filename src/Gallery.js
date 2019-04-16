import React from 'react';
import TvShow from './Tvshow';
import getGallery from './gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(Tvshow => (
            <TvShow
              key={Tvshow.id}
              id={Tvshow.id}
              name={Tvshow.name}
              cover={Tvshow.cover} />
          ))
        }
      </div>
    </div>
  );
}

