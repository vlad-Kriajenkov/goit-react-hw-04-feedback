import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";
import { ContainerApp } from "./App.styled";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const allState = { good, neutral, bad, total, positivePercentage };

  const onClickFeedBack = (event) => {
    switch (event) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        break;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    setTotal((prevTotal) => prevTotal + 1);
  };
  const countPositiveFeedbackPercentage = () => {
    let positiveProcent =
      Math.round((good / (good + neutral + bad)) * 100) || 0;
    setPositivePercentage(positiveProcent);
  };
  return (
    <ContainerApp>
      <Section title="Please leave feedback">
        <Feedback onClickFeedBack={onClickFeedBack} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification />
        ) : (
        
          <Statistics state={allState} />
        )}
      </Section>
    </ContainerApp>
  );
}
