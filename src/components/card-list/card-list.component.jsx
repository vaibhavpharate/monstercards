import React from "react";
import './card-list.style.css';
import Card from "../../card/card.component";

const CardList = (props) => {
    return(
        <div className="card-list">
            {props.allMonsters.map(singleMonster=><Card key={singleMonster.id} singleData={singleMonster}/>)}
        </div>
    )
}
export default CardList;