import InvestmentContextProvider from '../../pages/store/InvestmentContext';
import { calculateInvestmentResults, formatter } from './investment';

export default function ResultBlock({ userInput }) {
    let annualData = calculateInvestmentResults(userInput);
    //console.log(annualData);
    return (

        <table id="result">
            <thead>
                <tr>
                    <th className="center">Year</th>
                    <th className="center">Investment value</th>
                    <th className="center">Interest</th>
                    <th className="center">Total Interest</th>
                    <th className="center">Capital</th>
                </tr>
            </thead>

            <tbody>
                {annualData.map((x) =>
                    <tr key={x.year}>
                        <td>{x.year}</td>
                        <td>{formatter.format(x.valueEndOfYear)}</td>
                        <td>{formatter.format(x.interest)}</td>
                        <td>{formatter.format(x.annualInvestment)}</td>
                    </tr>
                )}
            </tbody>
        </table>


    )
}