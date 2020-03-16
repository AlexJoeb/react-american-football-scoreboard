import React from 'react';
import { thisExpression } from '@babel/types';

export default function TopRow({homeScore, awayScore}) {
    return (
        <div className="topRow">
            <Home homeScore={homeScore} />
            <Timer />
            <Away awayScore={awayScore} />
        </div>
    );
}

function Home({homeScore}) {
    return(
        <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
        </div>
    );

    
}
function Away({awayScore}) {
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
        </div>
    );
}

function Timer() {
    return <div className="timer">00:03</div>;
}