import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import "./shop.styles.scss";
const Shop = ({ identity }) => {
  const { revealIp, setRevealIp } = useState(false);
  const { revealCreditCard, setRevealCreditCard } = useState(false);
  const unlockIp = () => {
    setRevealIp(!revealIp);
  };

  const unlockCreditCard = () => {};
  return (
    <div className="shop">
      <Grid container spacing={2} className="shop__inner">
        {identity.map((val, key) => {
          return (
            <Grid key={val.id} item xs={12} sm={6} md={4} align="center">
              <img src={val.image} />
              <p className="shop__name">
                {val.first_name} {val.last_name}
              </p>
              <button onClick={unlockIp}>Unlock Ip</button>
              {revealIp ? <p className="shop__ip">{val.ip_adress}</p> : null}

              {/* <button onClick={unlockCreditCard}>Unlock Credit Card</button> */}
              <p className="shop__credit">{val.credit_card}</p>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    identity: state.identity,
  };
}
export default connect(mapStateToProps)(Shop);
