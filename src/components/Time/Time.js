import styles from './Time.module.scss';

const Time = ({ time }) => {
  const formatTime = () => {

    let ms = (time % 1000).toString().padStart(3, "0");
    let seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, "0");
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    let hours = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    
    return hours + ":" + minutes + ":" + seconds + "." + ms;
  };

  return (
    <div className={styles.time}>
      {formatTime(time)}
    </div>
  );

};

export default Time;