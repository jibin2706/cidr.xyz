import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import { Head } from "react-static";

class Meta extends Component {
  render() {
    return (
      <Head>
        <title>CIDR - Classless Inter-Domain Routing</title>
        <meta
          name="keywords"
          content="cidr, ip address, range, netmask, visualizer, ip address calculator"
        />
        <meta
          name="description"
          content="Interactive IP address and CIDR range visualizer"
        />
        <meta name="theme-color" content="#666999" />
      </Head>
    );
  }
}

export default Meta;
