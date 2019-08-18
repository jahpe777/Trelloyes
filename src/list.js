import React from 'react';
import './list.css';
import Card from './card.js';

function List(props) {
  const allCards = 

  return (
    <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
          {allCards}
        </div>
        <button type="button" class="List-add-button">
            + Add Random Card
        </button>
    </section>
  );
}

export default List;
