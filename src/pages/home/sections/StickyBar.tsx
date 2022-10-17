import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store";

const StickyBar = () => {
  const { showStickybar } = useSelector((state: RootState) => state.header);

  return (
    <div className={`stickybar ${showStickybar && "visible"}`}>
      <div className="information-item">
        <p className="primary-text">Zeptolab</p>
        <p>Marketing Performance</p>
      </div>
      <div className="information-item">
        <p className="primary-text">Location</p>
        <p>Bangkok</p>
      </div>
      <div className="information-item">
        <p className="primary-text">Duration</p>
        <p>1 Year Full-Time</p>
      </div>
      <div className="information-item">
        <p className="primary-text">Start date</p>
        <p>3 Aug 2020</p>
      </div>
      <div className="information-item">
        <p className="primary-text">Application deadline</p>
        <p>30 June 2020</p>
      </div>

      <div className="information-item">
        <p className="primary-text">Application closes in</p>
        <p>6 Day : 22 Hrs : 56 Min</p>
      </div>
    </div>
  );
};

export default StickyBar;
