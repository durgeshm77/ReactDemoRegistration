import { CardComponent } from "./Card";
import { cardData } from "./CardData";

export default function CoreConcept(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {cardData.map((card) => <CardComponent key={card.title} {...card} />)}
          </ul>
        </section>
    )
}