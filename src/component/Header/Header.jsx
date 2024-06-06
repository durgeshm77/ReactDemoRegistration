import PromoComponent from "../Promo/Promo"
import { promoObj } from "../Promo/PromoModel"
import logo from "../../assests/img/logo.svg";

export default function HeaderComponent() {
    return (
        <header className="App-header">
            <PromoComponent
                ID={promoObj.ID}
                title={promoObj.title}
                description={promoObj.description}
                note={promoObj.note}
                promoLogo={logo}
                cssClass={promoObj.cssClass}
            />


        </header>
    )
}