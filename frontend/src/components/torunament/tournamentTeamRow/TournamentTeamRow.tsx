import React from 'react'

export type TTeam = {
  name: string,
}

type Props = {
  team: TTeam
}

const TournamentTeamList = (props: Props) => {
  return (
    <li className="teams__item">
        <div className="teams__item__info">
        <span className="teams__name">{props.team.name}</span>
        </div>
    </li>
  )
}

export default TournamentTeamList;