import { useEffect } from "react";
import { getSpots } from "../../store/spot";
import { useDispatch, useSelector } from "react-redux";
import { MdStarRate } from "react-icons/md";
import './LandingPage.css'

const LandingPage = () => {
  const dispatch = useDispatch();
  const allSpots = useSelector(state => state.spot.Spots)

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  if (!allSpots) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <ul className="all-spots-container">
      {allSpots.map(({ id, previewImage, city, state, avgRating, price }) => (
        <li key={id} className="spot-card">
          <img src="data:image/jpeg;base64,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" alt="spot-image" />
          <div className="spot-info">
            <div>{city}, {state}</div>
            <div><MdStarRate />{avgRating}</div>
          </div>
          <div className="spot-price">${price} night</div>
        </li>
      ))}
    </ul>
  )
}

export default LandingPage
