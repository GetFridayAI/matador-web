import React from 'react';
import "../../styles/card.less";
import {CardProps} from "../../interfaces/common/Card";
import {Card} from "@featured.pixels/fracto-ui";

const CardComponent = (props: CardProps) => {
    const cardHeader = <div className={"card-item-header mastercard"}>

    </div>

    return (
        <div className="card-container">
            <Card
                className="card-item"
                title={"Card"}
                cardHeader={cardHeader}
                hasShadow={true} />
        </div>
    );
}

export default CardComponent;
