import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./shop.styles.scss";
const Shop = ({ identity }) => {
  const [revealIp, setRevealIp] = useState(false);
  const [revealCreditCard, setRevealCreditCard] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [identitati, setIdentitati] = useState([]);
  // const addItem = () => {
  //   setIdentitati([...identity], {
  //     id: identity.map((val) => val.id),
  //   });
  // };
  const unlockIp = (id) => {
    setRevealIp(!revealIp);
  };

  const unlockCreditCard = () => {
    setRevealCreditCard(!revealCreditCard);
  };
  return (
    <>
      <div className="to__shop">
        <Link to="/" className="to__shop__link">
          <FaShoppingCart className="to__shop__icon" />
          <p>To Killer's Home &#171;</p>
        </Link>
      </div>

      <div className="shop">
        <input
          className="shop__search"
          type="text"
          placeholder="Search Victims"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Grid container spacing={2} className="shop__inner">
          {identity
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <Grid key={val.id} item xs={12} sm={6} md={4} align="center">
                  <img src={val.image} alt={val.id} />
                  <p className="shop__name">
                    {val.first_name} {val.last_name}
                  </p>
                  <button onClick={unlockIp} className="button button-unlock">
                    Unlock Ip
                  </button>
                  {revealIp && <p className="shop__ip">{val.ip_adress}</p>}
                  <button
                    className="button button-unlock"
                    onClick={unlockCreditCard}
                  >
                    Unlock Credit Card
                  </button>
                  {revealCreditCard && (
                    <p className="shop__credit">{val.credit_card}</p>
                  )}
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    identity: state.identity,
  };
}
export default connect(mapStateToProps)(Shop);
