import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const [startDate, setStartDate] = useState(new Date());

const reservation = `<script>
setup_parameters =
{
    "hotel_id":"2489",				// required - your WebRezPro hotel id must be entered
    "date_format":"D M dd, yy", 	// optional - default is 'DD M dd, yy'
    "default_days_in_advance":"0",	// optional - default is 0 days in advance,
    "flag_turnoff_autoload_date":"1" // 0 = arrival and departure dates automatically loaded, 1 = not loaded, default is 0
};

</script>`;

function Reservationsnew() {
  
  return (
    <div className="reservations">
        <div className="reservations-inner"
          dangerouslySetInnerHTML={{__html: reservation}}
        />
        <form id="widget_link" action="https://secure.webrez.com/hotel/2489/?">
        <input type="hidden" name="table" value=""/>
        <input type="hidden" name="hotel_id" value=""/>
        <input type="hidden" name="listing_id" value=""/>
        <input type="hidden" name="mode" value=""/>
        <input type="hidden" name="command" value=""/>
        <input type="hidden" name="nextcommand" value="" />

        
        <ul>
          <li>
            <span>
              <label for="formatted_date_from">arrival date</label>
              <DatePicker className="datepicker" name="formatted_date_from" id="formatted_date_from"  selected={startDate} onChange={(date) => setStartDate(date)} />
              <input type="hidden" name="date_from" id="date_from" value="" />
            </span>
            <span>
                <label for="formatted_date_to">departure date</label>
                <input type="text" class="datepicker" name="formatted_date_to" id="formatted_date_to"/>
                <input type="hidden" name="date_to" id="date_to" value=""/>
            </span>
          </li>
                    
          <li>
              <span>
                  <label for="num_adults"># of adults</label>
                  <div>
                      <select name="num_adults" id="num_adults">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                  </div>
              </span>
              <span>
                  <label for="num_children"># of children</label>
                  <div>
                      <select name="num_children" id="num_children">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      </select>
                  </div>
              </span>
          </li>
          <li>
              <label for="access_code">Promo Code</label>
              <input type="text" name="access_code" id="access_code" size="8"/>
          </li>
          
          <li>
              <div><input type="submit" value="check availability"/></div>
          </li>
          
        </ul>
        
      </form>
      </div>
  )
}


export default Reservationsnew;


