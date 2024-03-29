import React from 'react';
import Avatar from '../common/Avatar';
import styles from './css/ClassCard.module.css';
import showMax7Members from '../../utils/showMax7Members';
import { Link } from 'react-router-dom';
import useClassDetail from '../../hooks/useClassDetail';
import LoadingCard from '../common/Loading/LoadingCard';

export default function ClassCard({ code }) {
  const {
    classDetailQuery: { isLoading, data: myClass },
  } = useClassDetail(code);

  if (isLoading) return <LoadingCard />;
  const { bank, number } = myClass.account;
  const [members, overLength] = showMax7Members(myClass.members);

  return (
    <>
      {myClass && (
        <Link to='/detail' state={{ code }} className={styles.card}>
          <li className={styles['card-list']}>
            <h2 className={styles.title}>{myClass.title}</h2>
            {((bank && bank.trim().length !== 0) || number) && (
              <dl>
                <dt className={styles.bank}>{bank && bank.trim().length !== 0 ? bank : '_'}</dt>
                <dd className={styles.number}>{number ? number : '_'}</dd>
              </dl>
            )}
            <div className={styles['member-content']}>
              <ul className={styles['member-list']}>
                {members.map((member) => (
                  <Avatar key={member.uid} image={member.photoURL} />
                ))}
              </ul>
              {overLength !== 0 && <b>+{overLength}</b>}
            </div>
            <div className={styles.amount}>
              <span className={styles.total}>{`${myClass.total.toLocaleString()}원`}</span>
            </div>
          </li>
        </Link>
      )}
    </>
  );
}
