import './JournalItem.css';

function JournalItem() {
    const title = 'Podgodofka k obnovleniya kursov'; 
    const date = new Date();
    const text = '';

  return (
    <div className='journal-item'>
        <h2 className="journal-item__header">{title}</h2>
        <h2 className="journal-item__body">
            <div journal-item__date>{date.toDateString()}</div>
            <div journal-item__text>{text}</div>
        </h2>
    </div>
  );
}

export default JournalItem;
