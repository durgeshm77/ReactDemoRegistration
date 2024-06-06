import { useContext } from "react";
import InvestmentContextProvider, { InvestmentContext } from "../../pages/store/InvestmentContext";

export default function UserInputBlock({ investmentObj, onHandleChnage }) {
    const investmentContextObj = useContext(InvestmentContext);
    //console.log(investmentContextObj)
    return (

        <div id="user-input" >
            <div className="input-group">
                <div >
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" name="initialInvestment" value={investmentObj.initialInvestment}
                        onChange={(e) => onHandleChnage(e)} required />
                </div>
                <div >
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" name="annualInvestment"
                        value={investmentObj.annualInvestment} onChange={(e) => onHandleChnage(e)} required />
                </div>
            </div>

            <div className="input-group">
                <div >
                    <label>EXPECTED RETURN</label>
                    <input type="number" name="expectedReturn"
                        value={investmentObj.expectedReturn} onChange={(e) => onHandleChnage(e)} required />
                </div>
                <div >
                    <label>DURATION</label>
                    <input type="number" name="duration"
                        value={investmentObj.duration} onChange={(e) => onHandleChnage(e)} required />
                </div>

                <div >
                    <button onClick={() => investmentContextObj.addItemToCart(123, 'asd', 1)}>Test</button>
                </div>
            </div>
        </div>

    )
}