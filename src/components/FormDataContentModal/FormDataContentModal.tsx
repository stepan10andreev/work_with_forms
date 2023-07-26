import { FC } from 'react'
import styles from './FormDataContentModal.module.scss'
import { IUserViewFormData } from '../UserViewForm/UserViewForm';
import { IStepOneFormData } from '../StepOneForm/StepOneForm';
import { IStepTwoFormData } from '../StepTwoForm/StepTwoForm';
import { IStepThreeFormData } from '../StepThreeForm/StepThreeForm';
import { UIText } from '../ui-components/UIText/UIText';
import { WellDoneIcon } from '../ui-components/Icons/WellDoneIcon';
import { UIButton } from '../ui-components/UIButton/UIButton';
import { useRouter } from 'next/navigation';

interface IFormDataContentModalProps {
  userFormData: IUserViewFormData;
  formData1: IStepOneFormData;
  formData2: IStepTwoFormData;
  formData3: IStepThreeFormData;
  btnOnCLick: () => void;
}

export const FormDataContentModal: FC<IFormDataContentModalProps> = ({ userFormData, formData1, formData2, formData3, btnOnCLick }) => {

  const router = useRouter();

  // const goHome =() => {
  //   router.push('/');
  // }

  return (
    <div className={styles.content}>
      <p className={styles.title}>
        <WellDoneIcon />
        Данные успешно отправлены
      </p>
      <div className={styles.userBlock}>
        <p className={styles.heading}>Пользователь:</p>
        <div className={styles.wrapper}>
          Полное имя: <UIText text={userFormData.fullName} />
        </div>
        <div className={styles.wrapper}>
          Email: <UIText text={userFormData.email} />
        </div>
        <div className={styles.wrapper}>
          Телефон: <UIText text={userFormData.tel} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <p className={styles.heading}>Подробная информация о пользователе:</p>
        <div className={styles.wrapper}>
          Nickname: <UIText text={formData1.nickname} />
        </div>
        <div className={styles.wrapper}>
          Имя: <UIText text={formData1.name} />
        </div>
        <div className={styles.wrapper}>
          Фамилия: <UIText text={formData1.surname} />
        </div>
        <div className={styles.wrapper}>
          Пол: <UIText text={formData1.sex} />
        </div>
      </div>
      <div className={styles.userChoice}>
        <p className={styles.heading}>Выбор пользователя:</p>
        <div className={styles.wrapper}>
          Преимущества: <UIText text={formData2.advantages.length ? `${formData2.advantages}` : 'Преимущества не указаны'} />
        </div>
        <div className={styles.wrapper}>
          checkboxOptions: <UIText text={formData2.checkboxOptions.length ? `${formData2.checkboxOptions}` : 'не выбраны'} />
        </div>
        <div className={styles.wrapper}>
          radioOption: <UIText text={formData2.radioOption.length ? `${formData2.radioOption}` : 'не выбрана'} />
        </div>
      </div>

      <div className={styles.userPoint}>
        <p className={styles.heading}>Пожелания пользователя:</p>
        <div className={styles.wrapper}>
          <UIText text={`${formData3.wishes.length ? formData3.wishes : 'Пожеланий нет'}`} />
        </div>
      </div>

      <UIButton text='На главную' onClick={btnOnCLick}/>
    </div>
  )
}
