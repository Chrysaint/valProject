import PrizeCard, { TPrizeCard } from "../../../components/torunament/tournamentPrize/PrizeCard";
import './tournamentRules.css'

const Prizes: TPrizeCard[] = [
    {
        id: 2,
        place: "2 место",
        img: "./../src/assets/icons/medals/silver-medal.svg",
        prize: "1 500 ",
        alt: "Медаль"
    },
    {
        id: 1,
        place: "1 место",
        img: "./../src/assets/icons/medals/golden-medal.svg",
        prize: "3 000 ",
        alt: "Медаль"
    },
    {
        id: 3,
        place: "3 место",
        img: "./../src/assets/icons/medals/bronze-medal.svg",
        prize: "500 ",
        alt: "Медаль"
    }
];

function TournamentRules() {
    return (
        <>
            <p>
                <b>Основные положения для участия в турнире:</b> <br />
                Команда состоит из двух человек. <br />
                В заявке на регистрацию допускается один запасной игрок. <br />
            </p>
        <br />
    <p>
    </p>
    <b>Призовой фонд турнира: 5 000 р.</b>  <br />
        <div className="prizes">
            {Prizes.map((prize) => <PrizeCard key={prize.id} id={prize.id} prize={prize.prize} img={prize.img} place={prize.place} alt={prize.alt} />)}
        </div>
<br />
    <p>
        <b>Маппул турнира:</b> <br />
        Исключены все карты с 3-мя плентами, допускаются все карты с 2-мя плентами, кроме Fracture.
    </p>
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
        Команды-участники автоматически соглашаются со всеми приведенными правилами турнира. Любые споры относительно ситуаций, не указанных в правилах будут решены судьями турнира на их усмотрение. <br />
        <b>*Администрация турнира сохраняет за собой право дополнять и изменять настоящие правила турнира по своему усмотрению.</b>
    </p>
<br />
    <p>
        <b>Основные правила, касающиеся турнира:</b> <br />

        Запрещено использование снайперских винтовок Operator и Outlaw (Marshal допускается) <br />
        Запрещено использование дробовика Judge (Bucky разрешё) <br />
        Запрещено использование пулемета Odin (Ares разрешён) <br />
        Запрещен к игре весь список Стражей (Chamber, Cypher, KillJoy, Sage, Deadlock), а также Дуэлянт (ISO) <br />
        Запрещены любые оскорбления, провокации и другие формы неспортивного поведения. Подобное может повлечь за собой предупреждение с последующей дисквалификацией команды или моментальную дисквалификацию. <br />
        Любое использование читов и багов игры ведут к соответствующим мерам (дисквалификация или переигровка, в зависимости от тяжести проступка) <br />
    </p>
<br />
    <p>
        Регистрация на турнир оформляется выбранным капитаном вашей команды. <br />
        Со стороны команды коммуникацию по организации матчей и любым вопросам ведёт исключительно капитан. <br />
        Каждая команда имеет право на паузу в игре длительностью в 10 минут. <br />
        По окончанию матча капитан победившей команды обязан выставить счет матча в отведенном канале дискорда. (В случае, если счет был выставлен неверно, сообщите об этом администрации в соответствующем чате Discord, как можно скорее.) <br />
        В лобби не должны присутствовать посторонние. Только 4 игрока. <br />
        Команды обязаны начать матч по готовности. У каждой команды есть 10 минут, чтобы зайти в лобби, иначе команда получит техническое поражение. <br />
        Если у команды техническая проблема, то они обязаны оповестить менеджмент турнира об этом. <br />
        Ответственность за проблемы со стороны игрока лежит на команде. (Вылеты, низкий фпс, высокий пинг не являются причиной для переигровки) <br />
        Если закончить игру невозможно, матч завершается со счетом, который был в последнем сыгранном раунде, если обратного не было сказано администрацией турнира. <br />
    </p>
    <br />
    <p>
        <b>Формат создания матча:</b> <br />
        Режим игры: стандартный (читы/выкл, режим турнира/вкл, отображение матча в истории/вкл) <br />
        Игровые сервера: Франкфурт, Стокгольм (по усмотрению игроков)
    </p>
            
        </>

    );
}

export default TournamentRules;