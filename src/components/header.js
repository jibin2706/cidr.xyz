import React from "react";

const Header = () => (
  <header>
    <h1>
      CIDR.xyz<small>An interactive IP address and CIDR range visualizer</small>
    </h1>
    <p>
      <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">
        CIDR
      </a>{" "}
      is a notation for describing blocks of IP addresses and is used heavily in
      various networking configurations. IP addresses contain 4 octets, each
      consisting of 8 bits giving values between 0 and 255. The decimal value
      that comes after the slash is the number of bits consisting of the routing
      prefix. This in turn can be translated into a netmask, and also designates
      how many available addresses are in the block.
    </p>
  </header>
);

export default Header;
