import styles from './Body.module.css';
import Symbole from '../../icons/Symbole';
import { useBottomSheet } from '../../../../context/BottomSheetContext';
import OverlayPortal from '../../Overlay/OverlayPortal';
import Overlay from '../../Overlay/Overlay';
import { useEffect, useRef } from 'react';
import ClassCreateForm from './ClassCreateForm/ClassCreateForm';
import ClassAttendForm from './ClassAttendForm/ClassAttendForm';
import TransferForm from './TransferForm/TransferForm';
import useSheetHeight from '../../../../recoil/BottomSheet/useSheetHeight';

export default function Body({ children }) {
  const { toggle, handleToggle } = useBottomSheet();
  const { setSheetHeight } = useSheetHeight();
  const bodyRef = useRef();
  useEffect(
    () => (toggle ? setSheetHeight(bodyRef.current?.offsetHeight) : setSheetHeight(0)),
    [toggle]
  );

  if (!toggle) return;
  return (
    <div className={styles.body} ref={bodyRef}>
      {children}
      <div className={styles.icon}>
        <Symbole responsive />
      </div>
      {toggle && (
        <OverlayPortal>
          <Overlay onClose={() => handleToggle(!toggle)} />
        </OverlayPortal>
      )}
    </div>
  );
}

Body.ClassCreateForm = ClassCreateForm;
Body.ClassAttendForm = ClassAttendForm;
Body.TransferForm = TransferForm;
