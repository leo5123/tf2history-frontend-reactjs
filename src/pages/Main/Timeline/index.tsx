/* eslint-disable react/jsx-key */
import styles from './Timeline.module.scss';
import first from '../../../assets/medals/medal-first-40px.png';
import second from '../../../assets/medals/medal-second-40px.png';
import third from '../../../assets/medals/medal-third-40px.png';
import data from '../../../data/teams.json';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import Menu from './Menu';
import { filtroDeEventos } from '../../../state/hooks/atom';




export default function Timeline() {

  const [over, setOver] = useState(false);
  const [index, setIndex] = useState<number>();

  const filtro = useRecoilValue(filtroDeEventos);

  console.log(filtro);


  const dataFiltrada = data.filter(item => {

    if (filtro === '') {
      return data;
    }
    if (Object.keys(filtro).length === 0) {
      return data;
    }
    return item.filter === filtro;
  });

  const linestyle = {
    marginTop: ''
  };

  if (index === 0 && over) {
    linestyle.marginTop = '21rem';
  }
  else {
    linestyle.marginTop = '';
  }

  return (

    <div className={styles.container}>
      <div className={styles.timeline}>
        <Menu />
        <ul >
          {dataFiltrada.map((item, index) => (

            <li
              onMouseOver={() => setOver(true)}
              onMouseEnter={() => setIndex(index)}
              onMouseOut={() => setOver(false)}
            >

              <div className={styles.timeline__content}>

                <table className={styles.table} >

                  <p
                    className={styles.ball}
                    style={{
                      backgroundImage: `url(${item.leagueLogo})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      left: index % 2 ? '-50px' : '535px'
                    }}
                  ></p>

                  <h2 className={styles.date}>{item.date}</h2>

                  <h1>{item.title} <span className={styles.lType}>{item.leagueType}</span></h1>
                  <tr >
                    <td><div>INVITE - <img src={first} alt="medal first" className={styles.medal} />{item.InviteTeam}</div></td>
                    <td><div>CENTRAL - <img src={first} alt="medal first" className={styles.medal} />{item.CentralTeam}</div></td>
                  </tr>

                  <tr className={styles.hidden}>
                    <td><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.InviteSecond}</div></td>
                    <td className={styles.td}><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.CentralSecond}</div></td>
                  </tr>

                  <tr className={styles.hidden}>
                    <td><div> {'  '} < img src={third} alt="medal first" className={styles.dMedal} />{item.InviteThird}</div></td>
                    <td className={styles.td}><div>{'  '}<img src={third} alt="medal first" className={styles.dMedal} />{item.CentralThird}</div></td>
                  </tr>

                  <tr>
                    <td><div>ACESSO - <img src={first} alt="medal first" className={styles.medal} />{item.AcessTeam}</div></td>
                    <td><div>ABERTA - <img src={first} alt="medal first" className={styles.medal} />{item.OpenTeam}</div></td>
                  </tr>

                  <tr className={styles.hidden}>
                    <td><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.AcessSecond}</div></td>
                    <td className={styles.td}><div>{'  '}<img src={second} alt="medal first" className={styles.dMedal} />{item.OpenSecond}</div></td>
                  </tr>

                  <tr className={styles.hidden}>
                    <td><div> {'  '} < img src={third} alt="medal first" className={styles.dMedal} />{item.AcessThird}</div></td>
                    <td className={styles.td}><div>{'  '}<img src={third} alt="medal first" className={styles.dMedal} />{item.OpenThird}</div></td>
                  </tr>



                </table>


              </div>
            </li>
          ))}

          <p
            className={styles.line}
            style={linestyle}

          ></p>
        </ul>

      </div>

    </div >

  );
}