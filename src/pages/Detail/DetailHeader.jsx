import React from 'react';
import styles from './css/DetailHeader.module.css';
import SettingMenu from './SettingMenu';
import BankIcon from '../../components/common/icons/BankIcon';
import MoneyIcon from '../../components/common/icons/MoneyIcon';
import AccountNumber from './AccountNumber';

export default function DetailHeader({
  detail: {
    title,
    account: { bank, number },
    total,
    members,
  },
  onUpdateButtonClick,
}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {((bank && bank.trim().length !== 0) || number) && (
        <dl className={styles['bank-group']}>
          <BankIcon />
          {<dt className={styles.bank}>{bank && bank.trim().length !== 0 ? bank : '_'}</dt>}
          {<dd className={styles.number}>{number ? <AccountNumber number={number} /> : '_'}</dd>}
        </dl>
      )}
      <div className={styles.amount}>
        <MoneyIcon />
        <strong className={styles.total}>{total.toLocaleString()}원</strong>
      </div>
      <SettingMenu members={members} onUpdateButtonClick={onUpdateButtonClick} />
    </header>
  );
}
