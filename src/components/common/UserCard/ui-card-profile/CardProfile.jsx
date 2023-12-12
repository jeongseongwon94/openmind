import styles from './CardProfile.module.css';

export default function CardProfile({ name, imageSource }) {
  return (
    <div className={styles.wrap}>
      <img className={styles.profileImage} src={(imageSource = '/src/images/profile.svg')} alt='' />
      <span className={styles.profileText}>{(name = '아초는고양이')}</span>
    </div>
  );
}
