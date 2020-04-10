import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

const Page = props => (
  <div>
    <Meta />
    <Header />
    <p>Hey I'm the Page component</p>
    {props.children}
  </div>
);

export default Page;
