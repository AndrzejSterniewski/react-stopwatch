import styles from './Time.module.scss';

const Time = ({ time }) => {
  const formatTime = millseconds => {

    // let seconds = Math.floor(millseconds / 1000);
    // let minutes = Math.floor(seconds / 60);
    // let hours = Math.floor(minutes / 60);

    let mills = Math.floor(millseconds % 1000).toString().padStart(3, '0');
    let seconds = Math.floor((millseconds / 1000) % 60).toString().padStart(2, '0');
    let minutes = Math.floor((seconds / 60) % 60).toString().padStart(2, '0');
    let hours = Math.floor((minutes / 60) % 24).toString().padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds + '.' + mills;
  };

  return (
    <div className={styles.time}>
      {formatTime(time)}
    </div>
  );

};

export default Time;