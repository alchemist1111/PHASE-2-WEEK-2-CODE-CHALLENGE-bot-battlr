import { useEffect, useState } from 'react';
import BotCard from './BotCard';

const botsUrl = 'http://localhost:3000/bots';
function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(botsUrl)
   .then(response => response.json())
   .then(data => {
      setBots(data)
    })
    .catch( )
  }, []);

  return (
    <div>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );

}

export default BotCollection;
