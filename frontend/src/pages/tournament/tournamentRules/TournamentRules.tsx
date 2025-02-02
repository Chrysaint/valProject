import TournamentBannedCard from "../../../components/torunament/tournamentBannedCard/TournamentBanCard";
import PrizeCard from "../../../components/torunament/tournamentPrize/PrizeCard";
import { bannedHeroes, bannedGuns, bannedMaps, Prizes } from "./data/data";
import "./tournamentRules.css";

function TournamentRules() {
  return (
    <div className="tournament-rules">
      <div className="tournament-rules__block">
        <h3>Основные положения:</h3>
        <p>
          Команда состоит из двух человек. <br />
          В заявке на регистрацию допускается один запасной игрок. <br />
          Все матчи в формате «follow by» <br />
          Сетка - Double elimination <br />
          Все матчи кроме финала и матча за третье место - BO1 <br />
          Матч за третье место и Гранд Финал - BO3 <br />
        </p>
      </div>
      <div className="tournament-rules__block">
        <h3>Призовой фонд турнира:</h3> <br />
        <div className="rules-cards">
          {Prizes.map((prize) => (
            <PrizeCard
              key={prize.id}
              id={prize.id}
              prize={prize.prize}
              img={prize.img}
              place={prize.place}
              alt={prize.alt}
            />
          ))}
        </div>
      </div>
      <div className="tournament-rules__block">
        <h3>Запрещенные герои:</h3> <br />
        <div className="rules-cards">
          {bannedHeroes.map((hero) => (
            <TournamentBannedCard key={hero.name} card={hero} />
          ))}
        </div>
      </div>
      <div className="tournaments-rules__block">
        <h3>Запрещенное оружие:</h3> <br />
        <div className="rules-cards">
          {bannedGuns.map((gun) => (
            <TournamentBannedCard key={gun.name} card={gun} />
          ))}
        </div>
      </div>
      <div className="tournaments-rules__block">
        <h3>Запрещенные карты:</h3> <br />
        <div className="rules-cards">
          {bannedMaps.map((map) => (
            <TournamentBannedCard key={map.name} card={map} />
          ))}
        </div>
      </div>
      <br />
      <p>
        <b>Формат турнира:</b> <br />
        Все матчи в формате «follow by» <br />
        Сетка - Double elimination <br />
        Все матчи кроме финала и матча за третье место - BO1 <br />
        Матч за третье место и Гранд Финал - BO3 <br />
        Максимального количества команд: нет
      </p>
      <br />
      <p>
        Команды-участники автоматически соглашаются со всеми приведенными
        правилами турнира. Любые споры относительно ситуаций, не указанных в
        правилах будут решены судьями турнира на их усмотрение. <br />
        <b>
          *Администрация турнира сохраняет за собой право дополнять и изменять
          настоящие правила турнира по своему усмотрению.
        </b>
      </p>
      <br />
      <br />
      <p>
        Регистрация на турнир оформляется выбранным капитаном вашей команды.{" "}
        <br />
        Со стороны команды коммуникацию по организации матчей и любым вопросам
        ведёт исключительно капитан. <br />
        Каждая команда имеет право на паузу в игре длительностью в 10 минут.{" "}
        <br />
        По окончанию матча капитан победившей команды обязан выставить счет
        матча в отведенном канале дискорда. (В случае, если счет был выставлен
        неверно, сообщите об этом администрации в соответствующем чате Discord,
        как можно скорее.) <br />
        В лобби не должны присутствовать посторонние. Только 4 игрока. <br />
        Команды обязаны начать матч по готовности. У каждой команды есть 10
        минут, чтобы зайти в лобби, иначе команда получит техническое поражение.{" "}
        <br />
        Если у команды техническая проблема, то они обязаны оповестить
        менеджмент турнира об этом. <br />
        Ответственность за проблемы со стороны игрока лежит на команде. (Вылеты,
        низкий фпс, высокий пинг не являются причиной для переигровки) <br />
        Если закончить игру невозможно, матч завершается со счетом, который был
        в последнем сыгранном раунде, если обратного не было сказано
        администрацией турнира. <br />
      </p>
      <br />
      <p>
        <b>Формат создания матча:</b> <br />
        Режим игры: стандартный (читы/выкл, режим турнира/вкл, отображение матча
        в истории/вкл) <br />
        Игровые сервера: Франкфурт, Стокгольм (по усмотрению игроков)
      </p>
    </div>
  );
}

export default TournamentRules;
