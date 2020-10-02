import './style.scss';

import { Netmask } from 'netmask';
import React, {  useState } from 'react';
import ReactDOM from 'react-dom';

function IPAddress() {
  const [octets, setOctets] = useState([10, 88, 135, 144])
  const [cidr, setCidr] = useState(28)

  const handleChange = (event) => {
    var octets = octets;
    var val = +event.target.value.replace(/[^0-9]/g, '');
    var octet = event.target.attributes['data-octet'].value;
    if (octet == 'cidr') {
      if (val <= 32) {
        setCidr(val)
      }
    } else {
      if (val <= 255) {
        octets[+octet] = val;
        setOctets(octets)
      }
    }
  }

  const handleKeyDown = (event) => {
    var lowerOctetValue = 0;
    var higherOctetValue = event.target.dataset.octet === 'cidr' ? 32 : 255;
    if (event.key === 'ArrowDown' && event.target.value > lowerOctetValue) {
      event.target.value = +event.target.value - 1;
      handleChange(event);
    }
    if (event.key === 'ArrowUp' && event.target.value < higherOctetValue) {
      event.target.value = +event.target.value + 1;
      handleChange(event);
    }
  }

  const getPretty = () => {
    return octets.join('.') + '/' + cidr;
  }

  var details = new Netmask(getPretty());

  return (
    <div className="ip-address">
      <div className="address">
        {[...Array(4)].map((_, octet) => (
          <span className="octet" key={octet}>
            <input
              className="octet"
              type="text"
              data-octet={octet}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={octets[octet]}
            />
            <span className="dot">{octet == '3' ? '/' : '.'}</span>
          </span>
        ))}
        <input
          className="cidr"
          type="text"
          data-octet="cidr"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={cidr}
        />
      </div>

      <div className="bits">
        <ol>
          {[...Array(4)].map((_, octet) => (
            <li className="octet" key={octet}>
              <ol>
                {[...Array(8)].map((_, bit) => (
                  <li
                    className={
                      octet * 8 + bit > cidr - 1
                        ? 'bit masked'
                        : 'bit unmasked'
                    }
                    key={bit}
                  >
                    {(octets[octet] & (1 << (7 - bit))) >> (7 - bit)}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>

      <div className="details">
        <span className="netmask">
          <span className="value">{details.mask}</span>
          <span className="label">Netmask</span>
        </span>
        <span className="first">
          <span className="value">{details.first}</span>
          <span className="label">First IP</span>
        </span>
        <span className="last">
          <span className="value">{details.last}</span>
          <span className="label">Last IP</span>
        </span>
        <span className="count">
          <span className="value">{details.size.toLocaleString()}</span>
          <span className="label">Count</span>
        </span>
      </div>
    </div>
  );

}

ReactDOM.render(<IPAddress />, document.getElementById('app'));
