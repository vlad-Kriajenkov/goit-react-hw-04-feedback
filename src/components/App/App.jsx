import React, { Component } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";
import { ContainerApp } from "./App.styled";
import { Section } from "components/Section/Section";
import {Notification} from 'components/Notification/Notification'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  onClickFeedBack = (event) => {
    this.setState((prevState) => ({
      [event]: prevState[event] + 1,
    }));
    this.CountTotalFeedback();
    this.CountPositiveFeedbackPercentage();
  };

  CountTotalFeedback = () => {
    const total = this.state.total + 1;
    this.setState({
      total: total,
    });
  };

  CountPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positiveProcent =
      Math.round((good / (good + neutral + bad)) * 100) || 0;
    this.setState({
      positivePercentage: positiveProcent,
    });
  }; 

  render() {
    return (
      <ContainerApp>
        <Section title="Please leave feedback">
          <Feedback onClickFeedBack={this.onClickFeedBack} />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? <Notification/>: <Statistics state={this.state}/> }
          
        </Section>
        
      </ContainerApp>
    );
  }
}

export default App;
