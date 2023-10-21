import styles from './Time.module.scss';

const Time = ({ time }) => {
  const formatTime = millseconds => {

    let seconds = millseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;

    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <div className={styles.time}>
      {formatTime(time)}
    </div>
  );

};

export default Time;