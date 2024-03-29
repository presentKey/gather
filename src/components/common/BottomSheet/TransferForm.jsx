import styles from './css/BottomSheetForm.module.css';
import { useBottomSheet } from '../../../context/BottomSheetContext';
import useInput from '../../../hooks/useInput';
import Input from '../Input/Input';
import Button from '../Button';
import getTodayDate from '../../../utils/getTodayDate';
import useClassDetail from '../../../hooks/useClassDetail';
import ModalPortal from '../Modal/ModalPortal';
import ToastNotification from '../Modal/ToastNotification';

export default function TransferForm({ code, histories, text, tag, color }) {
  const { toggle, closeSheet } = useBottomSheet();
  const [info, handleChange] = useInput({ date: getTodayDate() });
  const { isLoading, error, handleAddHistorySumbit } = useClassDetail(code);
  const getMinDate = histories.find((history) => history.type === 'classModify');

  if (toggle !== tag) return;
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => handleAddHistorySumbit(e, info, tag, getMinDate?.date, closeSheet)}
      >
        <Input
          type='number'
          name='price'
          text='금액'
          value={info}
          onChange={handleChange}
          required
        />
        <Input
          type='text'
          name='message'
          text='메시지'
          value={info}
          onChange={handleChange}
          placeholder={'[옵션] 최대 20글자 입력 가능'}
          maxLength='20'
        />
        <Input
          type='date'
          name='date'
          text='날짜'
          min={getMinDate?.date}
          value={info}
          onChange={handleChange}
          required
        />
        <Button text={text} type='submit' color={color} isLoading={isLoading} />
      </form>

      {error.state && (
        <ModalPortal>
          <ToastNotification message={error.message} />
        </ModalPortal>
      )}
    </>
  );
}
