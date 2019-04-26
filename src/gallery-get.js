import breakingbad from './images/bb-cover.jpg';
import gameofthrones from './images/got-cover.jpg';
import bettercallsaul from './images/bcs-cover.jpg';
import walkingdead from './images/wd-cover.jpg';
import prisonbreak from './images/pd-cover.jpg';
import gotham from './images/g-poster.jpg';

export default function getGallery() {
    return [
      { id: 'breakingbad', name: 'Breaking bad', cover: breakingbad },
      { id: 'gameofthrones', name: 'Game Of Thrones', cover: gameofthrones, details: 'One of the best tv shows ever!' },
      { id: 'bettercallsaul', name: 'Better call saul', cover: bettercallsaul },
      { id: 'walkingdead', name: 'Walking Dead', cover: walkingdead },
      { id: 'prisonbreak', name: 'Prison Break', cover: prisonbreak },
      { id: 'gotham', name: 'Gotham', cover: gotham }
    ];
  }