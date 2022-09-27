import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const navigator = useNavigate();
  const { id } = useParams();

  const room = useSelector((state) => state.rooms.rooms.find((room) => room.id === id));

  const { attributes } = room;
  return room ? (
    <div className="room">
      <img src={attributes.photo} alt="Room" className="roomPicture" />
      <aside className="roomDetails">
        <div className="roomName">
          <h2>{attributes.name}</h2>
        </div>
        <div className="roomStars">
          <span>Stars</span>
          <span>{attributes.stars}</span>
        </div>
        <div className="roomGuests">
          <span>Ideal for </span>
          <span>{attributes.persons_allowed}</span>
          <span> people</span>
        </div>
        <div className="roomDescription">
          <span>{attributes.description}</span>
        </div>
        <div className="roomPrice">
          <span>Price: $</span>
          <span>{attributes.price}</span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => navigator(`/Reserve/${room.id}`)}
          >
            Reserve Room
          </button>
        </div>
      </aside>
    </div>
  ) : (
    // if no room is found with the given id
    <div>No room found</div>
  );
};

export default Detail;
