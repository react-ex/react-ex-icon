import React, { Component } from 'react';
import Icon from '../../src';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="demo">
        <section className="demo__first">
          <div className="demo__first__title">{ '<Icon className="class name"/>' }</div>
          <Icon className="demo__first__one"/>
        </section>

        <section className="demo__second">
          <div className="demo__second__title">{ '<Icon className="demo__second__one">&#xe61e;</Icon>' }</div>
          <Icon className="demo__second__one">&#xe61e;</Icon>
        </section>
      </div>
    );
  }
}
