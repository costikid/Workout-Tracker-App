function GoalsItem({event, header}) {
    function prettifyDate(dateString) {
      const date = new Date(dateString);
      const day = getOrdinalDate(date.getDate())
      const month = date.toLocaleString('default', { month: 'short' });
      return day + ' ' + month 
    }

  
    return ( 
      
          <div id="header">
            <p id="next">Next Event</p>
            <div id="event-date">Rock 200kg by one hand</div>
            <div className="info">
              <h2>Rock</h2>
              <p>14.03.2025</p>
              <p>Trier</p>
            </div>
          </div>)
          
}
  
  export default GoalsItem;