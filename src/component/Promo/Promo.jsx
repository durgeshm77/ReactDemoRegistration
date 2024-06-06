import { useContext } from "react";
import { InvestmentContext } from "../../pages/store/InvestmentContext";
function PromoComponent(props) {
  const investmentContextObj = useContext(InvestmentContext);
  console.log(investmentContextObj)

  return (
    <div id={props.ID}>
      <img src={props.promoLogo} className={props.cssClass} alt="Stylized atom" />
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>

      <h2>{investmentContextObj && investmentContextObj.itemCount}</h2>

    </div>
  );
}

export default PromoComponent;