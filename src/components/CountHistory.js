export default function CountHistory({onChange}){
    return(
    <div className="history-dropdown">
        <ul className="history-list">
          {onChange.map((item, index) => (
            <li key={index} className="history-item">
              {`count: ${item.count} action: ${item.action}`}
            </li>
          ))}
        </ul>
    </div>
)}
