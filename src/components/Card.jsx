import React from "react";
import useCollapse from "react-collapsed";
import "./Card.css";

export default function Card({ item }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
      <div className="body">
        <div {...getToggleProps()} className="main">
          <h6>
            Name
            <br />
            {item.name}
          </h6>
          <h6>
            Contact
            <br />
            {item.phone}
          </h6>
          <h6>
            City
            <br />
            {item.address.city}
          </h6>
          <h6>
            Pincode
            <br />
            {item.address.zipcode}
          </h6>
          {isExpanded ? <button>Hide Details</button> : <button>View Details</button>}
        </div>
        <div {...getCollapseProps()}>
          <div className="main2">
            <div className="card">
              <ul>
                <li>
                  <h6>
                    Company name
                    <br />
                    {item.company.name}
                  </h6>
                </li>
                <li>
                  <h6>
                   Company cathphrase
                    <br />
                    {item.company.catchPhrase}
                  </h6>
                </li>
                <li>
                  <h6>
                    Name
                    <br />
                    {item.name}
                  </h6>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>
                   Company email
                    <br />
                    {item.email}
                  </h6>
                </li>
                <li>
                  <h6>
                    Company phone no.
                    <br />
                    {item.phone}
                  </h6>
                </li>
                <li>
                  <h6>
                   Company Website
                    <br />
                    {item.website}
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
