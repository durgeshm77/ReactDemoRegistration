import investmentLogo from '../../assests/img/investment-calculator-logo.png';
import PromoComponent from "../Promo/Promo";
import UserInputBlock from './UserInputBlock';
import ResultBlock from './ResultBlock';
import { useState } from 'react';
import { InvestmentContext } from '../../pages/store/InvestmentContext';

export default function InvestmentContainer() {
    const [investmentObj, setinvestmentObj] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const isValidInput =
        (investmentObj.annualInvestment > 0 &&
            investmentObj.initialInvestment > 0 &&
            investmentObj.expectedReturn > 0 &&
            investmentObj.duration >= 1
        );
    function settingInvestmentObj(e) {
        setinvestmentObj((x) => {
            return {
                ...x,
                [e.target.name]: +e.target.value
            };
        });
    }
    const [investmentItemObj, setInvestmentItemObj] = useState({
        items: [],
    });

    function handleAddItemToCart(id, title, price) {
        setInvestmentItemObj((prevInvestmentObj) => {
            const updatedItems = [...prevInvestmentObj.items];
            updatedItems.push({
                id: id,
                name: title,
                price: price,
                quantity: 1,
            });

            return {
                items: updatedItems,
            };
        });
    }
    const cartValue = {
        items: investmentItemObj.items,
        itemCount: investmentItemObj.items.length,
        addItemToCart: handleAddItemToCart,
    };
    console.log(cartValue);

    return (
        <>
            <InvestmentContext.Provider value={cartValue}>
                <PromoComponent ID="invheader" cssClass="test"
                    promoLogo={investmentLogo} title='Investment Calculator' />


                <UserInputBlock investmentObj={investmentObj}
                    onHandleChnage={settingInvestmentObj} />
            </InvestmentContext.Provider>
            {!isValidInput && <p className='center'>Please enter valid input.</p>}
            {isValidInput && <ResultBlock className='center' userInput={investmentObj} />}

        </>
    )
}