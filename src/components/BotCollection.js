import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';

const botsUrl = 'http://localhost:3000/bots';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(botsUrl)
      .then(response => response.json())
      .then(data => {
        setBots(data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-md-4 mb-4">
            <BotCard bot={bot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
