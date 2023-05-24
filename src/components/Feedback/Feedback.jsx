import { CardFeetBack, ListBtnFB, ButtonFB } from "./Feedback.styled";

const Feedback = ({ onClickFeedBack }) => {
  return (
    <CardFeetBack>
      <ListBtnFB>
        <ButtonFB type="button" onClick={() => onClickFeedBack("good")}>
          <div>😀</div>
          <p>Good</p>
        </ButtonFB>
        <ButtonFB type="button" onClick={() => onClickFeedBack("neutral")}>
          <div>😐</div>
          <p>Neutral</p>
        </ButtonFB>
        <ButtonFB type="button" onClick={() => onClickFeedBack("bad")}>
          <div>🙁</div>
          <p>Bad</p>
        </ButtonFB>
      </ListBtnFB>
    </CardFeetBack>
  );
};

export default Feedback;
