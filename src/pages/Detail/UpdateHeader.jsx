import React from 'react';
import styles from './css/UpdateHeader.module.css';
import SettingMenu from './SettingMenu';
import useInput from '../../hooks/useInput';
import Input from '../../components/common/Input/Input';
import CheckBox from '../../components/common/Input/CheckBox';
import BankIcon from '../../components/common/icons/BankIcon';
import MoneyIcon from '../../components/common/icons/MoneyIcon';
import useClassDetail from '../../hooks/useClassDetail';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ToastNotification from '../../components/common/Modal/ToastNotification';

export default function UpdateHeader({
  code,
  detail: { title, account, total, allowAnonymouse },
  onUpdateButtonClick,
}) {
  const { bank, number } = account;
  const [info, handleChange] = useInput({ title, bank, number, total, allowAnonymouse });
  const { isLoading, error, handleUpdateHeader } = useClassDetail(code);

  return (
    <>
      <header className={styles.header}>
        <Input
          type='text'
          name='title'
          text='모임이름'
          value={info}
          onChange={handleChange}
          width='long'
          size='small'
        />
        <div className={styles.container}>
          <BankIcon />
          <Input
            type='text'
            name='bank'
            text='은행'
            value={info}
            onChange={handleChange}
            width='short'
            size='small'
            placeholder='[선택사항]'
          />
          <Input
            type='text'
            inputMode='numeric'
            name='number'
            text='계좌번호'
            value={info}
            onChange={handleChange}
            width='long'
            size='small'
            placeholder='[선택사항] 숫자만 입력해주세요.'
          />
        </div>
        <div className={styles.container}>
          <MoneyIcon />
          <Input
            type='number'
            name='total'
            text='총 금액'
            value={info}
            onChange={handleChange}
            width='long'
            size='small'
          />
        </div>
        <CheckBox
          type='checkbox'
          name='allowAnonymouse'
          text='모임 구성원으로 게스트 유저 허용'
          onChange={handleChange}
          checked={info.allowAnonymouse}
          color='black'
          size='small'
        />

        <SettingMenu onUpdateButtonClick={onUpdateButtonClick} />

        <button
          className={styles['update-btn']}
          type='button'
          disabled={isLoading}
          onClick={() => handleUpdateHeader(info, onUpdateButtonClick)}
        >
          수정하기
        </button>
        <button className={styles['cancel-btn']} type='button' onClick={onUpdateButtonClick}>
          취소
        </button>
      </header>

      {error.state && (
        <ModalPortal>
          <ToastNotification message={error.message} />
        </ModalPortal>
      )}
    </>
  );
}
