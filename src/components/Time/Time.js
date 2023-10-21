import styles from './Time.module.scss';

const Time = ({ time }) => {
  const formatTime = millseconds => {

    let seconds = Math.floor(millseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <div className={styles.time}>
      {formatTime(time)}
    </div>
  );

};

export default Time;