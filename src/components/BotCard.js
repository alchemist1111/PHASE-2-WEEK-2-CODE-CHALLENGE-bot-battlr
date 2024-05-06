import React from 'react';

function BotCard({ bot })  {
  if (!bot) {
    return <p>Loading bot profile...</p>;
  }

  return (
    <div className="card">
      <img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">Health: {bot.health}</p>
        <p className="card-text">Damage: {bot.damage}</p>
        <p className="card-text">Armor: {bot.armor}</p>
        <p className="card-text">Bot Class: {bot.bot_class}</p>
        <p className="card-text">Catchphrase: {bot.catchphrase}</p>
      </div>
    </div>
  );
};

export default BotCard;
