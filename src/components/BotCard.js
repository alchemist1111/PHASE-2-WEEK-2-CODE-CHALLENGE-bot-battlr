import React from 'react';

function BotCard({ bot })  {
  if (!bot) {
    return <p>Loading bot profile...</p>;
  }

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotCard;