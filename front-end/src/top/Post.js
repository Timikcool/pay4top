import './post.scss';
import moment from 'moment';
export default ({ author, text, time, price }) => (
  <div className="post">
    <div className="post-author">{author}</div>
    <div className="post-content">{text}</div>
    <div className="post-time-and-eth">
      <div className="time">{moment.unix(time).format('YYYY MM DD hh:mm:ss')}</div>
      <div className="eth">{window.web3.fromWei(price)}</div>
    </div>
  </div>
);
